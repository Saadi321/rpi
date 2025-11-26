import React from 'react';
import { MILESTONES } from './AchievementsData';

export const Achievements: React.FC = () => {
    return (
        <section className="bg-slate-900 text-white overflow-hidden relative py-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-slate-900 to-slate-900 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                    <p className="text-slate-400">Milestones that define our legacy.</p>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" />

                    <div className="space-y-12">
                        {MILESTONES.map((m, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                                    <div className={`p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-secondary transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-secondary font-bold text-xl block mb-2">{m.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                                    <div className="w-4 h-4 rounded-full bg-secondary z-10" />
                                    <div className="absolute w-12 h-12 rounded-full bg-secondary/20 animate-ping" />
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
