import { Target, Lightbulb, Heart } from 'lucide-react';
import { PhilosophyItem } from './PhilosophyTypes';

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
    {
        title: "Our Mission",
        description: "To provide affordable, high-quality technical education that equips students with practical skills, critical thinking, and ethical values required for a successful career.",
        icon: Target,
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        title: "Our Vision",
        description: "To be recognized globally as a center of excellence in technical training, innovation, and youth empowerment, fostering a culture of continuous improvement.",
        icon: Lightbulb,
        color: "text-secondary",
        bgColor: "bg-green-50"
    },
    {
        title: "Core Values",
        description: "",
        icon: Heart,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        list: [
            "Integrity & Honesty",
            "Hands-on Practice",
            "Student Centricity",
            "Innovation"
        ]
    }
];
