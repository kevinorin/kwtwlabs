import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="w-64 h-40 bg-white p-5 rounded-lg shadow-lg m-4"
      whileHover={{ scale: 1.1 }} // Only scale up on hover, remove rotate: 0 since we're not rotating anymore
      // Removed the animate prop to stop the rotation
    >
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p>{project.description}</p>
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="mt-2 rounded" />}
    </motion.div>
  );
};

export default ProjectCard;
