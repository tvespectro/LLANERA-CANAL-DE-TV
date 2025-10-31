
import React, { useState, useEffect } from 'react';

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#1A237E] overflow-hidden">
      <h1
        className={`text-5xl md:text-7xl font-bold text-yellow-400 transform transition-transform duration-1000 ease-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        LLANERA TV
      </h1>
    </div>
  );
};

export default SplashScreen;
