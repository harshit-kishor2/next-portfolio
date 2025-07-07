/* eslint-disable @next/next/no-img-element */
'use client';

import {ISkillCategory} from '@/data/skills';
import {motion} from 'framer-motion';

type Props = {
  section: ISkillCategory;
  onClick: () => void;
};

export default function SkillCard({section, onClick}: Readonly<Props>) {
  const visibleSkills = section.items.slice(0, 5);
  const remainingCount = section.items.length - visibleSkills.length;

  return (
    <motion.div
      whileHover={{scale: 1.05, rotate: -1}}
      transition={{type: 'spring', stiffness: 200, damping: 10}}
      onClick={onClick}
      className="cursor-pointer relative group bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-md p-8 transform-gpu hover:shadow-2xl transition-all"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{section.category}</h3>

      <div className="flex flex-wrap gap-3">
        {visibleSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-1 bg-white/70 dark:bg-gray-800 text-sm rounded-full border border-gray-300 dark:border-gray-600 shadow-sm backdrop-blur-sm"
            title={skill.tooltip}
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-4 h-4"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              />
            )}
            <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
          </div>
        ))}

        {remainingCount > 0 && (
          <div
            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white text-sm rounded-full border border-indigo-300 dark:border-indigo-600 font-medium"
            title={`+${remainingCount} more`}
          >
            +{remainingCount} more
          </div>
        )}
      </div>

      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full shadow transition-opacity duration-300"
        initial={{y: 10}}
        animate={{y: 0}}
        transition={{duration: 0.3}}
      >
        Click to see skill mastery →
      </motion.div>
    </motion.div>
  );
}
