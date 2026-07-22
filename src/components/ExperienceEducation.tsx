import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';

interface ExperienceEducationProps {
  darkMode: boolean;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Trayectoria Profesional & Académica
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experiencia y Formación
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Combinación de experiencia práctica en automatización empresarial, voluntariado docente y sólida preparación en ingeniería informática.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Historial Laboral
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 border-l-2 border-slate-200 dark:border-slate-800">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Dot */}
                  <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? 'bg-emerald-500 border-emerald-300 ring-4 ring-emerald-500/20'
                      : 'bg-indigo-500 border-slate-900'
                  }`} />

                  <div className={`p-6 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 hover:shadow-md'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="space-y-2 mb-4 text-xs sm:text-sm">
                      {exp.description.map((paragraph, i) => (
                        <p key={i} className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-4">
                      {exp.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            darkMode ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Historial Académico
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 border-l-2 border-slate-200 dark:border-slate-800">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Dot */}
                  <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    edu.isCurrent
                      ? 'bg-purple-500 border-purple-300 ring-4 ring-purple-500/20'
                      : 'bg-indigo-500 border-slate-900'
                  }`} />

                  <div className={`p-6 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 hover:shadow-md'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-500" />
                        {edu.period}
                      </span>
                      {edu.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          En curso
                        </span>
                      )}
                    </div>

                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
