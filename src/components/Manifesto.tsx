'use client';

import { motion } from 'framer-motion';

function FloralOrn({ color = 'rgba(212,175,55,0.55)' }: { color?: string }) {
  const positions = [
    { left: 7, top: 0 }, { left: 13.5, top: 5 }, { left: 11, top: 12.5 },
    { left: 3, top: 12.5 }, { left: 0.5, top: 5 },
  ];
  return (
    <div className="relative w-5 h-5 flex-none">
      {positions.map((pos, i) => (
        <span key={i} className="absolute rounded-full w-[6px] h-[6px]" style={{ left: pos.left, top: pos.top, backgroundColor: color }} />
      ))}
      <span className="absolute rounded-full w-[6px] h-[6px]" style={{ left: 7, top: 7, backgroundColor: '#6B1730' }} />
    </div>
  );
}

export default function Manifesto() {
  return (
    <section
      className="flex items-center justify-center gap-7 flex-wrap px-[clamp(20px,6vw,72px)] py-[clamp(56px,8vw,96px)]"
      style={{ backgroundColor: '#E8D5CE' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FloralOrn />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-[680px] text-center m-0"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(22px,3vw,34px)',
          lineHeight: 1.5,
          color: '#6B1730',
        }}
      >
        &ldquo;Ser uma mulher poderosa não é carregar o mundo nas costas. É ter a liberdade de
        prosperar, cuidar de si e celebrar sua beleza única.&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <FloralOrn />
      </motion.div>
    </section>
  );
}
