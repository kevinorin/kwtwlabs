import { motion } from 'framer-motion';

const ExcitementSection = () => {
  const excitementPoints = [
    {
      id: 1,
      title: 'Tailwind Oxide',
      description: 'The future of styling web applications is here with Tailwind Oxide. Its utility-first approach and improved performance are game-changers for frontend development.',
    },
    {
      id: 2,
      title: 'Joining Tailwind Labs',
      description: 'The opportunity to be part of a team that\'s at the forefront of modern web design and development is incredibly thrilling. Collaborating with the creators of Tailwind CSS will be a dream come true.',
    },
    {
      id: 3,
      title: 'Empowering Developers',
      description: 'I look forward to contributing to tools that empower developers to build beautiful, efficient websites and applications. It\'s about making the web a better place for everyone.',
    },
    // Add more points as needed
  ];  

  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-accent to-primary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">What I'm Excited About</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {excitementPoints.map(point => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: point.id * 0.2 }}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
            <p>{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExcitementSection;
