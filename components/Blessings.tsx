import React from 'react';
import FeetSection from './FeetSection';

const Blessings: React.FC = () => {
  // use the kebab-case filename present in `public/Images` (case-sensitive on Vercel)
  const preferred = '/Images/FeetOfHHRadhanathSwamyMaharaj.jpg';
  const fallback = '/Images/feet-of-hh-radhanath-swamy.jpg';
  const [src, setSrc] = React.useState(preferred);
  return (
    <section id="blessings" className="py-20 bg-gradient-to-b from-white to-saffron-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-200 to-transparent opacity-40 blur-3xl" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-stone-800 relative z-10">Blessings of Guru Maharaj</h2>
          <p className="text-stone-600 mt-2 max-w-2xl mx-auto relative z-10">May the blessings of HH Radhanath Swami Maharaj rest upon all of us.</p>
        </div>

        {/* Probe the preferred filename; if it 404s we fall back to the kebab-case file */}
        <img src={preferred} style={{ display: 'none' }} onError={() => setSrc(fallback)} onLoad={() => setSrc(preferred)} />
        <FeetSection
          image={src}
          alt="Feet of HH Radhanath Swami Maharaj"
          caption="Lotus feet of HH Radhanath Swami Maharaj"
          large={true}
          flowers={true}
        />
      </div>
    </section>
  );
};

export default Blessings;
