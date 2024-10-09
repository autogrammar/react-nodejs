import React from 'react';
import Header from './components/Header';
import Dictionary from './components/Dictionary';
import Story from './components/Story';
import SentenceBuilder from './components/SentenceBuilder';
import WordDeclinations from './components/WordDeclinations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="column column-1">
          <Dictionary />
          <Story />
        </div>
        <div className="column column-2">
          <SentenceBuilder />
        </div>
        <div className="column column-3">
          <WordDeclinations />
        </div>
      </div>
    </div>
  );
}

export default App;