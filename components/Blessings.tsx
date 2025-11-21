import React from 'react';
import FeetSection from './FeetSection';

const Blessings: React.FC = () => {
  // use the kebab-case filename present in `public/Images` (case-sensitive on Vercel)
  const image = '/Images/feet-of-hh-radhanath-swamy.jpg';
  return (
    <section id="blessings" className="py-20 bg-gradient-to-b from-white to-saffron-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-stone-800">Blessings of Guru Maharaj</h2>
          <p className="text-stone-600 mt-2 max-w-2xl mx-auto">May the blessings of HH Radhanath Swami Maharaj rest upon all of us.</p>
        </div>

        <FeetSection image={image} alt="Feet of HH Radhanath Swami Maharaj" caption="Lotus feet of HH Radhanath Swami Maharaj" large={true} flowers={true} />
      </div>
    </section>
  );
};

export default Blessings;
