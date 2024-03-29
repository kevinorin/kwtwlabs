import { motion } from 'framer-motion';

const OutroSection = () => {
  return (
    <section className="snap-end min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary text-black p-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
        <p className="text-lg mb-8">Thank you for exploring my portfolio. I'm excited about the possibility of contributing to Tailwind Labs and the broader community.</p>
        <a href="mailto:your.email@example.com" className="bg-white text-dark px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out hover:bg-light hover:text-primary">Get In Touch</a>
      </motion.div>
    </section>
  );
};

export default OutroSection;
