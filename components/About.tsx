import React from 'react';
import { SCHEDULE_ITEMS, WEEKLY_ACTIVITIES, PRABHUJI_TITLE } from '../constants';
import { Clock, Sun, Heart, HandPlatter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-saffron-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-saffron-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
           {/* Left Column: Bio */}
          <div className="space-y-8 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 text-saffron-600 bg-saffron-50 px-4 py-2 rounded-full border border-saffron-100">
              <Sun className="h-5 w-5" />
              <span className="font-bold tracking-widest uppercase text-xs">About Prabhuji</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight">
              {PRABHUJI_TITLE}
            </h2>
            <div className="font-sans text-stone-600 text-lg space-y-6 leading-relaxed">
                <p>
                    HG Pranavananda Das Prabhuji stands as a shining exemplar of Srila Prabhupada's vision: a dedicated brahmachari and monk in ISKCON, wholly surrendered to disseminating the eternal wisdom of the Bhagavad Gita.
                </p>
                <p>
                    As the esteemed President of ISKCON Adilabad, Prabhuji has provided exemplary leadership. He serves at ISKCON centers like those in Abids and Adilabad, but his ministry transcends geography through digital platforms, transforming countless lives.
                </p>
            </div>
            <div className="bg-white p-6 rounded-l border-l-4 border-saffron-500 shadow-sm">
                <p className="italic text-stone-600 font-serif text-lg">
                "Prabhuji's life is a living testament to the Bhagavatam's call to awaken dormant love for Krishna in every soul."
                </p>
            </div>
          </div>

              {/* Right Column: Portrait image of HG Pranavanand Das Prabhu (replaces Daily Sadhana card) */}
              <div id="schedule" className="relative z-10 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-stone-100 w-full max-w-sm">
                  <div className="w-full h-[420px] overflow-hidden rounded-lg">
                    <img src="/Images/hg-pranavanand-1.jpg" alt="HG Pranavanand Das Prabhu" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-center text-sm text-stone-500 mt-3">HG Pranavanand Das Prabhu</p>
                </div>
              </div>
        </div>

        {/* Weekly Outreach Section */}
        <div className="relative z-10">
            <div className="text-center mb-12">
                <h3 className="font-display text-3xl text-stone-800">Outreach & Service Activities</h3>
                <p className="text-stone-500 mt-2 max-w-2xl mx-auto">Prabhuji's holistic approach combines spiritual education, community service, and youth engagement.</p>
                <div className="h-1 w-20 bg-saffron-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {WEEKLY_ACTIVITIES.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-saffron-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${item.day.includes("Daily") || item.day.includes("Every Day") ? 'bg-saffron-100 text-saffron-700' : 'bg-stone-100 text-stone-600'}`}>
                                {item.day}
                            </span>
                            {item.icon && <item.icon className="h-6 w-6 text-saffron-500" />}
                        </div>
                        <h4 className="font-serif text-lg font-bold text-stone-800 mb-2">{item.activity}</h4>
                        <p className="text-xs font-bold text-saffron-600 mb-3 uppercase">{item.audience}</p>
                        <p className="text-stone-600 text-sm flex-grow leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;