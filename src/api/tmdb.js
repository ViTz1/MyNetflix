import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER = import.meta.env.VITE_TMDB_BEARER || process.env.REACT_APP_TMDB_BEARER;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || process.env.REACT_APP_TMDB_API_KEY;


const client = axios.create({
baseURL: BASE_URL,
headers: {
Authorization: `Bearer ${BEARER}`,
'Content-Type': 'application/json;charset=utf-8',
},
});


export const imageUrl = (path, size = 'w500') =>
path ? `https://image.tmdb.org/t/p/${size}${path}` : null;


export async function fetchCategory(type = 'movie', list = 'popular', page = 1) {
// type: 'movie' | 'tv'
const url = `/${type}/${list}`; // e.g. /movie/popular
const res = await client.get(url, { params: { page } });
return res.data;
}


export async function search(query, page = 1) {
const res = await client.get('/search/multi', { params: { query, page } });
return res.data;
}


export async function getDetails(mediaType, id) {
const res = await client.get(`/${mediaType}/${id}`);
return res.data;
}


export async function getCredits(mediaType, id) {
const res = await client.get(`/${mediaType}/${id}/credits`);
return res.data;
}


export async function getTopRated(type = 'movie', page = 1) {
return fetchCategory(type, 'top_rated', page);
}


export async function getTrending(type = 'all', time_window = 'week') {
const res = await client.get(`/trending/${type}/${time_window}`);
return res.data;
}