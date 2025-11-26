import { Zap, HardHat, Cpu, Monitor } from 'lucide-react';
import { ProgramCurriculum } from './CurriculumTypes';

export const CURRICULUM_DATA: ProgramCurriculum[] = [
    {
        id: "electrical",
        programName: "Electrical Technology",
        icon: Zap,
        color: "text-yellow-600",
        years: [
            {
                year: "First Year",
                subjects: [
                    {
                        id: "et-115", code: "ET-115", name: "Principles of Electrical Engineering", type: "both",
                        creditHours: 4, theoryHours: 3, practicalHours: 3, isCompulsory: true,
                        description: "Fundamental concepts of electricity, DC circuits, magnetism, and electrostatics.",
                        outcomes: ["Understand Ohm's Law and Kirchhoff's Laws", "Analyze series and parallel circuits", "Grasp concepts of magnetism"]
                    },
                    {
                        id: "et-121", code: "ET-121", name: "Basic Electrical Drawing", type: "practical",
                        creditHours: 1, theoryHours: 0, practicalHours: 3, isCompulsory: true,
                        description: "Introduction to technical drawing symbols and electrical layout planning.",
                        outcomes: ["Read electrical symbols", "Draw house wiring diagrams", "Understand circuit schematics"]
                    }
                ]
            },
            {
                year: "Second Year",
                subjects: [
                    {
                        id: "et-213", code: "ET-213", name: "DC Machines & Batteries", type: "both",
                        creditHours: 3, theoryHours: 2, practicalHours: 3, isCompulsory: true,
                        description: "Construction and working principles of DC generators and motors.",
                        outcomes: ["Operate DC motors", "Perform load tests on generators", "Battery maintenance"]
                    }
                ]
            },
            {
                year: "Third Year",
                subjects: [
                    {
                        id: "et-316", code: "ET-316", name: "AC Machines", type: "both",
                        creditHours: 4, theoryHours: 3, practicalHours: 3, isCompulsory: true,
                        description: "Comprehensive study of Transformers, Induction Motors, and Synchronous Machines.",
                        outcomes: ["Analyze transformer efficiency", "Synchronize alternators", "Control induction motors"]
                    }
                ]
            }
        ]
    },
    {
        id: "civil",
        programName: "Civil Technology",
        icon: HardHat,
        color: "text-orange-600",
        years: [
            {
                year: "First Year",
                subjects: [
                    {
                        id: "ct-114", code: "CT-114", name: "Civil Drafting", type: "practical",
                        creditHours: 3, theoryHours: 1, practicalHours: 6, isCompulsory: true,
                        description: "Basics of engineering drawing, projections, and building plans.",
                        outcomes: ["Draw plans and elevations", "Understand scale and dimensioning"]
                    }
                ]
            },
            {
                year: "Second Year",
                subjects: [
                    {
                        id: "ct-213", code: "CT-213", name: "Public Health Technology", type: "both",
                        creditHours: 3, theoryHours: 2, practicalHours: 3, isCompulsory: true,
                        description: "Water supply systems, plumbing, and sanitation.",
                        outcomes: ["Design water supply schemes", "Understand plumbing fixtures"]
                    }
                ]
            },
            {
                year: "Third Year",
                subjects: [
                    {
                        id: "ct-313", code: "CT-313", name: "Concrete Technology", type: "both",
                        creditHours: 4, theoryHours: 2, practicalHours: 6, isCompulsory: true,
                        description: "Design and testing of reinforced concrete structures.",
                        outcomes: ["Mix design calculation", "Slump test execution", "RCC beam design"]
                    }
                ]
            }
        ]
    },
    {
        id: "electronics",
        programName: "Electronics Technology",
        icon: Cpu,
        color: "text-blue-600",
        years: [
            {
                year: "First Year",
                subjects: [
                    {
                        id: "elt-114", code: "ELT-114", name: "Basic Electronics", type: "both",
                        creditHours: 4, theoryHours: 3, practicalHours: 3, isCompulsory: true,
                        description: "Semiconductor physics, diodes, transistors, and biasing circuits.",
                        outcomes: ["Analyze diode circuits", "Understand BJT operation"]
                    }
                ]
            },
            {
                year: "Second Year",
                subjects: [
                    {
                        id: "elt-214", code: "ELT-214", name: "Digital Electronics", type: "both",
                        creditHours: 4, theoryHours: 3, practicalHours: 3, isCompulsory: true,
                        description: "Logic gates, boolean algebra, flip-flops, and counters.",
                        outcomes: ["Design combinational logic", "Implement counters"]
                    }
                ]
            },
            {
                year: "Third Year",
                subjects: [
                    {
                        id: "elt-314", code: "ELT-314", name: "Microcontrollers", type: "both",
                        creditHours: 4, theoryHours: 3, practicalHours: 3, isCompulsory: true,
                        description: "Architecture and programming of 8051/AVR microcontrollers.",
                        outcomes: ["Assembly language programming", "Interfacing sensors"]
                    }
                ]
            }
        ]
    },
    {
        id: "cit",
        programName: "Comp. Info. Technology",
        icon: Monitor,
        color: "text-cyan-600",
        years: [
            {
                year: "First Year",
                subjects: [
                    {
                        id: "cit-113", code: "CIT-113", name: "Introduction to Computer Programming", type: "both",
                        creditHours: 3, theoryHours: 2, practicalHours: 3, isCompulsory: true,
                        description: "Basics of C language, flowcharts, and algorithms.",
                        outcomes: ["Write basic C programs", "Understand logic flow"]
                    }
                ]
            },
            {
                year: "Second Year",
                subjects: [
                    {
                        id: "cit-233", code: "CIT-233", name: "Object Oriented Programming (Java)", type: "both",
                        creditHours: 3, theoryHours: 2, practicalHours: 3, isCompulsory: true,
                        description: "Classes, objects, inheritance, and polymorphism in Java.",
                        outcomes: ["Build Java applications", "Understand OOP concepts"]
                    }
                ]
            },
            {
                year: "Third Year",
                subjects: [
                    {
                        id: "cit-333", code: "CIT-333", name: "Web Development (PHP/Laravel)", type: "both",
                        creditHours: 3, theoryHours: 2, practicalHours: 3, isCompulsory: true,
                        description: "Full stack web development concepts using modern frameworks.",
                        outcomes: ["Build dynamic websites", "Connect to databases"]
                    }
                ]
            }
        ]
    }
];
