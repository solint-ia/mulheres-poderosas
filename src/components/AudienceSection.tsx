'use client';

import { motion } from 'framer-motion';
import { audienceCards } from '@/lib/data';

export default function AudienceSection() {
  return (
    <section
      className="flex flex-col gap-11 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)]"
      style={{ backgroundColor: '#F7F1E8' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[640px]"
      >
        <div className="text-[12px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: '#D4AF37' }}>
          Para quem é
        </div>
        <h2
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(26px,3.4vw,40px)',
            color: '#3D1220',
          }}
        >
          Esse dia foi pensado para você, que...
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-x-10 w-full max-w-[1000px]">
        {audienceCards.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="pl-[18px]"
            style={{ borderLeft: '2px solid #D4AF37' }}
          >
            <p className="text-[16px] leading-[1.6] m-0" style={{ color: '#3D1220' }}>
              {text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center max-w-[560px] mt-2 m-0"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 'clamp(19px,2.2vw,24px)',
          color: '#8B1E3F',
        }}
      >
        Se você se reconheceu em pelo menos uma frase, esse Dia das Mulheres Poderosas é seu.
      </motion.p>
    </section>
  );
}
