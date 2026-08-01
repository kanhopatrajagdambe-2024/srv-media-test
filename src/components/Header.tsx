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
        {/* Top Left Floating Logo Badge matching Figma */}
        <div
          className="pse-header__logo-container"
          onClick={() => handleTabClick('exhibition')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Premier Schools Exhibition Home"
        >
          <div className="pse-logo-badge">
            <div className="pse-logo-badge__top">
              <span className="pse-logo-badge__edition">22nd EDITION</span>
              <span className="pse-logo-badge__red-icon">A</span>
            </div>
            <div className="pse-logo-badge__title">
              Premier<br />
              Schools<br />
              Exhibition
            </div>
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

        {/* Right Action Area: Register CTA & Mobile Hamburger Toggle */}
        <div className="pse-header__actions">
          <button
            className="pse-split-register-btn"
            onClick={onOpenRegisterModal}
            aria-label="Register Now for Exhibition"
          >
            <span className="pse-split-register-btn__icon" aria-hidden="true">
              ↗
            </span>
            <span className="pse-split-register-btn__text">REGISTER NOW</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
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

      {/* Mobile Slide-Down Navigation Menu */}
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
            ↗ REGISTER NOW FOR EXHIBITION
          </button>
        </div>
      )}
    </header>
  );
};
