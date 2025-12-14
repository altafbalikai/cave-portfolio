import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with cave ambience
    audioRef.current = new Audio('/audio/cave-background-sound-49440.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.12;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Audio playback failed:', error);
      }
    }
  };

  return (
    <button
      onClick={toggleAudio}
      disabled={!isLoaded}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-stone-900/80 backdrop-blur-sm
        border-2 border-primary/30
        flex items-center justify-center
        transition-all duration-300
        hover:border-primary/60 hover:bg-stone-800/80
        hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]
        disabled:opacity-50 disabled:cursor-not-allowed
        group
      `}
      aria-label={isPlaying ? 'Mute cave ambience' : 'Play cave ambience'}
      title={isPlaying ? 'Mute cave ambience' : 'Play cave ambience'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
      ) : (
        <VolumeX className="w-6 h-6 text-muted-foreground transition-transform group-hover:scale-110 group-hover:text-primary" />
      )}
      
      {/* Glow ring when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
      )}
    </button>
  );
};

export default AudioToggle;
