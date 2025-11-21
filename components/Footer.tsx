import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-serif italic text-lg text-saffron-400 mb-2">Hare Krishna Hare Krishna, Krishna Krishna Hare Hare</p>
        <p className="font-serif italic text-lg text-saffron-400 mb-6">Hare Rama Hare Rama, Rama Rama Hare Hare</p>
        
        <div className="border-t border-stone-800 pt-6 text-sm font-sans">
          <p>Dedicated to the service of HG Pranavananda Das Prabhuji.</p>
          <p className="mt-1 opacity-60">Developed with devotion by J Jashwanth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;