import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PageLoader } from '@/components/common/PageLoader';
import { PageSkeleton } from '@/components/common/Skeletons';
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
  Contact
} from '@/components';

const CallToAction = () => (
  <section className="py-20 bg-white text-center border-t border-slate-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        Ready to Start Your Professional Journey?
      </h2>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        Join thousands of successful graduates who started their careers at RPI. Secure your future today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="px-8 bg-secondary hover:bg-secondary/90">Apply Now</Button>
        <Button size="lg" variant="outline" className="px-8">Contact Admission Office</Button>
      </div>
    </div>
  </section>
);

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate initial load
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Show content after skeleton
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!showContent) {
    return <PageSkeleton />;
  }

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
