import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { 
        enable: false,
        zIndex: 0 
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#ffffff" : ["#0f172a", "#7e22ce", "#a855f7", "#3b0764"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: { min: 1, max: 3 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.2, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  if (init) {
    return (
      <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'} opacity-50`}>
        <Particles
          key={isDark ? 'dark' : 'light'}
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      </div>
    );
  }

  return null;
};

export default BackgroundParticles;
