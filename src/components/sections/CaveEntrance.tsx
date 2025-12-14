import { useEffect, useState } from 'react';
import TorchLight from '../TorchLight';
import Fire from '../fire';

const CaveEntrance = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cave opening background */}
      <div 
        className="absolute inset-0 z-[0]"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, hsl(35 40% 60% / ${0.15 * opacity}) 0%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 50% 20%, hsl(25 30% 30% / 0.3) 0%, transparent 60%),
            linear-gradient(180deg, hsl(20 15% 12%) 0%, hsl(20 15% 6%) 100%)
          `,
        }}
      />
            
      {/* Stalactites */}
      <div
        className="absolute top-0 left-0 w-full z-[2] pointer-events-none"
        style={{
          transform: `translateY(${-parallaxOffset * 0.15}px)`,
          opacity: opacity,
        }}
      >
        <img
          src="/images/stalactites.png"
          alt="Cave stalactites"
          className="relative w-full h-[450px] overflow-hidden"
          style={{
            filter: 'brightness(0.6) contrast(1.1)',
          }}
        />
      </div>


      {/* Sunlight rays through cave opening */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] pointer-events-none z-[5]"
        style={{
          mixBlendMode: 'screen',
          transform: `translateX(-50%) translateY(${-parallaxOffset}px)`,
          opacity,
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 blur-3xl" style={{
          background: `radial-gradient(ellipse 50% 70% at 50% 0%, hsl(42 80% 75% / 0.35) 0%, transparent 70%)`
        }} />

        {/* Main light */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 45% 65% at 50% 0%, hsl(40 70% 75% / 0.35) 0%, transparent 65%),
            linear-gradient(180deg, hsl(40 60% 85% / 0.25) 0%, transparent 45%)
          `
        }} />

        {/* Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120vh] pointer-events-none z-[6]">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-[660px] bg-gradient-to-b from-yellow-200/55 to-transparent rotate-[-15deg] blur-sm" />
        <div className="absolute -top-12 left-1/2 -translate-x-[30%] w-1.5 h-[620px] bg-gradient-to-b from-yellow-200/45 to-transparent rotate-[10deg] blur-sm" />
        <div className="absolute -top-12 left-1/2 -translate-x-[70%] w-1 h-[580px] bg-gradient-to-b from-yellow-100/40 to-transparent rotate-[-25deg] blur-sm" />
      </div>

      </div>


      {/* Cave walls silhouette */}
      <div
        className="absolute inset-0 pointer-events-none z-[10]"
        style={{
          '--side-dark': 'clamp(6%, 10vw, 15%)',
          '--bottom-dark': 'clamp(75%, 85vh, 90%)',
          background: `
            linear-gradient(
              90deg,
              hsl(20 15% 4%) 0%,
              transparent var(--side-dark),
              transparent calc(100% - var(--side-dark)),
              hsl(20 15% 4%) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              hsl(20 15% 4%) var(--bottom-dark)
            )
          `,
        } as React.CSSProperties & Record<string, string>}
      />


      {/* Content */}
      <div 
        className="relative z-20 text-center px-6"
        style={{ 
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          opacity: opacity,
        }}
      >
        <h1
          className="
            font-caprice
            text-[clamp(2.2rem,6vw,5.5rem)]
            leading-[1.05]
            tracking-[0.15em]
            carved-text
            mb-6
          "
        >
          ALTAFHUSEN BALIKAI
        </h1>

        <p className="font-[EB_Garamond] text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          "A traveler of code, carving solutions through time."
        </p>
      </div>

      {/* Torches */}
      {/* <TorchLight position="left" size="lg" />
      <TorchLight position="right" size="lg" /> */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <Fire />
      </div>
      {/* Center ambient fire glow */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[250px]
                  pointer-events-none z-[15]"
        style={{
          background: `
            radial-gradient(ellipse at center,
              rgba(255, 180, 80, 0.35) 0%,
              rgba(255, 140, 40, 0.25) 35%,
              transparent 70%)
          `,
          filter: 'blur(40px)',
        }}
      />
    </section>
  );
};

export default CaveEntrance;
