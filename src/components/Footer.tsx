import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-7 items-center text-center pb-24 md:pb-8 px-[clamp(20px,6vw,72px)] pt-[clamp(40px,6vw,64px)]"
      style={{
        backgroundColor: '#F7F1E8',
        borderTop: '1px solid #D4AF37',
      }}
    >
      <div className="flex items-center gap-6 flex-wrap justify-center">
        <img
          src="/assets/logo-full.png"
          alt="Dia das Mulheres Poderosas"
          style={{ height: '70px', width: 'auto' }}
        />
        <div style={{ width: '1px', height: '44px', backgroundColor: 'rgba(61,18,32,0.15)' }} />
        <img
          src="/assets/logo-organizer.png"
          alt="Maria Zélia Eventos e Representações"
          style={{ height: '56px', width: 'auto' }}
        />
      </div>

      <nav className="flex gap-6 flex-wrap justify-center">
        {[
          { label: 'Palestrantes', href: '#palestrantes' },
          { label: 'Programação', href: '#programacao' },
          { label: 'Ingressos', href: '#ingressos' },
          { label: 'FAQ', href: '#faq' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[13px] font-semibold transition-colors duration-200 hover:text-[#8B1E3F]"
            style={{ color: '#3D1220' }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <p className="text-[13px] m-0" style={{ color: '#5C4A50' }}>
        Dia das Mulheres Poderosas · 24 de Outubro de 2026 · Delmar Hotel, Aracaju/SE
      </p>

      <p className="text-[12px] m-0" style={{ color: '#8A7A80' }}>
        © 2026 Maria Zélia Eventos e Representações. Todos os direitos reservados.
      </p>
    </footer>
  );
}
