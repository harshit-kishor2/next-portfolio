'use client';

import {Typewriter} from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from '../ui/ParticlesBackground';
import {BiChevronDown} from 'react-icons/bi';

const stats = [
  {title: 'Projects', value: 15},
  {title: 'Clients', value: 8},
  {title: 'Experience', value: 5},
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f172a]" id="home">
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen w-full px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{scale: 0.9, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 1}}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Hi, I&apos;m Harshit Kishor
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 1}}
            className="text-lg md:text-2xl font-medium text-gray-300"
          >
            <Typewriter
              words={[
                'Mobile App Developer',
                'React Native Specialist',
                'Firebase Enthusiast',
                'Lifelong Learner',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>

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
            src="/illustration/illustration1.svg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center z-10">
        <a href="#projects" className="text-white animate-bounce">
          <BiChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
