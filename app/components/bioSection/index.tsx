// components/BioSection.js
import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <section className="snap-start h-screen flex flex-col justify-center items-center bg-primary text-black">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-5"
      >
        <h1 className="text-5xl font-bold mb-2">Kevin O. Williams</h1>
        <p className="text-2xl mb-4">Software Engineer & UI/UX Enthusiast</p>
        <p className="max-w-md mx-auto">Passionate about building seamless, user-friendly digital experiences with modern technologies like React, Next.js, and Tailwind CSS.</p>
      </motion.div>
    </section>
  );
}
