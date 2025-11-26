import React from 'react';
import { Annoucement } from './Annoucement';
import { AnnouncementItem } from './AnnoucementTypes';
import { LucideIcon } from 'lucide-react';

interface AnnoucementListProps {
  announcements: AnnouncementItem[];
  getIcon: (tag: string) => LucideIcon;
}

export const AnnoucementList: React.FC<AnnoucementListProps> = ({
  announcements,
  getIcon
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {announcements.map((item) => (
        <Annoucement
          key={item.id}
          announcement={item}
          getIcon={getIcon}
        />
      ))}
    </div>
  );
};
