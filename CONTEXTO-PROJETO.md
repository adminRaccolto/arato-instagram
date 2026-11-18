# Arato Marketing: contexto completo do projeto
> Arquivo de transferência gerado em 18/11/2026 a partir da sessão de trabalho no Claude Code.
> Fonte oficial e atualizada: repositório GitHub **adminRaccolto/arato-instagram** (CARTILHA.md, BRIEFING.md, ESTRATEGIA.md, CALENDARIO.md).
> Ordem de prioridade em caso de conflito: CARTILHA > BRIEFING > ESTRATEGIA.

## Situação atual (18/11/2026)
- **Instagram:** @arato.agr, nome "Arato | Gestão de Fazendas", com bio própria e link de WhatsApp. Foto de perfil: `marca/perfil_1080x1080.png`.
- **Publicado:** 1 post, o carrossel de 6 slides "Quanto custou cada saca que você colheu?" (29/10/2026), https://www.instagram.com/p/DfGBz9YCHqA/
- **Pronto, não publicado:** post 2 "Você trabalha para o seu sistema?" (`post02/`); carrossel "Dinheiro caro" de 5 slides (`post03/`). Aguardam a agenda nova.
- **Infraestrutura funcionando:**
  - Windsor.ai conectado ao Instagram (publica foto, carrossel, Reel e Story; responde comentários).
  - GitHub como biblioteca pública das artes (o link raw serve de URL para o Windsor.ai publicar).
  - Fotos via API do Unsplash. A chave não fica no repositório.
  - Artes geradas por script (`scripts/render-foto.js`): foto em tela cheia, degradê, título com destaque em mostarda e logo branca.
- **Ainda não conectado:** Meta Ads (impulsionamento), HeyGen via API (avatar), sites das fontes de notícia, conta de demonstração do Arato.
- **Decisões de processo:**
  - A aprovação de cada post é feita pelo app do Claude. O WhatsApp fica para uma fase 2.
  - Nada é publicado sem aprovação.

## Divisão de trabalho sugerida
- **Projeto no Chat (Marketing Arato):** estratégia, discussão, roteiros, textos, revisão da cartilha e da agenda.
- **Claude Code (sessão com o repositório):** produção das artes e vídeos, envio para o GitHub, publicação pelo Windsor.ai e tarefas agendadas (varreduras de notícias).

## Próximos temas em aberto
1. Fechar a CARTILHA v1.0. Ainda faltam: anúncios pagos, resposta a comentários e Directs, identidade visual dos vídeos.
2. Liberar no ambiente do Claude Code: Canal Rural, Agrinvest, Notícias Agrícolas, Valor, Barchart, `web.arato.agr.br` e `api.heygen.com`.
3. HeyGen: confirmar se o plano inclui API e se o avatar e a voz em PT-BR estão prontos.
4. Conta de demonstração do Arato para gravar telas (cadastro → auto implantação → parametrização → uso).
5. Canal para o Gino enviar os vídeos gravados (o GitHub aceita até 25 MB por arquivo pelo navegador).
6. Só depois disso: montar a agenda.

---


<!-- ===== CARTILHA.md ===== -->

# Cartilha de ação: @arato.agr
> Base de decisão para tudo o que for criado e publicado. Versão 0.3 (30/10/2026), em construção com o Gino.
> Ordem de leitura numa sessão nova: **CARTILHA.md → BRIEFING.md → ESTRATEGIA.md**. Em caso de conflito, vale a CARTILHA.

### 1. Missão
**O Arato vende clareza.** Todo conteúdo leva o produtor a entender que **falta de clareza custa dinheiro**, e que quem
conhece o próprio negócio sente menos o impacto e reage melhor. Assinatura: *Arato. Clareza para decidir.*

### 2. Objetivo e persona
- **Objetivo:** gerar **leads**. **Lead = produtor que inicia conversa no WhatsApp ou no Direct do Instagram.**
  (O Claude não lê o WhatsApp nem os Directs: a contagem de leads vem do Gino.)
- **Persona:** o **produtor rural** (dono/decisor) de grãos (soja, milho, algodão), médio a grande, **de todo o Brasil**.
  Gerente, administrativo e contador são públicos secundários.

