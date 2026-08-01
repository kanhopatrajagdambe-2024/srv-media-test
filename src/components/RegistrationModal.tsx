import React from 'react';
import { FormEnquire } from './FormEnquire';
import type { FormState, BlogPost } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'form' | 'success' | 'blog';
  submittedData?: FormState | null;
  selectedBlog?: BlogPost | null;
  onSuccess: (data: FormState) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  type,
  submittedData,
  selectedBlog,
  onSuccess,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="pse-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="pse-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="pse-modal__close"
          onClick={onClose}
          aria-label="Close modal dialog"
        >
          &times;
        </button>

        {type === 'form' && (
          <FormEnquire
            onSuccess={onSuccess}
            title="Register for Exhibition"
            buttonText="CONFIRM REGISTRATION"
          />
        )}

        {type === 'success' && submittedData && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#d1fae5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 id="modal-title" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0728', marginBottom: '0.75rem' }}>
              Registration Successful!
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you <strong>{submittedData.parentName}</strong>! Your inquiry for <strong>{submittedData.grade}</strong> has been registered. We have sent confirmation details to <strong>{submittedData.phone}</strong>.
            </p>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.9rem', color: '#334155' }}>
              📍 <strong>Venue:</strong> Apparel House, Sec 44, Gurugram<br />
              📅 <strong>Date:</strong> 2-3 August 2025 (Sat-Sun | 10AM - 6PM)
            </div>
            <button
              className="pse-submit-btn"
              style={{ marginTop: '2rem' }}
              onClick={onClose}
            >
              DONE
            </button>
          </div>
        )}

        {type === 'blog' && selectedBlog && (
          <div>
            <span
              style={{
                background: 'rgba(109, 40, 217, 0.1)',
                color: '#6d28d9',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
            >
              {selectedBlog.category}
            </span>
            <h2 id="modal-title" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f0728', margin: '0.75rem 0' }}>
              {selectedBlog.title}
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
              By {selectedBlog.author} • {selectedBlog.date} • {selectedBlog.readTime}
            </div>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.5rem' }}
            />
            <div
              style={{
                color: '#334155',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                maxHeight: '300px',
                overflowY: 'auto',
                whiteSpace: 'pre-line',
              }}
            >
              {selectedBlog.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
