import React, { useState } from 'react';

function WordDeclinations() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [declination, setDeclination] = useState('');
  const [tense, setTense] = useState('');
  const [person, setPerson] = useState('');

  const handleWordSelect = (word) => {
    setSelectedWord(word);
    // TODO: Fetch word declinations from backend
  };

  return (
    <div className="word-declinations scrollable">
      <h2>Word Declinations</h2>
      {selectedWord && (
        <div>
          <h3>{selectedWord}</h3>
          <select value={declination} onChange={(e) => setDeclination(e.target.value)}>
            <option value="">Select Declination</option>
            {/* Add declination options */}
          </select>
          <select value={tense} onChange={(e) => setTense(e.target.value)}>
            <option value="">Select Tense</option>
            {/* Add tense options */}
          </select>
          <select value={person} onChange={(e) => setPerson(e.target.value)}>
            <option value="">Select Person</option>
            {/* Add person options */}
          </select>
        </div>
      )}
    </div>
  );
}

export default WordDeclinations;