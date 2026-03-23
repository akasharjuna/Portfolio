import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundGlow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-500 ${isDark ? 'bg-[#030303]' : 'bg-gray-50'}`}>
      {/* Dark Mode Glows */}
      {isDark && (
        <>
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[160px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '5s' }}></div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </>
      )}

      {/* Light Mode Glows */}
      {!isDark && (
        <>
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-300/40 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-purple-300/40 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-blue-300/40 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '5s' }}></div>
        </>
      )}
    </div>
  );
};

export default BackgroundGlow;
