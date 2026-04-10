import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Bookmark, Search, BookOpen } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import SearchBar from './SearchBar';

const Layout = () => {
  const { feedback } = useAppContext();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-top">
          <Link to="/" className="app-logo">
            <BookOpen size={28} />
            <h1>Cree Vocabulary Explorer</h1>
          </Link>
          <SearchBar />
        </div>
        <nav className="app-nav">
          <Link to="/" className="nav-item">
            <Home size={22} />
            <span>Home</span>
          </Link>
          <Link to="/saved" className="nav-item">
            <Bookmark size={22} />
            <span>Saved Words</span>
          </Link>
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
        <p>Built for CMPUT 302 - HCI Project</p>
      </footer>
    </div>
  );
};

export default Layout;
