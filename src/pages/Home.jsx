import { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/tmdb";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import Loading from "../components/Loading";


export default function Home() {
const [featured, setFeatured] = useState(null);
const [popular, setPopular] = useState([]);
const [topRated, setTopRated] = useState([]);
const [nowPlaying, setNowPlaying] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
let mounted = true;
setLoading(true);
Promise.all([
getMoviesByCategory("popular"),
getMoviesByCategory("top_rated"),
getMoviesByCategory("now_playing"),
])
.then(([pop, top, now]) => {
if (!mounted) return;
setPopular(pop.results || []);
setTopRated(top.results || []);
setNowPlaying(now.results || []);
setFeatured((pop.results && pop.results[0]) || top.results[0] || now.results[0] || null);
})
.catch((err) => {
console.error(err);
if (mounted) setError("Failed to load movies.");
})
.finally(() => {
if (mounted) setLoading(false);
});


return () => {
mounted = false;
};
}, []);


if (loading) return <Loading />;
if (error) return <div className="p-6 text-white">{error}</div>;


return (
<main className="bg-black min-h-screen">
{featured && <HeroBanner movie={featured} />}
<div className="max-w-6xl mx-auto px-4 py-8">
<MovieRow title="Popular" movies={popular} />
<MovieRow title="Top Rated" movies={topRated} />
<MovieRow title="Now Playing" movies={nowPlaying} />
</div>
</main>
);
}