import { LucideIcon } from 'lucide-react';

export interface PhilosophyItem {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    list?: string[];
}
