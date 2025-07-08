'use client';

import {motion} from 'framer-motion';
import React from 'react';

interface GradientNameProps {
  text: string;
  className?: string;
}

const GradientName: React.FC<GradientNameProps> = ({text, className = ''}) => {
  return (
    <motion.span
      initial={{scale: 0.9, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 1}}
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent italic font-serif ${className}`}
    >
      {text}
    </motion.span>
  );
};

export default GradientName;
