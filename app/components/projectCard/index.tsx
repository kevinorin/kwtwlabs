import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const statusColors = {
    Development: "bg-cyan-600",
    Production: "bg-emerald-500",
    Hobby: "bg-fuchsia-600/90",
    Demo: "bg-orange-600/90",
  };
  return (
    <motion.div
      className="w-full h-40 bg-white p-5 rounded-lg shadow-lg m-4"
      whileHover={{ scale: 1.1 }} 
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-prime-900 truncate">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{project.title}</a>
        </h3>
        <div className={`inline-block text-xs uppercase font-semibold text-white px-2 py-1 rounded-full ${statusColors[project.status]}`}>
          {project.status}
        </div>
      </div>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
        {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="mt-2 rounded max-w-32 md:max-w-24 bg-white shadow-md shadow-slate-300 p-2" />}
      </a>
    </motion.div>
  );
};

export default ProjectCard;
