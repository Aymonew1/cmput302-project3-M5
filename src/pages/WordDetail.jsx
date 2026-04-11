import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { words } from '../data/words';
import { useAppContext } from '../context/useAppContext';
import { ChevronLeft, Volume2, Bookmark, BookmarkCheck, Share2, Info, Network, AlertTriangle } from 'lucide-react';

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
            {isSaved ? <BookmarkCheck size={24} /> : <Bookmark size={24} />}
            <span>{isSaved ? 'Saved' : 'Save Word'}</span>
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

        {word.examples && word.examples.length > 0 && (
          <div className="examples-section">
            <h3>Example Usage</h3>
            <div className="examples-list">
              {word.examples.map((ex, idx) => (
                <div key={idx} className="example-item">
                  <p className="example-cree">{ex.cree}</p>
                  <p className="example-english">{ex.english}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {expertMode && (
          <div className="expert-section">
            <div className="expert-header">
              <Network size={20} />
              <h3>Semantic Network</h3>
            </div>
            <div className="semantic-network">
              {word.relatedWords && word.relatedWords.length > 0 ? (
                <div className="related-words-grid">
                  {word.relatedWords.map((id) => {
                    const related = words.find((w) => w.id === id);
                    if (!related) return null;
                    return (
                      <Link key={id} to={`/word/${id}`} className="related-word-chip">
                        <span className="related-cree">{related.cree}</span>
                        <span className="related-english">{related.english}</span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="no-data-text">No related words in network.</p>
              )}
            </div>

            <div className="expert-header">
              <Info size={20} />
              <h3>Expert Details</h3>
            </div>
            <div className="expert-info-grid">
              <div className="expert-info-item">
                <span className="label">Word Type:</span>
                <span className="value">{word.wordClass}</span>
              </div>
              <div className="expert-info-item">
                <span className="label">Word Breakdown:</span>
                <span className="value">{word.morphology}</span>
              </div>
            </div>

            <div className="expert-header">
              <Share2 size={20} />
              <h3>Expert Notes</h3>
            </div>
            <div className="expert-notes">
              <p>{word.expertNotes || "No additional linguistic notes."}</p>
            </div>

            <div className="expert-actions">
              <button
                className="flag-button"
                onClick={() => showFeedback("Semantic gap flagged for review.")}
              >
                <AlertTriangle size={18} />
                <span>Flag Semantic Gap</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordDetail;
