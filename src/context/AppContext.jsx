import React, { useState, useEffect } from 'react';
import { AppContext } from './useAppContext';

export const AppProvider = ({ children }) => {
  const [savedWords, setSavedWords] = useState(() => {
    const saved = localStorage.getItem('savedWords');
    return saved ? JSON.parse(saved) : [];
  });
  const [expertMode, setExpertMode] = useState(() => {
    const expert = localStorage.getItem('expertMode');
    return expert === 'true';
  });
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    localStorage.setItem('savedWords', JSON.stringify(savedWords));
  }, [savedWords]);

  useEffect(() => {
    localStorage.setItem('expertMode', expertMode);
  }, [expertMode]);

  const toggleSaveWord = (wordId) => {
    setSavedWords((prev) => {
      const isSaved = prev.includes(wordId);
      if (isSaved) {
        showFeedback('Removed from Saved Words');
        return prev.filter((id) => id !== wordId);
      } else {
        showFeedback('Successfully added to Saved Words');
        return [...prev, wordId];
      }
    });
  };

  const toggleExpertMode = () => {
    setExpertMode((prev) => !prev);
    showFeedback(`Expert mode ${!expertMode ? 'enabled: showing advanced details' : 'disabled: showing simple view'}`);
  };

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <AppContext.Provider
      value={{
        savedWords,
        toggleSaveWord,
        expertMode,
        toggleExpertMode,
        feedback,
        showFeedback,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
