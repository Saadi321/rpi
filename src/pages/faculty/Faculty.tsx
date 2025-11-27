import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Users, Zap, HardHat, Cpu, Monitor } from 'lucide-react';
import { DynamicHero, CallToAction, Testimonials } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FACULTY_DATA, DEPARTMENTS } from './FacultyData';

const iconMap: Record<string, any> = {
  Users,
  Zap,
  HardHat,
  Cpu,
  Monitor
};

export const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredFaculty = selectedDept === 'all' 
    ? FACULTY_DATA 
    : FACULTY_DATA.filter(f => f.department === selectedDept);

  return (
    <main className="min-h-screen bg-white">
      <DynamicHero
        title="Meet Our"
        subtitle="Expert Faculty"
        description="Our dedicated team of experienced educators and industry professionals committed to shaping the future technologists of Pakistan."
        badge="Academic Excellence"
        backgroundImage="https://picsum.photos/seed/faculty-hero/1920/1080"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Filter by Department
            </h2>
            <p className="text-slate-600">
              Browse faculty members by their area of expertise.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {DEPARTMENTS.map((dept) => {
              const Icon = iconMap[dept.icon];
              const isActive = selectedDept === dept.id;
              
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg scale-105'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-secondary hover:bg-slate-100'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : dept.color}`} />}
                  {dept.name}
                </button>
              );
            })}
          </div>

          {/* Faculty Grid */}
          <motion.div
            key={selectedDept}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredFaculty.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-secondary mb-2">{member.designation}</p>
                    <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                      <Award className="w-3 h-3" /> {member.qualification}
                    </p>
                    
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{member.bio}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {(member.email || member.phone) && (
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-secondary transition-colors">
                            <Mail className="w-3 h-3" /> {member.email}
                          </a>
                        )}
                        {member.phone && (
                          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-secondary transition-colors">
                            <Phone className="w-3 h-3" /> {member.phone}
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </main>
  );
};
