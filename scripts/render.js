const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const img = f => `data:image/png;base64,${fs.readFileSync(path.join(ROOT, 'marca', f)).toString('base64')}`;
const LOGO = {
  cor: img('logo_completo_transparente_1080.png'),
  branco: img('cores/branco/solido/logo_sem_fundo.png'),
  simboloBranco: img('cores/branco/solido/simbolo_sem_fundo.png'),
};
const OUT = require('path').resolve(__dirname, '..');
const C = { petroleo:'#1A4870', escuro:'#0B2D50', claro:'#D5E8F5', mostarda:'#C9921B', mostClaro:'#FBF3E0', fundo:'#F4F6FA', verde:'#16A34A' };

const base = (w,h,body,extra='') => `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px;overflow:hidden;font-family:'Inter',sans-serif;color:${C.escuro};-webkit-font-smoothing:antialiased}
.disp{font-family:'Inter Display','Inter',sans-serif}
${extra}</style></head><body>${body}</body></html>`;

// ---------- Ícones (traço simples) ----------
const sw = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
const icons = {
  arato: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><path d="M32 56V24"/><path d="M32 34c-9 0-15-6-15-15 9 0 15 6 15 15z"/><path d="M32 28c0-9 6-15 15-15 0 9-6 15-15 15z"/><path d="M14 56h36"/></svg>`,
  fiscal: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><path d="M18 8h20l10 10v38H18z"/><path d="M38 8v10h10"/><path d="M25 30h16M25 38h16M25 46h10"/></svg>`,
  safra: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><path d="M32 58V14"/><path d="M32 22c-6 0-10-4-10-9 6 0 10 4 10 9zM32 22c6 0 10-4 10-9-6 0-10 4-10 9z"/><path d="M32 34c-6 0-10-4-10-9 6 0 10 4 10 9zM32 34c6 0 10-4 10-9-6 0-10 4-10 9z"/><path d="M32 46c-6 0-10-4-10-9 6 0 10 4 10 9zM32 46c6 0 10-4 10-9-6 0-10 4-10 9z"/></svg>`,
  financeiro: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><path d="M10 54h44"/><path d="M16 46V34M28 46V26M40 46V30M52 46V16"/><path d="M14 24l12-10 12 6 14-12"/></svg>`,
  olivia: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><path d="M10 14h44v28H30l-12 10V42h-8z"/><circle cx="23" cy="28" r="1.5" fill="${c}"/><circle cx="32" cy="28" r="1.5" fill="${c}"/><circle cx="41" cy="28" r="1.5" fill="${c}"/></svg>`,
  campo: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><rect x="18" y="6" width="28" height="52" rx="5"/><path d="M28 50h8"/><path d="M26 22c4-4 8-4 12 0M29 27c2-2 4-2 6 0"/><path d="M24 17l16 16"/></svg>`,
  demo: c=>`<svg viewBox="0 0 64 64" ${sw} stroke="${c}" stroke-width="3.2"><rect x="10" y="14" width="44" height="40" rx="4"/><path d="M10 26h44M22 8v10M42 8v10"/><path d="M24 40l6 6 11-12"/></svg>`,
};

const destaques = [
  ['01-o-arato','arato',C.petroleo,'#fff'],
  ['02-fiscal','fiscal',C.petroleo,'#fff'],
  ['03-safra','safra',C.petroleo,'#fff'],
  ['04-financeiro','financeiro',C.petroleo,'#fff'],
  ['05-olivia','olivia',C.petroleo,'#fff'],
  ['06-app-campo','campo',C.petroleo,'#fff'],
  ['07-demonstracao','demo',C.mostarda,'#fff'],
];

