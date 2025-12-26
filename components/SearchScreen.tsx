
import React, { useState, useMemo } from 'react';
import { MOVIES } from '../constants';
import { Movie } from '../types';
import { addToRecentlyWatched } from '../utils/storage';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const SearchScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = useMemo(() => {
    if (!searchTerm) {
      return [];
    }
    return MOVIES.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    addToRecentlyWatched(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Buscar Película</h1>
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Escribe el nombre de la película..."
          className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-full text-white focus:outline-none focus:border-yellow-400 transition-colors"
        />
      </div>
      
      {searchTerm && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      )}

      {searchTerm && filteredMovies.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No se encontraron resultados.</p>
      )}

      {!searchTerm && (
         <p className="text-center text-gray-400 mt-8">Comienza a escribir para buscar.</p>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SearchScreen;
