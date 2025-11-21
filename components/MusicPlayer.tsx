
import React, { useEffect, useRef, useState } from 'react';
// Using a local MP3 placed alongside this component
// Serve the audio as a static public asset (place the file in `public/Audio`)
const AUDIO_PUBLIC_PATH = '/Audio/Gurudev-AETrim1763722413122.mp3';
import { Music, Pause, Play } from 'lucide-react';

interface MusicPlayerProps {
  audioRef?: React.RefObject<HTMLAudioElement>;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioRef: externalAudioRef }) => {
  const internalAudioRef = useRef<HTMLAudioElement>(null);
  const audioRef = externalAudioRef ?? internalAudioRef;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [requiresUserGesture, setRequiresUserGesture] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const audioEl = audioRef.current;
    if (!audioEl) return;

    audioEl.volume = 0.5;
    audioEl.loop = true;
    audioEl.playsInline = true;

    // If the app provided an external audioRef, don't attempt autoplay here — just sync UI state
    if (externalAudioRef) {
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);
      const onVolume = () => setIsMuted(!!audioEl.muted);

      audioEl.addEventListener('play', onPlay);
      audioEl.addEventListener('pause', onPause);
      audioEl.addEventListener('volumechange', onVolume);

      // initialize
      setIsPlaying(!audioEl.paused);
      setIsMuted(!!audioEl.muted);

      return () => {
        audioEl.removeEventListener('play', onPlay);
        audioEl.removeEventListener('pause', onPause);
        audioEl.removeEventListener('volumechange', onVolume);
      };
    }

    // Otherwise, try autoplay (best-effort) and fallbacks
    const tryAutoplay = async () => {
      try {
        await audioEl.play();
        setIsPlaying(true);
        setIsMuted(!!audioEl.muted);
      } catch {
        try {
          audioEl.muted = true;
          await audioEl.play();
          setIsPlaying(true);
          setIsMuted(true);
          setRequiresUserGesture(true);
          setTimeout(async () => {
            try {
              audioEl.muted = false;
              await audioEl.play();
              setIsMuted(false);
              setRequiresUserGesture(false);
            } catch {}
          }, 1200);
        } catch {
          setIsPlaying(false);
          setRequiresUserGesture(true);
        }
      }
    };

    tryAutoplay();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      // If user gesture is required, attempt to play unmuted first
      if (requiresUserGesture) {
        audio.muted = false;
        audio.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setRequiresUserGesture(false);
        }).catch((err) => {
          // If unmuted play still fails, fall back to muted play and keep gesture flag
          console.log('Play after user gesture failed, falling back to muted play', err);
          audio.muted = true;
          audio.play().then(() => {
            setIsPlaying(true);
            setIsMuted(true);
            setRequiresUserGesture(true);
          }).catch(() => {
            setIsPlaying(false);
          });
        });
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end animate-fade-in-up">
      <div className={`
        relative flex items-center justify-center 
        w-14 h-14 rounded-full shadow-2xl cursor-pointer 
        transition-all duration-300 border-2 border-white
        ${isPlaying ? 'bg-saffron-500 scale-110' : 'bg-stone-800 hover:bg-stone-700'}
      `}
      onClick={togglePlay}
      title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Spinning effect ring when playing */}
        {isPlaying && (
           <div className="absolute inset-0 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
        )}

        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white ml-1" />
        )}
      </div>
      
      <div className="mt-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
        {isPlaying ? "Now Playing: Gurudev Kripa Bindu Diya" : (requiresUserGesture ? "Click to enable audio" : "Play Tribute Music")}
      </div>

      {/* If an external audioRef is provided by the app, MusicPlayer will not render a duplicate audio element. */}
      {!externalAudioRef && (
        <audio ref={internalAudioRef} src={AUDIO_PUBLIC_PATH} loop playsInline />
      )}
      {isMuted && isPlaying && (
        <button
          onClick={async (e) => {
            e.stopPropagation();
            const audio = audioRef.current;
            if (!audio) return;
            audio.muted = false;
            try {
              await audio.play();
              setIsMuted(false);
              setRequiresUserGesture(false);
            } catch (err) {
              console.log('Unmute attempt failed', err);
            }
          }}
          className="mt-2 px-3 py-1 rounded-full bg-white text-black text-xs font-medium"
        >
          Unmute
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
