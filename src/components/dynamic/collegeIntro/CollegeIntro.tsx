import React from 'react';
import { motion } from 'framer-motion';
import { History, Award } from 'lucide-react';
import { CollegeIntroProps } from './CollegeIntroTypes';

export const CollegeIntro: React.FC<CollegeIntroProps> = ({ stats }) => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-2 text-secondary font-bold tracking-widest text-xs uppercase">
                            <History className="w-4 h-4" /> Our Story
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Three Decades of Technical Excellence
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Established in 1995, Rawalpindi Polytechnic Institute (RPI) started with a humble mission: to bridge the gap between academic theory and industrial practice in Pakistan.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Over the years, we have grown from a small vocational center to a fully accredited institute offering specialized 3-year Diploma of Associate Engineer (DAE) programs. Our alumni are now serving in leading national and multinational organizations, contributing significantly to the country's infrastructure and technological landscape.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <stat.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900">{stat.value}</h4>
                                        <p className="text-xs text-slate-500 uppercase font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-secondary/10 rounded-3xl -z-10 transform rotate-3" />
                        <img
                            src="https://picsum.photos/seed/building/800/600"
                            alt="RPI Campus Building"
                            className="rounded-2xl shadow-xl w-full object-cover"
                        />
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border border-white/50">
                            <div className="flex items-center gap-3 mb-2">
                                <Award className="w-8 h-8 text-yellow-500" />
                                <span className="font-bold text-slate-900 text-lg">Award Winning</span>
                            </div>
                            <p className="text-sm text-slate-600">Recognized as the "Best Technical Institute in Rawalpindi" for 3 consecutive years.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
