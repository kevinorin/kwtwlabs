import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaStackOverflow, FaSeedling, FaSync } from 'react-icons/fa';

const contributions = [
  {
    id: 1,
    title: 'Dojo + Tailwind',
    description: 'I\'m currently experimenting on a mini-project that combines the Dojo Toolkit with Tailwind CSS. The public repo will appear in my GitHub sometime soon-ish.',
    link: 'https://github.com/kevinorin',
    icon: <FaSync className="text-4xl mb-4" />,
  },
  {
    id: 2,
    title: 'GitHub',
    description: 'Mostly private repos but I\'ve made it a goal to increase my contributions to Open Source projects and add more demos.',
    link: 'https://github.com/kevinorin',
    icon: <FaGithub className="text-4xl mb-4" />,
  },
  {
    id: 3,
    title: '457k People Reached on Stack Overflow',
    description: 'I surf the Stack Exchange network and contribute to problem solving when I can.',
    link: 'https://stackoverflow.com/users/875390/devkev?tab=profile',
    icon: <FaStackOverflow className="text-4xl mb-4" />,
  },
  {
    id: 4,
    title: 'Supporting Meliponario Bees',
    description: 'I contribute to the preservation and repopulation of Meliponario bees through this non-profit.',
    link: 'https://mayanmeliponabee.org/',
    icon: <FaSeedling className="text-4xl mb-4" />,
  },
];

const ContributionsSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="contributionsSection" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-light to-secondary text-gray-800 p-5">
      <h2 className="text-4xl font-bold mb-8">Contributions</h2>
      <div className="w-full max-w-5xl overflow-hidden">
        {contributions.map((contribution) => (
          <motion.div
            key={contribution.id}
            className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] m-4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} // Adjust 'amount' as needed to control when the animation triggers
            variants={cardVariants}
          >
            {contribution.icon}
            <h3 className="text-2xl font-semibold mb-2">
              <a href={contribution.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {contribution.title}
              </a>
            </h3>
            <p>{contribution.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContributionsSection;