import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { words } from '../data/words';
import { useAppContext } from '../context/useAppContext';
import { ChevronLeft, Volume2, Bookmark, BookmarkCheck, Share2, Info, Network, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const WordDetail = () => {
  const { wordId } = useParams();
  const navigate = useNavigate();
  const { savedWords, toggleSaveWord, expertMode, showFeedback } = useAppContext();
  const [networkExpanded, setNetworkExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const word = words.find((w) => w.id === wordId);
  const isSaved = savedWords.includes(wordId);

  if (!word) {
    return <div>Word not found.</div>;
  }

  const handlePlayAudio = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    showFeedback(`Playing pronunciation for "${word.cree}"...`);

    // Simulate audio with Web Speech API for prototype
    const utterance = new SpeechSynthesisUtterance(word.cree);
    utterance.lang = 'en-US'; // Best approximation for prototype
    utterance.onend = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);

    // Fallback for browsers with broken speech synthesis onEnd
    setTimeout(() => setIsPlaying(false), 2000);
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
            <button
              className={`play-audio ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayAudio}
              disabled={isPlaying}
            >
              <Volume2 size={20} className={isPlaying ? 'animate-pulse' : ''} />
              <span>{isPlaying ? 'Playing...' : 'Listen'}</span>
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

        {!expertMode && (
          <div className="expert-discovery-card">
            <Info size={24} />
            <div className="discovery-text">
              <h4>Want to see more?</h4>
              <p>Enable Expert Mode to see word breakdowns, linguistic notes, and semantic networks.</p>
            </div>
          </div>
        )}

        {expertMode && (
          <div className="expert-section">
            <div className="expert-header">
              <Network size={20} />
              <h3>Semantic Network</h3>
            </div>
            <p className="expert-subtitle">Explore related words and linguistic connections</p>
            <div className="semantic-network">
              {word.relatedWords && word.relatedWords.length > 0 ? (
                <>
                  <div className={`related-words-grid ${networkExpanded ? 'expanded' : ''}`}>
                    {word.relatedWords.map((id) => {
                      const related = words.find((w) => w.id === id);
                      if (!related) return null;
                      return (
                        <Link key={id} to={`/word/${id}`} className="related-word-card">
                          <div className="card-top">
                            <span className="related-cree">{related.cree}</span>
                            <span className="related-english">{related.english}</span>
                          </div>
                          <span className="view-link">View Word &rarr;</span>
                        </Link>
                      );
                    })}
                  </div>
                  <button
                    className="expand-network-btn"
                    onClick={() => setNetworkExpanded(!networkExpanded)}
                  >
                    {networkExpanded ? (
                      <>
                        <ChevronUp size={18} />
                        <span>Collapse Network</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={18} />
                        <span>Expand Full Network</span>
                      </>
                    )}
                  </button>
                </>
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
