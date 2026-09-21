// Constantes de link e marca, centralizadas.
// NOTA: o repo anvisa-mcp existe, mas e PRIVADO. Enquanto estiver privado, este
// link vai 404 para visitantes deslogados/sem acesso. Tornar publico ou ajustar
// aqui se o slug/dono mudar.
export const GITHUB_URL = "https://github.com/fabianofilho/anvisa-mcp";
export const IAMED_URL = "https://iamed.cc";
export const LICENSE = "MIT";
export const PROJECT = "anvisa-mcp";

// Familia de MCPs open source da IA.med. SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "anvisa";
export const FAMILY = [
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://mcp.iamed.cc/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://mcp.iamed.cc/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://mcp.iamed.cc/pcdt", desc: "PCDTs do Ministério da Saúde" },
];
