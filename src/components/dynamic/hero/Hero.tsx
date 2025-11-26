import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroImg } from "@/assets"
export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://picsum.photos/seed/university/1920/1080")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Admissions Open for 2024 Session
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Rawalpindi Polytechnic <span className="text-secondary">Institute</span>
            </h1>

            <p className="text-xl text-slate-200 font-light max-w-xl">
              Empowering future technologists with accredited 3-Year Diploma of Associate Engineer (DAE) programs. Build your career with practical skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-white border-0">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                Download Prospectus <FileText className="w-4 h-4" />
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Govt. Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>PBTE Affiliated</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-xl" />
              <img
                src={HeroImg}
                alt="RPI Students in Lab"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">95% Job Success</p>
                  <p className="text-xs text-slate-500">Our graduates get hired instantly</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
