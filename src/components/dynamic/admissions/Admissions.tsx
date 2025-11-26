import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ADMISSION_STEPS } from './AdmissionsData';

export const Admissions = () => {
  return (
    <section id="admissions" className="bg-white relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">Join RAWALPINDI POLYTECHNIC INSTITUTE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-2">Simple Admission Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We have streamlined our admission process to make it hassle-free for aspiring students.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 -z-10 dashed-line"></div>

          {ADMISSION_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card className="border-slate-200 bg-white hover:border-secondary/50 transition-colors duration-300 shadow-sm hover:shadow-lg h-full">
                <CardContent className="p-6 pt-8 flex flex-col items-center text-center h-full">
                  <div className="absolute -top-4 bg-white px-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-sm border border-slate-200 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center">
          <Button size="lg" className="font-bold px-8 py-6 text-lg shadow-xl shadow-secondary/20 hover:shadow-secondary/40 bg-secondary hover:bg-secondary/90">
            Apply for Admission 2025-2026 <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Need help? Contact our admission office at <span className="text-secondary">+92-51-5505677</span>
          </p>
        </div>
      </div>
    </section>
  );
};
