# Cartilha de ação: @arato.agr
> Base de decisão para tudo o que for criado e publicado. Versão 0.1 (30/10/2026), em construção com o Gino.
> Ordem de leitura numa sessão nova: **CARTILHA.md → BRIEFING.md → ESTRATEGIA.md**. Em caso de conflito, vale a CARTILHA.

## 1. Missão
**O Arato vende clareza.** Todo conteúdo leva o produtor a entender que **falta de clareza custa dinheiro**, e que quem
conhece o próprio negócio sente menos o impacto e reage melhor. Assinatura: *Arato. Clareza para decidir.*

## 2. Objetivo e persona
- **Objetivo:** gerar **leads**, ou seja, produtores que chamam no WhatsApp/pedem demonstração.
- **Persona:** o **produtor rural** (dono/decisor) de grãos (soja, milho, algodão), médio a grande, **de todo o Brasil**.
  Gerente, administrativo e contador são públicos secundários.

## 3. As três fontes de conteúdo (e a proporção)
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

## 4. Quem fala (voz)
| Tipo de post | Voz |
|---|---|
| Notícia que **replica ou desdobra** um fato | **Arato** (marca, "nós") |
| **Análise**, opinião, vínculo entre fatos | **Consultor** (Gino, 1ª pessoa) |
| Produto | Arato |

## 5. Tom
- Direto, prático, linguagem do produtor de grãos brasileiro, sem "tecniquês".
- **Postura política: crítica ácida ao atual governo é permitida**, sempre:
  - ancorada em **fato com fonte e data** (nada de boato ou número sem origem);
  - sobre **políticas e seus efeitos no produtor** (crédito, juros, tributação, frete, insegurança);
  - **sem** ofensa pessoal, xingamento, desinformação ou incitação.
  - ⚠️ Post político **impulsionado** exige autorização da Meta para "temas sociais, eleitorais ou políticos" (verificação de identidade
    + aviso "Pago por"). Posts ácidos ficam **orgânicos** até essa autorização existir.

## 6. Números
- **Números de mercado e de contexto** (cotação, Selic, câmbio, valor do Plano Safra, diesel etc.): **usar**, sempre com **fonte e data**.
- **Números fictícios** para exemplificar a operação: **somente quando o Gino pedir explicitamente.**
- Nunca: dado sem fonte apresentado como fato, promessa de economia ("economize X%"), números de clientes.

## 7. Fontes de notícia aprovadas
Canal Rural · Agrinvest · Notícias Agrícolas · Valor Econômico · Barchart.
Citar a fonte no post (ex.: "Fonte: Canal Rural, 30/10"). Outras fontes só com aprovação.

## 8. Formatos e frequência
- **Feed: 4 por semana**, com formatos variados: **imagem única** (notícia rápida, frase forte), **carrossel** (análise, educação), **Reel** (consultor/avatar, tela do sistema).
  Não é tudo carrossel.
- **Stories: 2 a 3 por dia**: notícia rápida, bastidores, repost do feed, chamada para demonstração.
- Visual: foto em tela cheia, degradê escuro, título forte com palavra-chave em mostarda, logo branca no topo (ver `scripts/render-foto.js`).

## 9. Fluxo de aprovação (reação imediata)
- Notícia relevante → Claude produz a peça → **envia para aprovação do Gino** → aprovado → Windsor.ai publica.
- **Canal de aprovação desejado: WhatsApp do Gino.** ⏳ Ver pendências: hoje o Claude não tem um canal de WhatsApp configurado.

## 10. Não fazer (herdado do BRIEFING)
Citar concorrentes pelo nome · citar clientes/fazendas sem autorização · prometer função que o Arato não tem
(ex.: crédito IBS/CBS ainda não existe) · dizer que a IA do produto é "Claude" (é Arato/Olívia) · falar de preço sem perguntar.

## 11. Pendências para fechar a v1.0
1. **WhatsApp para aprovações:** definir o mecanismo (ver resposta no chat de 30/10).
2. **Monitoramento de notícias:** liberar os sites das fontes no ambiente e definir horários de varredura.
3. **Stories com enquete/link:** a publicação via API **não** permite figurinhas interativas (enquete, caixinha, link) — confirmar
   e decidir: Stories automáticos só com imagem; enquetes feitas manualmente pelo Gino?
4. **O que conta como lead:** conversa iniciada no WhatsApp? Demonstração agendada? Formulário?
5. **Limites da acidez:** existe algum tema/pessoa em que NÃO tocar?
