// components/ProjectsSection.js or components/ProjectsSection.tsx
import { motion } from "framer-motion";
import ProjectCard from '../projectCard';
import { Project } from "../projectCard";
import Link from "next/link";

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
  {
    id: 5,
    title: "B&B",
    description: "A bed and breakfast concept using WordPress Headless CMS (Rest API) and Next.js.",
    imageUrl: "/images/logo-bb.png",
    url: "https://airbb-wordpress-next.vercel.app/",
    status: "Demo",
  },
  {
    id: 6,
    title: "Kevin W., Design Engineer",
    description: (
      <>
        <Link href="https://www.figma.com/file/siRxh5UFE29ZIm7PkHjfxa/Untitled?type=design&node-id=1%3A569&mode=design&t=IsgJs2AYZU283ZmC-1" target="blank" className="text-blue-600">Brand, moodboard concept, color pallette</Link> and development for Tailwind Lab&rsquo;s.
      </>
    ),
    imageUrl: "/images/logo-kwtw.png",
    url: "https://airbb-wordpress-next.vercel.app/",
    status: "Demo",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projectsPreview" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-black p-5 md:p-32 md:pt-10 px-5">
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
            <ProjectCard project={project as Project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}


