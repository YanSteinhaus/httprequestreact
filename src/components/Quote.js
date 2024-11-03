import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setError(true); // Define erro como true se a requisição falhar
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Citação Aleatória</h2>
      {error ? (
        <p style={{ color: 'red' }}>
          A funcionalidade de citações está temporariamente indisponível devido ao desligamento da API.
        </p>
      ) : quote ? (
        <blockquote>
          <p>"{quote.content}"</p>
          <footer>- {quote.author}</footer>
        </blockquote>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Quote;
