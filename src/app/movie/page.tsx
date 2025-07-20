"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Movie } from "../_types";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState<Movie[]>([]);

  const fatchData = async () => {
    try {
      await fetch("https://www.omdbapi.com/?s=batman&apikey=303344f8")
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.Search);
          document.title = 'movie'
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);

  if (!movie) return <p className="text-center">Loading...</p>;
  const filterData = movie.filter((item) =>
    item.Title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="relative bg-cyan-900 min-h-screen">
      <nav className="p-4 w-full fixed top-0 z-40 flex justify-between items-center  drop-shadow-xl bg-cyan-900 ">
        <h1 className="text-2xl font-bold mb-4 text-white">
          <span className="text-orange-600">Mo</span>vies{" "}
        </h1>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" p-2 border border-white rounded-xl outline-none  placeholder:text-white"
        />
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 mt-20  ">
        {filterData.map((movie, index) => (
          <div key={index}>
            <Link
              href={`/movie/${movie.imdbID}`}
              className="block"
            >
              <div className="relative rounded overflow-hidden group">
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={300}
                  height={400}
                  className="h-64 w-full object-cover"
                  loading="lazy"

                />

                {/* Overlay background */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent  transition-colors duration-300"></div>

                <div className="absolute bottom-2 left-2 z-10">
                  <h2 className=" line-clamp-1 text-white text-lg font-bold">
                    <span className="text-orange-600">{movie.Title.substring(0,3)}</span> {movie.Title.substring(3)}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
