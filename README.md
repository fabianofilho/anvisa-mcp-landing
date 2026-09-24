# anvisa-mcp-landing

Landing page do [`anvisa-mcp`](https://github.com/fabianofilho/anvisa-mcp), um
servidor MCP para consulta regulatória da Anvisa. Pode ser usado pelo conector
hospedado (`https://mcp.tailf42a96.ts.net/anvisa/mcp`, sem garantia de
disponibilidade) ou instalado localmente. Um projeto [IA.med](https://iamed.cc).

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time, componente `Code` do Astro)
- Sem framework de UI no cliente; JavaScript mínimo (apenas o botão de copiar código)

## Rodar localmente

```bash
npm install
npm run dev
```

A página abre em `http://localhost:4321/mcps/anvisa` (o `base` é `/mcps/anvisa`).

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build localmente
```

## Deploy

Publicada em `https://iamed.cc/mcps/anvisa` (`site` + `base` em
`astro.config.mjs`). Este repositório não publica nada sozinho: não há projeto na
Vercel ligado a ele nem GitHub Pages. O `dist/` do build é copiado para
`mcps/anvisa/` do repositório do site
([Medicina-IA/medicina-ia.github.io](https://github.com/Medicina-IA/medicina-ia.github.io)),
e é o deploy desse repositório na Vercel que serve o `iamed.cc`.

```bash
npm run build
rm -rf ../medicina-ia.github.io/mcps/anvisa
cp -r dist ../medicina-ia.github.io/mcps/anvisa
```

## Notas

- O repositório do projeto `anvisa-mcp` é público, então os links de GitHub funcionam.
- As assinaturas e os exemplos de retorno das tools são os da v0.1.0 do
  `anvisa-mcp` (`RespostaMedicamentos`, `RespostaSaMD`), tirados de saídas reais
  de 24/09/2026.
- A classificação de SaMD com IA é heurística, não um fato regulatório oficial.

## Licença

Apache-2.0.
