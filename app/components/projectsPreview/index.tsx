// components/ProjectsSection.js or components/ProjectsSection.tsx
import { motion } from "framer-motion";
import ProjectCard from '../projectCard';

const projects = [

  {
    id: 1,
    title: "OptumPricer",
    description: "SaaS platform to help businesses manage their pricing strategies.",
    imageUrl: "/images/logo-op.png",
    url: "https://www.optumpricer.com/",
    status: "Production",
  },
  {
    id: 2,
    title: "NC Waterfalls",
    description: "Database of North Carolina's many waterfalls.",
    imageUrl: "/images/logo-ncw.png",
    url: "https://nc-waterfalls-lilac.vercel.app/",
    status: "Development",
  },
  {
    id: 3,
    title: "BGN",
    description: "News & entertainment platform for blockchain powered media.",
    imageUrl: "/images/logo-bgn.png",
    url: "https://bgn.games",
    status: "Hobby",
  },
  {
    id: 4,
    title: "GEXP",
    description: "Explorer and platform built on the Galachain ecosystem.",
    imageUrl: "/images/logo-gexp.png",
    url: "https://gexp.live",
    status: "Hobby",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projectsPreview" className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-black p-5 md:p-32 md:pt-10 px-5">
      <h2 className="text-4xl font-bold mb-8 text-balance">Tailwind in Action</h2>
      <p className="text-lg mb-8 text-center text-balance">I use Tailwind whenever I can, like on this webpage 😉. Here are more examples.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 text-balance">
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
