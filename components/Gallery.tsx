import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 bg-saffron-50 lotus-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4">
            <Heart className="text-red-500 fill-current h-6 w-6" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-stone-800">Moments of Grace</h2>
          <p className="font-sans text-stone-600 mt-2">Capturing the divine presence and service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px]">
            {GALLERY_IMAGES.map((image, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-lg shadow-md bg-stone-200 ${
                  image.isVertical ? 'md:row-span-2' : 'md:col-span-1'
                } ${index === 3 ? 'md:col-span-2' : ''}`}
                onClick={() => setSelected(image.url)}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  <img src={image.url} alt={image.caption} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-serif text-sm md:text-base font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="relative">
                <button onClick={() => setSelected(null)} className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md">✕</button>
                <img src={selected} alt="Full" className="max-w-[90vw] max-h-[90vh] object-contain" />
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Gallery;