import React, { useEffect, useState } from 'react';
import AnimeCard from './components/AnimeCard';

function App() {
  const [search, setSearch] = useState('one piece');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log('search');
    if (search.length !== 0) {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${search}&limit=10`
      );
      const data = await response.json();
      setResults(data.results);
    } else {
      alert('Enter some anime in the text field');
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className=" bg-gray-200">
      <div className="text-center p-4">
        <input
          className="rounded-md p-2 rounded-r-none focus:outline-none"
          required
          type="text"
          placeholder="anime name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 bg-gray-500 rounded-md rounded-l-none text-white"
          onClick={handleSearch}
        >
          Search
        </button>
        <button className="p-2 bg-gray-500 rounded-md ml-4 text-white">
          Favorites
        </button>
      </div>
      <div className="flex flex-col w-6/12 content-center m-auto">
        {results.length !== 0 &&
          results.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))}
      </div>
      {/* <AnimeCard /> */}
    </div>
  );
}

export default App;
