import React from 'react';
import { GLORIFICATION_PRABHUJI, GLORIFICATION_RADHANATH_SWAMI } from '../constants';
import { Sparkles, Flower } from 'lucide-react';

const Glorification: React.FC = () => {
  return (
    <section id="glorification" className="py-24 bg-stone-50 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 z-0 opacity-5" style={{
         backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'
       }}></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
                <Sparkles className="h-6 w-6 text-saffron-500" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-stone-800">Divine Inspirations</h2>
            <p className="font-sans text-stone-500 mt-4 max-w-2xl mx-auto uppercase tracking-widest text-xs">Glorification of Exalted Vaishnavas</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Radhanath Swami Glorification */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-t-4 border-saffron-400 hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('/Images/radhanath-swamy.svg')`, backgroundPosition: 'center 35%' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-saffron-200">
                         <img src="/Images/radhanath-swamy.svg" alt="HH Radhanath Swami" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                        <h3 className="font-display text-xl md:text-2xl text-white">HH Radhanath Swami Maharaj</h3>
                        <p className="text-yellow-300 font-serif italic text-sm">Embodiment of Compassion</p>
                    </div>
                </div>
                <div className="font-serif text-white leading-relaxed space-y-4 whitespace-pre-line text-lg">
                  {GLORIFICATION_RADHANATH_SWAMI}
                </div>
                  <Flower className="absolute bottom-6 right-6 h-12 w-12 text-saffron-100 rotate-12" />
                 </div>
              </div>

            {/* Pranavananda Prabhu Glorification */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-t-4 border-orange-400 hover:shadow-2xl transition-shadow duration-300">
               <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('/Images/hg-pranavanand-1.svg')`, backgroundPosition: 'center 40%' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-orange-200">
                         <img src="/Images/hg-pranavanand-1.svg" alt="HG Pranavananda Das" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                     <div>
                        <h3 className="font-display text-xl md:text-2xl text-white">HG Pranavananda Das Prabhu</h3>
                        <p className="text-yellow-300 font-serif italic text-sm">A Lamp of Knowledge</p>
                    </div>
                </div>
                 <div className="font-serif text-white leading-relaxed space-y-4 whitespace-pre-line text-lg">
                  {GLORIFICATION_PRABHUJI}
                </div>
                <Flower className="absolute bottom-6 right-6 h-12 w-12 text-orange-100 rotate-12 z-20" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Glorification;