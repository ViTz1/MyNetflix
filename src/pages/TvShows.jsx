import { useEffect, useState } from "react";
import { tmdbGet } from "../api/tmdb"; 
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";


export default function TvShows() {
const [shows, setShows] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
let mounted = true;
setLoading(true);
tmdbGet("/tv/popular")
.then((res) => {
if (!mounted) return;
setShows(res.results || []);
})
.catch((err) => {
console.error(err);
if (mounted) setError("Failed to load TV shows.");
})
.finally(() => {
if (mounted) setLoading(false);
});


return () => (mounted = false);
}, []);


if (loading) return <Loading />;
if (error) return <div className="p-6 text-white">{error}</div>;


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-6xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">TV Shows</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{shows.map((s) => (
<MovieCard key={s.id} movie={s} />
))}
</div>
</div>
</main>
);
}