### 3. As três fontes de conteúdo (e a proporção)
| Fonte | % | O que é |
|---|---|---|
| **Notícias** | **40%** | Fato do dia que impacta o produtor → impacto → como quem tem clareza mitiga → Arato |
| **Contexto** | **35%** | Temas estruturais do agro (reforma tributária, juros, opex × capex, gestão) em convergência com o Arato |
| **Produto** | **25%** | O Arato em si: funções, telas, o que resolve, demonstração |

**Regra de mistura:** nunca dias seguidos com a mesma fonte ou o mesmo tema. As fontes se alternam.

**Pautas de notícia típicas:** Plano Safra, políticas de crédito rural, juros/Selic, câmbio, petróleo e diesel
(frete → custo em cascata), mercado de commodities (soja, milho, algodão), tributação, clima/safra.

**Fórmula da notícia:** *Fato (com fonte e data) → o que muda no bolso do produtor → quem conhece o próprio negócio
mitiga assim → clareza → Arato (leve) → CTA.*

### 4. Quem fala (voz)
| Tipo de post | Voz |
|---|---|
| Notícia que **replica ou desdobra** um fato | **Arato** (marca, "nós") |
| **Análise**, opinião, vínculo entre fatos | **Consultor** (Gino, 1ª pessoa) |
| Produto | Arato |

### 5. Tom
- Direto, prático, linguagem do produtor de grãos brasileiro, sem "tecniquês".
- **Postura política: crítica ácida ao atual governo é permitida**, sempre:
  - ancorada em **fato com fonte e data** (nada de boato ou número sem origem);
  - sobre **políticas e seus efeitos no produtor** (crédito, juros, tributação, frete, insegurança);
  - **nunca contra pessoas** (nenhum político, ministro, juiz ou parlamentar citado/atacado pessoalmente);
  - a crítica mira o **regime e a atuação política de todos os poderes** (Executivo, Legislativo e Judiciário);
  - **sem** ofensa, xingamento, desinformação ou incitação.
  - ⚠️ Post político **impulsionado** exige autorização da Meta para "temas sociais, eleitorais ou políticos" (verificação de identidade
    + aviso "Pago por"). Posts ácidos ficam **orgânicos** até essa autorização existir.

### 6. Números
- **Números de mercado e de contexto** (cotação, Selic, câmbio, valor do Plano Safra, diesel etc.): **usar**, sempre com **fonte e data**.
- **Números fictícios** para exemplificar a operação: **somente quando o Gino pedir explicitamente.**
- Nunca: dado sem fonte apresentado como fato, promessa de economia ("economize X%"), números de clientes.

### 7. Fontes de notícia aprovadas
Canal Rural · Agrinvest · Notícias Agrícolas · Valor Econômico · Barchart.
Citar a fonte no post (ex.: "Fonte: Canal Rural, 30/10"). Outras fontes só com aprovação.

### 8. Formatos e frequência
- **Feed: 4 por semana**, com formatos variados: **imagem única** (notícia rápida, frase forte), **carrossel** (análise, educação), **Reel** (consultor/avatar, tela do sistema).
  Não é tudo carrossel.
- **Stories: 2 a 3 por dia**: notícia rápida, bastidores, repost do feed, chamada para demonstração.
- Visual: foto em tela cheia, degradê escuro, título forte com palavra-chave em mostarda, logo branca no topo (ver `scripts/render-foto.js`).

### 9. Rotina diária de notícias (horário de Brasília)
| Varredura | Publicação |
|---|---|
| 07:00 | 11:00 |
| 13:00 | 16:00 |
| 17:00 | 20:00 |
- Cada varredura lê as fontes aprovadas, escolhe o que impacta o produtor e produz a peça (Stories e, quando a notícia for forte e couber nos 40% de notícias, um post de feed).
- Os 4 posts de feed da semana continuam respeitando a proporção (notícias / contexto / produto) e a regra de mistura.

