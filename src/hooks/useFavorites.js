import { useEffect, useState } from 'react';


const STORAGE_KEY = 'netflix_clone_favorites_v1';


export default function useFavorites() {
const [favorites, setFavorites] = useState(() => {
try {
const raw = localStorage.getItem(STORAGE_KEY);
return raw ? JSON.parse(raw) : [];
} catch (e) {
return [];
}
});


useEffect(() => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}, [favorites]);


function add(item) {
setFavorites(prev => {
if (prev.find(i => i.id === item.id && i.media_type === item.media_type)) return prev;
return [...prev, item];
});
}


function remove(item) {
setFavorites(prev => prev.filter(i => !(i.id === item.id && i.media_type === item.media_type)));
}


function isFavorite(item) {
return favorites.some(i => i.id === item.id && i.media_type === item.media_type);
}


return { favorites, add, remove, isFavorite };
}