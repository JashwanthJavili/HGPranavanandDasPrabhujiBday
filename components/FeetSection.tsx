import React from 'react';

type Props = {
  image: string;
  alt?: string;
  caption?: string;
  large?: boolean;
  flowers?: boolean;
};

const FeetSection: React.FC<Props> = ({ image, alt, caption, large = false, flowers = true }) => {
  const COUNT = 18;
  const flowersArr = React.useMemo(() => {
    const types = ['🌸','🌺','🌼','💐','🌷'];
    return Array.from({ length: COUNT }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      size: 14 + Math.random() * 28,
      char: types[Math.floor(Math.random() * types.length)],
      rotate: Math.random() * 360
    }));
  }, []);

  return (
    <section className={`py-12 ${large ? 'bg-white' : 'bg-saffron-50'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
          <div className="relative flex items-center justify-center">
            <img src={image} alt={alt} className={`w-full ${large ? 'h-[560px]' : 'h-96'} object-cover`} />

            {flowers && (
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <style>{`
                  @keyframes feet-flower-fall { 0% { transform: translateY(-8vh) rotate(0deg); opacity: 0 } 8% { opacity: 1 } 100% { transform: translateY(120vh) rotate(360deg); opacity: 0.95 } }
                `}</style>
                {flowersArr.map((f, i) => (
                  <span key={i} style={{ left: `${f.left}%`, top: '-6vh', fontSize: f.size, transform: `rotate(${f.rotate}deg)`, animation: `feet-flower-fall ${f.duration}s linear ${f.delay}s infinite` }} className="absolute">
                    {f.char}
                  </span>
                ))}
              </div>
            )}

          </div>
          {caption && (
            <div className="p-6 text-center bg-white">
              <p className="text-lg font-semibold text-stone-800">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeetSection;
