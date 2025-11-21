import { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";


export default function Movies() {
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
let mounted = true;
setLoading(true);
getMoviesByCategory("popular", page)
.then((res) => {
if (!mounted) return;
setMovies((prev) => (page === 1 ? res.results : [...prev, ...res.results]));
})
.catch((err) => {
console.error(err);
if (mounted) setError("Failed to load movies.");
})
.finally(() => {
if (mounted) setLoading(false);
});
return () => (mounted = false);
}, [page]);


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-6xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">Movies</h1>
{loading && page === 1 ? (
<Loading />
) : (
<>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{movies.map((m) => (
<MovieCard key={m.id} movie={m} />
))}
</div>
<div className="mt-6 flex justify-center">
<button
onClick={() => setPage((p) => p + 1)}
className="px-4 py-2 bg-red-600 rounded text-white"
>
Load more
</button>
</div>
</>
)}
{error && <div className="mt-4 text-red-400">{error}</div>}
</div>
</main>
);
}