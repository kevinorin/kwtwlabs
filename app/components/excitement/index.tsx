import { motion } from 'framer-motion';

const ExcitementSection = () => {
  const excitementPoints = [

    {
      id: 1,
      title: 'AI & Machine Learning',
      description: (
        <>
          Learning and applying AI/ML to speed up dev, crack the code of neural networks, and building apps that <span className="line-through">take over</span> empower the world. 🌎🤖
        </>
      ),
    },
    {
      id: 2,
      title: 'Tailwind Oxide',
      description: '@container, text-balance and unified tooling are huge! Using Oxide on this mini-project has been a blast. I\'m excited for the release and continuing to champion Tailwind. 🚀'
    },
  ];  

  return (
    <section id="excitementSection" className="@container snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-accent to-primary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">What I&rsquo;m Excited About</h2>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="bg-white text-gray-800 p-6 rounded-lg shadow-xl first:sm:col-span-3 flex items-center justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Joining Tailwind Labs</h3>
              <p>Development is more thrilling when theirs a passion for the work being done. There aren&rsquo;t enough words to describe how grateful I would be to work at Tailwind Labs . . . so I created this webpage. Working with the team at the forefront my favorite tools/stack would be a dream.🤞🏽</p>
            </div>
            <div className="relative hidden @xl:flex mx-auto z-20 mb-7">
              <iframe
                src="https://giphy.com/embed/oF5oUYTOhvFnO"
                className="relative"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
        </motion.div>
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
