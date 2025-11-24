import { Microscope, Library, Wifi, Coffee } from 'lucide-react';
import { Facility } from './FacilitiesTypes';

export const FACILITIES: Facility[] = [
  {
    title: "Advanced Labs",
    description: "State-of-the-art equipment for Physics, Chemistry, and specialized technologies.",
    icon: Microscope,
    image: "https://picsum.photos/seed/lab/400/300"
  },
  {
    title: "Digital Library",
    description: "Extensive collection of technical books, journals, and digital resources.",
    icon: Library,
    image: "https://picsum.photos/seed/library/400/300"
  },
  {
    title: "Computer Center",
    description: "High-speed internet and modern workstations for IT students.",
    icon: Wifi,
    image: "https://picsum.photos/seed/computer/400/300"
  },
  {
    title: "Student Cafeteria",
    description: "Hygienic food and a relaxing environment for social interaction.",
    icon: Coffee,
    image: "https://picsum.photos/seed/cafe/400/300"
  }
];
