import { Calendar, ArrowRight, Megaphone, Pin, Award, FileText, Mic } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ANNOUNCEMENTS } from './AnnouncementsData';

const getIcon = (tag: string) => {
  switch(tag) {
    case 'Admissions': return Pin;
    case 'Scholarships': return Award;
    case 'Exams': return FileText;
    case 'Events': return Calendar;
    case 'Seminars': return Mic;
    default: return Megaphone;
  }
};

export const Announcements = () => {
  const tickerItems = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <section id="announcements" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#228B22 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </div>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase bg-green-50 px-2 py-1 rounded border border-green-100">
                Notice Board
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight drop-shadow-sm">
              Latest News & <br/>
              <span className="text-secondary">Announcements</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-200 text-slate-700 font-medium text-sm hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 bg-white shadow-sm">
              View Archive
            </a>
          </div>
        </div>

        <div className="relative -mx-4 md:-mx-0 group/ticker">
          <div className="flex gap-6 animate-scroll hover:pause py-8 px-4">
            {tickerItems.map((item, idx) => {
              const Icon = getIcon(item.tag);
              return (
                <a 
                  key={`${item.id}-${idx}`} 
                  href={item.link}
                  className="group relative w-[300px] md:w-[360px] shrink-0 block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>
                  
                  <div className="relative h-full bg-white border border-slate-100 p-6 rounded-xl group-hover:border-secondary/30 transition-all duration-300 flex flex-col shadow-lg group-hover:shadow-xl z-10">
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge className="bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors font-medium">
                        {item.tag}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" /> {item.date}
                      </span>
                      <span className="flex items-center text-xs font-bold text-secondary uppercase tracking-wide opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
};
