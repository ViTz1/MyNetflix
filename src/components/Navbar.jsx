import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";


export default function Navbar() {
const [q, setQ] = useState("");
const navigate = useNavigate();
const { favourites } = useFavorites();


function handleSubmit(e) {
e.preventDefault();
if (q.trim()) {
navigate(`/search?q=${encodeURIComponent(q.trim())}`);
setQ("");
}
}


return (
<header className="bg-black/80 sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-6">
<NavLink to="/" className="text-2xl font-bold text-red-600">MovieHub</NavLink>
<nav className="hidden md:flex gap-4">
<NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-gray-300 hover:text-white"}>Home</NavLink>
<NavLink to="/movies" className={({ isActive }) => isActive ? "text-white" : "text-gray-300 hover:text-white"}>Movies</NavLink>
<NavLink to="/tv" className={({ isActive }) => isActive ? "text-white" : "text-gray-300 hover:text-white"}>TV</NavLink>
<NavLink to="/favourites" className={({ isActive }) => isActive ? "text-white" : "text-gray-300 hover:text-white"}>Favourites</NavLink>
</nav>
</div>


<div className="flex items-center gap-4">
<form onSubmit={handleSubmit} className="hidden sm:flex items-center">
<input
value={q}
onChange={(e) => setQ(e.target.value)}
className="bg-gray-800 text-white px-3 py-1 rounded-l-md w-44 focus:outline-none"
placeholder="Search"
/>
<button className="bg-red-600 px-3 py-1 rounded-r-md text-white">Go</button>
</form>


<NavLink to="/favourites" className="text-gray-300 hover:text-white">
<span className="sr-only">Favourites</span>
<div className="relative">
<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41 1 4.5 2.09C12.09 5 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
{favourites.length > 0 && (
<span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">{favourites.length}</span>
)}
</div>
</NavLink>
</div>
</div>
</header>
);
}