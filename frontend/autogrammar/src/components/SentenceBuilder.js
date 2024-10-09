import React, { useState } from 'react';

function SentenceBuilder() {
  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState([]);

  const addWordToSentence = (word) => {
    setCurrentSentence([...currentSentence, word]);
  };

  const removeWordFromSentence = (index) => {
    const newSentence = [...currentSentence];
    newSentence.splice(index, 1);
    setCurrentSentence(newSentence);
  };

  const createNewSentence = () => {
    setSentences([...sentences, currentSentence]);
    setCurrentSentence([]);
  };

  return (
    <div className="sentence-builder scrollable">
      <h2>Sentence Builder</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentSentence.map((word, index) => (
          <div key={index} style={{ margin: '5px', padding: '5px', border: '1px solid black' }}>
            {word}
            <button onClick={() => removeWordFromSentence(index)}>-</button>
          </div>
        ))}
      </div>
      <button onClick={() => addWordToSentence('New Word')}>+ Add Word</button>
      <button onClick={createNewSentence}>New Sentence</button>
      <div>
        <h3>Story</h3>
        {sentences.map((sentence, index) => (
          <p key={index}>{sentence.join(' ')}</p>
        ))}
      </div>
    </div>
  );
}

export default SentenceBuilder;