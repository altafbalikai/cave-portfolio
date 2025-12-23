import { useEffect, useState } from 'react';

interface Bat {
  id: number;
  startX: number;
  startY: number;
  delay: number;
  duration: number;
  size: number;
}

const FlyingBats = () => {
  const [bats, setBats] = useState<Bat[]>([]);

  useEffect(() => {
    const generateBats = () => {
      const newBats: Bat[] = [];
      for (let i = 0; i < 18; i++) {
        newBats.push({
          id: i,
          startX: 20 + Math.random() * 60,
          startY: 10 + Math.random() * 40,
          delay: Math.random() * 1.2,
          duration: 4 + Math.random() * 3,
          size: 20 + Math.random() * 30,
        });
      }
      setBats(newBats);
    };
    generateBats();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {bats.map((bat) => (
        <div
          key={bat.id}
          className="absolute animate-bat-fly"
          style={{
            left: `${bat.startX}%`,
            top: `${bat.startY}%`,
            animationDelay: `${bat.delay}s`,
            animationDuration: `${bat.duration}s`,
            width: `${bat.size}px`,
            height: `${bat.size}px`,
          }}
        >
          {/* Bat SVG silhouette */}
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full fill-stone-950 drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }}
          >
            {/* Body */}
            <ellipse cx="50" cy="35" rx="8" ry="12" />
            {/* Head */}
            <circle cx="50" cy="20" r="6" />
            {/* Ears */}
            <polygon points="45,15 43,8 47,14" />
            <polygon points="55,15 57,8 53,14" />
            {/* Left wing */}
            <path
              d="M42,30 Q20,20 5,35 Q15,40 25,38 Q30,45 42,40 Z"
              className="animate-wing-flap-left origin-right"
            />
            {/* Right wing */}
            <path
              d="M58,30 Q80,20 95,35 Q85,40 75,38 Q70,45 58,40 Z"
              className="animate-wing-flap-right origin-left"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FlyingBats;
