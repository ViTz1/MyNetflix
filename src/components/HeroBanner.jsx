import { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/tmdb";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

export default function HeroBanner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getMoviesByCategory("popular");
      setMovie(data.results[0]); // primo film popolare
    }
    load();
  }, []);

  if (!movie) {
    return <div className="h-[50vh] bg-black" />;
  }

  return (
    <div
      className="h-[70vh] bg-cover bg-center relative flex items-end"
      style={{
        backgroundImage: `url(${IMAGE_BASE}${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 p-10 text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="opacity-80 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}
