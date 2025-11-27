import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  CheckCircle2,
  Clock,
  GraduationCap,
  Zap,
  HardHat,
  Cpu,
  Monitor,
} from "lucide-react";

import { DynamicHero, CallToAction, Testimonials, Gallery } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROSPECTUS_DATA } from "./ProspectusData";

// Map icon keys to actual Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  HardHat,
  Cpu,
  Monitor,
};

export const Prospectus = () => {
  const [selectedProgram, setSelectedProgram] = useState(PROSPECTUS_DATA[0]);

  return (
    <main className="min-h-screen bg-white">
      <DynamicHero
        title="Download"
        subtitle="Prospectus"
        description="Explore detailed program brochures for all our DAE diploma programs."
        badge="Academic Resources"
        backgroundImage="https://picsum.photos/seed/prospectus-hero/1920/1080"
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-600 border-slate-200">
              Program Brochures
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Select Your Program
            </h2>
            <p className="text-slate-600 text-lg">
              Choose a diploma program to preview and download its detailed
              prospectus.
            </p>
          </div>

          {/* Program Boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PROSPECTUS_DATA.map((program) => {
              const Icon = iconMap[program.programIcon];
              const isSelected = selectedProgram.id === program.id;

              return (
                <motion.div
                  key={program.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    onClick={() => setSelectedProgram(program)}
                    className={`cursor-pointer transition-all duration-300 ${isSelected
                        ? `${program.borderColor} border-2 shadow-lg ring-2 ring-secondary/20`
                        : "border-slate-200 hover:border-secondary/50 hover:shadow-md"
                      }`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-xl ${program.bgColor} flex items-center justify-center mb-4`}
                      >
                        {Icon && <Icon className={`w-6 h-6 ${program.color}`} />}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {program.programName}
                      </h3>
                      <p className="text-sm text-slate-500">Click to preview</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Preview Panel */}
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            {/* Left Side Preview */}
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50">
                <img
                  src={selectedProgram.thumbnail}
                  alt={selectedProgram.programName}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-slate-600">
                  PDF • {selectedProgram.pdfSize}
                </div>
              </div>

              <Button className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white shadow-lg">
                <Download className="w-4 h-4" />
                Download {selectedProgram.programName} Prospectus
              </Button>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = iconMap[selectedProgram.programIcon];
                    return Icon ? (
                      <Icon
                        className={`w-8 h-8 ${selectedProgram.color}`}
                      />
                    ) : null;
                  })()}

                  <h3 className="text-2xl font-bold text-slate-900">
                    {selectedProgram.programName}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              {/* Duration + Level */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Clock className="w-5 h-5 text-secondary mb-2" />
                  <p className="text-sm text-slate-500 mb-1">Duration</p>
                  <p className="font-bold text-slate-900">
                    {selectedProgram.duration}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <GraduationCap className="w-5 h-5 text-secondary mb-2" />
                  <p className="text-sm text-slate-500 mb-1">Level</p>
                  <p className="font-bold text-slate-900">DAE Diploma</p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Eligibility
                </h4>
                <p className="text-sm text-blue-800">
                  {selectedProgram.eligibility}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">
                  Program Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Gallery />
      <CallToAction />
    </main>
  );
};
