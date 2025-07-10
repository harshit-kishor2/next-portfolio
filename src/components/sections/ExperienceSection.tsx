'use client';

import {EXPERIENCE_DATA} from '@/data/experience';
import {cn} from '@/helpers/utils';
import {motion} from 'framer-motion';
import {FaBriefcase} from 'react-icons/fa';
import GradientName from '../ui/GradientName';
import {LandingPageVideo} from '@/helpers/constants';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-10 bg-black backdrop-blur-xs overflow-hidden scroll-mt-10 text-white"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none blur-xs opacity-90"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={LandingPageVideo} type="video/mp4" />
      </video>
      <h2 className="text-2xl md:text-4xl font-extrabold text-center z-10 relative">
        Over 5 Years of Experience in
        <br />
        <GradientName text="Mobile App Development" />
      </h2>
      <p className=" text-sm md:text-lg text-center z-10 relative text-white mb-8 mt-2">
        Over 5 years of experience building scalable mobile apps, mentoring developers, and architecting solutions using modern stacks.
      </p>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-white/20 z-0" />

        <div className="space-y-12 md:space-y-32">
          {EXPERIENCE_DATA.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className={cn(
                  'relative flex flex-col md:flex-row items-center md:items-start',
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                )}
              >
                {/* Neon Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-[#de1dab] blur-md opacity-70 animate-glow" />
                    <div className="relative w-5 h-5 rounded-full bg-[#930d7d6d] border-[3px] border-[#3b053f]" />
                  </div>
                </div>

                {/* Duration Label */}
                <div
                  className={cn(
                    'hidden md:flex items-center gap-2 absolute top-0 left-1/2 transform z-10 text-sm font-medium text-white/60',
                    !isLeft
                      ? '-translate-x-[calc(100%+12px)] flex-row-reverse'
                      : 'translate-x-[12px] flex-row'
                  )}
                >
                  <span className="whitespace-nowrap">{exp.duration}</span>
                </div>

                {/* Card */}
                <div className="relative group w-full md:w-[60%] md:max-w-xl z-10 order-2 md:order-1 ">
                  {/* Optional glowing wrapper */}
                  <div className="absolute inset-0 rounded-3xl p-[1.5px] blur-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{scale: 1.03, translateY: -4}}
                    transition={{type: 'spring', stiffness: 300}}
                    className={cn(
                      'relative p-6 rounded-3xl',
                      'bg-white/20 ',
                      'backdrop-blur-xxl',
                      'border border-white/10',
                      'shadow-[0_4px_30px_rgba(255,255,255,0.05)]'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="w-5 h-5 text-white/80" />
                      <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                    </div>

                    {/* Mobile Duration */}
                    <div className="md:hidden text-sm text-white/60 mb-2">{exp.duration}</div>

                    <p className="font-medium text-white">{exp.company}</p>
                    <p className="text-sm text-white/50 mb-3">{exp.location}</p>

                    <ul className="list-disc list-inside space-y-1 text-sm text-white/70 mb-3">
                      {exp.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 text-white px-2 py-1 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
