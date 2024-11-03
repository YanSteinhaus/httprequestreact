import React, { useEffect, useState } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://api-receitas-pi.vercel.app/receitas/todas");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      setError(true); // Define erro como true se a requisição falhar
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Lista de Receitas</h2>
      {error ? (
        <p style={{ color: 'red' }}>
          A funcionalidade de receitas está temporariamente indisponível devido ao desligamento da API.
        </p>
      ) : recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.nome}</h3>
              <img src={recipe.imagem} alt={recipe.nome} style={{ width: '100px', height: '100px' }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default RecipeList;
