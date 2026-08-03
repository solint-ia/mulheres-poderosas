import { SYMPLA_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-8 items-center text-center pb-24 md:pb-12 px-[clamp(20px,6vw,72px)] pt-[clamp(40px,5vw,64px)] overflow-hidden"
      style={{
        backgroundColor: '#F7F1E8',
        borderTop: '1.5px solid #D4AF37',
      }}
    >
      {/* Logos Container */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap max-w-full px-4">
        <img
          src="/assets/logo-full.png"
          alt="Dia das Mulheres Poderosas Logo"
          className="flex-none object-contain transition-transform duration-200 hover:scale-105"
          style={{ height: '68px', width: 'auto', maxHeight: '68px' }}
        />
        <div className="hidden sm:block w-[1.5px] h-10 bg-[#3D1220]/20" />
        <img
          src="/assets/logo-organizer.png"
          alt="Maria Zélia Eventos e Representações"
          className="flex-none object-contain transition-transform duration-200 hover:scale-105"
          style={{ height: '52px', width: 'auto', maxHeight: '52px' }}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 sm:gap-8 flex-wrap justify-center my-1" aria-label="Navegação do rodapé">
        {[
          { label: 'Palestrantes', href: '#palestrantes' },
          { label: 'Programação', href: '#programacao' },
          { label: 'Ingressos', href: '#ingressos' },
          { label: 'FAQ', href: '#faq' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[14px] font-semibold transition-colors duration-200 hover:text-[#8B1E3F]"
            style={{ color: '#3D1220' }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Info & Copyright */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[13.5px] font-medium m-0" style={{ color: '#5C4A50' }}>
          Dia das Mulheres Poderosas · 24 de Outubro de 2026 · Delmar Hotel, Aracaju/SE
        </p>

        <p className="text-[12px] m-0" style={{ color: '#8A7A80' }}>
          © 2026 Maria Zélia Eventos e Representações. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
