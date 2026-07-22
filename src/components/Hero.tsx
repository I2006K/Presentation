import React from 'react';
import { PERSONAL_INFO, ENGLISH_CERTIFICATE } from '../data/portfolioData';
import { ArrowRight, Code, Terminal, Sparkles, MapPin, Award, CheckCircle2, Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenAIChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenAIChat }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Decorative Gradient Light Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para retos de desarrollo Full Stack
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                darkMode ? 'bg-indigo-950/50 border-indigo-800/60 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                <MapPin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hola, soy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500">
                  {PERSONAL_INFO.fullName}
                </span>
              </h1>

              <p className={`text-lg sm:text-xl font-medium leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Subtitle / Bio summary */}
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Titulado en <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Técnico Superior DAW</strong>, estudiante universitario en <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Ingeniería Informática (UNED)</strong> y profesional en <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>L'Oréal España y Portugal</strong> aportando automatización de procesos contables con tecnología.
            </p>

            {/* Highlighting Quote & AI vision intro */}
            <div className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden transition-all ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800/80 shadow-inner'
                : 'bg-gradient-to-r from-slate-50 to-indigo-50/30 border-slate-200/80'
            }`}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-sm italic font-serif leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    "{PERSONAL_INFO.aiVisionQuote}"
                  </p>
                  <p className="text-xs font-mono font-medium text-indigo-500 mt-2">
                    — Visión sobre IA & Automatización Web
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group"
              >
                <span>Explorar Portafolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#ai-vision"
                className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all flex items-center gap-2 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                <Terminal className="w-4 h-4 text-purple-500" />
                <span>Visión IA & Arquitectura</span>
              </a>

              <button
                onClick={onOpenAIChat}
                className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all flex items-center gap-2 ${
                  darkMode
                    ? 'border-purple-500/40 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40'
                    : 'border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Asistente IA</span>
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-3 flex items-center gap-4 text-xs font-mono text-slate-500">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub / I2006K</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ikeralvarez21@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Feature Showcase Box / Candidate Tech Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-20 blur-xl"></div>

              {/* Main Profile Card */}
              <div className={`relative rounded-3xl p-6 sm:p-7 border shadow-xl ${
                darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-lg text-indigo-500">
                      IA
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {PERSONAL_INFO.shortName}
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        {PERSONAL_INFO.age} años ({PERSONAL_INFO.birthDate}) • Madrid, ES
                      </p>
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium">
                    Inglés B2 Cambridge
                  </div>
                </div>

                {/* Key Attributes List */}
                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-slate-500 font-mono">Puesto Actual</span>
                    <span className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      L'Oréal Customer Care & Auto
                    </span>
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-slate-500 font-mono">Grado Univ.</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Ingeniería Informática (UNED)
                    </span>
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-slate-500 font-mono">Formación DAW</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Grado Superior DAW (IES Pío Baroja)
                    </span>
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-slate-500 font-mono">Certificado B2</span>
                    <span className={`font-semibold flex items-center gap-1 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      <Award className="w-3.5 h-3.5" />
                      Linguaskill (Score 161)
                    </span>
                  </div>

                </div>

                {/* Tech Stack Pills Matrix */}
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5">
                    Stack Técnico & Herramientas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'HTML/CSS', 'JavaScript', 'PHP', 'Python', 'SQL', 'Docker Desktop', 'HeidiSQL', 'Git', 'PowerAutomate'].map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${
                          darkMode
                            ? 'bg-slate-900 border-slate-800 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
