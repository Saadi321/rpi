import { useState, useEffect } from 'react';
import {
  Hero,
  Intro,
  Programs,
  Admissions,
  Facilities,
  StudentLife,
  IndustryLinks,
  Testimonials,
  Gallery,
  Announcements,
  Contact,
  CallToAction
} from '@/components';

export const Home = () => {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white selection:bg-secondary selection:text-white">
      <Hero />
      <Intro />
      <Programs />
      <Admissions />
      <Facilities />
      <StudentLife />
      <IndustryLinks />
      <Testimonials />
      <Gallery />
      <Announcements />
      <CallToAction />
      <Contact />
    </main>
  );
};
