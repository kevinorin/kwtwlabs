// components/ProjectsSection.js or components/ProjectsSection.tsx
import { motion } from "framer-motion";
import ProjectCard from '../projectCard';

const projects = [
  {
    title: "Project 1",
    description: "An innovative project that solves complex problems using Tailwind CSS.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description: "A creative project showcasing custom animations with Framer Motion.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Project 3",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">Projects I'm Proud Of</h2>
      <div className="flex justify-center items-center flex-wrap">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
