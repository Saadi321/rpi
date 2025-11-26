import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdmissionForm } from '@/components/dynamic/admissions/AdmissionForm';

export const Admission = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <AdmissionForm onBack={handleBack} />;
};
