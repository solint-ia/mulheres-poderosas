'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { SYMPLA_URL } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between gap-4 flex-wrap transition-shadow duration-300 px-[clamp(20px,5vw,56px)] py-[14px] ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        backgroundColor: 'rgba(253,251,247,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(139,30,63,0.12)',
      }}
    >
      <div className="flex items-center gap-[10px]">
        <img
          src="/assets/logo-icon.png"
          alt="Dia das Mulheres Poderosas"
          style={{ height: '38px', width: 'auto' }}
        />
        {!isMobile && (
          <span
            className="text-[14px] font-bold leading-[1.15] tracking-[0.02em]"
            style={{ fontFamily: "'Playfair Display', serif", color: '#6B1730' }}
          >
            Dia das<br />Mulheres Poderosas
          </span>
        )}
      </div>

      <nav className="flex items-center gap-[clamp(10px,2vw,28px)] flex-wrap">
        {[
          { label: 'Palestrantes', href: '#palestrantes' },
          { label: 'Programação', href: '#programacao' },
          { label: 'Ingressos', href: '#ingressos' },
          { label: 'FAQ', href: '#faq' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[13px] font-semibold transition-colors duration-200 hover:text-wine"
            style={{ color: '#3D1220' }}
          >
            {item.label}
          </a>
        ))}
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-[13px] font-bold tracking-[0.02em] px-5 py-[10px] rounded-sm transition-colors duration-200"
          style={{
            backgroundColor: '#8B1E3F',
            color: '#FDFBF7',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
        >
          Garantir Meu Ingresso
        </a>
      </nav>
    </header>
  );
}
