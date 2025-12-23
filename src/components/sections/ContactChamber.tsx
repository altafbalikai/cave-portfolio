import ScrollReveal from '../ScrollReveal';

const contactLinks = [
  {
    name: 'Email',
    symbol: '✉',
    href: 'mailto:altaf.balikai.03@gmail.com',
    label: 'altaf.balikai.03@gmail.com',
  },
  {
    name: 'GitHub',
    symbol: '⌥',
    href: 'https://github.com/altafbalikai',
    label: 'github.com/altafbalikai',
  },
  {
    name: 'LinkedIn',
    symbol: '⌘',
    href: 'https://www.linkedin.com/in/altafhusen-balikai-b9517a327/',
    label: 'linkedin.com/in/altafhusen-balikai',
  },
];


const ContactChamber = () => {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden flex items-center">
      {/* Fire chamber background */}
      <div className="absolute inset-0">
        {/* Deep cave gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, hsl(15 80% 20% / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 50% 90%, hsl(25 100% 30% / 0.3) 0%, transparent 40%),
              linear-gradient(180deg, hsl(20 15% 5%) 0%, hsl(20 15% 4%) 100%)
            `,
          }}
        />
        
        {/* Animated fire glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 animate-flicker"
          style={{
            background: `
              radial-gradient(ellipse 50% 30% at 50% 100%, hsl(25 100% 50% / 0.15) 0%, transparent 70%)
            `,
          }}
        />

        {/* Ember particles */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-ember animate-float"
              style={{
                left: `${(i - 4) * 30}px`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-greconian text-4xl md:text-5xl lg:text-6xl carved-text mb-6 tracking-wide">
            CONTACT CHAMBER
          </h2>
          <p className="font-[EB_Garamond] text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            "Let us carve the future together."
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4"
              >
                <div 
                  className="relative w-20 h-20 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(145deg, hsl(25 15% 15%) 0%, hsl(20 15% 8%) 100%)',
                    boxShadow: `
                      inset 2px 2px 4px hsl(20 15% 4% / 0.8),
                      inset -1px -1px 2px hsl(35 20% 25% / 0.15),
                      0 4px 20px hsl(20 15% 4% / 0.5)
                    `,
                  }}
                >
                  <span 
                    className="text-3xl transition-all duration-500 group-hover:text-primary"
                    style={{ color: 'hsl(35 25% 60%)' }}
                  >
                    {link.symbol}
                  </span>
                  
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500" />
                </div>
                
                <div className="text-center">
                  <span className="font-Macedonia Old text-sm text-foreground tracking-wider block group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-24">
            <p className="font-display text-sm text-muted-foreground/60 tracking-[0.3em] uppercase">
              © 2024 · All Rights Reserved
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactChamber;
