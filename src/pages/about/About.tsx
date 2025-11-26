import React from 'react';
import {
  DynamicHero,
  CollegeIntro,
  Philosophy,
  PrincipalMsg,
  Infrastructure,
  Achievements,
  STATS,
  PrincipalData,
  CallToAction,
  Testimonials
} from '@/components';

// Principal data
const principalData: PrincipalData = {
  name: "Engr. Abdul Waheed Khan",
  title: "Principal, Rawalpindi Polytechnic Institute",
  message: "At RPI, we don't just teach technology; we ignite the passion to create it. Our commitment is to ensure that every student walking through our gates leaves with not just a diploma, but the confidence and competence to lead in the industry. We are building the builders of tomorrow.",
  image: "https://picsum.photos/seed/principal/400/400"
};

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <DynamicHero
        title="Shaping Future"
        subtitle="Technologists"
        description="Rawalpindi Polytechnic Institute is a premier seat of learning, dedicated to producing skilled professionals who drive the nation's industrial growth."
        badge="Since 1995"
        primaryButtonText="Explore Programs"
        secondaryButtonText="Contact Us"
        primaryButtonLink="/programs"
        secondaryButtonLink="/contact"
      />

      <CollegeIntro stats={STATS} />
      <Philosophy />
      <PrincipalMsg data={principalData} />
      <Infrastructure />
      <Achievements />
      <Testimonials />
      <CallToAction />
    </div>
  );
};
