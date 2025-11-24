import { GraduationCap } from 'lucide-react';
import { SOCIAL_LINKS, QUICK_LINKS, PROGRAM_LINKS } from './FooterData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="w-8 h-8" />
              <span className="text-xl font-bold">RPI</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the youth of Pakistan with technical skills since 1995. Committed to excellence in engineering education.
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="hover:text-secondary transition-colors" aria-label="Social link">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Subscribe to get updates on admissions and scholarships.</p>
            <div className="flex gap-2">
              <input 
                placeholder="Email" 
                className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-secondary"
                aria-label="Email for newsletter"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded text-sm font-medium hover:bg-secondary/90">
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Rawalpindi Polytechnic Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
