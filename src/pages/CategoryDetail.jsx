import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, words } from '../data/words';
import { ChevronLeft } from 'lucide-react';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const filteredWords = words.filter((w) => w.category === categoryId);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="category-detail-page">
      <Link to="/" className="back-link">
        <ChevronLeft size={18} />
        Back to Home
      </Link>

      <header className="page-header">
        <h2>{category.name}</h2>
        <p>{filteredWords.length} words found</p>
      </header>

      <div className="word-list">
        {filteredWords.map((word) => (
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
    </div>
  );
};

export default CategoryDetail;
