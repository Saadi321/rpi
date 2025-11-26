import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PHILOSOPHY_ITEMS } from './PhilosophyData';

export const Philosophy: React.FC = () => {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Philosophy</h2>
                    <p className="text-slate-600">Driven by a purpose to empower the youth and build a sustainable future.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PHILOSOPHY_ITEMS.map((item, index) => {
                        const borderColor = index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-secondary' : 'bg-orange-500';

                        return (
                            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                                <div className={`absolute top-0 left-0 w-1 h-full ${borderColor}`} />
                                <CardContent className="p-8">
                                    <div className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    {item.description && (
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    )}
                                    {item.list && (
                                        <ul className="text-slate-600 text-sm space-y-2">
                                            {item.list.map((listItem, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <CheckCircle2 className={`w-4 h-4 ${item.color}`} /> {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
