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
          <h2 className="font-display text-3xl md:text-4xl text-stone-800">Blessings of Guru Maharaj</h2>
          <p className="text-stone-600 mt-2 max-w-2xl mx-auto">May the blessings of HH Radhanath Swami Maharaj rest upon all of us.</p>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="italic font-serif text-stone-600">“Under the gentle blessings of Guru Maharaj, may our hearts blossom in devotion.”</p>
          </div>
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
        {/* If the preferred file name isn't present on the server (production is case-sensitive),
            the hidden probe image will trigger onError and set the fallback. */}
      </div>
    </section>
  );
};

export default Blessings;
