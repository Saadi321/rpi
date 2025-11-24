import { Briefcase, Building2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PARTNERS } from './IndustryLinksData';

export const IndustryLinks = () => {
  return (
    <section id="industry" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Launch Your Career with Industry Leaders
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our strong curriculum and practical training have forged strong bonds with leading industries. We ensure our graduates are not just degree holders, but job-ready professionals.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Corporate Partnerships</h4>
                  <p className="text-slate-600 text-sm">Collaborations with 50+ national companies for curriculum alignment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-lg h-fit">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Internship Opportunities</h4>
                  <p className="text-slate-600 text-sm">Mandatory summer internships to gain real-world exposure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-lg h-fit">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Career Placement</h4>
                  <p className="text-slate-600 text-sm">Dedicated placement cell helping graduates land their first job.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-center text-slate-800">Our Hiring Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {PARTNERS.map((partner, idx) => (
                <div key={idx} className="flex items-center justify-center p-4 border border-slate-100 rounded-lg hover:shadow-md transition-shadow bg-slate-50 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={partner.logo} alt={partner.name} className="max-h-12 w-auto" />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="w-full sm:w-auto">View All Partners</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
