# Dia das Mulheres Poderosas — Landing Page (Next.js)

## Visão Geral
Projeto de Landing Page refatorado para **Next.js 15 (App Router)** com **Tailwind CSS**, **Framer Motion** e **Lucide React**.

- **Evento**: Dia das Mulheres Poderosas / Empreendedorismo Feminino 360°
- **Data/Local**: 24 de Outubro de 2026, Delmar Hotel, Aracaju/SE
- **Organizadora**: Maria Zélia Eventos e Representações

## Como Rodar

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev -- --webpack
# ou
npm run dev

# Build de produção
npm run build -- --webpack
```

## Estrutura de Arquivos

- `src/app/` — Rotas App Router (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/` — Componentes modulares da landing page
- `src/lib/data.ts` — Dados e textos do evento
- `src/lib/constants.ts` — Links e constantes globais (ex: `SYMPLA_URL`)
- `public/assets/` — Logos e imagens de fundo oficiais
