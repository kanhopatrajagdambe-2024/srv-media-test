import React, { useState } from 'react';
import { BLOG_POSTS } from '../mockData';
import type { BlogPost } from '../types';

interface BlogsSectionProps {
  onReadPost: (post: BlogPost) => void;
}

const CATEGORIES = [
  'All Specialisations',
  'Education',
  'Lessons',
  'Teachers',
  'Music',
  'Online Course',
  'Programming',
];

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onReadPost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Specialisations');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All Specialisations' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section className="pse-blogs" aria-label="Latest Blogs & Insights">
      <div className="container">
        <div className="pse-blogs__header">
          <h2 className="pse-blogs__title">Read Our Latest Blogs</h2>

          <div className="pse-blogs__search">
            <svg
              className="pse-blogs__search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="pse-blogs__search-input"
              placeholder="Search for latest blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search for latest blogs"
            />
          </div>

          <div className="pse-blogs__filters" role="tablist" aria-label="Blog Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pse-blog-chip ${selectedCategory === cat ? 'pse-blog-chip--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Banner */}
        {featuredPost && (
          <article className="pse-blog-featured" aria-label="Featured Blog Post">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="pse-blog-featured__img"
              loading="lazy"
            />
            <div className="pse-blog-featured__content">
              <div className="pse-blog-meta">
                <span>By {featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h3 className="pse-blog-featured__title">{featuredPost.title}</h3>
              <p className="pse-blog-featured__excerpt">{featuredPost.excerpt}</p>
              <button
                className="pse-read-more-btn"
                style={{ width: 'fit-content' }}
                onClick={() => onReadPost(featuredPost)}
                aria-label={`Read full post: ${featuredPost.title}`}
              >
                <span>READ MORE</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </article>
        )}

        {/* Blog Post Grid */}
        <div className="pse-blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="pse-blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="pse-blog-card__img"
                loading="lazy"
              />
              <div className="pse-blog-card__content">
                <div className="pse-blog-meta" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="pse-blog-card__title">{post.title}</h3>
                <p className="pse-blog-featured__excerpt" style={{ fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  {post.excerpt}
                </p>
                <button
                  className="pse-read-more-btn"
                  onClick={() => onReadPost(post)}
                  aria-label={`Read full article: ${post.title}`}
                >
                  <span>READ MORE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
