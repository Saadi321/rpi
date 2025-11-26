import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Download,
    BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CURRICULUM_DATA } from './CurriculumData';
import { SubjectAccordion } from './SubjectAccordion';

export const Curriculum: React.FC = () => {
    const [selectedProgramId, setSelectedProgramId] = useState<string>("electrical");
    const [selectedYear, setSelectedYear] = useState<"First Year" | "Second Year" | "Third Year">("First Year");

    const currentProgram = useMemo(() =>
        CURRICULUM_DATA.find(p => p.id === selectedProgramId) || CURRICULUM_DATA[0],
        [selectedProgramId]);

    const currentYearData = useMemo(() =>
        currentProgram.years.find(y => y.year === selectedYear) || currentProgram.years[0],
        [currentProgram, selectedYear]);

    const stats = useMemo(() => {
        const subjects = currentYearData.subjects;
        return {
            totalSubjects: subjects.length,
            totalCredits: subjects.reduce((acc, curr) => acc + curr.creditHours, 0),
            theoryHours: subjects.reduce((acc, curr) => acc + curr.theoryHours, 0),
            practicalHours: subjects.reduce((acc, curr) => acc + curr.practicalHours, 0),
        };
    }, [currentYearData]);

    const handleDownload = () => {
        alert(`Downloading PDF for ${currentProgram.programName}...`);
    };

    return (
        <section id="curriculum" className="bg-white relative overflow-hidden ">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10" />

            <div className="container mx-auto px-4 pt-24 pb-20 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4 bg-white shadow-sm border border-slate-200 text-slate-600">Academic Roadmap</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Explore RPI Diploma Curriculums
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Dive into the detailed course structure for our 3-year DAE programs.
                    </p>
                </div>

                {/* Mobile Dropdowns */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden flex flex-col gap-4 mb-8"
                >
                    {/* Program Dropdown */}
                    <Select value={selectedProgramId} onValueChange={setSelectedProgramId}>
                        <SelectTrigger className="w-full bg-white border-slate-200 shadow-sm">
                            <SelectValue placeholder="Select Program" />
                        </SelectTrigger>
                        <SelectContent>
                            {CURRICULUM_DATA.map((program) => (
                                <SelectItem key={program.id} value={program.id}>
                                    <div className="flex items-center gap-2">
                                        <program.icon className="w-4 h-4" />
                                        {program.programName}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Year Dropdown */}
                    <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value as "First Year" | "Second Year" | "Third Year")}>
                        <SelectTrigger className="w-full bg-white border-slate-200 shadow-sm">
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            {currentProgram.years.map((y) => (
                                <SelectItem key={y.year} value={y.year}>
                                    {y.year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </motion.div>

                {/* Program Tabs - Desktop */}
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
                    {CURRICULUM_DATA.map((program) => {
                        const isSelected = selectedProgramId === program.id;
                        return (
                            <button
                                key={program.id}
                                onClick={() => setSelectedProgramId(program.id)}
                                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-all duration-300 border font-bold text-sm md:text-base ${isSelected
                                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 border-slate-900 scale-105 z-10'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                <program.icon className={`w-5 h-5 ${isSelected ? 'text-secondary' : 'text-slate-400'}`} />
                                {program.programName}
                            </button>
                        )
                    })}
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Sidebar: Year Selection & Stats */}
                    <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
                        {/* Year Tabs - Desktop */}
                        <div className="hidden lg:flex bg-slate-100 p-1.5 rounded-xl lg:flex-col gap-1">
                            {currentProgram.years.map((y) => (
                                <button
                                    key={y.year}
                                    onClick={() => setSelectedYear(y.year)}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold text-left transition-all whitespace-nowrap flex items-center justify-between ${selectedYear === y.year
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                        }`}
                                >
                                    {y.year}
                                    {selectedYear === y.year && <div className="w-2 h-2 rounded-full bg-secondary hidden lg:block" />}
                                </button>
                            ))}
                        </div>

                        {/* Summary Card */}
                        <Card className="border-0 shadow-lg bg-white overflow-hidden">
                            <div className="bg-slate-900 p-4 flex items-center justify-between">
                                <span className="text-white font-bold text-sm">Year Summary</span>
                                <Award className="w-5 h-5 text-secondary" />
                            </div>
                            <CardContent className="p-5 space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <span className="text-sm text-slate-500">Subjects</span>
                                    <span className="text-lg font-bold text-slate-900">{stats.totalSubjects}</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <span className="text-sm text-slate-500">Credit Hours</span>
                                    <span className="text-lg font-bold text-slate-900">{stats.totalCredits}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    <div className="bg-slate-50 p-2 rounded text-center">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Theory</p>
                                        <p className="font-bold text-slate-700">{stats.theoryHours}</p>
                                    </div>
                                    <div className="bg-slate-50 p-2 rounded text-center">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Practical</p>
                                        <p className="font-bold text-slate-700">{stats.practicalHours}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Button
                            onClick={handleDownload}
                            className="w-full justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20"
                        >
                            <Download className="w-4 h-4" /> Download Curriculum
                        </Button>
                    </div>

                    {/* Main Content: Subject List */}
                    <div className="lg:col-span-9">
                        <motion.div
                            key={`${selectedProgramId}-${selectedYear}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <BadgeCheck className={`w-6 h-6 ${currentProgram.color}`} />
                                <h3 className="text-xl font-bold text-slate-900">
                                    {currentProgram.programName}
                                    <span className="mx-2 text-slate-300">|</span>
                                    <span className="text-slate-600">{selectedYear}</span>
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {currentYearData.subjects.map((subject) => (
                                    <SubjectAccordion key={subject.id} subject={subject} color={currentProgram.color} />
                                ))}
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