### 10. Aprovação
- Claude produz → **envia para aprovação** → Gino aprova → Windsor.ai publica no horário.
- **Canal: app do Claude** (decisão de 30/10). WhatsApp fica para uma fase 2, se valer a pena configurar a API oficial.
- Sem aprovação até o horário de publicação → **não publica** (a peça fica para a próxima janela ou é descartada).

### 11. Vídeos
**Volume:** 3 vídeos por semana (Reels), dentro dos 4 posts semanais de feed. Stories podem ter vídeo curto.

**Quatro tipos, combinados livremente** (um vídeo pode usar um ou vários):
| Tipo | Uso | Voz | Quem produz |
|---|---|---|---|
| **1. Notícia animada** | Notícia do dia: foto com zoom lento, texto animado, legenda | Arato (texto na tela) | Claude (ffmpeg), 100% automático |
| **2. Avatar do consultor (HeyGen)** | **Somente** assuntos técnicos de consultoria e uso do Arato | Consultor (avatar, sinalizado como IA) | Claude escreve o roteiro → HeyGen gera |
| **3. Gino gravando** | Análise, opinião, crítica política, notícia quente, **e** consultoria técnica em gestão (não só Arato), para gerar engajamento | Consultor (real) | Claude escreve o roteiro → Gino grava (mais de 1 por semana) |
| **4. Tela do Arato** | Jornada de um usuário real: **cadastro → auto implantação → parametrização → uso** | Arato | Claude se cadastra no Arato com **fazenda fictícia** e grava a tela |

**Regras:**
- **Avatar nunca em crítica política nem opinião**: isso é só com o Gino real.
- Legenda na tela em todo vídeo (a maioria assiste sem som). Formato 9:16, gancho nos 2 primeiros segundos, de 20 a 60 s.
- Sem música da biblioteca do Instagram (indisponível via API): sem trilha ou com trilha livre de direitos embutida.
- Gravação de tela só com **dados fictícios**; nunca acessar dados de clientes reais.

### 12. Não fazer (herdado do BRIEFING)
Citar concorrentes pelo nome · citar clientes/fazendas sem autorização · prometer função que o Arato não tem
(ex.: crédito IBS/CBS ainda não existe) · dizer que a IA do produto é "Claude" (é Arato/Olívia) · falar de preço sem perguntar.

### 13. Pendências para fechar a v1.0
1. **WhatsApp para aprovações:** exige a API oficial do WhatsApp (Meta), com número remetente dedicado e token guardado no ambiente. Fase 2; até lá, app do Claude.
2. **Liberar no ambiente os sites das fontes** (Gino vai liberar) e testar a leitura de cada uma (Valor tem paywall; Barchart pode ter proteção anti-robô).
3. **Stories com enquete/link:** a API não permite figurinhas interativas. Stories automáticos só com imagem/vídeo; enquetes manuais pelo Gino.
4. **Agendar as varreduras** (tarefas agendadas 07h/13h/17h) somente após o OK do Gino.
5. **HeyGen via API:** o Gino já tem conta. Confirmar se o plano inclui **acesso à API**, e se o avatar e a voz em PT-BR já estão criados. Chave em `HEYGEN_API_KEY` (variável de ambiente, nunca no chat); liberar `api.heygen.com` e o domínio de download dos vídeos.
6. **Conta de demonstração no Arato:** liberar `web.arato.agr.br` no ambiente; definir como o Claude se cadastra (e-mail para confirmação de cadastro?). Credenciais em variáveis de ambiente.
7. **Envio dos vídeos gravados pelo Gino:** definir o canal (GitHub aceita até 25 MB por arquivo pelo navegador).

---

<!-- ===== BRIEFING.md ===== -->

# Arato no Instagram: briefing e estado do projeto

> Leia este arquivo inteiro antes de criar qualquer conteúdo.

> **ALCANCE NACIONAL (orientação do Gino, 29/10/2026):** a comunicação é para produtores de grãos do Brasil inteiro, não só de Nova Mutum/MT.
> Falar com MT, GO, MS, PR, RS, BA/MATOPIBA etc. Nova Mutum aparece no máximo como **origem** da Raccolto (bastidores), nunca como limite de público.
> Hashtags e anúncios: segmentação nacional. Evitar "cara de MT" exclusiva; usar linguagem do produtor de grãos brasileiro.

