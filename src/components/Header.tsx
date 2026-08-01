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
        {/* Standard Sleek Logo Brand */}
        <div
          className="pse-header__logo"
          onClick={() => handleTabClick('exhibition')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Premier Schools Exhibition Home"
        >
          <span className="pse-header__logo-badge">22nd EDITION</span>
          <div className="pse-header__logo-text-group">
            <span className="pse-header__logo-title">Premier Schools Exhibition</span>
            <span className="pse-header__logo-sub">GURUGRAM 2025</span>
          </div>
        </div>

        {/* Center Nav Tabs */}
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

        {/* Right Action Area: Standard CTA & Mobile Toggle */}
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
