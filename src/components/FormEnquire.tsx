import React, { useState } from 'react';
import type { FormState, FormErrors } from '../types';

interface FormEnquireProps {
  onSuccess: (data: FormState) => void;
  title?: string;
  buttonText?: string;
}

export const FormEnquire: React.FC<FormEnquireProps> = ({
  onSuccess,
  title = 'Enquire Now',
  buttonText = 'SUBMIT',
}) => {
  const [formData, setFormData] = useState<FormState>({
    parentName: '',
    phone: '',
    grade: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim().replace(/[- ]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.grade) {
      newErrors.grade = 'Please select a grade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(formData);
      setFormData({ parentName: '', phone: '', grade: '' });
      setErrors({});
    }, 600);
  };

  return (
    <form className="pse-form-card" onSubmit={handleSubmit} noValidate aria-label={title}>
      <h2 className="pse-form-card__title">{title}</h2>

      <div className="pse-form-group">
        <label htmlFor="parentName">Parent's Name *</label>
        <input
          id="parentName"
          type="text"
          className="pse-input"
          placeholder="Enter parent's full name"
          value={formData.parentName}
          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
          aria-invalid={!!errors.parentName}
          aria-describedby={errors.parentName ? 'parentName-error' : undefined}
          required
        />
        {errors.parentName && (
          <div id="parentName-error" className="pse-form-error">
            {errors.parentName}
          </div>
        )}
      </div>

      <div className="pse-form-group">
        <label htmlFor="phone">Phone number *</label>
        <input
          id="phone"
          type="tel"
          className="pse-input"
          placeholder="Enter 10-digit mobile number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          required
        />
        {errors.phone && (
          <div id="phone-error" className="pse-form-error">
            {errors.phone}
          </div>
        )}
      </div>

      <div className="pse-form-group">
        <label htmlFor="grade">Which grade are you looking for? *</label>
        <select
          id="grade"
          className="pse-input"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          aria-invalid={!!errors.grade}
          aria-describedby={errors.grade ? 'grade-error' : undefined}
          required
          style={{ appearance: 'none', cursor: 'pointer' }}
        >
          <option value="" disabled style={{ color: '#0f0728' }}>
            Select Grade
          </option>
          <option value="Pre-Nursery / Nursery" style={{ color: '#0f0728' }}>
            Pre-Nursery / Nursery
          </option>
          <option value="Kindergarten / KG" style={{ color: '#0f0728' }}>
            Kindergarten / KG
          </option>
          <option value="Grade 1 - 5 (Primary)" style={{ color: '#0f0728' }}>
            Grade 1 - 5 (Primary)
          </option>
          <option value="Grade 6 - 8 (Middle)" style={{ color: '#0f0728' }}>
            Grade 6 - 8 (Middle)
          </option>
          <option value="Grade 9 - 10 (Secondary)" style={{ color: '#0f0728' }}>
            Grade 9 - 10 (Secondary)
          </option>
          <option value="Grade 11 - 12 (Senior Secondary)" style={{ color: '#0f0728' }}>
            Grade 11 - 12 (Senior Secondary)
          </option>
        </select>
        {errors.grade && (
          <div id="grade-error" className="pse-form-error">
            {errors.grade}
          </div>
        )}
      </div>

      <button type="submit" className="pse-submit-btn" disabled={isSubmitting}>
        <span>{isSubmitting ? 'Submitting...' : buttonText}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
    </form>
  );
};
