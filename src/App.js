import React, { useState } from 'react';

const App = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    setResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default App;
