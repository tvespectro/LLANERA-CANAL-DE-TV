
import React, { useState } from 'react';
import { MOVIES } from '../constants';
import { Movie } from '../types';
import { addToRecentlyWatched } from '../utils/storage';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const MoviesScreen: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    addToRecentlyWatched(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Películas</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {MOVIES.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MoviesScreen;
