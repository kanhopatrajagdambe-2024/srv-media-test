import React, { useState } from 'react';

interface HeaderProps {
  activeTab: 'exhibition' | 'blogs';
  setActiveTab: (tab: 'exhibition' | 'blogs') => void;
  onOpenRegisterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenRegisterModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'exhibition' | 'blogs') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="pse-header" role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="container pse-header__inner">
        {/* High-Resolution Vector Brand Logo */}
        <div
          className="pse-brand-logo"
          onClick={() => handleTabClick('exhibition')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Premier Schools Exhibition Home"
        >
          {/* Vector Crest Shield Emblem */}
          <svg className="pse-brand-logo__crest" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="100" height="100" rx="18" fill="#0F1A34" />
            <path d="M50 16 L78 30 V55 C78 72 50 84 50 84 C50 84 22 72 22 55 V30 Z" fill="#0F1A34" stroke="#F4C550" strokeWidth="4" />
            <path d="M50 26 L65 35 V50 C65 62 50 70 50 70 C50 70 35 62 35 50 V35 Z" fill="#F4C550" />
            <rect x="66" y="12" width="22" height="22" rx="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
            <text x="77" y="27" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">A</text>
          </svg>

          {/* Typography Brand Name */}
          <div className="pse-brand-logo__text-group">
            <span className="pse-brand-logo__edition">22nd EDITION</span>
            <span className="pse-brand-logo__title">Premier Schools Exhibition</span>
          </div>
        </div>

        {/* Desktop Nav Tabs */}
        <nav className="pse-header__nav pse-header__nav--desktop" aria-label="Main Navigation">
          <button
            className={`pse-header__nav-btn ${activeTab === 'exhibition' ? 'pse-header__nav-btn--active' : ''}`}
            onClick={() => handleTabClick('exhibition')}
            aria-current={activeTab === 'exhibition' ? 'page' : undefined}
          >
            Exhibition
          </button>
          <button
            className={`pse-header__nav-btn ${activeTab === 'blogs' ? 'pse-header__nav-btn--active' : ''}`}
            onClick={() => handleTabClick('blogs')}
            aria-current={activeTab === 'blogs' ? 'page' : undefined}
          >
            Latest Blogs
          </button>
        </nav>

        {/* Right Action Area: CTA Button & Mobile Toggle */}
        <div className="pse-header__actions">
          <button
            className="pse-header__cta-btn"
            onClick={onOpenRegisterModal}
            aria-label="Register Now for Exhibition"
          >
            <span>Register Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button
            className="pse-header__hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Drawer */}
      {mobileMenuOpen && (
        <div className="pse-header__mobile-menu">
          <button
            className={`pse-header__mobile-nav-btn ${activeTab === 'exhibition' ? 'pse-header__mobile-nav-btn--active' : ''}`}
            onClick={() => handleTabClick('exhibition')}
          >
            🏛️ Exhibition Overview
          </button>
          <button
            className={`pse-header__mobile-nav-btn ${activeTab === 'blogs' ? 'pse-header__mobile-nav-btn--active' : ''}`}
            onClick={() => handleTabClick('blogs')}
          >
            📰 Latest Blogs & Articles
          </button>
          <button
            className="pse-header__mobile-register-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegisterModal();
            }}
          >
            Register Now
          </button>
        </div>
      )}
    </header>
  );
};
