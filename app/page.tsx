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
      toast('I\'m creeping on you 👀, I\'ve been notified that Tailwind Labs opened my application link :)');
    }, 20000); // Delays the toast notification

    return () => clearTimeout(timer); // Cleanup the timer
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
            onClick={() => scrollToSection(sectionId)} // Pass sectionId here
            className={`w-2 h-6 mb-2 ${currentSection === i ? 'bg-slate-600' : 'bg-slate-300'}`}
          ></div>
        ))}
      </div>
    </main>
  );
}
