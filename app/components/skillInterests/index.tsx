import { motion } from 'framer-motion';
import Link from 'next/link';

const SkillsAndInterests = () => {
  const skills = [
    
    {
      id: 1,
      title: 'API Integration',
      description: "Merging different technologies and services through API integration for enhanced user engagement brings a new level of interactivity to the projects I work on."
    },
    {
      id: 2,
      title: 'Tailwind CSS',
      description: "My absolute favorite! The flexibility and utility-first approach make it a joy for styling applications swiftly in a single file."
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: "Crafting user-centric designs is where I thrive. I love creating meaningful and delightful experiences for users."
    },
    {
      id: 4,
      title: 'Sanity CMS',
      description: "It's flexibility for headless applications is unparalleled, making content management a breeze."
    },
    {
      id: 5,
      title: 'Permaculture',
      description: (
        <>
          100+ hour certification in this design system. Settling Mars can wait, let&rsquo;s <Link href="https://www.youtube.com/watch?v=yI9wMtTvWps" target='_blank' className="text-blue-600">re-green some deserts</Link>.🌎
        </>
      ),
    },
    {
      id: 6,
      title: 'Blockchains',
      description: "Blockchain development is another hobby I'm very curious about and the applications of it's emerging technology."
    }
  ];

  return (
    <section id="skillsAndInterests" className="@container snap-start min-h-screen flex flex-col justify-center items-center text-black p-5">
      <h2 className="text-4xl font-bold mt-14 md:mb-8">Skills & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="bg-white text-dark p-6 rounded-lg shadow-md hover:scale-105 hover:bg-prime2-200 first:sm:col-span-2"
        >
          <h3 className="text-xl font-semibold mb-2">Jamstack</h3>
          <p>Over two decades of development have led me to my ideal stack: Next.js and Tailwind CSS for performant web applications, combined with APIs and Sanity CMS for dynamic, scalable projects. This blend represents the pinnacle of my journey, leveraging <Link href="https://jamstack.org/" target='_blank' className="text-blue-600">Jamstack</Link> principles for cutting-edge, user-centric solutions.</p>
        </motion.div>
        {skills.map(skill => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: skill.id * 0.2 }}
            className="bg-white text-dark p-6 rounded-lg shadow-md hover:scale-105 hover:bg-prime2-200"
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
