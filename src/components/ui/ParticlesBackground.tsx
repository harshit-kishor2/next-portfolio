'use client';

import {useCallback, useEffect, useMemo, useState} from 'react';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {type ISourceOptions} from '@tsparticles/engine';
import {loadSlim} from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [theme, setTheme] = useState<'morning' | 'evening' | 'night'>('morning');

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setTheme('morning');
    else if (hour >= 12 && hour < 18) setTheme('evening');
    else setTheme('night');
  }, []);

  const getThemeColors = useCallback(() => {
    switch (theme) {
      case 'morning':
        return ['#FDB813', '#FFFACD'];
      case 'evening':
        return ['#FF6E7F', '#FFD194'];
      case 'night':
        return ['#ffffff', '#64748b'];
    }
  }, [theme]);

  const options: ISourceOptions = useMemo(() => {
    const op: ISourceOptions = {
      background: {
        color: {value: '#0c0c0c'}, // Transparent to show gradient
      },
      fullScreen: {enable: false},
      particles: {
        color: {value: getThemeColors()},
        links: {
          enable: true,
          distance: 120,
          color: getThemeColors()[0],
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          outModes: 'bounce',
        },
        number: {
          value: 50,
          density: {enable: true},
        },
        opacity: {value: 0.5},
        shape: {type: 'circle'},
        size: {value: {min: 1, max: 4}},
      },
      interactivity: {
        events: {
          onHover: {enable: true, mode: 'repulse'},
          onClick: {enable: true, mode: 'push'},
        },
        modes: {
          repulse: {distance: 100, duration: 0.4},
          push: {quantity: 4},
        },
      },
      detectRetina: true,
    };
    return op as ISourceOptions;
  },
    [getThemeColors]
  );

  if (!init) return null;

  return (
    // <Particles
    //   id="tsparticles"
    //   options={options}
    //   particlesLoaded={async (container) => console.log(container)}
    // />
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles id="heroParticles" options={options} />
    </div>
  );
};

export default ParticlesBackground;
