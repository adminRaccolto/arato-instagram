# Arato no Instagram: briefing e estado do projeto

> Leia este arquivo inteiro antes de criar qualquer conteúdo.

## Fluxo de trabalho
Claude cria a arte (scripts/render.js, HTML → JPEG via Playwright) → commit/push neste repositório (público) →
link direto `https://raw.githubusercontent.com/adminRaccolto/arato-instagram/main/<caminho>.jpg` →
Windsor.ai (`instagram`, conta id 17841415277073796) publica com `create_carousel_post` / `create_image_post` etc.
**Nada é publicado e nenhum dinheiro é gasto em anúncio sem aprovação explícita do Gino para aquele post.**

## Estado atual (29/10/2026)
- Perfil: **@arato.agr**, nome "Arato | Gestão de Fazendas", 0 posts, 0 seguidores.
- Bio atual:
  ```
  🚜 Todo Sucesso no Agro Passa pelo Arado
  🧑‍🌾 Feito por Gestores do Agro
  💵 Custos, Financeiro e Estratégias num só App
  👇 (65) 9 9649-3240
  ```
- Sugerido (pendente): link na bio `https://wa.me/5565996493240?text=Ol%C3%A1%21%20Quero%20conhecer%20o%20Arato.`
  com título "Agende uma demonstração", botão de WhatsApp, e última linha da bio → "👇 Fale com a gente no WhatsApp".
- Meta Ads (conector `facebook`) **ainda não conectado** no Windsor.ai; verba de anúncio não definida.
- Feito: post 1 (carrossel 6 slides) em `post01/` + legenda; 7 capas de destaque em `destaques/`. **Não publicados.**
- Logo: recebida em `marca/` (kit completo: azul, branco, mostarda; sólido e contorno). Artes usam `marca/` via scripts/render.js.
- Pendente de resposta: a Raccolto tem Instagram? Pode usar a história dos nomes/oliveira?

## Publicados
- **Post 1** (carrossel 6 slides, v2 com fotos): publicado em 29/10/2026 18:59 (horário de Brasília). https://www.instagram.com/p/DfGBz9YCHqA/ (media_id 18109428860579151)
- Observação: `execute_action` do carrossel deu timeout de 60s no MCP, mas o post foi publicado. **Antes de tentar de novo após um timeout, confira `media_count`/`media_id` para não duplicar.**

## Feedback do Gino sobre o post 1 (29/10) → REFAZER
A versão só com texto e ícones foi reprovada ("ta bem ruim"). Ele quer **imagens mais vivas, fotos de campo e de agricultor, textos provocativos**.

