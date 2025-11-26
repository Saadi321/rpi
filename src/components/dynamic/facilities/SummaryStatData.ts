import { Users, BookOpen, Award, Building2 } from 'lucide-react';
import { SummaryStat } from './SummaryStatTypes';

export const SUMMARY_STATS: SummaryStat[] = [
    { label: "Active Students", value: "2000+", icon: Users },
    { label: "Technical Labs", value: "12+", icon: Building2 },
    { label: "Library Books", value: "5000+", icon: BookOpen },
    { label: "Awards Won", value: "15+", icon: Award },
];
