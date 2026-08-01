import React from 'react';
import { SCHOOL_CATEGORIES } from '../mockData';

interface SchoolCategoriesProps {
  onSelectCategory: (title: string) => void;
}

export const SchoolCategories: React.FC<SchoolCategoriesProps> = ({ onSelectCategory }) => {

  return (
    <section className="pse-categories" aria-label="Choose the School That Fits You Best">
      <div className="container">
        <h2 className="pse-categories__title">Choose the School That Fits You Best</h2>

        <div className="pse-categories__grid">
          {SCHOOL_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="pse-category-card"
              onClick={() => onSelectCategory(category.title)}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={`Select category ${category.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectCategory(category.title);
                }
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="pse-category-card__bg"
                loading="lazy"
              />
              <div className="pse-category-card__overlay" aria-hidden="true" />
              <div className="pse-category-card__content">
                {category.badge && (
                  <span className="pse-category-card__badge">{category.badge}</span>
                )}
                <h3 className="pse-category-card__title">{category.title}</h3>
                <p className="pse-category-card__desc">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
