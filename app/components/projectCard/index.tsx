// components/ProjectCard.js
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const rotateAnimation = {
    rotate: [0, 10, -10, 0], // Simple rotation animation
    transition: { repeat: Infinity, duration: 4, ease: "linear" }
  };

  return (
    <motion.div
      className="w-64 h-40 bg-white p-5 rounded-lg shadow-lg m-4"
      whileHover={{ scale: 1.1, rotate: 0 }} // Stop rotating and scale up on hover
      animate={rotateAnimation}
    >
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
