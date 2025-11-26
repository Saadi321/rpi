import React from 'react';

export type SubjectType = "theory" | "practical" | "both";

export interface Subject {
    id: string;
    code: string;
    name: string;
    type: SubjectType;
    creditHours: number;
    theoryHours: number;
    practicalHours: number;
    isCompulsory: boolean;
    description: string;
    outcomes: string[];
}

export interface Year {
    year: "First Year" | "Second Year" | "Third Year";
    subjects: Subject[];
}

export interface ProgramCurriculum {
    id: string;
    programName: string;
    icon: React.ElementType;
    color: string;
    years: Year[];
}
