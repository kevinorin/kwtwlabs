import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';

export default function BioSection() {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <section id="bioSection" className="snap-start h-screen flex flex-col justify-center items-center bg-primary text-black w-full mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-5"
      >
        {/* Bio content and introduction */}
        <div className="max-w-2xl mx-auto text-balance">
          <p>From Georgetown, Guyana to the USA, my journey in web development has evolved from curious beginnings on my first PC to a passionate professional specializing in UI/UX engineering. My life, enriched by family and friends, learning, cooking, traveling, growing, mirrors the diverse and rich experiences I aim to create digitally.</p>
          {showFullBio && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-4 rounded-md bg-slate-100 p-5 shadow-md"
            >
              {/* Full bio and details */}
            </motion.p>
          )}
          <button onClick={toggleBio} className="mt-4 hover:cursor-pointer text-blue-600 underline">
            {showFullBio ? 'Less about me' : 'More about me . . .'}
          </button>
        </div>
      </motion.div>
      {/* Rotatable elements showcasing skills, hobbies, etc. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Example RotatableElement */}
        <RotatableElement
          hoverType="image"
          hoverContent="https://image.mux.com/WoJ499XJPeW8cYCZVHpK01mrb02vuI7fuRCfKHJqtRsqc/animated.gif?width=320"
          staticText="I love to cook. . .sure I'll make you Bao Buns."
          width={320}
          height={180}
        />
        {/* Add more RotatableElement as needed */}
      </div>
    </section>
  );
}

interface RotatableElementProps {
  hoverType: 'image' | 'video';
  hoverContent: string;
  staticText: string;
  width: number;
  height: number;
}

function RotatableElement({ hoverType, hoverContent, staticText, width, height }: RotatableElementProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMainClick = () => {
    if (!isFlipped) setIsFlipped(true);
  };

  const handleCloseClick = () => {
    setIsFlipped(false);
  };

  // Styles
  const frontStyle = { rotateY: 0 };
  const backStyle = { rotateY: 180 };

  const renderContent = () => {
    switch (hoverType) {
      case 'image':
        return <Image src={hoverContent} alt="A description of the content" width={width} height={height} layout="fixed" />;
      case 'video':
        return <MuxPlayer streamType="on-demand" playbackId={hoverContent} metadataVideoTitle="A description of the content" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col items-center rounded-md shadow-md my-5 text-wrap bg-white">
      <motion.div
        className="p-4 w-full text-center cursor-pointer"
        onClick={handleMainClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {!isFlipped && staticText}
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-4"
        onClick={handleCloseClick}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {isFlipped && (
          <>
            {renderContent()}
            <button onClick={handleCloseClick} className="absolute top-0 right-0 p-2 text-2xl">&times;</button>
          </>
        )}
      </motion.div>
    </div>
  );
}
