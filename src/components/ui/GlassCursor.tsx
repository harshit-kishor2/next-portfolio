'use client';

import {useEffect, useState} from 'react';
import {FaEye} from 'react-icons/fa';

export default function GlassCursor({hovering}: {hovering: boolean;}) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [cursorSize, setCursorSize] = useState(100);

  // 👇 Set initial + responsive size
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setCursorSize(70);
      else if (width < 1024) setCursorSize(85);
      else setCursorSize(100);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY});
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const radius = cursorSize / 2;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${position.x - radius}px, ${position.y - radius}px)`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    >
      {hovering && (
        <div
          className={`
            relative w-full h-full rounded-full
            bg-gradient-to-br from-blue-200/30 to-indigo-500/30
            backdrop-blur-md border border-white/30 shadow-xl
            flex items-center justify-center
          `}
        >
          {/* 👁️ Eye Icon */}
          <div
            className="rounded-xl bg-white/10 backdrop-blur-sm text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center"
            style={{
              width: cursorSize * 0.28,
              height: cursorSize * 0.28,
              fontSize: cursorSize * 0.16,
            }}
          >
            <FaEye />
          </div>

          {/* 🔁 Circular Text */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <div
              className="rounded-full bg-blue-100/30 backdrop-blur-sm animate-spin-slow"
              style={{
                width: cursorSize * 0.87,
                height: cursorSize * 0.87,
              }}
            >
              <svg
                viewBox={`0 0 ${cursorSize * 0.87} ${cursorSize * 0.87}`}
                className="w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d={`
                      M ${cursorSize * 0.435}, ${cursorSize * 0.435}
                      m -${cursorSize * 0.37}, 0
                      a ${cursorSize * 0.37},${cursorSize * 0.37} 0 1,1 ${cursorSize * 0.74},0
                      a ${cursorSize * 0.37},${cursorSize * 0.37} 0 1,1 -${cursorSize * 0.74},0
                    `}
                  />
                </defs>
                <text
                  fill="#1e3a8a"
                  fontSize={cursorSize * 0.065}
                  fontWeight="600"
                  letterSpacing="4px"
                >
                  <textPath xlinkHref="#circlePath">
                    {Array(2).fill('VIEW DETAILS ✦ ').join('')}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
