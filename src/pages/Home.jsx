import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/words';
import { User, Utensils, Users, PawPrint, Cloud } from 'lucide-react';
import ExpertToggle from '../components/ExpertToggle';

const iconMap = {
  User: <User size={32} />,
  Utensils: <Utensils size={32} />,
  Users: <Users size={32} />,
  PawPrint: <PawPrint size={32} />,
  Cloud: <Cloud size={32} />,
};

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h2>Tansi! Welcome to Vocabulary Explorer</h2>
        <p>Start your journey to learn Cree language through categories or search.</p>
        <ExpertToggle />
      </section>

      <section className="categories-section">
        <h3>Browse by Category</h3>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              <div className="category-icon">{iconMap[category.icon]}</div>
              <span className="category-name">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
