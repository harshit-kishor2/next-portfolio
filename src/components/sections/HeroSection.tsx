'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {BiChevronDown, BiDownload} from 'react-icons/bi';
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
      setShowScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0c0c0c] text-white"
    >
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-screen px-6 py-20 md:py-14">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className="text-4xl lg:text-6xl font-bold"
          >
            Hi, I&apos;m <GradientName text="Harshit Kishor" />
          </motion.h1>

          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}>
            <TypewriterHeading />
          </motion.div>

          {/* Download Resume */}
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}
            className="flex justify-center md:justify-start"
          >
            <a
              href="https://harshit-kishor2.github.io/portfolio-assets/resume/Harshit_Kishor_ReactNative_Resume.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm font-semibold shadow-md"
            >
              <BiDownload size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.7 + index * 0.2}}
                className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-4 rounded-2xl w-36 text-center hover:scale-105 transition-transform duration-300"
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
          transition={{delay: 1}}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/illustration/illustration6.svg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="absolute bottom-6 w-full flex justify-center z-10"
        >
          <a
            href="#skills"
            className="text-white animate-bounce rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <BiChevronDown size={32} />
          </a>
        </motion.div>
      )}
    </section>
  );
}
