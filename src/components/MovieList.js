import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '969f4741'; // Sua chave da API

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '20px' }}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '150px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
