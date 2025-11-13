import React from 'react';
import MovieCard from './MovieCard';


export default function MovieRow({ title, items = [] }) {
return (
<section>
<h3 className="text-xl font-semibold mb-3">{title}</h3>
<div className="flex gap-3 overflow-x-auto pb-2">
{items.map(it => (
<MovieCard key={`${it.id}-${it.media_type || 'movie'}`} item={{...it, media_type: it.media_type || 'movie'}} />
))}
</div>
</section>
);
}