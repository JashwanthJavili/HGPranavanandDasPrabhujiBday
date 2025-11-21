import React from 'react';
import { BIRTHDAY_GREETING, PRABHUJI_NAME, HERO_SUBTITLE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Simple gradient background (removed external background image to avoid errors) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-saffron-50/80" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block p-2 border-2 border-saffron-400 rounded-full animate-[spin_10s_linear_infinite]">
           {/* Decorative Ring */}
        </div>
        
        <div className="space-y-6 animate-[fadeIn_1.5s_ease-out]">
            <span className="block text-saffron-700 font-sans font-bold tracking-[0.2em] text-sm uppercase">
                Humble Offering of Service
            </span>
            <div className="max-w-3xl mx-auto">
              <p className="text-center italic text-lg md:text-xl text-stone-600 mb-2">“Make your heart so affluged with compassion, purity, and Krishna-bhakti that the whole world feels drawn to walk the path that leads to His lotus feet.”</p>
              <p className="text-center text-sm text-saffron-600 font-semibold">— HH Radhanath Swami Maharaj</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-800 leading-tight drop-shadow-sm">
                {BIRTHDAY_GREETING}
            </h1>
          {/* Flower particles animation placed just under the main title */}
          <FlowerParticles />
            <h2 className="font-serif italic text-2xl md:text-3xl text-stone-600 mt-4">
                {PRABHUJI_NAME}
            </h2>
            <p className="font-sans text-stone-500 max-w-2xl mx-auto mt-6 text-lg italic">
                "{HERO_SUBTITLE}"
            </p>
        </div>

        <div className="mt-8">
          <img
            src="/Images/prabhuju.png"
            alt="HG Pranavananda Das Prabhuji"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl mx-auto object-cover"
            loading="lazy"
          />
        </div>

        <a 
          href="#glorification" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-saffron-600"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

const FlowerParticles: React.FC = () => {
  const COUNT = 14;
  const flowers = React.useMemo(() => {
    return Array.from({ length: COUNT }).map(() => {
      const left = Math.random() * 100; // percent
      const delay = Math.random() * 6; // seconds
      const duration = 6 + Math.random() * 6; // 6-12s
      const size = 18 + Math.random() * 28; // px
      const rotate = Math.random() * 360;
      return { left, delay, duration, size, rotate };
    });
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <style>{`
        @keyframes prabhu-flower-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0.95; }
        }
      `}</style>
      {flowers.map((f, i) => (
        <span
          key={i}
          style={{
            left: `${f.left}%`,
            top: `-6vh`,
            fontSize: f.size,
            transform: `rotate(${f.rotate}deg)`,
            animation: `prabhu-flower-fall ${f.duration}s linear ${f.delay}s infinite`
          }}
          className="absolute text-[24px] md:text-[28px]"
        >
          🌺
        </span>
      ))}
    </div>
  );
};

export default Hero;