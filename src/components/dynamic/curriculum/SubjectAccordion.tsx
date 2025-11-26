import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    Clock,
    FlaskConical,
    ChevronDown,
    FileText,
    CheckCircle2,
    GraduationCap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Subject } from './CurriculumTypes';

interface SubjectAccordionProps {
    subject: Subject;
    color: string;
}

export const SubjectAccordion: React.FC<SubjectAccordionProps> = ({ subject, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={false}
            className={`border rounded-xl overflow-hidden bg-white mb-4 transition-all duration-300 ${isOpen ? 'shadow-lg border-secondary/30' : 'border-slate-200 hover:border-slate-300'}`}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 cursor-pointer bg-white"
            >
                <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg bg-slate-50 font-bold text-sm min-w-[80px] text-center border border-slate-100 ${color}`}>
                        {subject.code}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">{subject.name}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Badge className={`bg-slate-100 ${color} border-0 font-medium`}>
                                {subject.type === 'both' ? 'Theory + Practical' : subject.type === 'theory' ? 'Theory Only' : 'Practical Only'}
                            </Badge>
                            {subject.isCompulsory && (
                                <Badge className="bg-slate-50 text-slate-500 border border-slate-200 font-medium">Core Subject</Badge>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0 pl-4 md:pl-0 border-l md:border-l-0 border-slate-100">
                    <div className="text-right hidden md:block">
                        <span className="block text-2xl font-bold text-slate-900">{subject.creditHours}</span>
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Credits</span>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`p-2 rounded-full ${isOpen ? 'bg-slate-100' : ''}`}
                    >
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                            <div className="grid md:grid-cols-3 gap-8 mt-6">
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2"><FileText className="w-4 h-4" /> Description</h5>
                                        <p className="text-slate-600 leading-relaxed text-sm bg-white p-4 rounded-lg border border-slate-200 shadow-sm">{subject.description}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Learning Outcomes</h5>
                                        <ul className="grid sm:grid-cols-1 gap-2">
                                            {subject.outcomes.map((outcome, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Distribution Card */}
                                <div className="bg-white p-5 rounded-xl border border-slate-200 h-fit shadow-sm">
                                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Weekly Distribution</h5>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                                            <span className="text-slate-500 text-sm flex items-center gap-2"><BookOpen className="w-4 h-4" /> Theory Hours</span>
                                            <span className="font-bold text-slate-900">{subject.theoryHours}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                                            <span className="text-slate-500 text-sm flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Practical Hours</span>
                                            <span className="font-bold text-slate-900">{subject.practicalHours}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-1">
                                            <span className="text-slate-900 font-bold text-sm flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Total Hours</span>
                                            <span className="font-bold text-secondary text-lg">{subject.theoryHours + subject.practicalHours}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
