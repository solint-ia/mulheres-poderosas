'use client';

import { motion } from 'framer-motion';

export default function OrganizerSection() {
  return (
    <section
      className="w-full flex justify-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,8vw,100px)]"
      style={{ backgroundColor: '#123024' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="w-full max-w-[1140px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
      >
        {/* Lado Esquerdo: Realização (Maria Zélia) */}
        <div className="flex flex-col items-center text-center gap-5 p-6 sm:p-8 rounded-xl bg-[#1B4332]/40 border border-[#D4AF37]/30 shadow-md">
          <div className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-[#D4AF37]">
            Realização
          </div>
          <div className="p-4 px-6 bg-[#FDFBF7] rounded-lg shadow-md border border-[rgba(212,175,55,0.4)]">
            <img
              src="/assets/logo-organizer.png"
              alt="Maria Zélia Eventos e Representações"
              style={{ width: '170px', height: 'auto' }}
            />
          </div>
          <p className="text-[15px] leading-[1.75] text-[#FDFBF7] font-normal m-0">
            Idealizado pela Maria Zélia Eventos e Representações,
            com curadoria dedicada a conectar pessoas, negócios e propósito em experiências
            femininas de alto nível.
          </p>
        </div>

        {/* Lado Direito: Idealizadora (Mariane Rocha) + Logo do Projeto */}
        <div className="flex flex-col items-center text-center gap-5 p-6 sm:p-8 rounded-xl bg-[#1B4332]/40 border border-[#D4AF37]/30 shadow-md">
          <div className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-[#D4AF37]">
            Idealização & Visão
          </div>
          <div className="p-4 px-6 bg-[#FDFBF7] rounded-lg shadow-md border border-[rgba(212,175,55,0.4)]">
            <img
              src="/assets/logo-full.png"
              alt="Dia das Mulheres Poderosas"
              style={{ width: '170px', height: 'auto' }}
            />
          </div>
          <div>
            <h4
              className="m-0 mb-1 text-[22px] font-bold text-[#FDFBF7]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mariane Rocha
            </h4>
            <span
              className="text-[14px] font-semibold text-[#D4AF37] tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              Idealizadora do Dia das Mulheres Poderosas
            </span>
          </div>
          <p className="text-[15px] leading-[1.75] text-[#FDFBF7] font-normal m-0">
            Liderando com sensibilidade e foco no empoderamento feminino 360°, unindo empreendedorismo, saúde, tecnologia e estética em Aracaju.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
