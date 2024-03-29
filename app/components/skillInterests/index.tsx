import { motion } from 'framer-motion';

const SkillsAndInterests = () => {
  const skills = [
    { id: 1, title: 'Tailwind CSS', description: 'Expertise in utility-first CSS with Tailwind, including the upcoming Tailwind Oxide.' },
    { id: 2, title: 'React & Next.js', description: 'Building seamless UIs with React and optimizing with Next.js for server-side rendering.' },
    { id: 3, title: 'UI/UX Design', description: 'Passionate about creating intuitive and engaging user experiences.' },
    // Add more skills as needed
  ];

  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-dark to-accent text-black p-5">
      <h2 className="text-4xl font-bold mb-8">Skills & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map(skill => (
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Start from bottom
            whileInView={{ opacity: 1, y: 0 }} // End at original position
            viewport={{ once: true }}
            transition={{ duration: 1.0 }} // Slower transition duration
            className="bg-white text-dark p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsAndInterests;
