import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../ThemeContext';

/* ------------------------------------------------------------------ */
/*  Detect touch / mobile once at module level (avoids re-checks)     */
/* ------------------------------------------------------------------ */
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.innerWidth < 768
  );
};

/* ------------------------------------------------------------------ */
/*  Lightweight CSS-only mobile fallback                              */
/* ------------------------------------------------------------------ */
const mobileFallbackStyles = {
  constellation: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 30% 20%, rgba(3,12,15,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(3,12,15,0.04) 0%, transparent 60%)',
  },
  bokeh: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 20% 50%, rgba(4,19,24,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(4,19,24,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(4,19,24,0.04) 0%, transparent 50%)',
  },
  network: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 40% 30%, rgba(14,93,108,0.08) 0%, transparent 55%), radial-gradient(ellipse at 60% 70%, rgba(23,162,184,0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(7,30,38,0.05) 0%, transparent 50%)',
  },
};

/* ------------------------------------------------------------------ */
/*  Desktop particle configs (unchanged from original)                */
/* ------------------------------------------------------------------ */
const constellationConfig = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    // Darkened color from '#071E26' to a deeper, higher-contrast charcoal/black
    color: { value: '#030c0f' },
    links: {
      color: '#030c0f',
      distance: 150,
      enable: true,
      opacity: 0.35, // Increased opacity for stronger lines (was 0.15)
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 1.0, // Slightly increased speed for responsiveness
      direction: 'none',
      outModes: { default: 'bounce' },
    },
    number: {
      value: 65,
      density: { enable: true, area: 900 },
    },
    opacity: { value: 0.35 }, // Increased baseline opacity (was 0.15)
    shape: { type: 'circle' },
    size: { value: { min: 1.5, max: 3.5 } },
  },
  interactivity: {
    events: {
      onHover: { 
        enable: true, 
        mode: ['grab', 'bubble'] // Added bubble on hover to make nodes grow when hovered
      },
    },
    modes: {
      grab: { 
        distance: 160, 
        links: { opacity: 0.6 } // High-contrast link connection on hover
      },
      bubble: {
        distance: 160,
        size: 6,
        duration: 0.4,
        opacity: 0.8,
      }
    },
  },
  detectRetina: true,
};

const bokehConfig = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    // Darkened bokeh particles for stronger contrast on light backgrounds
    color: { value: '#041318' },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'top',
      outModes: { default: 'out' },
      straight: false,
    },
    number: {
      value: 40,
      density: { enable: true, area: 800 },
    },
    opacity: {
      value: { min: 0.1, max: 0.25 }, // Darkened by increasing minimum and maximum opacity range (was 0.03 to 0.08)
      animation: { enable: true, speed: 0.3, minimumValue: 0.08, sync: false },
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 8, max: 40 },
      animation: { enable: true, speed: 2, minimumValue: 5, sync: false },
    },
  },
  interactivity: {
    events: {
      onHover: { 
        enable: true, 
        mode: 'repulse' // Adds a subtle interactive push-away effect when mouse moves through bokeh circles
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};

const networkConfig = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#17A2B8', '#071E26', '#5BC0BE'] },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'top-right',
      outModes: { default: 'out' },
      straight: true,
    },
    number: {
      value: 35,
      density: { enable: true, area: 800 },
    },
    opacity: {
      value: { min: 0.1, max: 0.3 },
      animation: { enable: true, speed: 0.3, minimumValue: 0.1, sync: false },
    },
    shape: { 
      type: ['square', 'triangle', 'circle'] 
    },
    size: { 
      value: { min: 2, max: 5 } 
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
      },
    },
    modes: {
      bubble: {
        distance: 200,
        size: 8,
        duration: 2,
        opacity: 0.6,
      },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground({ variant = 'constellation', className = '' }) {
  const [init, setInit] = useState(false);
  const [mobile] = useState(() => isMobileDevice());

  useEffect(() => {
    // Skip initialising the entire particles engine on mobile — huge perf win
    if (mobile) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, [mobile]);

  const { darkMode } = useTheme();

  const options = useMemo(() => {
    let baseConfig;
    if (variant === 'bokeh') {
      baseConfig = JSON.parse(JSON.stringify(bokehConfig));
      if (darkMode) {
        baseConfig.particles.color.value = '#F0F7F8';
        baseConfig.particles.opacity.value = { min: 0.05, max: 0.15 };
      }
    } else if (variant === 'network') {
      baseConfig = JSON.parse(JSON.stringify(networkConfig));
      if (darkMode) {
        baseConfig.particles.color.value = ['#17A2B8', '#F0F7F8', '#5BC0BE'];
      }
    } else {
      baseConfig = JSON.parse(JSON.stringify(constellationConfig));
      if (darkMode) {
        baseConfig.particles.color.value = '#F0F7F8';
        baseConfig.particles.links.color = '#F0F7F8';
        baseConfig.particles.opacity.value = 0.15;
        baseConfig.particles.links.opacity = 0.15;
      }
    }
    return baseConfig;
  }, [variant, darkMode]);

  // Mobile: render a lightweight CSS-only gradient (zero GPU/JS cost)
  if (mobile) {
    let bgStyle = mobileFallbackStyles[variant] || mobileFallbackStyles.constellation;
    if (darkMode) {
      if (variant === 'constellation') {
        bgStyle = { ...bgStyle, background: 'radial-gradient(ellipse at 30% 20%, rgba(240,247,248,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(240,247,248,0.04) 0%, transparent 60%)' };
      } else if (variant === 'bokeh') {
        bgStyle = { ...bgStyle, background: 'radial-gradient(ellipse at 20% 50%, rgba(240,247,248,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(240,247,248,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(240,247,248,0.04) 0%, transparent 50%)' };
      } else if (variant === 'network') {
        bgStyle = { ...bgStyle, background: 'radial-gradient(ellipse at 40% 30%, rgba(23,162,184,0.08) 0%, transparent 55%), radial-gradient(ellipse at 60% 70%, rgba(91,192,190,0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(240,247,248,0.05) 0%, transparent 50%)' };
      }
    }
    return (
      <div
        className={className}
        style={bgStyle}
        aria-hidden="true"
      />
    );
  }

  if (!init) return null;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <Particles id={`particles-${variant}`} options={options} className="w-full h-full" />
    </div>
  );
}