"use client";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import BioSection from '../app/components/bioSection';
import ProjectsPreview from './components/projectsPreview';
import SkillsAndInterests from './components/skillInterests';
import ContributionsSection from './components/contributions';
import ExcitementSection from './components/excitement';
import TeachingSection from './components/teaching';
import OutroSection from './components/outro';

type SectionId = 'bioSection' | 'skillsAndInterests' | 'contributionsSection' | 'projectsPreview' | 'excitementSection' | 'teachingSection' | 'outroSection';

const sectionIds: SectionId[] = [
  'bioSection',
  'skillsAndInterests',
  'contributionsSection',
  'projectsPreview',
  'excitementSection',
  'teachingSection',
  'outroSection'
];


export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast('This is a work in progress, currently best viewed on desktop.');
    }, 20000); 

    return () => clearTimeout(timer); 
  }, []);

  const [currentSection, setCurrentSection] = useState(0);

  const sectionIds = [
    'bioSection',
    'skillsAndInterests',
    'contributionsSection',
    'projectsPreview',
    'excitementSection',
    'teachingSection',
    'outroSection'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.round(window.scrollY / window.innerHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoother scroll 
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-300">
      <BioSection />
      <SkillsAndInterests />
      <ContributionsSection />
      <ProjectsPreview />
      <ExcitementSection />
      <TeachingSection />
      <OutroSection />
      {/* Section tracker */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2">
        {sectionIds.map((sectionId, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(sectionId)} 
            className={`w-2 h-6 mb-2 rounded-md backdrop-blur-md hover:cursor-pointer hover:bg-fuchsia-800/80 ${currentSection === i ? 'bg-fuchsia-800/80' : 'bg-slate-400/80'}`}
          ></div>
        ))}
      </div>
    </main>
  );
}
