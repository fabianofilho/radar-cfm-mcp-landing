# radar-cfm-mcp-landing

Landing page do [`radar-cfm-mcp`](https://github.com/fabianofilho/radar-cfm-mcp),
um servidor MCP que consulta e monitora resoluções do CFM sobre IA em medicina,
telemedicina e prontuário eletrônico. Pode ser usado pelo conector hospedado
(`https://mcp.tailf42a96.ts.net/cfm/mcp`, sem garantia de disponibilidade) ou
instalado localmente.
Um projeto [IA.med](https://iamed.cc), da mesma família do `anvisa-mcp` e do
`protocolos-pcdt-mcp`.

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time)
- JavaScript mínimo (apenas o botão de copiar código)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/mcps/radar-cfm` (o `base` é `/mcps/radar-cfm`).

## Build

```bash
npm run build     # gera dist/
npm run preview
```

## Deploy

Publicada em `https://iamed.cc/mcps/radar-cfm` (`site` + `base` em
`astro.config.mjs`). Este repositório não publica nada sozinho: não há projeto na
Vercel ligado a ele nem GitHub Pages. O `dist/` do build é copiado para
`mcps/radar-cfm/` do repositório do site
([Medicina-IA/medicina-ia.github.io](https://github.com/Medicina-IA/medicina-ia.github.io)),
e é o deploy desse repositório na Vercel que serve o `iamed.cc`.

```bash
npm run build
rm -rf ../medicina-ia.github.io/mcps/radar-cfm
cp -r dist ../medicina-ia.github.io/mcps/radar-cfm
```

## Notas

- O repositório do projeto `radar-cfm-mcp` é público, então os links de GitHub funcionam.
- Os valores nos exemplos de retorno são ilustrativos; os campos e as assinaturas
  são os do projeto na v0.1.0 (`ResolucaoCFM`, `RespostaConsulta`,
  `RespostaMonitoramento`). Toda resposta real traz a URL de origem.
- Não é fonte oficial do CFM e não substitui a leitura da resolução original.

## Licença

Apache-2.0.
