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
1. [ ] Scaffold (config, layout, componentes, index, README, assets)
2. [ ] npm install + npm run build (verificar de verdade)
3. [ ] npm run dev + preview no browser (validar visual)
4. [ ] Gerar og-image.png (1200x630) real
5. [ ] git init main + commit
6. [ ] gh repo create anvisa-mcp-landing --public + push
7. [ ] Deploy: deixar preparado, NAO executar

## Fora de escopo (e por que)
- Criar o repo `anvisa-mcp` em si (usuario nao pediu; e outro projeto).
- Configurar o dominio na Vercel (feito manualmente depois pelo usuario).
- Analytics.
