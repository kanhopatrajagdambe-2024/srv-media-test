import React from 'react';

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
  return (
    <header className="pse-header" role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="container pse-header__inner">
        <div className="pse-header__logo" onClick={() => setActiveTab('exhibition')} style={{ cursor: 'pointer' }}>
          <div className="pse-header__logo-badge">22nd EDITION</div>
          <div>
            <div className="pse-header__logo-title">Premier Schools Exhibition</div>
            <div className="pse-header__logo-sub">PSE • GURUGRAM 2025</div>
          </div>
        </div>

        <nav className="pse-header__nav" aria-label="Main Navigation">
          <button
            className={`pse-header__nav-btn ${activeTab === 'exhibition' ? 'pse-header__nav-btn--active' : ''}`}
            onClick={() => setActiveTab('exhibition')}
            aria-current={activeTab === 'exhibition' ? 'page' : undefined}
          >
            Exhibition
          </button>
          <button
            className={`pse-header__nav-btn ${activeTab === 'blogs' ? 'pse-header__nav-btn--active' : ''}`}
            onClick={() => setActiveTab('blogs')}
            aria-current={activeTab === 'blogs' ? 'page' : undefined}
          >
            Latest Blogs
          </button>
        </nav>

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
      </div>
    </header>
  );
};
