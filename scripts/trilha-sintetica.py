"""Trilha instrumental sintética (provisória) para os vídeos: tensão em menor → resolução em maior no encerramento.
Uso: python3 scripts/trilha-sintetica.py saida.wav DURACAO CORTES
  CORTES = tempos (s) das trocas de cena separados por vírgula; o último trecho é o encerramento."""
import sys, numpy as np
from scipy.signal import butter, sosfilt, fftconvolve
from scipy.io import wavfile

SR = 44100
saida, dur = sys.argv[1], float(sys.argv[2])
cortes = [0.0] + [float(x) for x in sys.argv[3].split(',')] + [dur]
nota = lambda n: 440 * 2 ** ((n - 69) / 12)  # MIDI → Hz
# Am → F → C → G → (encerramento) C add9
acordes = [[57, 60, 64, 69], [53, 57, 60, 65], [55, 60, 64, 67], [55, 59, 62, 67], [60, 64, 67, 74]]
t = np.arange(int(dur * SR)) / SR
mix = np.zeros_like(t)

def env(a, b, ataque=0.6, release=0.8):
    e = np.zeros_like(t)
    m = (t >= a) & (t < b + release)
    x = t[m] - a
    e[m] = np.minimum(1, x / ataque) * np.where(t[m] > b, np.exp(-(t[m] - b) * 5), 1)
    return e

def lowpass(x, fc):
    return sosfilt(butter(2, fc, fs=SR, output='sos'), x)

for i in range(len(cortes) - 1):
    a, b = cortes[i], cortes[i + 1]
    ac = acordes[min(i, len(acordes) - 1)] if i < len(cortes) - 2 else acordes[-1]
    e = env(a, b)
    pad = np.zeros_like(t)
    for n in ac:
        f = nota(n)
        for det in (-0.12, 0.0, 0.12):  # leve desafinação = pad mais largo
            ff = f * 2 ** (det / 12)
            for h in range(1, 6):  # dente de serra suavizado
                pad += np.sin(2 * np.pi * ff * h * t + h) / h ** 1.6
    mix += lowpass(pad * e, 2200 if i < len(cortes) - 2 else 3400) * 0.11
    mix += np.sin(2 * np.pi * nota(ac[0] - 12) * t) * e * 0.07  # baixo

# pulso grave (batida de coração) até o encerramento
bpm = 96; fim_pulso = cortes[-2]
for k in np.arange(0.5, fim_pulso, 60 / bpm):
    m = (t >= k) & (t < k + 0.35)
    x = t[m] - k
    mix[m] += np.sin(2 * np.pi * (55 + 60 * np.exp(-x * 30)) * x) * np.exp(-x * 9) * 0.18

# subida (ruído filtrado) entrando no encerramento
r0 = cortes[-2] - 1.2
m = (t >= r0) & (t < cortes[-2])
x = (t[m] - r0) / 1.2
mix[m] += lowpass(np.random.default_rng(1).standard_normal(m.sum()), 3000) * x ** 2 * 0.12

# arpejo brilhante no encerramento
a = cortes[-2]
for j, k in enumerate(np.arange(a, dur - 0.3, 60 / bpm / 2)):
    n = [72, 76, 79, 86][j % 4]
    m = (t >= k) & (t < k + 1.2)
    x = t[m] - k
    mix[m] += (np.sin(2 * np.pi * nota(n) * x) + 0.3 * np.sin(4 * np.pi * nota(n) * x)) * np.exp(-x * 4) * 0.09

# reverb simples + fades
ir = np.random.default_rng(2).standard_normal(int(SR * 1.8)) * np.exp(-np.arange(int(SR * 1.8)) / SR * 3.5)
mix = mix + fftconvolve(mix, ir)[: len(mix)] * 0.015
mix *= np.minimum(1, t / 0.8) * np.minimum(1, (dur - t) / 1.2)
mix = mix / np.max(np.abs(mix)) * 0.8
st = np.stack([mix, np.roll(mix, 220)], axis=1)  # leve abertura estéreo
wavfile.write(saida, SR, (st * 32767).astype(np.int16))
print(saida)
