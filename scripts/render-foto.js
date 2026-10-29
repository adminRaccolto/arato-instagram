// Carrossel com foto em tela cheia (estilo aprovado após feedback de 29/10).
// Uso: node scripts/render-foto.js post02  → gera post02/slide-N.jpg (1080x1350)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const uri = (f, t = 'png') => `data:image/${t};base64,${fs.readFileSync(path.join(ROOT, f)).toString('base64')}`;
const LOGO = uri('marca/cores/branco/solido/logo_sem_fundo.png');
const M = '#C9921B';
const W = 1080, H = 1350;

// foto, posição do recorte, título (palavras entre * ficam em mostarda), texto de apoio
const posts = {};
posts.post01 = [
  { foto: '1-produtor-lavoura', pos: '50% 40%', titulo: 'Quanto custou *cada saca* que você colheu?', apoio: 'Se precisou abrir três planilhas pra responder, arraste 👉' },
  { foto: '2-colheitadeira', pos: '45% 50%', titulo: 'Máquina de última geração no campo.<br>*Planilha de 2009* no escritório.' },
  { foto: '3-papeis', pos: '50% 50%', titulo: 'A mesma nota digitada *3 vezes.*', apoio: 'Na NF. No estoque. No financeiro.<br>E quem paga o retrabalho é você.' },
  { foto: '4-caminhao-grao', pos: '55% 50%', titulo: 'Quanto da sua safra *já tem dono?*', apoio: 'Contrato, barter, arrendamento. Se você não sabe em 10 segundos, seu sistema está falhando com você.' },
  { foto: '5-produtor-celular', pos: '50% 35%', titulo: 'Sua dívida em dólar *mudou hoje.*<br>Você já sabe quanto?', apoio: 'No Arato, ela é convertida pela PTAX. Sozinha.' },
  { foto: '6-por-do-sol', pos: '60% 50%', final: true, titulo: 'O sistema que *trabalha pelo produtor.*', apoio: 'Feito por quem vive a fazenda. Para produtores de grãos de todo o Brasil.' },
];

posts.post02 = [
  { foto: 'p2-escritorio-noite', pos: '50% 30%', titulo: 'Você trabalha *para o seu sistema?*', apoio: 'No Arato é o contrário.',
    chips: [['#3B82C4', '<b>Azul:</b> o sistema fez sozinho'], [M, '<b>Mostarda:</b> você fez, com um clique']] },
];

const html = (s, i, n) => {
  const t = s.titulo.replace(/\*(.+?)\*/g, `<em>$1</em>`);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:'Inter',sans-serif;color:#fff;background:#0B2D50}
.foto{position:absolute;inset:0;background:url(${uri('fotos/unsplash/' + s.foto + '.jpg', 'jpeg')}) ${s.pos}/cover;filter:saturate(1.18) contrast(1.06)}
.sombra{position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,22,40,.55) 0%,rgba(6,22,40,0) 22%,rgba(6,22,40,0) 38%,rgba(6,22,40,.82) 68%,rgba(6,22,40,.96) 100%)}
.topo{position:absolute;top:56px;left:72px;right:72px;display:flex;justify-content:space-between;align-items:center}
.topo img{height:54px}
.pag{font-size:26px;font-weight:700;letter-spacing:1px;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);padding:10px 20px;border-radius:999px}
.texto{position:absolute;left:72px;right:72px;bottom:${s.final ? 300 : 96}px}
h1{font-family:'Inter Display','Inter';font-weight:900;font-size:${s.titulo.length > 60 ? 84 : 96}px;line-height:1.02;letter-spacing:-3px;text-shadow:0 4px 30px rgba(0,0,0,.35)}
em{font-style:normal;color:${M}}
p{margin-top:30px;font-size:38px;line-height:1.35;font-weight:500;color:#E8EEF5;max-width:900px}
.chips{margin-top:34px;display:flex;flex-direction:column;gap:16px}
.chip{display:flex;align-items:center;gap:20px;font-size:34px;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border-radius:18px;padding:20px 28px;width:fit-content}
.chip i{width:30px;height:30px;border-radius:50%;flex:none}
.cta{position:absolute;left:72px;right:72px;bottom:96px;background:${M};border-radius:24px;padding:36px 44px;display:flex;justify-content:space-between;align-items:center}
.cta b{font-size:44px;font-weight:800;line-height:1.1;color:#fff}
.cta span{font-size:30px;font-weight:700;color:#0B2D50;white-space:nowrap}
</style></head><body>
<div class="foto"></div><div class="sombra"></div>
<div class="topo"><img src="${LOGO}">${n > 1 ? `<div class="pag">${i + 1}/${n}</div>` : ''}</div>
<div class="texto"><h1>${t}</h1>${s.apoio ? `<p>${s.apoio}</p>` : ''}${s.chips ? `<div class="chips">${s.chips.map(([c, t]) => `<div class="chip"><i style="background:${c}"></i><span>${t}</span></div>`).join('')}</div>` : ''}</div>
${s.final ? `<div class="cta"><b>Agende uma<br>demonstração</b><span>link na bio 👆</span></div>` : ''}
</body></html>`;
};

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H } });
  const nome = process.argv[2] || 'post01', slides = posts[nome];
  fs.mkdirSync(path.join(ROOT, nome), { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    await p.setContent(html(slides[i], i, slides.length));
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(ROOT, nome, `slide-${i + 1}.jpg`), type: 'jpeg', quality: 90 });
  }
  await b.close();
})();
