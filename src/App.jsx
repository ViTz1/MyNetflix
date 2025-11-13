
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Favorites from './pages/Favorites';


export default function App() {
return (
<div className="min-h-screen bg-gray-900 text-white">
<Navbar />
<main className="px-4 py-6">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Movies />} />
<Route path="/tv" element={<Tv />} />
<Route path="/search" element={<SearchResults />} />
<Route path="/details/:mediaType/:id" element={<Details />} />
<Route path="/favorites" element={<Favorites />} />
</Routes>
</main>
</div>
);
}
