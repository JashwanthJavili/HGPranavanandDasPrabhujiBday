import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-serif italic text-lg text-saffron-400 mb-2">Hare Krishna Hare Krishna, Krishna Krishna Hare Hare</p>
        <p className="font-serif italic text-lg text-saffron-400 mb-6">Hare Rama Hare Rama, Rama Rama Hare Hare</p>

        {/* Small offering section (inserted above signature) */}
        <div className="max-w-3xl mx-auto bg-white/60 p-6 rounded-xl mb-6 shadow-md">
          <p className="text-stone-700 font-serif leading-relaxed">Prabhuji, this small website is all I am capable of at present. Whatever limited ability Krishna gave me, I offered here with full devotion. Kindly accept this small service at your lotus feet.</p>
        </div>

        <div className="border-t border-stone-800 pt-6 text-sm font-sans">
          <p>Dedicated to the service of HG Pranavananda Das Prabhuji.</p>
          <p className="mt-1 opacity-60">Developed with devotion by J Jashwanth.</p>
          <p className="mt-2 opacity-70 italic">If Krishna ever feels I am worthy, may He give me the blessing of serving you personally one day. Till then, I remain your aspiring dāsa, from a distance, with full sincerity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;