### Fluxo de trabalho
Claude cria a arte (scripts/render.js, HTML → JPEG via Playwright) → commit/push neste repositório (público) →
link direto `https://raw.githubusercontent.com/adminRaccolto/arato-instagram/main/<caminho>.jpg` →
Windsor.ai (`instagram`, conta id 17841415277073796) publica com `create_carousel_post` / `create_image_post` etc.
**Nada é publicado e nenhum dinheiro é gasto em anúncio sem aprovação explícita do Gino para aquele post.**

### Estado atual (29/10/2026)
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

### Publicados
- **Post 1** (carrossel 6 slides, v2 com fotos): publicado em 29/10/2026 18:59 (horário de Brasília). https://www.instagram.com/p/DfGBz9YCHqA/ (media_id 18109428860579151)
- Observação: `execute_action` do carrossel deu timeout de 60s no MCP, mas o post foi publicado. **Antes de tentar de novo após um timeout, confira `media_count`/`media_id` para não duplicar.**

### Feedback do Gino sobre o post 1 (29/10) → REFAZER
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

### Plano dos 9 primeiros posts
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

### Briefing original (fornecido pelo Gino)

### Quem somos
- **Arato**: ERP para fazendas de grãos, 100% web (web.arato.agr.br).
- **Raccolto** (dois "l"): consultoria do agro de Nova Mutum-MT. O Arato nasceu da consultoria, não de empresa de software. Isso é diferencial.
- **Olívia**: assistente dentro do sistema que tira dúvidas de uso.
- Nomes: Raccolto = colheita (italiano); arato lembra arado. Logo inspirada na oliveira. *Confirmar antes de usar em post.*

### Público
Produtor de soja, milho e algodão **de todo o Brasil** (o briefing original citava MT: Nova Mutum, Lucas do Rio Verde, Sorriso; ver ALCANCE NACIONAL), médio a grande, muitas vezes grupo familiar com várias fazendas/CPFs/CNPJs.
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
Direto, prático, de quem é do campo, sem tecniquês. Palavras do produtor: saca, safra, talhão, romaneio, barter, arrendamento, custeio, LCDPR, nota. Problema primeiro, solução depois. Sem "revolucionário", "o melhor do Brasil" ou economia sem número real. Frases curtas, linguagem do produtor de grãos brasileiro (alcance nacional). Emoji com moderação (🌱🚜🌽).

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

---

<!-- ===== ESTRATEGIA.md ===== -->

# Estratégia de comunicação: @arato.agr

> Complementa o BRIEFING.md. Versão 1, de 29/10/2026, montada a partir da orientação do Gino:
> "Falar do sistema é bom, mas só dele não. Trazer o contexto do momento do agro e fazer paralelos."

### 1. Ideia central
> ✅ Aprovada pelo Gino ("amei"). Assinatura de marca em teste: **"Arato. Clareza para decidir."**

**O Arato não vende software. Vende clareza num momento em que o agro não perdoa achismo.**
Cada post parte de algo que o produtor está sentindo agora (tributo, juro, câmbio, margem, pressão) e
só depois mostra como uma gestão organizada, e o Arato, muda o jogo. O sistema é a consequência, não o assunto.

Fórmula de todo post de contexto:
**Fato do momento → quanto a falta de clareza CUSTA → o que muda com informação organizada → o Arato (leve) → CTA.**

### Princípio obrigatório: "falta de clareza custa dinheiro" (orientação do Gino)
Além de alertar e engajar, **todo post precisa deixar o produtor sentindo no bolso** o custo de não ter clareza.
- Mostrar o **mecanismo do prejuízo**: multa e juros por atraso, crédito tributário perdido, venda na hora errada,
  dívida em dólar que cresce sem ninguém ver, insumo comprado sem saber o custo, retrabalho, decisão por impulso.
- **SEM valores explícitos** (orientação do Gino, 29/10): nada de contas de exemplo, R$, % ou cifras. O custo aparece pelo **contexto e pela consequência**
  ("a dívida em dólar sobe junto", "o crédito que some", "a venda feita na pressa"), não por números.
