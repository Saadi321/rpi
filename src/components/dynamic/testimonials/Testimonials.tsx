import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from './TestimonialsData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
          <p className="text-slate-600">Hear from our alumni who are making their mark in the industry.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <Card key={item.id} className="bg-slate-50 border-none shadow-sm">
              <CardContent className="p-8 pt-10 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-slate-200" />
                <p className="text-slate-700 italic mb-6 relative z-10">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-secondary font-medium uppercase">{item.program}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
