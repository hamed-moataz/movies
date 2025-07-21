import { Movie } from "@/app/_types";

export const getMovieByID = async (id: string): Promise<Movie | null> => {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=303344f8`);
  const data = await res.json();
  if (data.Response === "False") return null;
  return data as Movie;
};
