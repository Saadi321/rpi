import { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string;
}
