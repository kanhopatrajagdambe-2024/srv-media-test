import React, { useState } from 'react';
import { HERO_SLIDES } from '../mockData';
import { FormEnquire } from './FormEnquire';
import type { FormState } from '../types';

interface HeroProps {
  onFormSuccess: (data: FormState) => void;
}

const HERO_MARQUEE_COL1 = [
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80',
];

const HERO_MARQUEE_COL2 = [
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
];

const HERO_MARQUEE_COL3 = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80',
];

export const Hero: React.FC<HeroProps> = ({ onFormSuccess }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src =
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80';
  };

  return (
    <section className="pse-hero" aria-label="Hero Section">
      <div className="pse-hero__bg-blur" aria-hidden="true" />

      <div className="container pse-hero__grid">
        {/* Left Column: Heading & Venue matching Figma */}
        <div className="pse-hero__content-col">
          <h1 className="pse-hero__heading">
            {currentSlide.title}<br />
            <span className="pse-hero__highlight">{currentSlide.highlightText}</span>
          </h1>

          <div className="pse-hero__subtitle">{currentSlide.subtitle}</div>

          <div className="pse-hero__venue-pill">
            <div className="pse-hero__venue-left">
              <strong>Apparel House,</strong>
              <span>Sec 44, Gurugram</span>
            </div>
            <div className="pse-hero__venue-divider" aria-hidden="true" />
            <div className="pse-hero__venue-right">
              <strong>2-3 August 2025</strong>
              <span>Sat-Sun | 10AM - 6PM</span>
            </div>
          </div>
        </div>

        {/* Center Column: Continuous Auto-Scrolling Vertical Marquee Showcase */}
        <div className="pse-hero__showcase" aria-label="Student Activity Vertical Marquee Showcase">
          {/* Column 1: Upward Continuous Marquee */}
          <div className="v-marquee-col">
            <div className="v-marquee-track v-marquee-track--up">
              {HERO_MARQUEE_COL1.map((imgUrl, idx) => (
                <img
                  key={`c1-a-${idx}`}
                  src={imgUrl}
                  alt={`Student activity pill showcase ${idx + 1}`}
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
            <div className="v-marquee-track v-marquee-track--up" aria-hidden="true">
              {HERO_MARQUEE_COL1.map((imgUrl, idx) => (
                <img
                  key={`c1-b-${idx}`}
                  src={imgUrl}
                  alt=""
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Downward Continuous Marquee */}
          <div className="v-marquee-col">
            <div className="v-marquee-track v-marquee-track--down">
              {HERO_MARQUEE_COL2.map((imgUrl, idx) => (
                <img
                  key={`c2-a-${idx}`}
                  src={imgUrl}
                  alt={`Student activity pill showcase ${idx + 4}`}
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
            <div className="v-marquee-track v-marquee-track--down" aria-hidden="true">
              {HERO_MARQUEE_COL2.map((imgUrl, idx) => (
                <img
                  key={`c2-b-${idx}`}
                  src={imgUrl}
                  alt=""
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
          </div>

          {/* Column 3: Upward Continuous Marquee */}
          <div className="v-marquee-col">
            <div className="v-marquee-track v-marquee-track--up">
              {HERO_MARQUEE_COL3.map((imgUrl, idx) => (
                <img
                  key={`c3-a-${idx}`}
                  src={imgUrl}
                  alt={`Student activity pill showcase ${idx + 7}`}
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
            <div className="v-marquee-track v-marquee-track--up" aria-hidden="true">
              {HERO_MARQUEE_COL3.map((imgUrl, idx) => (
                <img
                  key={`c3-b-${idx}`}
                  src={imgUrl}
                  alt=""
                  className="pse-hero__pill-img"
                  onError={handleImageError}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Enquire Form Card */}
        <div className="pse-hero__form-col" id="register-form">
          <FormEnquire onSuccess={onFormSuccess} title="Enquire Now" buttonText="SUBMIT" />
        </div>
      </div>

      {/* Manual-Only Slide Controls (No auto timer) */}
      <div className="pse-hero__slider-controls" role="group" aria-label="Manual Slide Controls">
        <button
          className="pse-hero__arrow-btn"
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
        >
          ‹
        </button>
        {HERO_SLIDES.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`pse-hero__dot ${index === currentSlideIndex ? 'pse-hero__dot--active' : ''}`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlideIndex ? 'true' : undefined}
          />
        ))}
        <button
          className="pse-hero__arrow-btn"
          onClick={handleNextSlide}
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};
