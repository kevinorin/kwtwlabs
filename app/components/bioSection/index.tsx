import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';

export default function BioSection() {
  const [showFullBio, setShowFullBio] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleBio = () => setShowFullBio(!showFullBio);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="bioSection" className="snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-rose-200/30 to-cyan-300/60 backdrop-blur-md text-black w-full mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-5"
      >
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mb-10"
        >
          <Image 
            src={isHovered ? "/images/logo-hover.svg" : "/images/logo.svg"} 
            width="100" 
            height="100" 
            alt="Kevin Williams, UI/UX Software Engineer" 
            className="w-full max-w-xs md:max-w-sm lg:max-w-lg mx-auto mb-10 animate-pulse duration-1000"
          />
        </div>
        <div className="max-w-2xl mx-auto text-balance">
          <p className='font-semibold text-slate-900'>From Georgetown, Guyana to the USA, my journey in web development has evolved from curious beginnings on my first PC to a passionate professional specializing in UI/UX engineering. My life, enriched by family and friends, learning, cooking, traveling, growing, mirrors the diverse and rich experiences I aim to create digitally.</p>
          {showFullBio && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-4 rounded-md bg-slate-100 p-5 shadow-md"
            >
              <p className="py-3">I&rsquo;m driven by curiosity, a knack for finding solutions to problems, and a passion for creating better digital experiences. Consulting and working with various clients and teams has not only steered me toward my preferred stack—JamStack React/Next, APIs and Tailwind CSS—but has also equipped me with a versatile set of skills, including brand design, SEO, video editing, and hosting with MUX.</p>
              <p className="py-3">A coveted position at Tailwind Labs requires not just the appropriate skills but also a fitting personality for the team. I&rsquol;m dedicated to perpetual learning and skill enhancement, aiming to be a constructive and uplifting team player.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <RotatableElement
                  hoverType="video"
                  hoverContent="l1cox01N010201oLIiR7YRhSaA6GWM83K8zT7Fuzr4N44mw"
                  staticText="I love hiking and chasing waterfalls."
                  width={320}
                  height={180}
                />
                <RotatableElement
                  hoverType="image"
                  hoverContent="https://image.mux.com/WoJ499XJPeW8cYCZVHpK01mrb02vuI7fuRCfKHJqtRsqc/animated.gif?width=320"
                  staticText="I love to cook. . .sure I'll make you Bao Buns."
                  width={320}
                  height={180}
                />
                <RotatableElement
                  hoverType="image"
                  hoverContent="https://image.mux.com/w5S318v00o9lSmy8mY1UNT7dXoyKCZ2ABHIB01VggVHBs/animated.gif?width=320"
                  staticText="I love to eat and grow food. #Permaculture"
                  width={320}
                  height={180}
                />
                <RotatableElement
                  hoverType="video"
                  hoverContent="PtQpfV864g2mDy6m00CuywH4or8wem76mMVmz99bUeEs"
                  staticText="I consider myself an autodidact and an artist."
                  width={320}
                  height={180}
                />
              </div>
            </motion.p>
            
          )}
          <button onClick={toggleBio} className="mt-4 hover:cursor-pointer text-blue-600 underline">
            {showFullBio ? 'Less about me' : 'More about me . . .'}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function RotatableElement({ hoverType, hoverContent, staticText, width, height }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCloseClick = () => {
    setIsFlipped(false);
  };
  const handleMainClick = () => {
    if (!isFlipped) setIsFlipped(true);
  };

  const frontStyle = {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.5 },
    position: 'relative',
    backfaceVisibility: 'hidden',
  };

  const backStyle = {
    rotateY: 180,
    opacity: 0,
    transition: { duration: 0.5 },
    position: 'absolute',
    backfaceVisibility: 'hidden',
  };

  const containerStyle = {
    perspective: 1000, // Children will be positioned in a 3D-space
  };

  const renderContent = () => {
    switch (hoverType) {
      case 'image':
        return (
          <Image
            src={hoverContent}
            alt="A description of the content"
            width={width}
            height={height}
            layout="fixed"
          />
        );
      case 'video':
        return (
          <MuxPlayer
            streamType="on-demand"
            playbackId={hoverContent}
            metadataVideoTitle="A description of the content"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            width={width}
            height={height}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative" style={containerStyle}>
      <motion.div
        onClick={handleMainClick}
        animate={isFlipped ? backStyle : frontStyle}
        className="relative flex flex-col items-center rounded-md shadow-md p-5 my-5 text-wrap hover:cursor-pointer bg-slate-800 text-white"
      >
        {staticText}
      </motion.div>
      <motion.div
        onClick={handleMainClick}
        animate={isFlipped ? frontStyle : backStyle}
        className="relative flex flex-col items-center rounded-md shadow-md p-4 py-1 my-5 text-wrap hover:cursor-pointer"
      >
        {renderContent()}
        <button onClick={handleCloseClick} className="absolute top-0 right-0 p-2">
        <span className="material-symbols-outlined text-red-500 mr-1">cancel</span>
        </button>
      </motion.div>
    </div>
  );
}
