import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AnnouncementProps } from './AnnoucementTypes';

export const Annoucement: React.FC<AnnouncementProps> = ({ announcement, getIcon }) => {
    const Icon = getIcon(announcement.tag);

    return (
        <a
            href={announcement.link}
            className="group relative block"
        >
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

            <div className="relative h-full bg-white border border-slate-100 p-6 rounded-xl group-hover:border-secondary/30 transition-all duration-300 flex flex-col shadow-lg group-hover:shadow-xl z-10">
                <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                    </div>
                    <Badge className="bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors font-medium">
                        {announcement.tag}
                    </Badge>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                    {announcement.title}
                </h3>

                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" /> {announcement.date}
                    </span>
                    <span className="flex items-center text-xs font-bold text-secondary uppercase tracking-wide opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                </div>
            </div>
        </a>
    );
};
