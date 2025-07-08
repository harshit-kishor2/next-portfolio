'use client';

import {useState} from 'react';
import clsx from 'clsx';
import {
  SiHomebridge,
  SiSkillshare,
} from 'react-icons/si';
import {
  BiCodeAlt,
  BiBook,
  BiEnvelope,
  BiUser,
} from 'react-icons/bi';

const navItems = [
  {id: 'Home', icon: <SiHomebridge size={20} />, tooltip: 'Home'},
  {id: 'Skills', icon: <SiSkillshare size={20} />, tooltip: 'Skills'},
  {id: 'Projects', icon: <BiCodeAlt size={20} />, tooltip: 'Projects'},
  {id: 'Experience', icon: <BiUser size={20} />, tooltip: 'Experience'},
  {id: 'Education', icon: <BiBook size={20} />, tooltip: 'Education'},
  {id: 'Contact', icon: <BiEnvelope size={20} />, tooltip: 'Contact'},
];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({behavior: 'smooth'});
    setActive(id);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
      <div className="backdrop-blur-md bg-white/10 dark:bg-neutral-900/40 border border-white/20 dark:border-white/10 rounded-full shadow-xl flex items-center gap-2 px-4 py-2 max-w-[360px] overflow-x-auto hide-scrollbar">
        {navItems.map(({id, icon, tooltip}) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={clsx(
              'relative group w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-300',
              active === id
                ? 'bg-blue-500/20 dark:bg-white/20 scale-110 shadow-md'
                : 'hover:bg-white/20 dark:hover:bg-white/10',
              'text-white'
            )}
          >
            {icon}

            {/* Tooltip */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full px-3 py-1 text-xs text-white bg-black/80 dark:bg-white/10 backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
              {tooltip}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
