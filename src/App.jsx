<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Favorites from './pages/Favorites';


export default function App() {
return (
<div className="min-h-screen bg-gray-900 text-white">
<Navbar />
<main className="px-4 py-6">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Movies />} />
<Route path="/tv" element={<Tv />} />
<Route path="/search" element={<SearchResults />} />
<Route path="/details/:mediaType/:id" element={<Details />} />
<Route path="/favorites" element={<Favorites />} />
</Routes>
</main>
</div>
);
}
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> d15e6c1d71f4a3a836457217589183c03c0e4c92
