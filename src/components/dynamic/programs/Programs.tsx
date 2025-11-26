import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PROGRAMS, PROGRAM_COLORS } from './ProgramsData';
import { Link } from 'react-router-dom';

export const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Academics</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our 3-Year Diploma Programs
          </h2>
          <p className="text-slate-600 text-lg">
            Comprehensive DAE courses designed to bridge the gap between theoretical knowledge and industrial application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 group" style={{ borderTopColor: PROGRAM_COLORS[program.id] }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/curriculum"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50 hover:text-primary transition"
                  >
                    View Curriculum
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
