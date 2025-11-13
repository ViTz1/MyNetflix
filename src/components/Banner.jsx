import React from 'react';
import { imageUrl } from '../api/tmdb';
import { Link } from 'react-router-dom';


export default function Banner({ item }) {
if (!item) return <div className="h-64 bg-gray-800 rounded" />;
const title = item.title || item.name;


return (
<div className="rounded overflow-hidden relative">
<img src={imageUrl(item.backdrop_path, 'w780')} alt="banner" className="w-full h-64 object-cover opacity-90" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
<div>
<h2 className="text-3xl font-bold">{title}</h2>
<p className="max-w-xl text-sm mt-2">{item.overview}</p>
<div className="mt-4">
<Link to={`/details/${item.media_type || 'movie'}/${item.id}`} className="px-4 py-2 bg-white text-black rounded">Dettagli</Link>
</div>
</div>
</div>
</div>
);
}