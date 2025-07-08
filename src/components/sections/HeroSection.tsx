'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {BiChevronDown} from 'react-icons/bi';
import ParticlesBackground from '../ui/ParticlesBackground';
import TypewriterHeading from '../ui/TypewriterHeading';
import GradientName from '../ui/GradientName';
import {useEffect, useState} from 'react';

const stats = [
  {title: 'Projects', value: 15},
  {title: 'Clients', value: 8},
  {title: 'Experience', value: 5},
];

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50); // Hide after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0c0c0c]" id="home">
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen w-full px-6 py-20 md:py-14 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Hi, I&apos;m <GradientName text="Harshit Kishor" />
          </h1>

          <TypewriterHeading />

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5 + index * 0.2}}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 shadow-md p-4 rounded-xl w-36 text-center"
              >
                <div className="text-3xl font-bold text-blue-400">{stat.value}+</div>
                <div className="text-sm font-medium text-gray-300">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.8}}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/illustration/illustration6.svg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="absolute bottom-4 w-full flex justify-center z-10"
        >
          <a href="#skills" className="text-white animate-bounce">
            <BiChevronDown size={32} />
          </a>
        </motion.div>
      )}
    </section>
  );
}
