import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';


export default function Navbar() {
const navigate = useNavigate();
const { favorites } = useFavorites();


return (
<nav className="bg-black/60 backdrop-blur sticky top-0 z-50">
<div className="container mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-6">
<Link to="/" className="text-2xl font-bold">MyFlix</Link>
<Link to="/movies">Film</Link>
<Link to="/tv">Serie TV</Link>
</div>


<div className="flex items-center gap-4">
<form onSubmit={(e) => { e.preventDefault(); const q = e.target.search.value.trim(); if(q) navigate('/search?q='+encodeURIComponent(q)); }}>
<input name="search" placeholder="Cerca..." className="px-3 py-1 rounded bg-gray-800" />
</form>
<Link to="/favorites" className="relative">
Preferiti
<span className="ml-2 inline-block bg-red-500 text-black px-2 rounded-full text-sm">{favorites.length}</span>
</Link>
</div>
</div>
</nav>
);
}