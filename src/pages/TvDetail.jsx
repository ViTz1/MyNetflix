import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { tmdbGet } from "../api/tmdb";
import Loading from "../components/Loading";


export default function TvDetail() {
const { id } = useParams();
const [show, setShow] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
let mounted = true;
setLoading(true);
tmdbGet(`/tv/${id}`, { append_to_response: "credits" })
.then((res) => {
if (!mounted) return;
setShow(res);
})
.catch((err) => {
console.error(err);
if (mounted) setError("Failed to load TV details.");
})
.finally(() => {
if (mounted) setLoading(false);
});
return () => (mounted = false);
}, [id]);


if (loading) return <Loading />;
if (error) return <div className="p-6 text-white">{error}</div>;
if (!show) return <div className="p-6 text-white">Not found</div>;


const poster = show.poster_path ? `https://image.tmdb.org/t/p/w500${show.poster_path}` : "/placeholder.jpg";


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<img src={poster} alt={show.name} className="rounded shadow" />
</div>
<div className="md:col-span-2">
<h1 className="text-3xl font-bold">{show.name}</h1>
<p className="mt-3 text-gray-300">{show.overview}</p>
<div className="mt-4 flex items-center gap-4">
<div className="bg-gray-800 px-3 py-1 rounded">Rating: {show.vote_average}</div>
<div className="bg-gray-800 px-3 py-1 rounded">First air: {show.first_air_date}</div>
</div>


<div className="mt-6">
<h3 className="font-semibold">Genres</h3>
<p className="text-gray-300">{show.genres?.map((g) => g.name).join(", ")}</p>
</div>


<div className="mt-6">
<h3 className="font-semibold">Cast</h3>
<p className="text-gray-300">{show.credits?.cast?.slice(0, 6).map((c) => c.name).join(", ")}</p>
</div>
</div>
</div>
</main>
);
}