import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../api/tmdb';
import MovieCard from '../components/MovieCard';


export default function SearchResults(){
const [params] = useSearchParams();
const q = params.get('q') || '';
const [results, setResults] = useState([]);


useEffect(()=>{
if(!q) return;
search(q).then(d=> setResults(d.results || []));
},[q]);


return (
<div>
<h2 className="text-2xl">Risultati per "{q}"</h2>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
{results.map(r=> (
<MovieCard key={`${r.media_type}-${r.id}`} item={{...r, media_type: r.media_type || (r.title? 'movie' : 'tv')}} />
))}
</div>
</div>
);
}