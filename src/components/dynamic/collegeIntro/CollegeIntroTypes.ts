import { LucideIcon } from 'lucide-react';

export interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
}

export interface CollegeIntroProps {
    stats: Stat[];
}
