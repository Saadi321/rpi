import React from 'react';
import {
    DynamicHero,
    CallToAction,
    Testimonials,
    Programs
} from '@/components';



export const Program: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <DynamicHero
                title="Our Programs"
                subtitle="Technologists"
                description="Rawalpindi Polytechnic Institute is a premier seat of learning, dedicated to producing skilled professionals who drive the nation's industrial growth."
                badge="Since 1995"
            />

            <Programs />
            <Testimonials />
            <CallToAction />
        </div>
    );
};
