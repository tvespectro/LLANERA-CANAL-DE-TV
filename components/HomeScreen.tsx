
import React from 'react';

interface HomeScreenProps {
  onNavigate: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div 
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/movietheater/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down">
          Somos tu mejor canal de TV!
        </h1>
        <button
          onClick={onNavigate}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-transform transform hover:scale-105"
        >
          EN VIVO
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
