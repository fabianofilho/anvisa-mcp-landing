# anvisa-mcp-landing

Landing page do [`anvisa-mcp`](https://github.com/fabianofilho/anvisa-mcp), um
servidor MCP para consulta regulatória da Anvisa conectável a modelos de
linguagem locais. Um projeto [IA.med](https://iamed.cc).

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

A página abre em `http://localhost:4321/anvisa` (o `base` é `/anvisa`).

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build localmente
```

## Deploy

Destino pretendido: `https://mcp.iamed.cc/anvisa` (`site` + `base` já
configurados em `astro.config.mjs`). O deploy na Vercel e o apontamento do
domínio são feitos manualmente no painel; nada é publicado automaticamente por
este repositório.

## Notas

- O repositório do projeto `anvisa-mcp` é público, então os links de GitHub funcionam.
- Os exemplos de retorno das ferramentas na página são ilustrativos; o esquema
  final segue a implementação do `anvisa-mcp`.
- A classificação de SaMD com IA é heurística, não um fato regulatório oficial.

## Licença

Apache-2.0.
