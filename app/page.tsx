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

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast('I\'m creeping on you 👀, I\'ve been notified that Tailwind Labs opened my application link :)');
    }, 20000); // Delays the toast notification

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.round(window.scrollY / window.innerHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoother scroll 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen">
      <BioSection />
      <ProjectsPreview />
      <SkillsAndInterests />
      <ContributionsSection />
      <ExcitementSection />
      <TeachingSection />
      <OutroSection />
      {/* Section tracker */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2">
        {Array(4).fill(null).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSection(i)}
            className={`w-4 h-4 mb-2 rounded-full cursor-pointer ${currentSection === i ? 'bg-secondary' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </main>
  );
}