- **Proibido**: dados apresentados como fato sem fonte, promessas de economia.
- Fechamento padrão: **"Falta de clareza custa caro. Arato. Clareza para decidir."**

### 2. Mix de conteúdo (por mês)
| Pilar | % | O que é | Formato principal |
|---|---|---|---|
| **A. Momento do agro** | 35% | Reforma tributária, juros, câmbio, crédito rural, preço de grão, pressão de margem, com paralelo para a gestão | Carrossel + Reel do consultor |
| **B. Gestão na prática** | 25% | Educação: opex × capex, custo/ha, ponto de equilíbrio, fluxo de caixa, endividamento | Carrossel "salvável" |
| **C. O sistema resolve** | 20% | A função do Arato que responde à dor (antes × depois, tela em 30 s) | Imagem / Reel de tela |
| **D. Voz do consultor** | 10% | Opinião e bastidores de quem vive a fazenda (Raccolto) | Reel (avatar ou gravação real) |
| **E. Conversão** | 10% | Demonstração, perguntas frequentes, prova social (só com autorização) | Imagem + Stories |

Regra de ouro: **no máximo 1 em cada 3 posts do feed é sobre o sistema em si** (pilar C/E).

### 3. Cadência
- **Feed:** 3 por semana (ter / qui / sáb, ~11h30).
- **Reels:** 1 por semana (pilar A ou D), assim que a ferramenta de vídeo estiver pronta.
- **Stories:** 3 a 5 por semana: enquete ("Você já sabe se vai ser contribuinte da CBS?"), caixinha de perguntas, repost do feed, link de demonstração.
- **Patrocínio:** impulsionar os posts do pilar A que performarem melhor organicamente (precisa conectar o Meta Ads).

### 4. Séries do pilar "Momento do agro" (temas do Gino)
> ⚠️ Regra do briefing: não prometer função fora da lista. Onde o Arato ainda **não** tem a função, o post fala de **organização
> e base de dados** (o que o Arato já entrega), nunca de uma função que não existe. Pontos marcados com ❓ precisam de confirmação.

### Série 1: "Reforma tributária na porteira" (IBS/CBS)
- **Contexto (verificado em fontes de mercado, confirmar com contador antes de publicar números):** CBS plena a partir de 2027 no lugar de PIS/Cofins;
  2026 é ano de teste; IBS sobe gradualmente 2029–2032; transição até 2033. Produtor com receita abaixo de R$ 3,6 mi/ano pode não ser contribuinte (LC 214/2025),
  com crédito presumido para quem compra dele.
- **Paralelo:** no sistema novo, crédito tributário vem de **nota fiscal bem registrada**. Nota perdida, lançada errado ou fora do estoque = crédito que some.
- **Arato hoje:** busca automática das notas recebidas, NF-e/CT-e/MDF-e, entrada no estoque e conta a pagar a partir da nota, SPED Contábil, auditor de estoque fiscal × físico.
- ✅ **Resposta do Gino (29/10):** o controle de crédito de IBS/CBS **ainda não existe, mas estará** no Arato. Até o lançamento, os posts falam de **base organizada** (notas, SPED, auditor) e **não** afirmam que o Arato controla créditos. Anunciar como "em breve" só com o OK do Gino.
- Ideias de post:
  - Carrossel: "2027 chegou mais cedo do que você pensa: 5 perguntas que o produtor precisa responder agora"
  - Imagem: "Cada nota que se perde é crédito que vai embora."
  - Reel do consultor: "Contribuinte ou não contribuinte? Não decida sem olhar os números."

### Série 2: "Dinheiro caro"
- **Contexto:** câmbio e juros pressionando o custo do crédito e dos insumos. *Usar números só com fonte e data (BC, Cepea etc.).*
- **Paralelo:** com dinheiro caro, decidir sem visão de futuro é risco. Quem sabe o fluxo de caixa e a dívida de amanhã negocia melhor hoje.
- **Arato hoje:** dívida em dólar convertida pela PTAX, endividamento ano a ano, contratos de custeio/investimento/CPR com cronograma SAC/Price e carência, fluxo de caixa, previsto × realizado; hedge com o consultor Raccolto.
- Ideias de post:
  - Carrossel: "O dólar subiu. Quanto a sua dívida subiu junto?"
  - Imagem: "Juro alto não perdoa quem decide no escuro."
  - Carrossel educativo: "SAC ou Price? O que muda no seu caixa"

