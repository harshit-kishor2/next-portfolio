'use client';

import {motion} from 'framer-motion';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const titles = [
  'Mobile App Developer',
  'React Native Specialist',
  'Firebase Enthusiast',
  'Lifelong Learner',
];

export default function TypewriterHeading() {
  const [text] = useTypewriter({
    words: titles,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  // Split last word from the text
  const words = text.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <motion.p
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 1}}
      className="text-lg md:text-2xl font-medium text-gray-300"
    >
      {firstPart}{' '}
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold">
        {lastWord}
      </span>
      <Cursor cursorStyle="|" />
    </motion.p>
  );
}
