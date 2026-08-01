import React from 'react';

interface PreScheduleBannerProps {
  onPreScheduleClick: () => void;
}

export const PreScheduleBanner: React.FC<PreScheduleBannerProps> = ({ onPreScheduleClick }) => {
  return (
    <section className="pse-banner" aria-label="Pre-schedule School Appointments">
      <div className="container pse-banner__grid">
        <div>
          <div className="pse-banner__tagline">Exciting Opportunities for Parents!</div>
          <h2 className="pse-banner__title">
            Pre-schedule Your <br /> School Appointments
          </h2>
          <div className="pse-banner__sub">To Avoid Rush</div>

          <button
            className="pse-submit-btn"
            style={{ maxWidth: '280px', display: 'inline-flex' }}
            onClick={onPreScheduleClick}
            aria-label="Pre-Schedule School Appointments Now"
          >
            <span>PRE-SCHEDULE NOW</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
            alt="Parents meeting school representatives at Premier Schools Exhibition"
            className="pse-banner__img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
