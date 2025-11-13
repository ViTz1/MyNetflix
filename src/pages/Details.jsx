import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getCredits, imageUrl } from '../api/tmdb';
import useFavorites from '../hooks/useFavorites';


export default function Details(){
const { mediaType, id } = useParams();
const [data, setData] = useState(null);
const [credits, setCredits] = useState(null);
const { add, remove, isFavorite } = useFavorites();


useEffect(()=>{
getDetails(mediaType, id).then(d=>setData(d));
getCredits(mediaType, id).then(c=>setCredits(c));
},[mediaType,id]);


if(!data) return <div>Loading...</div>;


const item = { ...data, media_type: mediaType };


return (
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<img src={imageUrl(data.poster_path, 'w500')} alt={data.title || data.name} className="rounded" />
</div>
<div className="md:col-span-2">
<h1 className="text-3xl font-bold">{data.title || data.name}</h1>
<p className="mt-2">{data.overview}</p>
<p className="mt-2">Rating: {data.vote_average} • Release: {data.release_date || data.first_air_date}</p>
<div className="mt-4">
{isFavorite(item) ? (
<button onClick={() => remove(item)} className="px-4 py-2 bg-red-500 rounded">Rimuovi dai preferiti</button>
) : (
<button onClick={() => add(item)} className="px-4 py-2 bg-green-500 rounded">Aggiungi ai preferiti</button>
)}
</div>


<div className="mt-6">
<h3 className="font-semibold">Cast principale</h3>
<div className="flex gap-3 overflow-x-auto mt-2">
{credits?.cast?.slice(0,8).map(c=> (
<div key={c.id} className="w-32 flex-shrink-0">
<img src={imageUrl(c.profile_path, 'w185')} alt={c.name} className="rounded" />
<p className="text-sm">{c.name}</p>
<p className="text-xs text-gray-300">{c.character}</p>
</div>
))}
</div>
</div>


</div>
</div>
);
}