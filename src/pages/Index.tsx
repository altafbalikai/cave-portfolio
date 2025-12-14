import { Helmet } from 'react-helmet-async';
import DustParticles from '../components/DustParticles';
import FlyingBats from '../components/FlyingBats';
import AudioToggle from '../components/AudioToggle';
import CaveEntrance from '../components/sections/CaveEntrance';
import SkillsGlyphs from '../components/sections/SkillsGlyphs';
import ProjectMurals from '../components/sections/ProjectMurals';
import ExperienceStrata from '../components/sections/ExperienceStrata';
import ContactChamber from '../components/sections/ContactChamber';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Altafhusen Balikai | Software Engineer Portfolio</title>
        <meta 
          name="description" 
          content="A traveler of code, carving solutions through time. Explore my journey through software engineering, projects, and technical expertise."
        />
        <meta name="keywords" content="software engineer, developer, C#, .NET, React, TypeScript, portfolio" />
      </Helmet>

      <main className="relative bg-background text-foreground overflow-x-hidden">
        <DustParticles />
        <FlyingBats />
        <AudioToggle />
        
        <CaveEntrance />
        <SkillsGlyphs />
        <ProjectMurals />
        <ExperienceStrata />
        <ContactChamber />
      </main>
    </>
  );
};

export default Index;
