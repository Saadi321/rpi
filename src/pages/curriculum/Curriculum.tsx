import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  FlaskConical, 
  Award, 
  ChevronDown, 
  Download, 
  CheckCircle2,
  BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CURRICULUM_DATA } from './CurriculumData';
import { Subject, ProgramCurriculum } from './CurriculumTypes';

const SubjectItem = ({ subject, color }: { subject: Subject; color: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-4 transition-all hover:shadow-md">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col md:flex-row md:items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className={`mt-1 p-2 rounded-lg bg-slate-100 ${color} font-bold text-sm min-w-[70px] text-center`}>
            {subject.code}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">{subject.name}</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className={`bg-slate-100 ${color} hover:bg-slate-200 border-0`}>
                {subject.type === 'both' ? 'Theory + Practical' : subject.type === 'theory' ? 'Theory Only' : 'Practical Only'}
              </Badge>
              {subject.isCompulsory && (
                <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-200 border-0">Compulsory</Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="text-right hidden md:block">
                <span className="block text-2xl font-bold text-slate-900">{subject.creditHours}</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">Credits</span>
            </div>
            <motion.div 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="md:col-span-2 space-y-4">
                        <div>
                            <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Description</h5>
                            <p className="text-slate-600 leading-relaxed">{subject.description}</p>
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Learning Outcomes</h5>
                            <ul className="grid sm:grid-cols-2 gap-2">
                                {subject.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 ${color}`} />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 h-fit">
                        <h5 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Hour Distribution</h5>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                <span className="text-slate-600 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Theory</span>
                                <span className="font-bold text-slate-900">{subject.theoryHours} Hrs/Week</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                <span className="text-slate-600 flex items-center gap-2"><FlaskConical className="w-4 h-4"/> Practical</span>
                                <span className="font-bold text-slate-900">{subject.practicalHours} Hrs/Week</span>
                            </div>
                            <div className="flex justify-between items-center pt-1">
                                <span className="text-slate-600 flex items-center gap-2"><Clock className="w-4 h-4"/> Total</span>
                                <span className="font-bold text-secondary">{subject.theoryHours + subject.practicalHours} Hrs/Week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Curriculum = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>("electrical");
  const [selectedYear, setSelectedYear] = useState<"First Year" | "Second Year" | "Third Year">("First Year");

  const currentProgram = useMemo(() => 
    CURRICULUM_DATA.find(p => p.id === selectedProgramId) || CURRICULUM_DATA[0], 
  [selectedProgramId]);

  const currentYearData = useMemo(() => 
    currentProgram.years.find(y => y.year === selectedYear) || currentProgram.years[0],
  [currentProgram, selectedYear]);

  const stats = useMemo(() => {
    const subjects = currentYearData.subjects;
    return {
      totalSubjects: subjects.length,
      totalCredits: subjects.reduce((acc, curr) => acc + curr.creditHours, 0),
      theoryHours: subjects.reduce((acc, curr) => acc + curr.theoryHours, 0),
      practicalHours: subjects.reduce((acc, curr) => acc + curr.practicalHours, 0),
    };
  }, [currentYearData]);

  const handleDownload = () => {
    alert(`Downloading ${currentProgram.programName} - ${selectedYear} Curriculum PDF...`);
  };

  return (
    <section id="curriculum" className="bg-white py-20 relative">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200">Academic Roadmap</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore RPI Diploma Curriculums
          </h2>
          <p className="text-slate-600 text-lg">
            Dive into the detailed course structure for our 3-year DAE programs. 
            Our curriculum is designed to meet international standards and industry requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CURRICULUM_DATA.map((program: ProgramCurriculum) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgramId(program.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 border ${
                selectedProgramId === program.id 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 border-slate-900 scale-105' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-secondary/50 hover:bg-slate-50'
              }`}
            >
              <program.icon className={`w-5 h-5 ${selectedProgramId === program.id ? 'text-secondary' : 'text-slate-400'}`} />
              <span className="font-bold text-sm md:text-base">{program.programName}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
            
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex lg:flex-col gap-2 overflow-x-auto">
                    {currentProgram.years.map((y) => (
                        <button
                            key={y.year}
                            onClick={() => setSelectedYear(y.year)}
                            className={`px-4 py-3 rounded-lg text-sm font-bold text-left transition-all whitespace-nowrap flex items-center justify-between group ${
                                selectedYear === y.year 
                                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' 
                                : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'
                            }`}
                        >
                            {y.year}
                            {selectedYear === y.year && <div className="w-2 h-2 rounded-full bg-secondary hidden lg:block" />}
                        </button>
                    ))}
                </div>

                <Card className="border-slate-200 shadow-sm bg-white">
                    <CardContent className="p-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase">Total Subjects</p>
                                <p className="text-xl font-bold text-slate-900">{stats.totalSubjects}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase">Credit Hours</p>
                                <p className="text-xl font-bold text-slate-900">{stats.totalCredits}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                             <div>
                                <p className="text-[10px] text-slate-500 uppercase">Theory Hrs</p>
                                <p className="text-lg font-bold text-slate-700">{stats.theoryHours}</p>
                             </div>
                             <div>
                                <p className="text-[10px] text-slate-500 uppercase">Practical Hrs</p>
                                <p className="text-lg font-bold text-slate-700">{stats.practicalHours}</p>
                             </div>
                        </div>
                    </CardContent>
                </Card>

                 <Button 
                    onClick={handleDownload}
                    variant="outline" 
                    className="w-full justify-center gap-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                >
                    <Download className="w-4 h-4" /> Download PDF
                </Button>
            </div>

            <div className="lg:col-span-3">
                <motion.div
                    key={`${selectedProgramId}-${selectedYear}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                           <BadgeCheck className={`w-6 h-6 ${currentProgram.color}`} />
                           {currentProgram.programName} <span className="text-slate-400">/</span> {selectedYear}
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {currentYearData.subjects.map((subject) => (
                            <SubjectItem key={subject.id} subject={subject} color={currentProgram.color} />
                        ))}
                    </div>

                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};
