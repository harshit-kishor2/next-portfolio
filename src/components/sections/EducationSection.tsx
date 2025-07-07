'use client';

import {useRef} from 'react';
import {EDUCATION_DATA} from '@/data/education';
import {motion, useInView} from 'framer-motion';
import {cn} from '@/helpers/utils';
import {FaGraduationCap} from 'react-icons/fa';

export default function EducationSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {once: true, margin: '-100px'});

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-[#0d1a14] overflow-hidden text-white scroll-mt-24"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute w-60 h-60 bg-[#baff29] rounded-full blur-[120px] opacity-30 top-[-40px] left-[-40px] z-0" />
      <div className="absolute w-72 h-72 bg-[#77ff90] rounded-full blur-[140px] opacity-20 bottom-[-60px] right-[-60px] z-0" />

      <h2 className="text-4xl font-extrabold text-[#baff29] mb-16 text-center z-10 relative">
        Education
      </h2>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        {/* Vertical stepper line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-green-800 z-0" />

        <div className="md:space-y-18 space-y-12">
          {EDUCATION_DATA.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{opacity: 0, y: 60}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className={cn(
                  'relative flex flex-col md:flex-row items-center md:items-start',
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                )}
              >
                {/* Neon Glowing Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-[#baff29] blur-md opacity-70 animate-glow" />
                    <div className="relative w-5 h-5 rounded-full bg-[#baff29] border-[3px] border-[#0d1a14]" />
                  </div>
                </div>

                {/* Year label */}
                <div
                  className={cn(
                    'hidden md:block absolute z-10 text-sm font-medium text-lime-300',
                    'left-1/2',
                    !isLeft
                      ? 'transform -translate-x-[calc(100%+12px)] text-right'
                      : 'transform translate-x-[12px] text-left'
                  )}
                >
                  {edu.startYear} – {edu.endYear}
                </div>

                {/* Glassmorphic Card */}
                <div className="relative group w-full md:w-1/2 md:max-w-md z-10 order-2 md:order-1">
                  {/* Optional glowing border on hover */}
                  <div className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-br from-lime-300 via-green-400 to-lime-200 blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{scale: 1.03, translateY: -4}}
                    transition={{type: 'spring', stiffness: 300}}
                    className={cn(
                      'relative p-8 rounded-3xl',
                      'bg-[#0f1f17]/60 backdrop-blur-xl',
                      'border border-white/10',
                      'shadow-[0_4px_30px_rgba(0,255,0,0.1)]'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FaGraduationCap className="w-5 h-5 text-lime-300" />
                      <h3 className="text-lg font-semibold text-lime-100">{edu.degree}</h3>
                    </div>

                    {/* Mobile year */}
                    <div className="md:hidden text-sm text-lime-300 mb-2">
                      {edu.startYear} – {edu.endYear}
                    </div>

                    <p className="text-sm text-lime-200">{edu.field}</p>
                    <p className="mt-1 font-medium text-white">{edu.institution}</p>
                    <p className="text-sm text-lime-400">
                      {edu.duration} &middot; {edu.location}
                    </p>
                    <p className="text-sm text-lime-300 mt-1">
                      Grade: <span className="font-semibold">{edu.grade}</span>
                    </p>
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
