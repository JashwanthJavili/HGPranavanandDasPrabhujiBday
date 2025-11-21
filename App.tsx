
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Glorification from './components/Glorification';
import Teachings from './components/Teachings';
import Tribute from './components/Tribute';
import Gallery from './components/Gallery';
import Blessings from './components/Blessings';
import Connect from './components/Connect';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const AUDIO_PUBLIC_PATH = '/Audio/Gurudev-AETrim1763722413122.mp3';

const AppAudio: React.FC = () => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = React.useState(true);

  const tryPlay = async (unmute = true) => {
    const a = audioRef.current;
    if (!a) return false;
    try {
      if (unmute) a.muted = false;
      await a.play();
      return true;
    } catch (e) {
      try {
        a.muted = true;
        await a.play();
        return true;
      } catch {
        return false;
      }
    }
  };

  const onPlayClick = async () => {
    const a = audioRef.current;
    if (a) {
      // Ensure we request unmuted playback explicitly on user action
      a.muted = false;
    }
    const ok = await tryPlay(true);
    if (ok) {
      setShowPrompt(false);
    } else if (a) {
      // If still failing, keep the prompt visible so user can try again
      a.muted = true;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_PUBLIC_PATH} loop />
      {showPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-8 max-w-xl text-center">
            <h3 className="text-2xl font-display mb-3">Please, Prabhuji — kindly turn on the song dedicated to you</h3>
            <p className="text-sm text-stone-600 mb-6">Tap below to play the dedicated song for this Krishna Consciousness Birthday.</p>
            <button onClick={onPlayClick} className="px-6 py-3 bg-saffron-600 text-white rounded-md font-medium">Play Tribute Song</button>
          </div>
        </div>
      )}
      {/* Pass audioRef down to MusicPlayer so the bottom control uses the same audio element */}
      <MusicPlayer audioRef={audioRef} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-devotion-light text-stone-900 font-sans selection:bg-saffron-200 selection:text-saffron-900 scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Blessings />
        <Glorification />
        <Teachings />
        <Tribute />
        <Gallery />
        <Connect />
      </main>
      <Footer />
      <AppAudio />
    </div>
  );
};

export default App;
