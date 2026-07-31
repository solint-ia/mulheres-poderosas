'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { shift0Rows, shift1Rows } from '@/lib/data';

export default function ScheduleSection() {
  const [activeShift, setActiveShift] = useState(0);
  const rows = activeShift === 0 ? shift0Rows : shift1Rows;

  const tabBase =
    'px-8 py-3.5 text-[13px] font-bold tracking-[0.06em] uppercase cursor-pointer border-none transition-all duration-200';

  return (
    <section
      id="programacao"
      className="flex flex-col gap-10 items-center px-[clamp(20px,6vw,72px)] py-[clamp(56px,7vw,96px)]"
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
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            Cronograma Oficial
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
        </div>
        <h2
          className="m-0 mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(28px,3.6vw,44px)',
            color: '#3D1220',
          }}
        >
          24 de outubro · 2 turnos
        </h2>
        <div className="inline-block px-5 py-2 rounded-full text-[13.5px] font-bold bg-[#E8D5CE] text-[#6B1730] shadow-sm">
          Imersão completa com duração total de 8 horas de conteúdo rico e experiência
        </div>
      </motion.div>

      {/* Selector de Turnos (Tabs Sofisticadas) */}
      <div
        className="flex overflow-hidden shadow-md bg-white p-1 rounded-full border border-[rgba(139,30,63,0.2)]"
      >
        {[
          { label: 'Primeiro Turno · 09:00 – 12:10', idx: 0 },
          { label: 'Segundo Turno · 13:50 – 18:30', idx: 1 },
        ].map(({ label, idx }) => (
          <button
            key={idx}
            className={`${tabBase} rounded-full`}
            style={{
              backgroundColor: activeShift === idx ? '#8B1E3F' : 'transparent',
              color: activeShift === idx ? '#FDFBF7' : '#8B1E3F',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onClick={() => setActiveShift(idx)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timeline Aberta, Moderna e Chamativa (sem estar encapsulada em card fechado) */}
      <div className="w-full max-w-[800px] mt-4 px-4">
        <motion.div
          key={activeShift}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col gap-6 pl-8 sm:pl-12"
        >
          {/* Linha vertical condutora com gradiente dourado */}
          <div
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-[3px] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #D4AF37 0%, #8B1E3F 100%)',
            }}
          />

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 p-4 rounded-xl hover:bg-[#F7F1E8]/70 transition-all border border-transparent hover:border-[#D4AF37]/30"
            >
              {/* Ponto reluzente na linha do tempo */}
              <span
                className="absolute -left-[27px] sm:-left-[39px] top-6 w-4 h-4 rounded-full shadow-md flex items-center justify-center ring-4 ring-[#FDFBF7]"
                style={{ backgroundColor: '#D4AF37' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D1220]" />
              </span>

              {/* Horário em Destaque */}
              <div
                className="text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#8B1E3F] min-w-[130px] flex-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {row.time}
              </div>

              {/* Palestrantes / Atividades */}
              <div
                className="text-[17px] font-semibold leading-[1.6] text-[#3D1220]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {row.speakers}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
