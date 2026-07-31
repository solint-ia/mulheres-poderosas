'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { SYMPLA_URL } from '@/lib/constants';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
};

function FloralOrn() {
  return (
    <div className="relative w-5 h-5 flex-none">
      {[
        { left: 7, top: 0 }, { left: 13.5, top: 5 }, { left: 11, top: 12.5 },
        { left: 3, top: 12.5 }, { left: 0.5, top: 5 },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute rounded-full w-[6px] h-[6px]"
          style={{ left: pos.left, top: pos.top, backgroundColor: '#E8D5CE' }}
        />
      ))}
      <span
        className="absolute rounded-full w-[6px] h-[6px]"
        style={{ left: 7, top: 7, backgroundColor: '#D4AF37' }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center text-center gap-6 px-[clamp(20px,6vw,72px)] py-[clamp(56px,9vw,110px)]"
      style={{
        backgroundColor: '#FDFBF7',
        backgroundImage: 'url(/assets/pattern-floral-bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="inline-flex items-center gap-[10px] px-[22px] py-[10px] rounded-full text-[12px] font-bold tracking-[0.12em] uppercase"
        style={{
          border: '1px solid rgba(212,175,55,0.55)',
          backgroundColor: '#FFFFFF',
          color: '#8B1E3F',
        }}
      >
        <span className="w-[6px] h-[6px] rounded-full flex-none" style={{ backgroundColor: '#D4AF37' }} />
        24 de Outubro de 2026 · Delmar Hotel · Aracaju/SE
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
        <img
          src="/assets/logo-full.png"
          alt="Empreendedorismo Feminino 360°"
          style={{ width: 'min(360px, 65vw)', height: 'auto', margin: '10px 0' }}
        />
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="max-w-[880px] m-0"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: 'clamp(30px,4.6vw,56px)',
          lineHeight: 1.14,
          color: '#3D1220',
        }}
      >
        Sua jornada empreendedora não precisa custar a sua saúde, beleza e equilíbrio.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="max-w-[660px] m-0"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(19px,2.1vw,25px)',
          color: '#8B1E3F',
          lineHeight: 1.4,
        }}
      >
        O encontro 360° que reconecta Negócios, Saúde, Tecnologia, Estética e Liderança Feminina.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="flex gap-4 flex-wrap justify-center mt-2"
      >
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-bold tracking-[0.02em] px-9 py-[18px] transition-colors duration-200"
          style={{
            backgroundColor: '#8B1E3F',
            color: '#FDFBF7',
            borderRadius: '2px',
            boxShadow: '0 12px 24px -8px rgba(139,30,63,0.45)',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
        >
          Garantir Meu Ingresso
        </a>
        <a
          href="#pilares"
          className="text-[15px] font-semibold px-8 py-[18px] transition-all duration-200"
          style={{
            border: '1px solid rgba(61,18,32,0.3)',
            color: '#3D1220',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = '#8B1E3F';
            el.style.color = '#8B1E3F';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(61,18,32,0.3)';
            el.style.color = '#3D1220';
          }}
        >
          Conhecer o Evento
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="relative mt-4"
        style={{ width: 'min(300px,60vw)', height: 1, backgroundImage: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloralOrn />
        </div>
      </motion.div>
    </section>
  );
}
