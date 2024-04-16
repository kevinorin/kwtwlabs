import { motion } from 'framer-motion';

const TeachingSection = () => {
  return (
    <section id="teachingSection" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-secondary to-primary text-black p-5">
      <h2 className="text-4xl font-bold mb-8">Teaching Ability</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="w-full max-w-4xl text-left"
      > <h2 className="text-2xl font-semibold pt-5 mb-4">Documentating & Online Training</h2>
        <p className="mb-4 text-lg">I&rsquo;m currently a UI/UX Software Engineer for a government contractor (GovCon space) where I&rsquo;ve taken the initiative to bridge the gap between traditional development practices and modern, efficient web design and development methodologies. The GovCon space IMO has an adherence to legacy systems and a marked reluctance towards innovation.</p>
        <p className="mb-4 text-lg">I&rsquo;ve written documentation for colleagues, held interactive online training sessions and onboarded a few colleagues to technologies like Tailwind CSS to making project more performant, maintable...and more enjoyable to work on.</p>
        <h2 className="text-2xl font-semibold pt-5 mb-4">Public Speaking</h2>
        <p className="mb-4 text-lg">I&rsquo;m generally introverted, but not when it comes to public speaking. I&rsquo;ve performed in a theatrical drama for thousands, been an assistant teacher on several permaculture design coursed and addressed audiences of over 200 individuals. I&rsquo;ve honed my ability to engage and captivate diverse groups. My approach is simple: Preparation, knowing and being passionate about the subject matter well enough to pivot, and...acting. Yes, for someone introverted like me, confident public speaking is essentially an act of performing.🎭</p>

        <p className="mb-4 text-lg"> While I haven&rsquo;t led workshops in the past, I am open to presenting complex ideas and leading workshops as needed. My diverse experience across sectors, from non-profit consulting to personal consultation, has allowed me to effectively transfer knowledge, simplify complex concepts, and engage with learners of varied technical backgrounds.</p>
        <p className="mb-4 text-lg">Whether through digital communication, public speaking or mentorship, I&rsquo;m open to empowering others to achieve their full potential in the ever-evolving tech landscape.</p>
      </motion.div>
    </section>
  );
};

export default TeachingSection;
