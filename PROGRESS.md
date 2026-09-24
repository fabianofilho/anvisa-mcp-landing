# PROGRESS: anvisa-mcp-landing

## Objetivo
Landing page estatica (Astro + Tailwind) para o projeto `anvisa-mcp` (servidor MCP
de consulta regulatoria da Anvisa), tom anti-hype IA.med, publicada sob
`https://iamed.cc/mcps/anvisa`. Apresenta o conector hospedado e a instalacao
local, sem backend.

## Decisoes (e por que)
- **Dominio**: `iamed.cc/mcps/anvisa`. Astro `site: 'https://iamed.cc'` + `base:
  '/mcps/anvisa'`. O antigo `mcp.iamed.cc` foi abandonado (DNS aponta para um
  roteador sem rota) e nao deve aparecer em nenhum link.
- **Fonte do projeto**: `anvisa-mcp` ainda NAO existe (usuario confirmou "ainda nao
  criei"). Conteudo construido a partir da spec do proprio prompt. Exemplos de
  retorno das tools marcados como ilustrativos. Hoje o repo existe, e publico e
  Apache-2.0; exemplos e assinaturas foram alinhados a v0.1.0 (branch alinhar-v0.1.0).
- **Stack**: Astro 5 + @astrojs/tailwind 6 + Tailwind 3.4. Sem React/Vue. Icones em
  SVG inline (prompt permite, evita dep extra). Code highlight via `astro:components`
  Code (Shiki, build-time). Fonte: system stacks (sem web font, Lighthouse/CLS).
- **Sem analytics/cookies** (nao pedido).

## Restricoes ativas
- Nao fixar dominio sem confirmar (FEITO: confirmado).
- Nao inventar o que o projeto faz; nao apresentar feature planejada como pronta.
- Nao executar deploy (deixar preparado). Repo da LANDING e publico; repo do
  anvisa-mcp e outro e ainda nao existe.
- Tom anti-hype, pt-BR com acentos, sem travessao, sem emoji no conteudo.

## Sub-passos
1. [x] Scaffold (config, layout, componentes, index, README, assets)
2. [x] npm install + npm run build (build limpo, 1 pagina)
3. [x] npm run dev + preview no browser (6 secoes validadas visualmente)
4. [x] Gerar og-image.png (1200x630, via Chrome headless a partir de og.svg)
5. [x] git init main + commit
6. [x] gh repo create anvisa-mcp-landing --public + push -> github.com/fabianofilho/anvisa-mcp-landing
7. [x] Deploy: preparado (site+base no astro.config), NAO executado

## Estado final (feito nesta sessao)
- Repo publico no ar: https://github.com/fabianofilho/anvisa-mcp-landing (main).
- Repo do projeto anvisa-mcp e PUBLICO (Apache-2.0).
- Publicacao: o dist e copiado para mcps/anvisa/ do repo Medicina-IA/
  medicina-ia.github.io, cujo deploy na Vercel serve iamed.cc (ver README).
- npm audit acusou vulnerabilidades em deps transitivas (dev/build, Astro/Vite);
  nao rodei `audit fix --force` (breaking). Reavaliar em upgrade do Astro.
- Exemplos de retorno das tools sao saidas reais da v0.1.0 (24/09/2026).

## Proximo passo (quando for publicar de verdade)
1. Merge da PR alinhar-v0.1.0 depois da PR finalizar-v0.1.0 do anvisa-mcp.
2. Copiar o dist para medicina-ia.github.io/mcps/anvisa e publicar.

## Fora de escopo (e por que)
- Criar o repo `anvisa-mcp` em si (usuario nao pediu; e outro projeto).
- Pagina central iamed.cc/mcps (fica no repo do site).
- Analytics.
