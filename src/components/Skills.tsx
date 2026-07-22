import React from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { Cpu, Code, Wrench, Users, CheckCircle, Shield, Award } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const languages = TECHNICAL_SKILLS.filter(s => s.category === 'Lenguajes');
  const tools = TECHNICAL_SKILLS.filter(s => s.category === 'Herramientas y DevOps');
  const soft = TECHNICAL_SKILLS.filter(s => s.category === 'Metodologías y Gestión');

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Competencias Técnicas
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Habilidades & Herramientas
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Dominios tecnológicos desarrollados a través del ciclo DAW, la ingeniería informática y el trabajo activo en L'Oréal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: Languages */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Lenguajes
                </h3>
                <p className="text-xs text-slate-500 font-mono">Programación & Marcado</p>
              </div>
            </div>

            <div className="space-y-3">
              {languages.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/10 text-indigo-500">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Tools & DevOps */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Herramientas & Entornos
                </h3>
                <p className="text-xs text-slate-500 font-mono">IDEs, BDD & DevOps</p>
              </div>
            </div>

            <div className="space-y-3">
              {tools.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-purple-500/10 text-purple-400">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Management & Soft Skills */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Competencias Personales
                </h3>
                <p className="text-xs text-slate-500 font-mono">Soft Skills & Idiomas</p>
              </div>
            </div>

            <div className="space-y-3">
              {soft.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-500">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
