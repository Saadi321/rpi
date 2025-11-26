import { LucideIcon } from 'lucide-react';

export interface AnnouncementItem {
    id: string;
    title: string;
    tag: string;
    date: string;
    link: string;
}

export interface AnnouncementProps {
    announcement: AnnouncementItem;
    getIcon: (tag: string) => LucideIcon;
}
