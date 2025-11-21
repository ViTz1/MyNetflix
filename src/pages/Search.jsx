import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";


export default function Search() {
const [params] = useSearchParams();
const q = params.get("q") || "";
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


useEffect(() => {
if (!q) return setResults([]);
let mounted = true;
setLoading(true);
searchMovies(q)
.then((res) => {
if (!mounted) return;
setResults(res.results || []);
})
.catch((err) => {
console.error(err);
if (mounted) setError("Search failed.");
})
.finally(() => {
if (mounted) setLoading(false);
});
return () => (mounted = false);
}, [q]);


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-6xl mx-auto px-4 py-8">
<h1 className="text-2xl font-bold mb-4">Search results for: "{q}"</h1>
{loading ? (
<Loading />
) : (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{results.map((r) => (
<MovieCard key={r.id} movie={r} />
))}
</div>
)}
{error && <div className="mt-4 text-red-400">{error}</div>}
</div>
</main>
);
}