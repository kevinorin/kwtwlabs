import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaStackOverflow, FaSeedling } from 'react-icons/fa';

const contributions = [
  {
    id: 1,
    title: 'GitHub',
    description: 'Mostly private repos but I\'ve made it a goal to increase my contributions to Open Source projects and add more demos.',
    link: 'https://github.com/kevinorin',
    icon: <FaGithub className="text-4xl mb-4" />,
  },
  {
    id: 2,
    title: '457k People Reached on Stack Overflow',
    description: 'I surf the Stack Exchange network and contribute to problem solving when I can.',
    link: 'https://stackoverflow.com/users/875390/devkev?tab=profile',
    icon: <FaStackOverflow className="text-4xl mb-4" />,
  },
  {
    id: 3,
    title: 'Supporting Meliponario Bees',
    description: 'I contribute to the preservation and repopulation of Meliponario bees through this non-profit.',
    link: 'https://mayanmeliponabee.org/',
    icon: <FaSeedling className="text-4xl mb-4" />,
  },
];

const ContributionsSection = () => {
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  const startAnimation = (newWidth: number) => {
    controls.start({
      x: [`0px`, `-${newWidth}px`, `0px`, `${newWidth}px`],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  };

  useEffect(() => {
    const updateWidthAndAnimate = () => {
      const container = document.getElementById('sliderContainer');
      if (container) {
        const newWidth = container.scrollWidth - container.offsetWidth;
        setWidth(newWidth);
        startAnimation(newWidth); // Use the function to start/restart the animation
      }
    };

    window.addEventListener('resize', updateWidthAndAnimate);
    updateWidthAndAnimate(); // Trigger animation on mount
    return () => window.removeEventListener('resize', updateWidthAndAnimate);
  }, [controls]);

  return (
    <section id="contributionsSection" className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-light to-secondary text-gray-800 p-5">
      <h2 className="text-4xl font-bold mb-8">Contributions</h2>
      <div id="sliderContainer" className="w-full max-w-5xl overflow-hidden">
      <motion.div
        className="flex"
        animate={controls}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => startAnimation(width)} // Use the animation function on hover end as well
      >
          {contributions.map((contribution) => (
            <div key={contribution.id} className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] m-4">
              {contribution.icon}
              <h3 className="text-2xl font-semibold mb-2">
                <a href={contribution.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {contribution.title}
                </a>
              </h3>
              <p>{contribution.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ContributionsSection;