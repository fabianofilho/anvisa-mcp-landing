// Constantes de link e marca, centralizadas.
// O repo anvisa-mcp e publico. Ajuste aqui se o slug/dono mudar.
export const GITHUB_URL = "https://github.com/fabianofilho/anvisa-mcp";
export const IAMED_URL = "https://iamed.cc";
export const LICENSE = "Apache-2.0";
export const PROJECT = "anvisa-mcp";

// Conector hospedado oficial (Tailscale Funnel, sem garantia de uptime).
export const CONNECTOR_URL = "https://debian-f.tailf42a96.ts.net/anvisa/mcp";

// Familia de MCPs da IA.med (5 de 7 sao open source; ans e raciocinio-br sao privados). SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "anvisa";
export const FAMILY = [
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://iamed.cc/mcps/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://iamed.cc/mcps/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://iamed.cc/mcps/pcdt", desc: "PCDTs do Ministério da Saúde" },
  { slug: "ans", nome: "ans-mcp", url: "https://iamed.cc/mcps/ans", desc: "TUSS e operadoras da ANS" },
  { slug: "raciocinio-br", nome: "raciocinio-br-mcp", url: "https://iamed.cc/mcps/raciocinio-br", desc: "Raciocínio clínico avaliado (experimento)" },
  { slug: "revisor-notas", nome: "revisor-notas-mcp", url: "https://iamed.cc/mcps/revisor-notas", desc: "Revisão de notas SOAP" },
  { slug: "radar-papers", nome: "radar-papers-mcp", url: "https://iamed.cc/mcps/radar-papers", desc: "Monitor de PubMed e medRxiv" },
];
