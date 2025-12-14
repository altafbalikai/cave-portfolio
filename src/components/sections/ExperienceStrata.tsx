import ScrollReveal from '../ScrollReveal';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Mahindra',
    location: 'Chennai, India',
    period: 'Dec 2023 – Present',
    tech: ['C#', '.NET', 'SQL Server', 'Azure', 'Infragistics UI'],
    achievements: [
      'Built and maintained high-performance Windows applications for a global logistics client.',
      'Designed normalized SQL Server schemas, reducing storage usage by ~20% for 1M+ records.',
      'Developed responsive UIs using Infragistics controls for improved usability.',
      'Debugged and resolved functional, performance, and integration issues.',
      'Collaborated with cross-functional teams to deliver stable production releases.',
    ],
    depth: 'surface',
  },
  {
    role: 'Machine Learning Intern (Research)',
    company: 'Compsoft Technologies',
    location: 'Bengaluru, India',
    period: 'Aug 2022 – Sep 2022',
    tech: ['Python', 'Machine Learning'],
    achievements: [
      'Developed a machine learning model for a “Virtual Assistant for the Visually Impaired.”',
      'Implemented and tested model behavior based on client requirements.',
      'Conducted model evaluation and documented limitations.',
      'Prepared a research report highlighting findings and improvements.',
    ],
    depth: 'middle',
  },
];


const depthColors = {
  surface: 'from-cave-stone/80 to-cave-rock/60',
  middle: 'from-cave-rock/70 to-background/80',
  deep: 'from-background/90 to-cave-deep',
};

const ExperienceStrata = () => {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Strata background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cave-rock/20 to-cave-deep" />
        {/* Rock layer lines */}
        <div className="absolute inset-0" style={{
          background: `
            repeating-linear-gradient(
              180deg,
              transparent 0px,
              transparent 150px,
              hsl(25 15% 20% / 0.3) 151px,
              hsl(25 15% 20% / 0.3) 153px,
              transparent 154px
            )
          `,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-greconian text-4xl md:text-5xl carved-text mb-4 tracking-wide">
              LAYERS OF TIME
            </h2>
            <p className="font-[EB_Garamond] text-lg text-muted-foreground">
              Each stratum tells a story of growth
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 md:left-[calc(50%-300px)] top-48 bottom-32 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="relative mb-16 last:mb-0">
                {/* Timeline node */}
                <div className="absolute left-1/2 md:left-[calc(50%-300px)] -translate-x-1/2 w-4 h-4">
                  <div className="absolute inset-0 rounded-full bg-primary animate-glow-pulse" />
                  <div className="absolute inset-1 rounded-full bg-background" />
                  <div className="absolute inset-2 rounded-full bg-primary" />
                </div>

                {/* Content card */}
                <div 
                  className={`ml-0 md:ml-16 p-6 md:p-8 rounded-lg bg-gradient-to-br ${depthColors[exp.depth as keyof typeof depthColors]}`}
                  style={{
                    boxShadow: `
                      inset 2px 2px 6px hsl(20 15% 4% / 0.6),
                      inset -1px -1px 3px hsl(35 20% 25% / 0.1),
                      0 8px 32px hsl(20 15% 4% / 0.4)
                    `,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-Macedonia Old text-xl md:text-2xl text-foreground tracking-wide">
                        {exp.role}
                      </h3>
                      <p className="font-body text-primary text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-display text-sm text-muted-foreground tracking-wider mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="font-body text-muted-foreground flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5 text-xs">◆</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrata;
