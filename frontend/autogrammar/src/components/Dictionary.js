import React, { useState, useEffect } from 'react';

function Dictionary() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Fetch words from backend API
    fetch('/api/dictionary')
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);

  return (
    <div className="dictionary scrollable">
      <h2>Dictionary</h2>
      <ul>
        {words.map(word => (
          <li key={word.id}>{word.word}</li>
        ))}
      </ul>
      <button>Add Word</button>
    </div>
  );
}

export default Dictionary;