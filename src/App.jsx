import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import WordDetail from './pages/WordDetail';
import SavedWords from './pages/SavedWords';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:categoryId" element={<CategoryDetail />} />
            <Route path="word/:wordId" element={<WordDetail />} />
            <Route path="saved" element={<SavedWords />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
