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
    <section id="excitementSection" className="@container min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-accent to-primary text-black p-5 md:p-32 px-5">
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
              <h3 className="text-2xl font-semibold mb-2">Joining your Agency</h3>
              <p>Thriving in environments where innovation meets purpose, I find development more thrilling when there&rsquo;s a deep passion for the work being done. I&rsquo;m eager to find a company where I can settle in, grow roots, and contribute to meaningful projects. </p>
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
