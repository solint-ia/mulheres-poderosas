'use client';

import { motion } from 'framer-motion';
import { pillars } from '@/lib/data';

export default function Pillars() {
  return (
    <section
      id="pilares"
      className="flex flex-col gap-10 items-center px-[clamp(20px,6vw,72px)] py-[clamp(40px,5vw,72px)]"
      style={{
        backgroundColor: '#FDFBF7',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[640px]"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            O que sustenta esse dia
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
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
          Quatro pilares, uma só transformação
        </h2>
      </motion.div>

      {/* Design editorial contemporâneo com numeração orgânica e linhas verticais sutis */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-[1140px] mt-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex flex-col justify-between p-6 rounded-lg border-l-2 border-[#D4AF37] bg-gradient-to-b from-[#F7F1E8]/50 to-transparent hover:bg-[#F7F1E8]/80 transition-all hover:pl-7"
          >
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#8B1E3F]">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#D4AF37]/80">
                  Pilar
                </span>
              </div>
              <h3
                className="m-0 mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 24,
                  color: '#3D1220',
                }}
              >
                {pillar.label}
              </h3>
              <p className="text-[14px] leading-[1.65] m-0 text-[#5C4A50]">
                {pillar.desc}
              </p>
            </div>
            <div className="w-8 h-[2px] mt-6 bg-[#D4AF37]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
