import React from 'react';
import MovieList from './components/MovieList';
import RecipeList from './components/RecipeList';
import Quote from './components/Quote';
import './App.css';


const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Aplicação de Exemplos de API</h1>
      <MovieList />
      <RecipeList />
      <Quote />
    </div>
  );
};

export default App;
