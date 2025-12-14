import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import TorchLight from '../TorchLight';

const projects = [
  {
    id: 1,
    title: 'AI Agent Desk',
    subtitle: 'The Council of Intelligence',
    description:
      'A multi-agent AI assistant platform where users interact with specialized agents for technical, medical, and financial guidance, powered by the Gemini API.',
    tech: ['React', 'Node.js', 'Express', 'Gemini API', 'MongoDB', 'JWT'],
    impact:
      'Designed and deployed a scalable AI-driven system with secure role-based access and persistent conversational context.',
    link: 'https://github.com/altafbalikai/AI-Agent-Desk',
    live: 'https://ai-agent-desk.vercel.app',
  },
  {
    id: 2,
    title: 'Voice-Based Email System',
    subtitle: 'The Voice of Inclusion',
    description:
      'An accessibility-focused email platform enabling visually impaired users to send, receive, and manage emails independently using voice commands.',
    tech: [
      'Python',
      'Django',
      'JavaScript',
      'SMTP',
      'MySQL',
      'Speech-to-Text',
      'Text-to-Speech',
    ],
    impact:
      'Empowered visually impaired users with hands-free digital communication, significantly improving accessibility and independence.',
    link: 'https://github.com/altafbalikai/Python-Mayhem',
  },
];


const ProjectMurals = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Deeper cave background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, hsl(20 15% 6%) 0%, hsl(20 15% 5%) 100%),
            radial-gradient(ellipse 100% 50% at 50% 100%, hsl(25 20% 10% / 0.3) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-greconian text-4xl md:text-5xl carved-text mb-4 tracking-wide">
              CAVE MURALS
            </h2>
            <p className="font-[EB_Garamond] text-lg text-muted-foreground">
              Stories painted on the walls of time
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="space-y-20 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div 
                className="group relative cursor-pointer"
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                {/* Mural frame */}
                <div 
                  className="relative p-8 md:p-12 rounded-lg transition-all duration-500"
                  style={{
                    background: `
                      linear-gradient(135deg, hsl(25 12% 12%) 0%, hsl(20 15% 8%) 100%)
                    `,
                    boxShadow: activeProject === project.id 
                      ? `
                        0 0 60px hsl(25 100% 50% / 0.2),
                        inset 0 0 40px hsl(25 100% 50% / 0.05),
                        inset 2px 2px 6px hsl(20 15% 4% / 0.8)
                      `
                      : `
                        inset 2px 2px 6px hsl(20 15% 4% / 0.8),
                        inset -1px -1px 3px hsl(35 20% 20% / 0.1)
                      `,
                  }}
                >
                  {/* Torchlight effect on active */}
                  {activeProject === project.id && (
                    <div 
                      className="absolute inset-0 rounded-lg pointer-events-none animate-flicker"
                      style={{
                        background: 'radial-gradient(ellipse at top, hsl(25 100% 50% / 0.1) 0%, transparent 60%)',
                      }}
                    />
                  )}

                  <div className="relative">
                    <span className="font-display text-xs tracking-[0.3em] text-primary/70 uppercase mb-2 block">
                      {project.subtitle}
                    </span>
                    <h3 className="font-Macedonia Old text-2xl md:text-3xl text-foreground mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech stack - ancient symbols */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="font-display text-xs tracking-wider px-3 py-1 rounded border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Project links — ALWAYS visible */}
                    <div className="flex gap-6 mb-6">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 font-display text-xs tracking-wider text-primary/80 hover:text-primary transition-colors"
                        >
                          <span className="text-lg">↗</span>
                          GITHUB
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 font-display text-xs tracking-wider text-primary/80 hover:text-primary transition-colors"
                        >
                          <span className="text-lg">⚡</span>
                          LIVE
                        </a>
                      )}
                    </div>


                    {/* Impact inscription */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ${
                        activeProject === project.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-border/30">
                        <span className="font-display text-sm text-primary tracking-wide flex items-center gap-2">
                          <span className="text-lg">◆</span>
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 text-muted-foreground/50 font-display text-xs tracking-wider">
                      {activeProject === project.id ? '− CLOSE' : '+ REVEAL'}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <TorchLight position="center" size="lg" />
    </section>
  );
};

export default ProjectMurals;
