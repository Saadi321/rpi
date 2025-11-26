import React from 'react';
import { FacilitiesOverviewProps } from './FacilitiesOverviewTypes';
import { FacilityView } from './FacilityView';
import { SummaryStat } from './SummaryStat';

export const FacilitiesOverview: React.FC<FacilitiesOverviewProps> = ({ facilities, stats }) => {
    return (
        <section id="facilities" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
                    <p className="text-slate-600">We provide an environment conducive to learning and practical application.</p>
                </div>

                {stats && stats.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, idx) => (
                            <SummaryStat key={idx} stat={stat} />
                        ))}
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((facility, idx) => (
                        <FacilityView key={idx} facility={facility} />
                    ))}
                </div>
            </div>
        </section>
    );
};
