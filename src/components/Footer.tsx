import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pse-footer" role="contentinfo">
      <div className="container">
        <div className="pse-footer__grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="pse-header__logo-badge">22nd EDITION</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                Premier Schools Exhibition
              </div>
            </div>
            <p className="pse-footer__text">
              India's largest and most trusted school exhibition bringing 30+ top institutions, directors, and parents under one roof.
            </p>
          </div>

          {/* Corporate Office */}
          <div>
            <h3 className="pse-footer__heading">Corporate Office</h3>
            <p className="pse-footer__text">
              Suite B-5, Ballygunge Park Tower,<br />
              67B Ballygunge Circular Road,<br />
              Kolkata - 700019
            </p>
          </div>

          {/* Ahmedabad Office */}
          <div>
            <h3 className="pse-footer__heading">Ahmedabad Office</h3>
            <p className="pse-footer__text">
              12/AA, Swastik Chambers, Near CU Shah College,<br />
              Ashram Road,<br />
              Ahmedabad - 380009
            </p>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="pse-footer__heading">Call Us On</h3>
            <p className="pse-footer__text" style={{ fontWeight: 700, color: '#ffffff' }}>
              +91 9674805912<br />
              +91 9674585012
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#f4c550', marginBottom: '0.5rem' }}>Follow Us On</h4>
              <div className="pse-footer__social">
                <a href="#instagram" className="pse-footer__social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#facebook" className="pse-footer__social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#youtube" className="pse-footer__social-link" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pse-footer__bottom">
          Copyright 2025 | All rights reserved. Premier Schools Exhibition
        </div>
      </div>
    </footer>
  );
};
