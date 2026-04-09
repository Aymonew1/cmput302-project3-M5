import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { words } from '../data/words';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = query.trim().length > 1
    ? words.filter(
        (word) =>
          word.english.toLowerCase().includes(query.toLowerCase()) ||
          word.cree.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleResultClick = (wordId) => {
    navigate(`/word/${wordId}`);
    setQuery('');
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search English or Cree..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((word) => (
            <li
              key={word.id}
              onClick={() => handleResultClick(word.id)}
              className="search-result-item"
            >
              <span className="result-cree">{word.cree}</span>
              <span className="result-english">{word.english}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
