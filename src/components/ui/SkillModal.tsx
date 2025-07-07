'use client';

import {ISkillCategory} from '@/data/skills';
import {motion} from 'framer-motion';
import {useEffect, useMemo, useState} from 'react';

const getRandomGradient = () => {
  const gradients = [
    'from-pink-500 to-yellow-500',
    'from-blue-500 to-purple-500',
    'from-green-400 to-blue-500',
    'from-indigo-500 to-pink-500',
    'from-teal-400 to-cyan-500',
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

type Props = {
  activeCategory: ISkillCategory | null;
  onClose: () => void;
};

export default function SkillModal({activeCategory, onClose}: Readonly<Props>) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.body.style.overflow = activeCategory ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCategory]);

  const filteredSkills = useMemo(() => {
    if (!activeCategory) return [];
    return activeCategory.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  if (!activeCategory) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white dark:bg-gray-900 rounded-xl p-[2px] w-full max-w-lg shadow-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-gradient border border-transparent"
        initial={{scale: 0.8, y: 100}}
        animate={{scale: 1, y: 0}}
        exit={{scale: 0.8, y: 100}}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white dark:bg-gray-900 rounded-[inherit] p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{activeCategory.category}</h4>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500">✕</button>
          </div>

          <input
            type="text"
            placeholder="Search skill..."
            className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {filteredSkills.map((skill, idx) => {
              const gradient = getRandomGradient();
              return (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-1 text-gray-800 dark:text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${gradient}`}
                      initial={{width: 0}}
                      animate={{width: `${skill.level}%`}}
                      transition={{duration: 0.6, delay: idx * 0.05}}
                    />
                  </div>
                </div>
              );
            })}
            {filteredSkills.length === 0 && (
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-8">No skills found.</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
