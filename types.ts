
export interface Movie {
  id: number;
  title: string;
  embedUrl: string;
  posterUrl: string;
}

export enum Page {
  Home,
  Live,
  Movies,
  Search,
}
