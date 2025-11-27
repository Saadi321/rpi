import React from 'react';
import {
    DynamicHero,
    FacilitiesOverview,
    Testimonials,
    Gallery,
    CallToAction,
    FACILITIES_DATA,
    FACILITIES_STATS
} from '@/components';

export const Facility: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <DynamicHero
                title="State-of-the-Art"
                subtitle="Facilities"
                description="At Rawalpindi Polytechnic Institute, we believe in providing world-class infrastructure that supports innovation, learning, and practical excellence."
                badge="Excellence in Infrastructure"
                primaryButtonText="Apply Now"
                secondaryButtonText="Virtual Tour"
                primaryButtonLink="/admission"
                secondaryButtonLink="/gallery"
            />

            <FacilitiesOverview facilities={FACILITIES_DATA} stats={FACILITIES_STATS} />
            <Gallery />
            <Testimonials />
            <CallToAction />
        </div>
    );
};
