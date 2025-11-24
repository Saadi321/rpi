import { Card, CardContent } from '@/components/ui/card';
import { FACILITIES } from './FacilitiesData';

export const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
          <p className="text-slate-600">We provide an environment conducive to learning and practical application.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow border-0 shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <facility.icon className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-lg">{facility.title}</h3>
                </div>
                <p className="text-slate-500 text-sm">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
