
import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[2/3] transition-transform transform group-hover:scale-105">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
