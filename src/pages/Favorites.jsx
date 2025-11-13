import React from 'react';
import useFavorites from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';


export default function Favorites(){
const { favorites, remove } = useFavorites();


if(favorites.length === 0) return <div>Nessun preferito ancora.</div>;


return (
<div className="space-y-4">
<h2 className="text-2xl">I tuoi preferiti</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{favorites.map(f=> (
<div key={`${f.media_type}-${f.id}`}>
<MovieCard item={f} />
<button onClick={() => remove(f)} className="mt-2 px-3 py-1 bg-red-500 rounded">Rimuovi</button>
</div>
))}
</div>
</div>
);
}