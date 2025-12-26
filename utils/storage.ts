
import { Movie } from '../types';

const RECENTLY_WATCHED_KEY = 'llanera_tv_recently_watched';
const MAX_RECENT_ITEMS = 12;

export const getRecentlyWatched = (): Movie[] => {
  const stored = localStorage.getItem(RECENTLY_WATCHED_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Error parsing recently watched from storage', e);
    return [];
  }
};

export const addToRecentlyWatched = (movie: Movie) => {
  const current = getRecentlyWatched();
  // Remove the movie if it's already in the list to avoid duplicates and move it to the front
  const filtered = current.filter((m) => m.id !== movie.id);
  const updated = [movie, ...filtered].slice(0, MAX_RECENT_ITEMS);
  localStorage.setItem(RECENTLY_WATCHED_KEY, JSON.stringify(updated));
};
