import React from 'react';
import { INFRASTRUCTURE_ITEMS } from './InfrastructureData';

export const Infrastructure: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">State-of-the-Art Infrastructure</h2>
                    <p className="text-slate-600">
                        We invest heavily in our facilities to ensure students have access to the latest tools and environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {INFRASTRUCTURE_ITEMS.map((item, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                                <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
