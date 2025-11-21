import React from 'react';
import { SOCIAL_LINKS, CONTACT_PHONE, CONTACT_EMAIL } from '../constants';
import { ExternalLink } from 'lucide-react';

const Connect: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-stone-800 mb-8">Connect with Prabhuji</h2>
        
        <div className="mb-6">
          <p className="text-stone-700">Mobile Number: <a className="font-medium text-stone-800">{CONTACT_PHONE}</a></p>
          <p className="text-stone-700">E-mail ID: <a className="font-medium text-stone-800" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-stone-50 hover:bg-saffron-50 border border-stone-200 hover:border-saffron-300 px-6 py-4 rounded-lg transition-all duration-300 group"
            >
              <link.icon className="h-6 w-6 text-stone-600 group-hover:text-saffron-600" />
              <div className="text-left">
                <p className="font-bold text-stone-800 text-sm">{link.name}</p>
                <p className="text-xs text-stone-500">{link.label}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-stone-400 group-hover:text-saffron-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;