import { motion } from 'framer-motion';

const contributions = [
  {
    id: 1,
    title: 'Contribution to Project XYZ',
    description: 'Improved accessibility features and implemented a new feature that...',
    link: 'https://github.com/yourproject/xyz'
  },
  // Add more contributions here
];

const ContributionsSection = () => {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-light to-secondary text-gray-800 p-5">
      <h2 className="text-4xl font-bold mb-8">Contributions</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {contributions.map(contribution => (
          <motion.div
            key={contribution.id}
            initial={{ opacity: 0, y: 100 }} // Start from bottom
            whileInView={{ opacity: 1, y: 0 }} // End at original position
            viewport={{ once: true }}
            transition={{ duration: 1.0 }} // Slower transition duration
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{contribution.title}</h3>
            <p className="mb-4">{contribution.description}</p>
            <a href={contribution.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">View Contribution</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContributionsSection;