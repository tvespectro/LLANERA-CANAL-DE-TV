
import React, { useState, useEffect } from 'react';
import { Movie } from '../types';
import { getRecentlyWatched } from '../utils/storage';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

interface HomeScreenProps {
  onNavigate: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [recentMovies, setRecentMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setRecentMovies(getRecentlyWatched());
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/movietheater/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-900"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl uppercase tracking-tighter italic">
            Somos tu mejor <br/> <span className="text-yellow-400">canal de TV!</span>
          </h1>
          <button
            onClick={onNavigate}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-xl uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl border-b-4 border-red-800"
          >
            VER EN VIVO
          </button>
        </div>
      </div>

      {/* Recently Watched Section */}
      {recentMovies.length > 0 && (
        <div className="p-4 md:p-8 bg-gray-900">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
            <span className="mr-2">🕒</span> Vistos recientemente
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar scroll-smooth">
            {recentMovies.map((movie) => (
              <div key={movie.id} className="min-w-[150px] md:min-w-[200px] flex-shrink-0">
                <MovieCard movie={movie} onClick={handleMovieClick} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder for when no history exists */}
      {recentMovies.length === 0 && (
        <div className="p-8 text-center text-gray-500 border-t border-gray-800">
          <p>Explora nuestras películas para ver tu historial aquí.</p>
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default HomeScreen;
