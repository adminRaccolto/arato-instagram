# Roteiro: "Ampliando sua visão" (teste com vídeo gerado por IA)
Status: **teste** (alternativa B: cenas geradas por IA de vídeo; trilha livre de direitos). Aprovação do Gino antes de publicar.
Formato: Reel 9:16, ~24 s. Fechamento: *"Viva tudo que a agricultura tem…"* → logo + **"Arato. Ampliando sua visão."** + CTA.

## Cenas e prompts
Prompts em inglês (as ferramentas respondem melhor). Gerar cada cena em **9:16**, 5–8 s, fotorrealista.
Para manter a continuidade do recuo, usar o **último quadro da cena anterior como primeiro quadro da próxima** (recurso "first frame / image-to-video").

**Cena 1 (0–3 s): visão do observador**
> First-person POV at eye level, standing at the edge of a vast flat soybean field in Mato Grosso, Brazil, late afternoon golden light.
> A large green tractor pulling a seed planter passes from left to right a few meters ahead, raising reddish dust from the red cerrado soil.
> No person visible. Subtle handheld sway. Photorealistic, cinematic, natural colors, vertical 9:16.

**Cena 2 (3–6 s): o recuo começa**
> Same first-person framing, looking down at freshly planted rows in red cerrado soil. The camera begins a slow, smooth pull-back (dolly out)
> as tiny soybean seedlings emerge from the soil. Photorealistic, vertical 9:16, no cuts.

**Cena 3 (6–12 s): a soja cresce**
> Continuous slow pull-back over a Brazilian soybean field shown as a time-lapse: plants grow from small seedlings to a dense green canopy
> closing the rows; the flat horizon and a blue sky with cumulus clouds come into view. Smooth single take, photorealistic, vertical 9:16.

**Cena 4 (12–15 s): a janela**
> The slow pull-back continues and reveals that the view of the soybean field was being seen through the window of a rustic farm office:
> a wooden window frame appears around the bright field, the office interior in soft shadow. The camera slows down and stops. Photorealistic, vertical 9:16.

**Cena 5 (15–19 s): o escritório**
> Inside a rustic farm office in Brazil, warm afternoon light from a window overlooking a green soybean field. A man's feet in brown leather
> work boots rest on a wooden desk (only legs visible, no face). On the desk: a traditional chimarrão gourd (cuia) with a metal bombilla,
> and an open laptop whose screen shows a plain bright green screen. Calm, confident mood. Photorealistic, vertical 9:16, static camera.
>
> *Variante (se preferir sem os pés na mesa):* a hand reaches for the chimarrão gourd next to the open laptop.
>
> ⚠️ A tela verde é proposital: o Claude substitui pela **tela real do Arato** (print com dados fictícios). Não usar tela inventada.

**Cena 6 (19–24 s): fechamento** (o Claude produz)
Texto "Viva tudo que a agricultura tem…" sobre a cena 5 → tela azul-escura com logo, **"Arato. Ampliando sua visão."** e "Agende uma demonstração: link na bio".

## Trilha: pagode de viola (livre de direitos)
Não usar músicas conhecidas (direitos autorais). Opções:
1. **Gerar com IA de música** (ex.: ElevenLabs Music), conferindo se o plano permite uso comercial. Prompt sugerido:
   > Instrumental Brazilian "pagode de viola" in the style of traditional viola caipira: 10-string viola caipira lead with syncopated pagode
   > rhythm, acoustic guitar accompaniment, light percussion, about 100 BPM, warm rural mood, no vocals, 25 seconds, solo viola intro
   > for the first 3 seconds, clear resolved ending.
2. **Banco de música livre** (Pixabay Music, buscando "viola", "caipira", "sertanejo"), conferindo a licença de cada faixa.
3. **Encomendar a um violeiro** (exclusiva, tem a cara da marca).

## Montagem (Claude)
Juntar as cenas → recuo contínuo com transições suaves → substituir a tela verde pelo print do Arato → textos e encerramento no padrão
visual (`scripts/render-video.js`) → trilha → vídeo final em `videos/visao-ampliada.mp4` → aprovação do Gino.
