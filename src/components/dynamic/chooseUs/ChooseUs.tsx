import { CheckCircle } from 'lucide-react';
import { STATS, HIGHLIGHTS } from './ChooseUsData';

export const ChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all border border-slate-100">
                <stat.icon className="w-8 h-8 mx-auto text-secondary mb-3" />
                <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Rawalpindi Polytechnic Institute?
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Established with a vision to produce highly skilled technicians, RPI has been a beacon of technical excellence in the region. We focus on practical learning that empowers students to innovate and lead.
            </p>

            <div className="space-y-4 mb-8">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
