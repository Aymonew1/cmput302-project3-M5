import React from 'react';
import { Link } from 'react-router-dom';
import { words } from '../data/words';
import { useAppContext } from '../context/useAppContext';
import { Bookmark } from 'lucide-react';

const SavedWords = () => {
  const { savedWords } = useAppContext();
  const favoriteWords = words.filter((w) => savedWords.includes(w.id));

  return (
    <div className="saved-words-page">
      <header className="page-header">
        <h2>Saved Words</h2>
        <p>{favoriteWords.length} words in your collection</p>
      </header>

      {favoriteWords.length === 0 ? (
        <div className="empty-state">
          <Bookmark size={48} />
          <p>You haven't saved any words yet.</p>
          <Link to="/" className="browse-button">Start Browsing</Link>
        </div>
      ) : (
        <div className="word-list">
          {favoriteWords.map((word) => (
            <Link
              key={word.id}
              to={`/word/${word.id}`}
              className="word-card"
            >
              <div className="word-card-content">
                <span className="word-cree">{word.cree}</span>
                <span className="word-english">{word.english}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedWords;
