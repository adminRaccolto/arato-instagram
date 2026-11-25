const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const R = '/home/user/arato-instagram-repo', S = process.argv[2];
const uri = f => `data:image/png;base64,${fs.readFileSync(path.join(R, f)).toString('base64')}`;
const LOGO = uri('marca/cores/branco/solido/logo_sem_fundo.png');
const css = `*{margin:0;padding:0;box-sizing:border-box}body{width:1080px;height:1920px;background:transparent;font-family:'Inter';color:#fff}em{font-style:normal;color:#C9921B}`;
const pages = {
  topo: `<img src="${LOGO}" style="position:absolute;top:470px;left:50%;transform:translateX(-50%);height:70px">`,
  frase: `<div style="position:absolute;top:1340px;left:70px;right:70px;text-align:center;font-family:'Inter Display';font-weight:800;font-size:66px;line-height:1.15;letter-spacing:-1.5px;text-shadow:0 4px 30px rgba(0,0,0,.5)">Viva tudo que a<br>agricultura tem<em>…</em></div>`,
  tela: `<div style="width:1080px;height:1920px;background:#1A4870;display:flex;align-items:center;justify-content:center"><img src="${LOGO}" style="width:640px"></div>`,
  final: `<div style="position:absolute;inset:0;background:#0B2D50;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 90px"><img src="${LOGO}" style="height:170px"><h2 style="margin-top:80px;font-family:'Inter Display';font-weight:900;font-size:96px;line-height:1.05;letter-spacing:-3px">Ampliando<br><em>sua visão.</em></h2><p style="margin-top:70px;background:#C9921B;border-radius:28px;padding:34px 48px;font-size:44px;font-weight:800;line-height:1.2">Agende uma demonstração<br><span style="color:#0B2D50">link na bio 👆</span></p></div>`,
};
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const [n, h] of Object.entries(pages)) { await p.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${h}</body></html>`); await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: `${S}/ov-${n}.png`, omitBackground: true }); }
  await b.close(); })();
