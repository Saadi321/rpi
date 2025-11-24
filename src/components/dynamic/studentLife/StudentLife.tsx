import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ACTIVITIES } from './StudentLifeData';

export const StudentLife = () => {
  return (
    <section id="student-life" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Student Life & Activities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Life at RPI is vibrant and diverse. We believe in nurturing well-rounded individuals through a balance of academic rigor and extracurricular engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all group border-0 shadow bg-slate-50">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{activity.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
