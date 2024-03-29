// components/ProjectsSection.js or components/ProjectsSection.tsx
import { motion } from "framer-motion";
import ProjectCard from '../projectCard';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "An innovative project that solves complex problems using Tailwind CSS.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A creative project showcasing custom animations with Framer Motion.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Project 4",
    description: "An interactive project demonstrating the power of React in UI development.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Ensure there are 4 projects for the sake of this example
];

export default function ProjectsSection() {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">Projects I'm Proud Of</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
