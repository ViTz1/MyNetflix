const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * Helper to make GET requests to TMDB.
 * @param {string} path - API path starting with /
 * @param {URLSearchParams|Object} params - extra query params
 * @returns {Promise<any>}
 */
export async function tmdbGet(path, params = {}) {
  if (!API_KEY) throw new Error("TMDB API key is not defined in environment variables.");

  const url = new URL(BASE_URL + path);
  const searchParams = new URLSearchParams(params);
  searchParams.set("api_key", API_KEY);
  url.search = searchParams.toString();

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`);
  return res.json();
}

/**
 * Fetch configuration (image base_url and sizes).
 * @returns {Promise<Object>}
 */
export function getConfig() {
  return tmdbGet("/configuration");
}

/**
 * Discover / category movies (example: popular, top_rated, now_playing)
 * @param {string} category
 * @param {number} page
 */
export function getMoviesByCategory(category = "popular", page = 1) {
  return tmdbGet(`/movie/${category}`, { page });
}

/**
 * Get full movie details with credits
 * @param {number|string} id
 */
export function getMovieDetails(id) {
  return tmdbGet(`/movie/${id}`, { append_to_response: "credits" });
}

/**
 * Search movies
 * @param {string} query
 * @param {number} page
 */
export function searchMovies(query, page = 1) {
  return tmdbGet(`/search/movie`, { query, page });
}
