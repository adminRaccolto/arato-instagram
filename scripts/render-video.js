// Vídeo vertical (1080x1920, 30 fps) no padrão visual aprovado em 25/11:
// gancho com palavra-chave em mostarda → legendas sobre foto em movimento → encerramento com a assinatura.
// Uso: node scripts/render-video.js modelo   → gera videos/modelo.mp4
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const uri = f => `data:image/png;base64,${fs.readFileSync(path.join(ROOT, f)).toString('base64')}`;
const LOGO = uri('marca/cores/branco/solido/logo_sem_fundo.png');
const M = '#C9921B', W = 1080, H = 1920, FPS = 30;

// cada cena: foto de fundo, duração (s), texto (*palavra* = mostarda), tipo ('gancho' | 'legenda')
const videos = {
  modelo: [
    { foto: 'dc-tempestade', pos: 'center', dur: 3, tipo: 'gancho', texto: 'Dinheiro caro *não perdoa* quem decide no escuro.' },
    { foto: 'dc-produtor-preocupado', dur: 3.5, tipo: 'legenda', texto: 'O dólar sobe.<br>*Sua dívida em dólar sobe junto.*' },
    { foto: 'dc-plantadeira', dur: 3.5, tipo: 'legenda', texto: 'Com juro alto, *cada decisão errada* custa mais.' },
    { foto: 'dc-celular-lavoura', dur: 3.5, tipo: 'legenda', texto: 'Clareza é saber *hoje* o que vence amanhã.' },
    { final: true, dur: 3.5 },
  ],
};

const css = `*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:'Inter',sans-serif;color:#fff;background:transparent}
em{font-style:normal;color:${M}}
.sombra{position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,22,40,.6) 0%,rgba(6,22,40,0) 18%,rgba(6,22,40,0) 45%,rgba(6,22,40,.85) 72%,rgba(6,22,40,.95) 100%)}
.logo{position:absolute;top:110px;left:80px;height:64px}
.gancho{position:absolute;left:80px;right:80px;bottom:420px;font-family:'Inter Display','Inter';font-weight:900;font-size:118px;line-height:1.02;letter-spacing:-4px;text-shadow:0 6px 40px rgba(0,0,0,.4)}
.legenda{position:absolute;left:80px;right:80px;bottom:420px;font-weight:800;font-size:84px;line-height:1.12;letter-spacing:-2px;text-shadow:0 6px 40px rgba(0,0,0,.45)}
.final{position:absolute;inset:0;background:#0B2D50;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 90px}
.final img{height:170px}
.final h2{margin-top:80px;font-family:'Inter Display';font-weight:900;font-size:92px;line-height:1.05;letter-spacing:-3px}
.final p{margin-top:70px;background:${M};border-radius:28px;padding:34px 48px;font-size:44px;font-weight:800;line-height:1.2}`;

const overlay = c => c.final
  ? `<div class="final"><img src="${LOGO}"><h2><em>Clareza para decidir.</em></h2><p>Agende uma demonstração<br><span style="color:#0B2D50">link na bio 👆</span></p></div>`
  : `<div class="sombra"></div><img class="logo" src="${LOGO}"><div class="${c.tipo}">${c.texto.replace(/\*(.+?)\*/g, '<em>$1</em>')}</div>`;

(async () => {
  const nome = process.argv[2] || 'modelo', cenas = videos[nome];
  const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'video-'));
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H } });
  const partes = [];
  for (let i = 0; i < cenas.length; i++) {
    const c = cenas[i], png = path.join(tmp, `o${i}.png`), mp4 = path.join(tmp, `c${i}.mp4`), n = Math.round(c.dur * FPS);
    await p.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${overlay(c)}</body></html>`);
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: png, omitBackground: true });
    const fade = `fade=t=in:st=0:d=0.35:alpha=1`;
    if (c.final) {
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-loop', '1', '-t', String(c.dur), '-i', png, '-vf', `fps=${FPS},format=yuv420p,fade=t=in:st=0:d=0.4`, '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', mp4]);
    } else {
      const foto = path.join(ROOT, 'fotos/unsplash', c.foto + '.jpg');
      const fundo = `scale=${W * 2}:${H * 2}:force_original_aspect_ratio=increase,crop=${W * 2}:${H * 2},zoompan=z='1+0.0009*on':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${n}:s=${W}x${H}:fps=${FPS},eq=saturation=1.15:contrast=1.05`;
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-loop', '1', '-i', foto, '-loop', '1', '-i', png,
        '-filter_complex', `[0:v]${fundo}[bg];[1:v]format=rgba,${fade}[ov];[bg][ov]overlay=0:0,format=yuv420p`,
        '-frames:v', String(n), '-r', String(FPS), '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', mp4]);
    }
    partes.push(mp4);
  }
  await b.close();
  fs.writeFileSync(path.join(tmp, 'lista.txt'), partes.map(f => `file '${f}'`).join('\n'));
  fs.mkdirSync(path.join(ROOT, 'videos'), { recursive: true });
  const saida = path.join(ROOT, 'videos', `${nome}.mp4`);
  // trilha silenciosa: o Instagram aceita melhor vídeo com faixa de áudio
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'lista.txt'),
    '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-shortest', '-c:v', 'copy', '-c:a', 'aac', '-movflags', '+faststart', saida]);
  console.log(saida);
})();
