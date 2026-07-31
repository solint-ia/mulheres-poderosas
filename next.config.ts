import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack requer bindings nativos que são bloqueados pela política de Controle de Aplicativo
  // neste ambiente. Usando Webpack como bundler de build.
  // Para dev com hot-reload rápido, rodar: npm run dev (usa Turbopack por padrão no next dev)
};

export default nextConfig;
