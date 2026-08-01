import React from 'react';
import { SCHOOL_LOGOS_ROW_1, SCHOOL_LOGOS_ROW_2 } from '../mockData';

interface ParticipatingSchoolsProps {
  onSelectSchool?: (schoolName: string) => void;
}

const LaurelWreath: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="pse-trust-badge">
    <svg className="pse-laurel" width="40" height="70" viewBox="0 0 40 70" fill="none" aria-hidden="true">
      <path d="M32 62 C22 48 12 32 18 8 M26 55 C16 48 18 38 23 38 M22 42 C12 34 14 24 20 24 M18 28 C9 20 12 10 17 10" stroke="#dfb36e" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
    <div className="pse-trust-badge__content">{children}</div>
    <svg className="pse-laurel" width="40" height="70" viewBox="0 0 40 70" fill="none" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
      <path d="M32 62 C22 48 12 32 18 8 M26 55 C16 48 18 38 23 38 M22 42 C12 34 14 24 20 24 M18 28 C9 20 12 10 17 10" stroke="#dfb36e" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  </div>
);

export const ParticipatingSchools: React.FC<ParticipatingSchoolsProps> = ({ onSelectSchool }) => {
  const handleCardClick = (schoolName: string) => {
    if (onSelectSchool) {
      onSelectSchool(schoolName);
    }
  };

  return (
    <section className="pse-schools" aria-label="Participating Schools">
      {/* Top Trust Laurel Badges */}
      <div className="container pse-trust-row">
        <LaurelWreath>
          Trusted by<br />
          <strong>1 Million+</strong><br />
          Parents
        </LaurelWreath>

        <LaurelWreath>
          <strong>22+</strong><br />
          <strong>Years</strong><br />
          of Legacy
        </LaurelWreath>

        <LaurelWreath>
          <strong>500+</strong><br />
          Participating<br />
          Schools
        </LaurelWreath>

        <LaurelWreath>
          <strong>17 Cities</strong><br />
          Across the<br />
          Globe
        </LaurelWreath>
      </div>

      <div className="container">
        <h2 className="pse-schools__title">Participating Schools</h2>
      </div>

      {/* Row 1: Left -> Right Continuous Marquee */}
      <div
        className="marquee-container"
        style={{ marginBottom: '1.25rem' }}
        tabIndex={0}
        aria-label="Participating Schools Row 1"
      >
        <div className="marquee-content">
          {SCHOOL_LOGOS_ROW_1.map((school) => (
            <div
              key={`r1-a-${school.id}`}
              className="pse-schools__card"
              onClick={() => handleCardClick(school.name)}
              role="button"
              tabIndex={0}
              aria-label={`View ${school.name}`}
            >
              <img src={school.logo} alt={`${school.name} logo`} className="pse-schools__logo" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {SCHOOL_LOGOS_ROW_1.map((school) => (
            <div
              key={`r1-b-${school.id}`}
              className="pse-schools__card"
              onClick={() => handleCardClick(school.name)}
            >
              <img src={school.logo} alt={`${school.name} logo`} className="pse-schools__logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right -> Left Continuous Marquee */}
      <div
        className="marquee-container"
        tabIndex={0}
        aria-label="Participating Schools Row 2"
      >
        <div className="marquee-content marquee-content--reverse">
          {SCHOOL_LOGOS_ROW_2.map((school) => (
            <div
              key={`r2-a-${school.id}`}
              className="pse-schools__card"
              onClick={() => handleCardClick(school.name)}
              role="button"
              tabIndex={0}
              aria-label={`View ${school.name}`}
            >
              <img src={school.logo} alt={`${school.name} logo`} className="pse-schools__logo" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-content--reverse" aria-hidden="true">
          {SCHOOL_LOGOS_ROW_2.map((school) => (
            <div
              key={`r2-b-${school.id}`}
              className="pse-schools__card"
              onClick={() => handleCardClick(school.name)}
            >
              <img src={school.logo} alt={`${school.name} logo`} className="pse-schools__logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
