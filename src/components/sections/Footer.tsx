'use client';

import Link from 'next/link';
import {FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-300">
        {/* Logo or Name */}
        <div className="text-lg font-semibold text-gray-800 dark:text-white">
          Harshit Kishor
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#home" className="hover:underline hover:text-blue-600">
            Home
          </Link>
          <Link href="#projects" className="hover:underline hover:text-blue-600">
            Projects
          </Link>
          <Link href="#experience" className="hover:underline hover:text-blue-600">
            Experience
          </Link>
          <Link href="#contact" className="hover:underline hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/harshitkishor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/harshitkishor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:harshitkishor2@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaMailBulk className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs py-4 text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-neutral-800">
        © {new Date().getFullYear()} Harshit Kishor. All rights reserved.
      </div>
    </footer>
  );
}
