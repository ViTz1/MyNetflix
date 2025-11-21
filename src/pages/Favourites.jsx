import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";


export default function Favourites() {
const { favourites } = useFavorites();


return (
<main className="bg-black min-h-screen text-white">
<div className="max-w-6xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-6">Your favourites</h1>
{favourites.length === 0 ? (
<div className="text-gray-300">You have no favourites yet.</div>
) : (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{favourites.map((f) => (
<MovieCard key={f.id} movie={f} />
))}
</div>
)}
</div>
</main>
);
}