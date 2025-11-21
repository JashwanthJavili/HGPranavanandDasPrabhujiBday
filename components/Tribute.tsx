import React from 'react';
import { TRIBUTE_TEXT } from '../constants';
import { HeartHandshake } from 'lucide-react';

const Tribute: React.FC = () => {
  // Single hero image for the Birthday Offering
  const heroImage = '/Images/pranavanand-with-radhanath-hero.jpg';

  const SPECIAL_TEXT = `On this special Krishna Consciousness Birthday, Prabhuji, we bow our heads at your lotus feet.
Only because of your mercy, more than a hundred thousand hearts have received the light of knowledge and the path to Krishna.
We remain your humble dāsas in this life, and if Krishna allows, eternally at your lotus feet.`;

  // no rotation needed — single hero image

  return (
    <section id="tribute" className="py-12 bg-gradient-to-b from-saffron-50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-white rounded-full shadow-md mb-4">
            <HeartHandshake className="h-8 w-8 text-saffron-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-stone-800">Birthday Offering</h2>
          <p className="font-sans text-saffron-600 mt-2 uppercase tracking-widest text-sm">From a Small Dāsa who is craving for your association</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-saffron-300">
          <div className="relative h-80 md:h-[520px] bg-black/5 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={heroImage} alt="Birthday Offering" className="max-h-[92%] max-w-[92%] object-cover rounded-xl border-8 border-white shadow-2xl" />
              <div className="absolute inset-0 pointer-events-none">
                <TributeFlowers />
              </div>
            </div>
          </div>

          <div className="p-8 bg-white/80">
            <div className="mb-6">
              <div className="max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-white border-2 border-saffron-200 shadow-lg">
                <p className="text-center text-xl md:text-2xl font-serif font-semibold text-saffron-700 leading-relaxed">{SPECIAL_TEXT}</p>
              </div>
            </div>
            <div className="mt-6 font-serif text-stone-700 whitespace-pre-line">{TRIBUTE_TEXT}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tribute;

const TributeFlowers: React.FC = () => {
  const COUNT = 20;
  const flowers = React.useMemo(() => {
    const types = ['🌸','🌺','🌼','💐','🌷'];
    return Array.from({ length: COUNT }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 8,
      size: 14 + Math.random() * 32,
      char: types[Math.floor(Math.random() * types.length)],
      rotate: Math.random() * 360
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
      <style>{`
        @keyframes tribute-flower-fall {
          0% { transform: translateY(-8vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translateY(120vh) rotate(360deg); opacity: 0.95; }
        }
      `}</style>
      {flowers.map((f, i) => (
        <span
          key={i}
          style={{ left: `${f.left}%`, top: '-6vh', fontSize: f.size, transform: `rotate(${f.rotate}deg)`, animation: `tribute-flower-fall ${f.duration}s linear ${f.delay}s infinite` }}
          className="absolute"
        >
          {f.char}
        </span>
      ))}
    </div>
  );
};