'use client';

import {useState} from 'react';
import clsx from 'clsx';
import {FaX} from 'react-icons/fa6';
import {BsMenuButtonWide} from 'react-icons/bs';

const navItems = ['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({behavior: 'smooth'});
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-black cursor-pointer" onClick={() => scrollToSection('Home')}>
          Harshit.dev
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaX className="w-6 h-6" /> : <BsMenuButtonWide className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-black font-medium">
          {navItems.map(item => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className="hover:text-blue-600 transition">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={clsx(
          'md:hidden px-4 pb-4 flex flex-col bg-white shadow-md transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        {navItems.map(item => (
          <li key={item} className="py-2">
            <button onClick={() => scrollToSection(item)} className="w-full text-left text-black font-medium">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
