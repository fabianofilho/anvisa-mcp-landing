# PROGRESS: anvisa-mcp-landing

## Objetivo
Landing page estatica (Astro + Tailwind) para o projeto `anvisa-mcp` (servidor MCP
de consulta regulatoria da Anvisa), tom anti-hype IA.med, publicada sob
`https://mcp.iamed.cc/anvisa`. So apresenta e direciona pro GitHub, sem backend.

## Decisoes (e por que)
- **Dominio**: `mcp.iamed.cc/anvisa` (confirmado pelo usuario). Astro `site:
  'https://mcp.iamed.cc'` + `base: '/anvisa'`. Canonical e OG absolutos nesse path.
- **Fonte do projeto**: `anvisa-mcp` ainda NAO existe (usuario confirmou "ainda nao
  criei"). Conteudo construido a partir da spec do proprio prompt. Exemplos de
  retorno das tools marcados como ilustrativos. Licenca MIT provisoria. Link do
  GitHub aponta pra `github.com/fabianofilho/anvisa-mcp` (vai 404 ate o repo existir).
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
- Repo do projeto anvisa-mcp existe mas e PRIVADO -> botao "Ver no GitHub" 404 pra
  visitante sem acesso ate ser tornado publico. Decisao do usuario.
- Deploy Vercel NAO feito. Ao configurar: apontar dominio pra servir o dist sob
  /anvisa (mcp.iamed.cc/anvisa) e conferir que /anvisa/og-image.png e /anvisa/
  favicon.svg resolvem.
- npm audit acusou vulnerabilidades em deps transitivas (dev/build, Astro/Vite);
  nao rodei `audit fix --force` (breaking). Reavaliar em upgrade do Astro.
- Exemplos de retorno das tools sao ILUSTRATIVOS; reconciliar com o anvisa-mcp
  real antes de divulgar a pagina.

## Proximo passo (quando for publicar de verdade)
1. Tornar anvisa-mcp publico OU repensar o CTA se ficar privado.
2. Ajustar exemplos das tools ao esquema real do anvisa-mcp.
3. Deploy Vercel + apontar mcp.iamed.cc/anvisa.

## Fora de escopo (e por que)
- Criar o repo `anvisa-mcp` em si (usuario nao pediu; e outro projeto).
- Configurar o dominio na Vercel (feito manualmente depois pelo usuario).
- Analytics.
