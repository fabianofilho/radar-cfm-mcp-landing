# radar-cfm-mcp-landing

Landing page do [`radar-cfm-mcp`](https://github.com/fabianofilho/radar-cfm-mcp),
um servidor MCP que consulta e monitora resoluções do CFM sobre IA em medicina,
telemedicina e prontuário eletrônico, conectável a modelos de linguagem locais.
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

Abre em `http://localhost:4321/radar-cfm` (o `base` é `/radar-cfm`).

## Build

```bash
npm run build     # gera dist/
npm run preview
```

## Deploy

Destino pretendido: `https://mcp.iamed.cc/radar-cfm` (`site` + `base` em
`astro.config.mjs`). O deploy na Vercel e o domínio são configurados manualmente;
nada é publicado automaticamente por este repositório.

## Notas

- O repositório do projeto `radar-cfm-mcp` é público, então os links de GitHub funcionam.
- Os valores nos exemplos de retorno são ilustrativos; os campos são os do
  projeto (schema `ResolucaoCFM`). Toda resposta real traz a URL de origem.
- Não é fonte oficial do CFM e não substitui a leitura da resolução original.

## Licença

Apache-2.0.
