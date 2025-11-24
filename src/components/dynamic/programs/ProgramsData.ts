import { Zap, HardHat, Cpu, Monitor } from 'lucide-react';
import { Program } from './ProgramsTypes';

export const PROGRAMS: Program[] = [
  {
    id: "electrical",
    title: "Electrical Technology",
    description: "Master industrial electrical systems, power generation, and renewable energy technologies.",
    features: ["Industrial Wiring", "Power Distribution", "Renewable Energy Systems"],
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    id: "civil",
    title: "Civil Technology",
    description: "Build the future with expertise in construction, surveying, and structural engineering.",
    features: ["Surveying & Mapping", "Structural Analysis", "Construction Management"],
    icon: HardHat,
    color: "bg-orange-600"
  },
  {
    id: "electronics",
    title: "Electronics Technology",
    description: "Dive into circuit design, embedded systems, and advanced diagnostics.",
    features: ["PCB Design", "Microcontrollers", "Industrial Automation"],
    icon: Cpu,
    color: "bg-blue-600"
  },
  {
    id: "cit",
    title: "Computer Information Tech",
    description: "Become an IT pro with networking, software development, and hardware troubleshooting skills.",
    features: ["Web Development", "Network Administration", "Database Management"],
    icon: Monitor,
    color: "bg-cyan-500"
  }
];

export const PROGRAM_COLORS: Record<string, string> = {
  electrical: '#eab308',
  civil: '#ea580c',
  electronics: '#2563eb',
  cit: '#06b6d4',
};
