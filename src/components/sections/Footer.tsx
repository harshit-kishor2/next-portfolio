'use client';

import Link from 'next/link';
import {FaGithub, FaLinkedin, FaEnvelope, FaArrowUp} from 'react-icons/fa';
import {useEffect, useState} from 'react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <footer className="relative mt-24 text-white">
      {/* Glow Border Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 before:absolute before:inset-0 before:rounded-xl before:blur-xl before:opacity-40 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 animate-pulse" />

      {/* Glass Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 rounded-xl border border-gray-700/40 bg-black/30 backdrop-blur-md shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name / Logo */}
          <div className="text-2xl font-bold tracking-wide hover:tracking-wider transition-all duration-300">
            Harshit Kishor
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
            <Link href="#home" className="hover:text-white transition">Home</Link>
            <Link href="#skills" className="hover:text-white transition">Skills</Link>
            <Link href="#projects" className="hover:text-white transition">Projects</Link>
            <Link href="#experience" className="hover:text-white transition">Experience</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/harshitkishor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/harshitkishor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:harshitkishor2@gmail.com"
              className="hover:text-red-500 transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider & Note */}
        <div className="border-t border-gray-700/60 mt-8 pt-6 text-xs text-center text-gray-400">
          © {new Date().getFullYear()} Harshit Kishor — All rights reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-md border border-gray-700/60 text-white shadow-md hover:bg-white/10 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
