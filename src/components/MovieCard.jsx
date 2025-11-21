import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";


export default function MovieCard({ movie }) {
const { isFavourite, addFavourite, removeFavourite } = useFavorites();
const fav = isFavourite(movie.id);


function handleFav(e) {
e.preventDefault();
if (fav) removeFavourite(movie.id);
else addFavourite({ id: movie.id, title: movie.title || movie.name, poster_path: movie.poster_path });
}


const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : "/placeholder.jpg";


return (
<Link to={`/movie/${movie.id}`} className="group block min-w-[140px] md:min-w-[160px]">
<div className="relative rounded overflow-hidden shadow-lg transform group-hover:scale-105 transition">
<img src={poster} alt={movie.title || movie.name} className="w-full h-[220px] object-cover" loading="lazy" />
<button
onClick={handleFav}
className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80"
aria-label={fav ? "Remove favourite" : "Add favourite"}
>
{fav ? "★" : "☆"}
</button>
</div>
<div className="mt-2 text-sm text-white line-clamp-2">{movie.title || movie.name}</div>
</Link>
);
}