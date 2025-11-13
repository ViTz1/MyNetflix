import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../api/tmdb';


export default function MovieCard({ item }) {
return (
<div className="w-40 flex-shrink-0">
<Link to={`/details/${item.media_type}/${item.id}`}>
<img src={imageUrl(item.poster_path)} alt={item.title || item.name} className="rounded" />
<h4 className="mt-2 text-sm">{item.title || item.name}</h4>
</Link>
</div>
);
}