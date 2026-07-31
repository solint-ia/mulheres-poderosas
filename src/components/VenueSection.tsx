'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SYMPLA_URL } from '@/lib/constants';

export default function VenueSection() {
  return (
    <section
      className="flex flex-col gap-9 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)]"
      style={{
        backgroundColor: '#FDFBF7',
        backgroundImage: 'url(/assets/pattern-floral-bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[640px]"
      >
        <div className="text-[12px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: '#D4AF37' }}>
          Data e local
        </div>
        <h2
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(26px,3.4vw,38px)',
            color: '#3D1220',
          }}
        >
          24 de Outubro de 2026 · Delmar Hotel, Aracaju/SE
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[820px] rounded-[4px] flex items-center justify-center"
        style={{
          aspectRatio: '16/9',
          background: 'linear-gradient(135deg, #F7F1E8 0%, #E8D5CE 50%, #F7F1E8 100%)',
          border: '1px solid rgba(212,175,55,0.3)',
        }}
      >
        <div className="text-center">
          <div className="text-[13px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: '#D4AF37' }}>
            Foto do Delmar Hotel
          </div>
          <div className="text-[12px]" style={{ color: '#8A7A80' }}>
            Imagem a ser adicionada
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[14px] text-center m-0"
        style={{ color: '#5C4A50' }}
      >
        [ENDEREÇO COMPLETO] — mais detalhes de acesso e hospedagem em breve.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14.5px] font-bold px-[34px] py-4 transition-colors duration-200"
          style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7', borderRadius: 2 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
        >
          Garantir Meu Ingresso
        </a>
      </motion.div>
    </section>
  );
}
