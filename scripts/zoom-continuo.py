# Recuo contínuo ("zoom sendo desfeito"): lavoura -> janela -> escritório, a partir dos planos do Kling.
import cv2, numpy as np, subprocess, sys
S = sys.argv[1]; OUT = sys.argv[2]
FPS = 30; W0, H0 = 1280, 720
fr = lambda i: cv2.imread(f'{S}/frames/f{int(i):03d}.png').astype(np.float32)
M_WO = np.load(f'{S}/M_WO.npy')                         # janela -> escritório
def aff(M): return np.vstack([M, [0, 0, 1]])
# lavoura dentro do vidro da janela (retângulo 16:9 no plano da janela f193)
gx, gy, gw = 120, 76, 1008; gh = gw * 9 / 16
M_FW = np.array([[gw / W0, 0, gx], [0, gh / H0, gy]])
A_WO = aff(M_WO); A_FO = A_WO @ aff(M_FW)               # lavoura -> mundo (escritório)

def feather(w, h, b):
    m = np.ones((h, w), np.float32)
    r = np.minimum.reduce([np.arange(w)[None, :].repeat(h, 0), (w - 1 - np.arange(w))[None, :].repeat(h, 0),
                           np.arange(h)[:, None].repeat(w, 1), (h - 1 - np.arange(h))[:, None].repeat(w, 1)])
    return np.clip(r / b, 0, 1).astype(np.float32)
MASK_F = feather(W0, H0, 70); MASK_W = feather(W0, H0, 50)

# escritório: tela verde -> tela do Arato
O = fr(230)
hsv = cv2.cvtColor(O.astype(np.uint8), cv2.COLOR_BGR2HSV)
g = cv2.inRange(hsv, (40, 80, 80), (85, 255, 255))
g = cv2.morphologyEx(g, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
ys, xs = np.where(g > 0); x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
tela = cv2.imread(f'{S}/ov-tela.png')
tela = cv2.resize(tela[600:1320, :], (x1 - x0 + 1, y1 - y0 + 1), interpolation=cv2.INTER_AREA).astype(np.float32)
gm = (cv2.GaussianBlur(g, (3, 3), 0).astype(np.float32) / 255)[y0:y1 + 1, x0:x1 + 1, None]
O[y0:y1 + 1, x0:x1 + 1] = O[y0:y1 + 1, x0:x1 + 1] * (1 - gm) + tela * gm
Wimg = fr(193)

ease = lambda x: 0.65 * x + 0.35 * (x * x * (3 - 2 * x))  # recuo quase constante, sem ficar parado no início
ramp = lambda t, a, b: float(np.clip((t - a) / (b - a), 0, 1))
# câmera: começa dentro da lavoura (1,6x) e termina no escritório inteiro
c0 = (A_FO @ [W0 / 2, H0 * 0.55, 1])[:2]; w0 = gw * np.hypot(M_WO[0, 0], M_WO[1, 0]) / 1.6
c1 = np.array([W0 / 2, H0 / 2]); w1 = W0
T_ZOOM, T_HOLD, T_FINAL = 9.0, 3.5, 3.5
N = int((T_ZOOM + T_HOLD) * FPS)

def campo(t):  # lavoura: plantio -> plântulas (planos 1 e 2 do Kling, em câmera lenta)
    a = fr(1 + min(t, 2.4) / 2.4 * 46)
    b = fr(49 + min(max(t - 2.0, 0), 3.0) / 3.0 * 46)
    k = ramp(t, 2.0, 3.0)
    return a * (1 - k) + b * k

topo = cv2.imread(f'{S}/ov-topo.png', cv2.IMREAD_UNCHANGED).astype(np.float32)
frase = cv2.imread(f'{S}/ov-frase.png', cv2.IMREAD_UNCHANGED).astype(np.float32)
final = cv2.imread(f'{S}/ov-final.png', cv2.IMREAD_UNCHANGED)[:, :, :3]
def over(base, ov, a=1.0):
    al = ov[:, :, 3:4] / 255 * a
    return base * (1 - al) + ov[:, :, :3] * al

ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'bgr24', '-s', '1080x1920', '-r', str(FPS), '-i', '-',
                       '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', OUT], stdin=subprocess.PIPE)
for n in range(N + int(T_FINAL * FPS)):
    t = n / FPS
    if t >= T_ZOOM + T_HOLD:
        k = ramp(t, T_ZOOM + T_HOLD, T_ZOOM + T_HOLD + 0.5)
        img = final.astype(np.float32) * k + last * (1 - k)
        ff.stdin.write(np.clip(img, 0, 255).astype(np.uint8).tobytes()); continue
    e = ease(min(t / T_ZOOM, 1))
    w = np.exp(np.log(w0) * (1 - e) + np.log(w1) * e); c = c0 * (1 - e) + c1 * e
    s = W0 / w
    V = np.array([[s, 0, W0 / 2 - s * c[0]], [0, s, H0 / 2 - s * c[1]], [0, 0, 1]])   # mundo -> tela
    warp = lambda img, A, border=cv2.BORDER_REPLICATE: cv2.warpAffine(img, (V @ A)[:2], (W0, H0), flags=cv2.INTER_CUBIC, borderMode=border)
    frame = warp(O, np.eye(3))
    aw = 1 - ramp(t, 7.0, 8.3)
    if aw > 0:
        m = warp(MASK_W, A_WO, cv2.BORDER_CONSTANT)[:, :, None] * aw
        frame = frame * (1 - m) + warp(Wimg, A_WO) * m
    af = 1 - ramp(t, 4.4, 6.0)
    if af > 0:
        m = warp(MASK_F, A_FO, cv2.BORDER_CONSTANT)[:, :, None] * af
        frame = frame * (1 - m) + warp(campo(t), A_FO) * m
    # quadro vertical 9:16: fundo desfocado + vídeo no centro
    bg = cv2.resize(cv2.GaussianBlur(cv2.resize(frame, (192, 108)), (0, 0), 6), (3413, 1920))[:, 1166:2246] * 0.45
    canvas = bg.copy(); canvas[656:1264] = cv2.resize(frame, (1080, 608), interpolation=cv2.INTER_AREA)
    canvas = over(canvas, topo)
    canvas = over(canvas, frase, ramp(t, T_ZOOM + 0.3, T_ZOOM + 1.1))
    last = canvas
    ff.stdin.write(np.clip(canvas, 0, 255).astype(np.uint8).tobytes())
ff.stdin.close(); ff.wait(); print(OUT)
