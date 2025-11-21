import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import Loading from "../components/Loading";
import { useFavorites } from "../context/FavoritesContext";


export default function MovieDetail() {
const { id } = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { isFavourite, addFavourite, removeFavourite } = useFavorites();


useEffect(() => {
let mounted = true;
setLoading(true);
getMovieDetails(id)
.then((data) => {
if (!mounted) return;
setMovie(data);
})
.catch((err) => {
console.error(err);
if (mounted) setError("Failed to load details.");
})
.finally(() => {
if (mounted) setLoading(false);
});
return () => (mounted = false);
}, [id]);


if (loading) return <Loading />;
if (error) return <div className="p-6 text-white">{error}</div>;
if (!movie) return <div className="p-6 text-white">Not found</div>;


const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg";


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<img src={poster} alt={movie.title} className="rounded shadow" />
</div>
<div className="md:col-span-2">
<h1 className="text-3xl font-bold">{movie.title}</h1>
<p className="mt-3 text-gray-300">{movie.overview}</p>
<div className="mt-4 flex items-center gap-4">
<div className="bg-gray-800 px-3 py-1 rounded">Rating: {movie.vote_average}</div>
<div className="bg-gray-800 px-3 py-1 rounded">Release: {movie.release_date}</div>
</div>


<div className="mt-6">
<h3 className="font-semibold">Genres</h3>
<p className="text-gray-300">{movie.genres?.map((g) => g.name).join(", ")}</p>
</div>


<div className="mt-6">
<h3 className="font-semibold">Cast</h3>
<p className="text-gray-300">{movie.credits?.cast?.slice(0, 6).map((c) => c.name).join(", ")}</p>
</div>


<div className="mt-6">
{isFavourite(movie.id) ? (
<button onClick={() => removeFavourite(movie.id)} className="px-4 py-2 bg-gray-700 rounded">Remove from favourites</button>
) : (
<button onClick={() => addFavourite({ id: movie.id, title: movie.title, poster_path: movie.poster_path })} className="px-4 py-2 bg-red-600 rounded">Add to favourites</button>
)}
</div>
</div>
</div>
</main>
);
}