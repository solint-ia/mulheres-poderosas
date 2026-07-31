'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InvestmentSection() {
  return (
    <section
      className="relative flex justify-center overflow-hidden px-[clamp(20px,6vw,72px)] py-[clamp(32px,5vw,60px)]"
      style={{ backgroundColor: '#6B1730' }}
    >
      <Image
        src="/assets/logo-icon.png"
        alt=""
        width={340}
        height={340}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[340px] h-auto opacity-[0.06] pointer-events-none select-none"
        aria-hidden
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-[760px] text-center m-0"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(22px,3vw,32px)',
          lineHeight: 1.55,
          color: '#FDFBF7',
        }}
      >
        Você não está apenas comprando um ingresso. Está escolhendo reservar um dia para investir
        em você, nas suas ideias, nas suas conexões e no próximo capítulo da sua história.
      </motion.p>
    </section>
  );
}