// ---------- Carrossel post 1 (1080x1350) ----------
const W=1080,H=1350;
const marca = (cor) => `<img src="${cor === '#fff' ? LOGO.branco : LOGO.cor}" style="position:absolute;left:84px;bottom:64px;height:64px">`;
const pag = (n,cor) => `<div style="position:absolute;right:84px;bottom:80px;font-size:26px;font-weight:600;color:${cor};opacity:.7">${n}/6</div>`;
const css = `
.slide{position:relative;width:${W}px;height:${H}px;padding:120px 84px}
.kicker{font-size:30px;font-weight:700;letter-spacing:3px;text-transform:uppercase}
h1{font-family:'Inter Display';font-weight:800;letter-spacing:-2.5px;line-height:1.02}
.lista{list-style:none;margin-top:64px;display:flex;flex-direction:column;gap:30px}
.lista li{display:flex;gap:26px;align-items:flex-start;font-size:42px;line-height:1.25;font-weight:500}
.x{flex:none;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;margin-top:2px}
.card{border-radius:28px;padding:40px 40px}
`;
const slides = [
// 1 capa
`<div class="slide" style="background:${C.escuro};color:#fff;padding-top:200px">
  <div class="kicker" style="color:${C.mostarda}">Gestão de fazenda</div>
  <h1 style="font-size:112px;margin-top:40px;color:#fff;opacity:.55">Planilha<br>pra tudo.</h1>
  <h1 style="font-size:112px;margin-top:28px;color:#fff;opacity:.55">Sistema que só<br>abre num PC.</h1>
  <h1 style="font-size:124px;margin-top:56px;color:${C.mostarda}">Tem outro<br>jeito.</h1>
  <div style="position:absolute;right:84px;bottom:78px;font-size:30px;font-weight:600;color:${C.claro}">arraste →</div>
  ${marca('#fff')}
</div>`,
// 2 dor
`<div class="slide" style="background:${C.fundo}">
  <div class="kicker" style="color:${C.mostarda}">A rotina de muita fazenda</div>
  <h1 style="font-size:84px;margin-top:32px">Você conhece<br>essa história?</h1>
  <ul class="lista">
   ${['A mesma nota lançada duas, três vezes: na NF, no estoque e no financeiro.',
      'Informação espalhada em planilhas. Ninguém sabe o número certo.',
      'Sistema instalado num computador só. Saiu da fazenda, ficou sem acesso.',
      'Fim de ano chega e o LCDPR é feito às pressas.']
     .map(t=>`<li><span class="x" style="background:#fff;border:3px solid ${C.mostarda};color:${C.mostarda}">!</span><span>${t}</span></li>`).join('')}
  </ul>${marca(C.petroleo)}${pag(2,C.petroleo)}
</div>`,
// 3 conheça
`<div class="slide" style="background:${C.petroleo};color:#fff;padding-top:200px">
  <div class="kicker" style="color:${C.mostarda}">Prazer,</div>
  <img src="${LOGO.branco}" style="height:230px;margin-top:28px;margin-left:-6px">
  <p style="font-size:52px;line-height:1.25;font-weight:600;margin-top:48px;max-width:860px">Sistema de gestão para fazendas de <span style="color:${C.mostarda}">soja, milho e algodão</span>.</p>
  <p style="font-size:40px;line-height:1.35;margin-top:40px;color:${C.claro};max-width:860px">100% na web: acesse da fazenda, da cidade ou de onde estiver. Várias fazendas e CPFs/CNPJs na mesma conta.</p>
  ${marca('#fff')}${pag(3,'#fff')}
</div>`,
// 4 trabalha por você
`<div class="slide" style="background:#fff">
  <div class="kicker" style="color:${C.mostarda}">Menos cliques, mais campo</div>
  <h1 style="font-size:84px;margin-top:32px">O sistema que<br>trabalha por você.</h1>
  <div style="display:flex;gap:24px;margin-top:56px">
    <div class="card" style="flex:1;background:${C.claro}"><div style="width:44px;height:44px;border-radius:50%;background:${C.petroleo}"></div><div style="font-size:38px;font-weight:700;margin-top:24px;color:${C.petroleo}">Azul</div><div style="font-size:32px;margin-top:8px;line-height:1.3">o sistema fez sozinho</div></div>
    <div class="card" style="flex:1;background:${C.mostClaro}"><div style="width:44px;height:44px;border-radius:50%;background:${C.mostarda}"></div><div style="font-size:38px;font-weight:700;margin-top:24px;color:#8a6210">Mostarda</div><div style="font-size:32px;margin-top:8px;line-height:1.3">você fez, com um clique</div></div>
  </div>
  <div style="margin-top:48px;font-size:30px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.petroleo};opacity:.7">Exemplo: nota do fornecedor</div>
  <div style="margin-top:22px;display:flex;flex-direction:column;gap:16px">
    ${[['A nota chega sozinha no sistema',C.petroleo,C.claro],['Você confere e processa: um clique',C.mostarda,C.mostClaro],['Entrada no estoque + conta a pagar criadas',C.petroleo,C.claro]]
      .map(([t,c,bg])=>`<div style="display:flex;align-items:center;gap:22px;background:${bg};border-left:10px solid ${c};border-radius:14px;padding:24px 30px;font-size:36px;font-weight:600">${t}</div>`).join('')}
  </div>
  ${marca(C.petroleo)}${pag(4,C.petroleo)}
</div>`,
// 5 tudo num lugar
`<div class="slide" style="background:${C.fundo}">
  <div class="kicker" style="color:${C.mostarda}">Tudo num só lugar</div>
  <h1 style="font-size:84px;margin-top:32px">Da safra<br>ao LCDPR.</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:56px">
    ${[['safra','Safra e custos','Plantio à colheita, custo por hectare, DRE da safra'],
       ['arato','Grãos','Contratos fixo, a fixar e barter, romaneio, expedição'],
       ['fiscal','Fiscal','NF-e, CT-e, MDF-e, LCDPR e SPED Contábil'],
       ['financeiro','Financeiro','Contas, fluxo de caixa e dívida em dólar pela PTAX']]
      .map(([i,t,d])=>`<div class="card" style="background:#fff;box-shadow:0 2px 0 rgba(11,45,80,.06)"><div style="width:64px;height:64px">${icons[i](C.petroleo)}</div><div style="font-size:40px;font-weight:800;margin-top:22px">${t}</div><div style="font-size:29px;line-height:1.35;margin-top:10px;color:#3d5670">${d}</div></div>`).join('')}
  </div>
  ${marca(C.petroleo)}${pag(5,C.petroleo)}
</div>`,
// 6 origem + CTA
`<div class="slide" style="background:${C.escuro};color:#fff">
  <div class="kicker" style="color:${C.mostarda}">Nasceu no campo</div>
  <h1 style="font-size:84px;margin-top:32px;color:#fff">Feito por quem vive<br>a fazenda, não por<br>uma empresa de TI.</h1>
  <p style="font-size:38px;line-height:1.4;margin-top:40px;color:${C.claro};max-width:880px">O Arato nasceu dentro da consultoria Raccolto, em Nova Mutum-MT, no dia a dia das fazendas de grãos.</p>
  <div style="margin-top:72px;background:${C.mostarda};border-radius:28px;padding:48px 52px">
    <div style="font-size:54px;font-weight:800;line-height:1.12;color:#fff">Veja o Arato com os números da sua fazenda.</div>
    <div style="font-size:36px;font-weight:600;margin-top:22px;color:${C.escuro}">Agende uma demonstração: link na bio 👆</div>
  </div>
  <div style="position:absolute;left:84px;bottom:64px;display:flex;align-items:center;gap:28px">${`<img src="${LOGO.branco}" style="height:64px">`}<div style="font-size:32px;font-weight:600;color:${C.claro}">@arato.agr</div></div>
  ${pag(6,'#fff')}
</div>`,
];

(async()=>{
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const [name,ic,bg,fg] of destaques){
    const art = ic === 'arato' ? `<img src="${LOGO.simboloBranco}" style="width:100%;height:100%;object-fit:contain">` : icons[ic](fg);
    await p.setViewportSize({width:1080,height:1920});
    await p.setContent(base(1080,1920,`<div style="width:1080px;height:1920px;background:${bg};display:flex;align-items:center;justify-content:center"><div style="width:470px;height:470px">${art}</div></div>`));
    await p.screenshot({path:`${OUT}/destaques/${name}.jpg`,type:'jpeg',quality:92});
  }
  await p.setViewportSize({width:W,height:H});
  for (let i=0;i<slides.length;i++){
    await p.setContent(base(W,H,slides[i],css)); await p.evaluate(()=>document.fonts.ready);
    await p.screenshot({path:`${OUT}/post01/slide-${i+1}.jpg`,type:'jpeg',quality:92});
  }
  await b.close();
})();
