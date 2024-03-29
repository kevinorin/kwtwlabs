import { motion } from 'framer-motion';

const TeachingSection = () => {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-secondary to-primary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">Teaching Ability</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="w-full max-w-4xl text-center"
      >
        <p className="mb-4 text-lg">As a UI/UX Software Engineer in the GovCon space, I've taken the initiative to bridge the gap between traditional development practices and modern, efficient web design and development methodologies.</p>
        <p className="mb-4 text-lg">Through detailed documentation and interactive online training sessions, I've onboarded colleagues to technologies like React, Next.js, and Tailwind CSS, ensuring our team remains at the cutting edge of industry standards.</p>
        <p className="mb-4 text-lg">My ability to demystify complex concepts and engage learners with diverse technical backgrounds has not only elevated our team's capabilities but has also rekindled a culture of continuous learning and curiosity.</p>
        <p className="mb-4 text-lg">Whether through public speaking, writing, or one-on-one mentorship, I'm passionate about empowering others to achieve their full potential in the ever-evolving tech landscape.</p>
      </motion.div>
    </section>
  );
};

export default TeachingSection;
