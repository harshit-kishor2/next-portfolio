'use client';

import {useMemo} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function LandingVisual() {
  const hour = useMemo(() => new Date().getHours(), []);
  const mode = hour >= 6 && hour < 18 ? 'day' : 'night';

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-xl transition-all duration-1000">
      {/* Sky background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 z-0 ${mode === 'night'
          ? 'bg-gradient-to-t from-gray-900 via-blue-900 to-black'
          : 'bg-gradient-to-t from-blue-100 via-sky-200 to-yellow-100'
          }`}
      />

      {/* Sun (Day Mode) */}
      {mode === 'day' && (
        <motion.div
          initial={{y: 200, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{type: 'spring', duration: 2}}
          className="absolute w-32 h-32 rounded-full bg-yellow-400 shadow-[0_0_60px_20px_rgba(255,230,0,0.4)] left-10 top-10 z-10"
        />
      )}

      {/* Night Watch Tower */}
      {mode === 'night' && (
        <>
          {/* Glow animation */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 2}}
            className="absolute w-12 h-12 left-[50%] top-[60%] -translate-x-1/2 bg-yellow-300 blur-2xl opacity-50 rounded-full z-10 animate-pulse"
          />

          {/* Tower image */}
          <Image
            src="/images/watchtower.png"
            alt="Watch Tower"
            width={150}
            height={300}
            className="absolute left-1/2 top-[45%] -translate-x-1/2 z-20"
          />
        </>
      )}

      {/* Optional stars layer (night) */}
      {mode === 'night' && (
        <div className="absolute inset-0 z-0 animate-fade-in">
          <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
          <div className="absolute top-28 right-32 w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-pulse" />
          <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          {/* Add more star elements */}
        </div>
      )}
    </div>
  );
}
