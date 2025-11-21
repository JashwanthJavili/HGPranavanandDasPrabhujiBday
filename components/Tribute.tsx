import React from 'react';
import { TRIBUTE_TEXT } from '../constants';
import { HeartHandshake } from 'lucide-react';

const Tribute: React.FC = () => {
  // Rotating images for the Birthday Offering (topmost visual)
  const images = [
    '/Images/pranavanand-with-radhanath-1.jpg',
    '/Images/prabhuji-taking-dress.png',
    '/Images/prabhuji-with-radhanath.png'
  ];

  const [index, setIndex] = React.useState(0);

  const SPECIAL_TEXT = `On this special Krishna Consciousness Birthday, Prabhuji, we bow our heads at your lotus feet.
Only because of your mercy, more than a hundred thousand hearts have received the light of knowledge and the path to Krishna.
We remain your humble dāsas in this life, and if Krishna allows, eternally at your lotus feet.`;

  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, []);

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

        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-saffron-200">
          <div className="relative h-72 md:h-96 bg-black/5 flex items-center justify-center">
            <img src={images[index]} alt="Birthday Offering" className="max-h-full max-w-full object-contain" />
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