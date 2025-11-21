import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv" element={<TvShows />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv/:id" element={<TvDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}