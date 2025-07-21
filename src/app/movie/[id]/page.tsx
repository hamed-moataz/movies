import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import NotFound from "@/app/NotFound";
import { getMovieByID } from "@/app/_utils/getMovieById";

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const movie = await getMovieByID(params.id);
  return {
    title: movie?.Title || "Movie Not Found",
  };
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieByID(params.id);
  if (!movie) return <NotFound />;

  return (
    <div className="w-screen h-auto md:h-screen text-white  bg-sky-900 flex justify-center items-center overflow-x-hidden">
      <div className=" p-10 m-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="mx-auto w-full flex items-center justify-end  ">
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={400}
              height={300}
              className=" rounded  object-cover mx-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 text-white">
              {movie.Title}
            </h1>
            <h4>
              <strong> Actors :</strong> {movie.Actors}
            </h4>
            <p className="mb-2">
              <strong>Genre : </strong> {movie.Genre}
            </p>
            <p className="mb-2">
              <strong>Writer : </strong> {movie.Writer}
            </p>
            <p className="mb-2">
              <strong>Awards : </strong> {movie.Awards}
            </p>
            <p className="mb-2">
              <strong>Lanuage :</strong> {movie.Language}
            </p>
            <p className="mb-2">
              <strong>years : </strong> {movie.Released}
            </p>
            <p className="mb-2">
              <strong>Country : </strong> {movie.Country}
            </p>

            <p className="my-2">
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <Link
              className="inline-block rounded-sm border mt-2  bg-transparent px-12 py-3 text-sm font-medium text-white hover:bg-sky-950 "
              href="/movie"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
