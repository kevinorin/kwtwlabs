import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const OutroSection = () => {
  return (
    <section id="outroSection" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary text-black p-5 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center text-balance"
      >
        <h2 className="text-4xl font-bold mb-4">Thanks for your consideration.</h2>
        <p className="text-lg mb-8">Reading the <Link className="font-semibold text-slate-900 hover:text-slate-700" href="https://nc-waterfalls-lilac.vercel.app/" target="_blank">Design Engineering</Link> role at Tailwind Labs was the closest thing to seeing my dream job described on paper. From dabbling with animations and video editing to building out Tailwind&rsquo;s next release, every point resonates with my experiences and aspirations.</p>
        <p className="text-lg mb-8">With a strong foundation in UI/UX, a knack for prototyping with the latest tech, and a love for experimenting, I&rsquo;m eager to bring my blend of creativity and technical skill to Tailwind Labs.</p>
        <p className="text-lg mb-8">This application is a testament to my readiness to contribute to and grow with your team, embracing every challenge and opportunity that comes with being at the forefront of engineering.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <a href="mailto:kevino.williams@gmail.com" className="bg-white text-dark px-6 py-2 rounded-full font-bold transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:text-primary hover:scale-110 flex items-center">
            <span className="material-symbols-outlined text-blue-600 mr-1">email</span>
            <span>Email Me</span>
          </a>
          <a href="tel:+1-732-822-3031" className="bg-white text-dark px-6 py-2 rounded-full font-bold transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:text-primary hover:scale-110 flex items-center">
            <span className="material-symbols-outlined text-green-600 mr-1">call</span>
            <span>Call Me</span>
          </a>
        </div>
        <Image src="/images/sig.png" width="200" height="100" alt="Kevin Williams Signature" className="mx-auto mt-8" />

      </motion.div>
    </section>
  );
};

export default OutroSection;
