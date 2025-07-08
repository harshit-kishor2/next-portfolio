'use client';

import {useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import {SkillCard, SkillModal} from '../ui';
import {ISkillCategory, SKILLS_DATA} from '@/data/skills';
import GradientName from '../ui/GradientName';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<ISkillCategory | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map((s) => s.category)];

  const filteredSkills =
    selectedFilter === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedFilter);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Top-Tier Tools for
          <br />
          <GradientName text="Exceptional Results" />
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 mt-2">
          Here are the core technologies, tools, and platforms I use to bring digital products to life — from idea to launch.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${selectedFilter === cat
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((section, idx) => (
            <SkillCard
              key={section.category + idx}
              section={section}
              onClick={() => setActiveCategory(section)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <SkillModal activeCategory={activeCategory} onClose={() => setActiveCategory(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
