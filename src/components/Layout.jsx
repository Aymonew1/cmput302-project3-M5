import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Bookmark, Search, BookOpen } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import SearchBar from './SearchBar';
import ExpertToggle from './ExpertToggle';
import { words } from '../data/words';

const Layout = () => {
  const { feedback, savedWords } = useAppContext();
  const progressPercentage = words.length > 0 ? (savedWords.length / words.length) * 100 : 0;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-top">
          <Link to="/" className="app-logo">
            <BookOpen size={24} />
            <h1>Cree Vocabulary Explorer</h1>
          </Link>
        </div>
        <div className="search-row">
          <SearchBar />
        </div>
        <nav className="app-nav">
          <Link to="/" className="nav-item">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/saved" className="nav-item">
            <Bookmark size={20} />
            <span>Saved Words</span>
          </Link>
          <div style={{ marginLeft: 'auto' }}>
            <ExpertToggle />
          </div>
        </nav>
      </header>

      <main className="app-main">
        {feedback && (
          <div className="feedback-toast">
            {feedback}
          </div>
        )}
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="progress-section">
          <span className="progress-label">Learning Progress: {savedWords.length} / {words.length} words saved</span>
          <div className="progress-container">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        <p>Built for CMPUT 302 - HCI Project</p>
      </footer>
    </div>
  );
};

export default Layout;