**Novo estilo:** foto em tela cheia (lavoura, colheitadeira, caminhão graneleiro, silo, produtor) + degradê escuro embaixo, título grande e provocativo com a palavra-chave em mostarda (#C9921B), uma ideia por slide, logo pequena no canto (`marca/cores/branco/solido/logo_sem_fundo.png`).

**Busca de fotos (como fazer):** API oficial do Unsplash (`https://api.unsplash.com/search/photos`, header `Authorization: Client-ID <Access Key>`).
A Access Key NÃO fica no repositório (é público): use a variável de ambiente `UNSPLASH_ACCESS_KEY` ou peça ao Gino. A Pexels pausou novas chaves.
Domínios liberados: `api.unsplash.com`, `images.unsplash.com`, `unsplash.com`, `images.pexels.com`. Fotos usadas ficam em `fotos/unsplash/` com `CREDITOS.md`.
**Post 1 v2 (com fotos) feito**: `scripts/render-foto.js` gera `post01/`.
As páginas de busca do unsplash.com e do www.pexels.com têm proteção anti-robô: não tentar contornar.

**Fotos:** o Gino ainda não tem fotos próprias. Usar Unsplash/Pexels (licença livre p/ uso comercial). A rede do ambiente precisa liberar `unsplash.com`, `images.unsplash.com`, `www.pexels.com`, `images.pexels.com`. Quando houver fotos próprias, elas vão para `fotos/` e têm prioridade. Não usar fazenda/cliente identificável sem autorização.

**Texto novo do post 1 (carrossel):**
1. [produtor olhando lavoura de soja] "Quanto custou cada saca que você colheu?" Se você precisou abrir três planilhas para responder, continua 👉
2. [colheitadeira] "Máquina de última geração no campo. Planilha de 2009 no escritório."
3. [papéis/notas] "A mesma nota digitada 3 vezes." Na NF. No estoque. No financeiro. E quem paga o retrabalho é você.
4. [caminhão carregando grão] "Quanto da sua safra já tem dono?" Contrato, barter, arrendamento. Se não sabe em 10 segundos, seu sistema está falhando com você.
5. [produtor com celular na lavoura] "Sua dívida em dólar mudou hoje. Você já sabe quanto?" No Arato, ela é convertida pela PTAX, sozinha.
6. [pôr do sol na lavoura + logo] "Arato. O sistema que trabalha pelo produtor." Feito por quem vive a fazenda, em Nova Mutum-MT. 👉 Agende uma demonstração: link na bio.

## Plano dos 9 primeiros posts
| # | Formato | Tema |
|---|---|---|
| 1 | Carrossel | Apresentação: "Planilha pra tudo. Sistema que só abre num PC. Tem outro jeito." (FEITO) |
| 2 | Imagem | Azul = o sistema fez sozinho; mostarda = você fez |
| 3 | Carrossel | "Quantas vezes você lança a mesma nota?" (nota chega sozinha → estoque + conta a pagar) |
| 4 | Reel | Dívida em dólar convertida pela PTAX (precisa de gravação de tela) |
| 5 | Carrossel | Ponto de equilíbrio em sacas/ha |
| 6 | Carrossel | Quanto da safra já está comprometido (contratos, barter, arrendamento em sacas) |
| 7 | Imagem | "LCDPR em dezembro, às pressas, de novo?" |
| 8 | Carrossel | Bastidores: nasceu da consultoria Raccolto (história dos nomes só com aprovação) |
| 9 | Imagem | CTA: veja o Arato com os números da sua fazenda, agende demonstração |

---

## Briefing original (fornecido pelo Gino)

### Quem somos
- **Arato**: ERP para fazendas de grãos, 100% web (web.arato.agr.br).
- **Raccolto** (dois "l"): consultoria do agro de Nova Mutum-MT. O Arato nasceu da consultoria, não de empresa de software. Isso é diferencial.
- **Olívia**: assistente dentro do sistema que tira dúvidas de uso.
- Nomes: Raccolto = colheita (italiano); arato lembra arado. Logo inspirada na oliveira. *Confirmar antes de usar em post.*

### Público
Produtor de soja, milho e algodão em MT (Nova Mutum, Lucas do Rio Verde, Sorriso), médio a grande, muitas vezes grupo familiar com várias fazendas/CPFs/CNPJs.
- Dono: lucro da safra, quanto deve, a receber, grão comprometido.
- Gerente/administrativo: notas, contas, estoque, NF de venda; sofre com retrabalho.
- Contador: recebe LCDPR e SPED prontos.
- Operador de campo: App Campo (complemento).

Dores: planilha pra tudo; sistema desktop num PC só; lançar a mesma informação 2-3 vezes; LCDPR às pressas; dívida em dólar sem saber o valor em reais; contratos/barter/arrendamento em sacas; não saber custo real por ha e por saca.

### Posicionamento
"O sistema que trabalha pelo produtor": se o sistema pode fazer sozinho, faz; se precisa do usuário, é um clique. Frase antiga: "Menos cliques, mais campo". Azul = sistema fez sozinho; mostarda = usuário fez. Contra sistemas desktop antigos, de tela cinza. **Não citar concorrentes.**

### Funções reais (não prometer nada fora desta lista)
- **Lavoura e safra:** fazendas, talhões, safras, ciclos; plantio, adubação, pulverização, correção, colheita com baixa automática de estoque (custo médio); planejamento × realizado; DRE Agrícola (receita, custo, margem, ponto de equilíbrio em sc/ha, retorno); romaneio com pesagem e classificação.
- **Grãos:** contratos fixo / a fixar / barter com saldo entregue; cada nota de venda vira conta a receber e abate do contrato; expedição com rotas, MDF-e, correção de peso no destino; compromissos em grãos (arrendamento, barter, compra de terra em sacas).
- **Fiscal (forte):** NF-e, CT-e, MDF-e, CIOT; notas recebidas buscadas automaticamente (SIEG), processar = entrada no estoque + conta a pagar; remessa/retorno de armazém, entrega futura, devolução; LCDPR no leiaute oficial; SPED Contábil; auditor de estoque fiscal × físico.
- **Financeiro:** contas a pagar/receber, fluxo de caixa, conciliação OFX, borderô; cartão de crédito integrado (sai do caixa quando paga a fatura); contratos financeiros (custeio, investimento, CPR) SAC/Price, carência, dívida em dólar pela PTAX; endividamento ano a ano; previsto × realizado, seguros, consórcios, tesouraria; folha e 13º.
- **Gestão:** BI (safra, custos, endividamento); preços de soja/milho/algodão em Chicago e dólar no painel; alertas por e-mail de vencimentos e relatório semanal às segundas; várias fazendas e CPFs/CNPJs na mesma conta; relatórios PDF/Excel/WhatsApp.
- **Complementos pagos à parte:** App Campo (funciona sem internet, gestor aprova depois); IA que lê PDF de cédula de crédito e preenche contrato e parcelas; Módulo Algodão (bicudo, módulos, beneficiamento, HVI); Hedge/proteção de margem (ferramenta do consultor Raccolto).

### Tom de voz
Direto, prático, de quem é do campo, sem tecniquês. Palavras do produtor: saca, safra, talhão, romaneio, barter, arrendamento, custeio, LCDPR, nota. Problema primeiro, solução depois. Sem "revolucionário", "o melhor do Brasil" ou economia sem número real. Frases curtas, cara de MT. Emoji com moderação (🌱🚜🌽).

### Identidade visual
| Cor | Hex | Uso |
|---|---|---|
| Azul petróleo | #1A4870 | principal |
| Azul escuro | #0B2D50 | textos/títulos |
| Azul claro | #D5E8F5 | fundos |
| Mostarda | #C9921B | destaque/CTA |
| Mostarda claro | #FBF3E0 | fundos de destaque |
| Fundo | #F4F6FA | fundo geral |
| Verde | #16A34A | colheita/resultado positivo |

Limpo, moderno, muito espaço em branco, fotos reais de lavoura e máquinas de MT. Fonte usada nas artes: Inter / Inter Display.

### Pilares de conteúdo
1. Dor do dia a dia. 2. Antes × depois. 3. Função em 30 segundos (Reels). 4. Educação em gestão agrícola. 5. Calendário do agro. 6. Bastidores da Raccolto. 7. Prova social **só com autorização**.

### Regras: não fazer
- Não citar clientes, fazendas ou números de clientes sem autorização.
- Não citar concorrentes pelo nome.
- Não inventar números.
- Não dizer que a IA é o "Claude"; no produto, a IA se chama Arato/Olívia.
- Não prometer função fora da lista acima.
- Preço e planos: perguntar ao Gino.
