
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import LiveScreen from './components/LiveScreen';
import MoviesScreen from './components/MoviesScreen';
import SearchScreen from './components/SearchScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomeScreen onNavigate={() => setCurrentPage(Page.Live)} />;
      case Page.Live:
        return <LiveScreen />;
      case Page.Movies:
        return <MoviesScreen />;
      case Page.Search:
        return <SearchScreen />;
      default:
        return <HomeScreen onNavigate={() => setCurrentPage(Page.Live)} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="pb-20">
        {renderPage()}
      </main>
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
