import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import { fetchCategory, getTrending } from '../api/tmdb';


export default function Home() {
const [popular, setPopular] = useState([]);
const [top, setTop] = useState([]);
const [trending, setTrending] = useState([]);


useEffect(() => {
fetchCategory('movie', 'popular').then(d => setPopular(d.results || []));
getTrending('movie', 'week').then(d => setTrending(d.results || []));
fetchCategory('movie', 'top_rated').then(d => setTop(d.results || []));
}, []);


return (
<div className="space-y-8">
<Banner item={popular[0]} />
<MovieRow title="In tendenza" items={trending} />
<MovieRow title="Più popolari" items={popular} />
<MovieRow title="Top Rated" items={top} />
</div>
);
}