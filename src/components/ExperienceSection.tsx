'use client';

import { motion } from 'framer-motion';
import { experienceCards } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <section
      className="flex flex-col gap-11 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)]"
      style={{
        backgroundColor: '#FDFBF7',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[680px]"
      >
        <div className="text-[12px] font-bold tracking-[0.16em] uppercase mb-2 text-[#D4AF37]">
          O que você vai viver
        </div>
        <h2
          className="m-0 mb-4 leading-[1.25]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(28px,4vw,48px)',
            color: '#3D1220',
          }}
        >
          É um dia inteiro de conteúdo rico, vivência e conexão
        </h2>
        <p
          className="m-0 text-[clamp(17px,2vw,22px)] leading-[1.6] font-medium"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#8B1E3F',
          }}
        >
          Pensado para ser sentido, não só assistido. Mais do que uma maratona de palestras, uma experiência de transformação.
        </p>
      </motion.div>

      {/* Grid harmonioso de 5 cards com tamanhos equilibrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px] justify-center items-stretch">
        {experienceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`rounded-lg p-7 border border-[rgba(212,175,55,0.25)] flex flex-col justify-start transition-all hover:shadow-md hover:-translate-y-0.5 ${
              i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
            style={{
              backgroundColor: '#F7F1E8',
            }}
          >
            <h3
              className="m-0 mb-2.5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 20,
                color: '#3D1220',
              }}
            >
              {card.title}
            </h3>
            <p
              className="m-0 leading-[1.65] text-[14px]"
              style={{
                color: '#5C4A50',
              }}
            >
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
