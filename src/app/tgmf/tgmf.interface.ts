export interface TGMF {
  id: number;
  title: string;
  tagline?: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  trailers?: string;
}

export interface TGMFResponse {
  results: TGMF[];
}