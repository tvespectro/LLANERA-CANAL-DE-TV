
import React from 'react';
import { Page } from '../types';
import { HomeIcon, PlayIcon, FilmIcon, SearchIcon } from './icons';

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  const activeClass = isActive ? 'text-yellow-400' : 'text-gray-400';
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center w-full transition-colors hover:text-yellow-300 ${activeClass}`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-gray-800 flex justify-around items-center shadow-lg z-50">
      <NavItem 
        icon={<HomeIcon />} 
        label="Inicio" 
        isActive={currentPage === Page.Home}
        onClick={() => onNavigate(Page.Home)}
      />
      <NavItem 
        icon={<PlayIcon />} 
        label="En Vivo"
        isActive={currentPage === Page.Live}
        onClick={() => onNavigate(Page.Live)}
      />
      <NavItem 
        icon={<FilmIcon />} 
        label="Películas"
        isActive={currentPage === Page.Movies}
        onClick={() => onNavigate(Page.Movies)}
      />
      <NavItem 
        icon={<SearchIcon />} 
        label="Buscar"
        isActive={currentPage === Page.Search}
        onClick={() => onNavigate(Page.Search)}
      />
    </nav>
  );
};

export default BottomNav;
