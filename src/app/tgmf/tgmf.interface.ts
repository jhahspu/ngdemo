export interface TGMF {
  id: number;
  title: string;
  original_title?: string;
  original_language?: string;
  tagline?: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  trailers?: string;
  popularity?: number;
  vote_average?: number;
  overview?: string;
}

export interface TGMFResponse {
  results: TGMF[];
}