import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { words } from '../data/words';
import { useAppContext } from '../context/useAppContext';
import { ChevronLeft, Volume2, Bookmark, BookmarkCheck } from 'lucide-react';

const WordDetail = () => {
  const { wordId } = useParams();
  const navigate = useNavigate();
  const { savedWords, toggleSaveWord, expertMode, showFeedback } = useAppContext();

  const word = words.find((w) => w.id === wordId);
  const isSaved = savedWords.includes(wordId);

  if (!word) {
    return <div>Word not found.</div>;
  }

  const handlePlayAudio = () => {
    // In a real app, this would play an audio file
    showFeedback(`Playing pronunciation for "${word.cree}"...`);
  };

  return (
    <div className="word-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <ChevronLeft size={20} />
        Back
      </button>

      <div className="word-detail-container">
        <div className="word-detail-header">
          <div>
            <h2 className="detail-cree">{word.cree}</h2>
            <p className="detail-english">{word.english}</p>
          </div>
          <button
            className={`save-button ${isSaved ? 'saved' : ''}`}
            onClick={() => toggleSaveWord(word.id)}
            aria-label={isSaved ? 'Unsave word' : 'Save word'}
          >
            {isSaved ? <BookmarkCheck size={28} /> : <Bookmark size={28} />}
          </button>
        </div>

        <div className="pronunciation-section">
          <h3>Pronunciation</h3>
          <div className="audio-card">
            <span className="phonetic">{word.pronunciation}</span>
            <button className="play-audio" onClick={handlePlayAudio}>
              <Volume2 size={20} />
              <span>Listen</span>
            </button>
          </div>
        </div>

        {expertMode && (
          <div className="expert-section">
            <h3>Expert Details</h3>
            <div className="expert-info-grid">
              <div className="expert-info-item">
                <span className="label">Word Class:</span>
                <span className="value">{word.wordClass}</span>
              </div>
              <div className="expert-info-item">
                <span className="label">Morphology:</span>
                <span className="value">{word.morphology}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordDetail;
