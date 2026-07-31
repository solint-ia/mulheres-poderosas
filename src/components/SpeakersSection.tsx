'use client';

import { motion } from 'framer-motion';
import { speakerGroups } from '@/lib/data';

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Dra\.|Dr)\s/i, '').split(' ');
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

function SpeakerCardHeader({ name, isSpecial = false }: { name: string; isSpecial?: boolean }) {
  return (
    <div
      className={`w-full aspect-[16/9] sm:aspect-[4/3] rounded-t-lg flex items-center justify-center text-[28px] font-bold shadow-inner mb-4 relative overflow-hidden ${
        isSpecial ? 'bg-[#6B1730]' : 'bg-[#E8D5CE]'
      }`}
      style={{
        borderBottom: isSpecial ? '3px solid #D4AF37' : '2px solid #D4AF37',
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(107,23,48,0.3)] to-transparent pointer-events-none" />
      {isSpecial && (
        <div className="absolute top-2 right-2 bg-[#D4AF37] text-[#3D1220] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md tracking-wider">
          Convidada Especial
        </div>
      )}
      <span
        className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-md ${
          isSpecial
            ? 'bg-[#FDFBF7] text-[#8B1E3F] border-[#D4AF37] text-[24px]'
            : 'bg-[#FDFBF7] text-[#8B1E3F] border-[#D4AF37] text-[22px]'
        }`}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}

export default function SpeakersSection() {
  return (
    <section
      id="palestrantes"
      className="flex flex-col gap-14 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)]"
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
          Palestrantes
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
          Quem vai estar com você
        </h2>
      </motion.div>

      {speakerGroups.map((group, gi) => {
        const isSpecialGroup = group.title.toLowerCase().includes('encerramento') || group.title.toLowerCase().includes('especial');
        
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="w-full max-w-[1080px] flex flex-col gap-[24px]"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] flex-1 bg-[rgba(139,30,63,0.15)] max-w-[120px]" />
              <h3
                className="m-0 text-center uppercase tracking-wider"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: isSpecialGroup ? 24 : 20,
                  color: isSpecialGroup ? '#8B1E3F' : '#6B1730',
                }}
              >
                {group.title}
              </h3>
              <div className="h-[1px] flex-1 bg-[rgba(139,30,63,0.15)] max-w-[120px]" />
            </div>

            {/* Layout adaptativo dos cards por grupo */}
            <div
              className={`w-full ${
                isSpecialGroup
                  ? 'flex justify-center'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch'
              }`}
            >
              {group.items.map((sp) => {
                const isMara = sp.name.toLowerCase().includes('mara maravilha');

                return (
                  <div
                    key={sp.id}
                    className={`flex flex-col items-center text-center rounded-xl border transition-all overflow-hidden ${
                      isMara
                        ? 'w-full max-w-[420px] bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-[1.02] ring-2 ring-[#D4AF37]/40'
                        : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-sm hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <SpeakerCardHeader name={sp.name} isSpecial={isMara} />
                    <div className="p-6 pt-1 flex flex-col items-center w-full flex-1 justify-between">
                      <div
                        className="mb-2"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: isMara ? 22 : 18,
                          color: isMara ? '#FDFBF7' : '#3D1220',
                        }}
                      >
                        {sp.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: 'italic',
                          fontSize: isMara ? 17 : 15,
                          lineHeight: 1.45,
                          color: isMara ? '#E8D5CE' : '#5C4A50',
                        }}
                      >
                        {sp.talk}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}

      <p className="text-[12px] text-center mt-2" style={{ color: '#8A7A80' }}>
        * Fotos dos palestrantes serão adicionadas quando disponíveis.
      </p>
    </section>
  );
}
