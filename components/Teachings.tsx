import React from 'react';
import { TEACHINGS } from '../constants';
import { Quote, Feather } from 'lucide-react';

const Teachings: React.FC = () => {
  return (
    <section id="teachings" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-left md:max-w-2xl">
            <div className="inline-flex items-center p-2 bg-stone-800 rounded-full border border-stone-700 mb-4">
              <Feather className="h-6 w-6 text-saffron-400" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-saffron-50">Guru's Teachings</h2>
            <p className="font-sans text-stone-400 mt-4 max-w-2xl">
              Jewels of wisdom from Prabhuji's lectures, guiding us on the path of devotion.
            </p>
            <div className="mt-6 max-w-3xl bg-stone-800/60 border border-stone-700 rounded-xl p-6">
              <p className="text-left italic text-lg md:text-xl text-yellow-100 mb-2">“Make your heart so affluged with compassion, purity, and Krishna-bhakti that the whole world feels drawn to walk the path that leads to His lotus feet.”</p>
              <p className="text-left text-sm text-saffron-300 font-semibold">— HH Radhanath Swami Maharaj</p>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:ml-8">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/Images/hg-pranavanand-1.jpg" alt="HG Pranavanand Das" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {TEACHINGS.map((teaching, index) => (
            <div key={index} className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-xl border border-stone-700 hover:border-saffron-500/50 transition-all duration-300 group relative flex flex-col">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-stone-700 group-hover:text-saffron-500/20 transition-colors" />
              
              <h3 className="font-display text-xl text-saffron-300 mb-4">{teaching.title}</h3>
              <p className="font-serif text-lg text-stone-200 italic leading-relaxed mb-6 whitespace-pre-line">
                "{teaching.quote}"
              </p>
              
              <div className="flex items-center mt-auto pt-4">
                <div className="h-px flex-grow bg-stone-700 group-hover:bg-saffron-500/30 transition-colors"></div>
                <span className="pl-4 text-xs font-sans uppercase tracking-widest text-stone-500">
                  {teaching.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm italic">
                "One moment's association with a pure devotee can yield the greatest perfection."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Teachings;