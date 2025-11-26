import React from 'react';
import { Quote } from 'lucide-react';
import { PrincipalData } from './PrincipalMsgTypes';

interface PrincipalMsgProps {
    data: PrincipalData;
}

export const PrincipalMsg: React.FC<PrincipalMsgProps> = ({ data }) => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
                        <div className="md:col-span-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-white/5 rounded-full blur-lg" />
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className="rounded-full w-64 h-64 object-cover border-4 border-secondary mx-auto shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <Quote className="w-12 h-12 text-secondary mb-6 opacity-50" />
                            <h2 className="text-3xl font-bold mb-6">Principal's Message</h2>
                            <p className="text-slate-300 text-lg leading-relaxed italic mb-6">
                                {data.message}
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-white">{data.name}</h4>
                                <p className="text-secondary font-medium">{data.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
