import ScrollReveal from '../ScrollReveal';
import TorchLight from '../TorchLight';

const skills = [
  {
    name: 'C# / .NET',
    symbol: '⟁',
    description: 'Enterprise backend systems, APIs & Windows applications',
  },
  {
    name: 'Java & Python',
    symbol: '◬',
    description: 'Problem solving, automation & backend services',
  },
  {
    name: 'JavaScript / TypeScript',
    symbol: '᛭',
    description: 'Interactive, scalable and type-safe web applications',
  },
  {
    name: 'Frontend Engineering',
    symbol: '☉',
    description: 'React, Angular, HTML & CSS for modern UI development',
  },
  {
    name: 'Backend Development',
    symbol: '⎔',
    description: '.NET, Node.js, Express, Django & Flask services',
  },
  {
    name: 'Databases',
    symbol: '⌘',
    description: 'SQL Server, MongoDB & data modeling',
  },
  {
    name: 'Version Control',
    symbol: '⛓',
    description: 'Git, GitHub & TFS for collaborative development',
  },
  {
    name: 'Cloud & Deployment',
    symbol: '☁',
    description: 'Microsoft Azure, cloud hosting & CI/CD pipelines',
  },
];

const SkillsGlyphs = () => {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Rock texture background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, hsl(20 15% 6%) 0%, hsl(20 12% 8%) 50%, hsl(20 15% 6%) 100%),
            repeating-linear-gradient(90deg, transparent 0%, hsl(25 10% 15% / 0.1) 1px, transparent 2px),
            repeating-linear-gradient(0deg, transparent 0%, hsl(25 10% 15% / 0.05) 1px, transparent 3px)
          `,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-greconian text-4xl md:text-5xl carved-text mb-4 tracking-wide">
              ANCIENT KNOWLEDGE
            </h2>
            <p className="font-[EB_Garamond] text-lg text-muted-foreground">
              Skills etched into the walls of experience
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 100}>
              <div className="group relative flex flex-col items-center text-center">
                {/* Glyph container */}
                <div className="relative mb-4">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl transition-all duration-500" />
                  
                  {/* Stone tablet */}
                  <div 
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center glyph-hover"
                    style={{
                      background: 'linear-gradient(145deg, hsl(25 12% 18%) 0%, hsl(20 15% 10%) 100%)',
                      boxShadow: `
                        inset 2px 2px 4px hsl(20 15% 4% / 0.8),
                        inset -1px -1px 2px hsl(35 20% 25% / 0.2),
                        0 4px 20px hsl(20 15% 4% / 0.5)
                      `,
                    }}
                  >
                    <span 
                      className="text-3xl md:text-4xl transition-all duration-500 group-hover:text-primary"
                      style={{
                        color: 'hsl(35 25% 60%)',
                        textShadow: 'none',
                        filter: 'drop-shadow(0 0 0 transparent)',
                      }}
                    >
                      {skill.symbol}
                    </span>
                  </div>
                </div>

                {/* Skill name */}
                <h3 className="font-Macedonia Old text-sm md:text-base text-foreground tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Description - revealed on hover */}
                <p className="font-body text-xs md:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[150px]">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {/* Centered Torch Light */}
      <TorchLight position="center" size="md" />
    </section>
  );
};

export default SkillsGlyphs;