### Série 3: "Antes de investir, conheça o seu dia a dia" (opex × capex)
- **Paralelo:** não dá para planejar a plantadeira nova, o armazém ou a terra se você não sabe quanto custa manter a operação rodando.
- **Arato hoje:** planejamento de safra (orçado × realizado), DRE agrícola, custo por hectare e por saca, previsão de gastos, contratos de investimento.
- Ideias de post:
  - Carrossel: "Você sabe quanto custa um dia da sua fazenda?"
  - Imagem: "Investimento sem conhecer o custeio é aposta."
  - Carrossel: "Opex e capex em linguagem de fazenda"

### Série 4: "Sua memória não é sistema"
- **Paralelo:** em tempo de estresse econômico, a cabeça do produtor está cheia; vencimento esquecido, contrato perdido, decisão por impulso.
- **Arato hoje:** alertas de contas vencendo por e-mail, relatório semanal toda segunda, painel com preços de soja/milho/algodão e dólar, BI de safra e endividamento.
- Ideias de post:
  - Imagem: "Quantos vencimentos você está guardando de cabeça agora?"
  - Carrossel: "5 coisas que o produtor não deveria precisar lembrar"
  - Reel: "Segunda-feira, 7h: o relatório da semana já está no seu e-mail."

### 5. Ferramentas (stack)
| Função | Ferramenta | Status |
|---|---|---|
| Estratégia, roteiro, texto, artes | Claude | ✅ ativo |
| Biblioteca de artes e histórico | GitHub `adminRaccolto/arato-instagram` | ✅ ativo |
| Fotos | Unsplash (API) + fotos próprias em `fotos/` | ✅ ativo (chave fora do repo) |
| Publicar, métricas, anúncios | Windsor.ai | ✅ Instagram / ❌ Meta Ads pendente |
| **Vídeo com avatar (clone do Gino)** | **HeyGen** (recomendado) | ⏳ a configurar |
| Voz (opcional) | ElevenLabs | opcional |
| Relatório semanal de desempenho | Claude + Windsor.ai (tarefa agendada) | a configurar |

### Vídeo com avatar: como fica o fluxo
1. Gino grava **uma vez** 2 a 5 min de vídeo falando para a câmera (boa luz, fundo de fazenda/escritório) e autoriza o próprio clone na HeyGen.
2. Claude escreve o roteiro (30–60 s) → gera o vídeo pela **API da HeyGen** → salva no GitHub → mostra ao Gino → Windsor.ai publica como Reel (`create_video_post`).
3. Requisitos: plano HeyGen com acesso à API; chave guardada como variável de ambiente (`HEYGEN_API_KEY`), **nunca no chat**; liberar `api.heygen.com` e o domínio de download dos vídeos no ambiente.
4. **Transparência:** vídeo de avatar realista deve ser sinalizado como conteúdo gerado/alterado por IA (regras da Meta). Sugestão: rótulo "IA" do Instagram + menção discreta na legenda. Alternar com vídeos reais gravados pelo Gino para manter a confiança.

### 6. Métricas (revisão semanal)
- **Topo:** alcance, novos seguidores, salvamentos e compartilhamentos (bons sinais para os carrosséis do pilar B).
- **Meio:** cliques no link, conversas no WhatsApp.
- **Fundo:** demonstrações agendadas (o Gino informa) → a métrica que importa.

### 7. Pendências para destravar
1. ✅ IBS/CBS: virá no Arato (sem data). Perguntar a previsão antes de anunciar.
2. HeyGen: o Gino topa gravar o material-base e assinar o plano com API?
3. Conectar o Meta Ads no Windsor.ai + verba mensal.
4. Prova social: algum cliente autoriza depoimento?

---
