/* eslint-disable @next/next/no-img-element */
'use client';

import {IProject, IProjectTag, PROJECT_TAGS, PROJECTS_DATA} from '@/data/projects';
import {useState, useMemo, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import GlassCursor from '../ui/GlassCursor';
import RandomFallbackImage from '../ui/RandomFallbackImage';
import GradientName from '../ui/GradientName';

export default function ProjectSection() {
  const [selectedTag, setSelectedTag] = useState<IProjectTag>('All');
  const [activeProject, setActiveProject] = useState<IProject | null>(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.tags?.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-black dark:bg-gray-950 transition-colors duration-300">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-99 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={'/video/video1.mp4'} type="video/mp4" />
      </video>

      {/* Overlay (optional, to darken the video even more) */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Recent Achievements and
          <br />
          <GradientName text="Projects" />
        </h2>
        <p className="text-center text-amber-50 mb-8 mt-2">
          A curated list of impactful apps and platforms I&apos;ve developed across various domains including crypto, food delivery, fitness, and more.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PROJECT_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${selectedTag === tag
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.4, delay: idx * 0.1}}
              viewport={{once: true}}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-shadow cursor-pointer border border-gray-700"
              onClick={() => setActiveProject(project)}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
              data-cursor-target
            >
              <GlassCursor hovering={isHoveringCard} />

              <div className="relative h-40">
                <RandomFallbackImage
                  src={project.thumbnail || ''}
                  alt={project.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-xl p-6 max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh] border border-gray-700"
              initial={{scale: 0.9, y: 100}}
              animate={{scale: 1, y: 0}}
              exit={{scale: 0.9, y: 100}}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full h-52 mb-4 rounded-md overflow-hidden">
                <RandomFallbackImage
                  src={activeProject.thumbnail || ''}
                  alt={activeProject.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                {activeProject.description}
              </p>

              <ul className="list-disc pl-6 mb-4 text-sm text-gray-300 space-y-1">
                {activeProject.features.map((f: string, i: number) => (
                  <li key={i.toString() + '_list'}>{f}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-indigo-800 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                {Object.entries(activeProject.link || {}).map(([key, value]) => value && (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
