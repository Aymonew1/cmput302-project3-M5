import React from 'react';
import { Settings } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';

const ExpertToggle = () => {
  const { expertMode, toggleExpertMode } = useAppContext();

  return (
    <div className="expert-toggle-container">
      <label className="expert-toggle-label">
        <input
          type="checkbox"
          checked={expertMode}
          onChange={toggleExpertMode}
          className="expert-toggle-input"
        />
        <div className="toggle-display">
          <Settings size={18} />
          <span>{expertMode ? "Expert Mode On" : "Expert Mode Off"}</span>
        </div>
      </label>
      <p className="expert-toggle-desc">
        {expertMode
          ? "Advanced linguistic details (word type, breakdown) are shown."
          : "Simple view for beginners."
        }
      </p>
    </div>
  );
};

export default ExpertToggle;
