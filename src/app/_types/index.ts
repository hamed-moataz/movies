export type Movie = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Plot?: string;
  Genre?: string;
  Actors?: string;
  Writer?: string;
  Awards?: string;
  Language?: string;
  Released?: string;
  Country?: string;
};
export interface Props {
  params: {
    id: string;
  };
}