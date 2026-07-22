import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t text-xs ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
            IA
          </div>
          <div>
            <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {PERSONAL_INFO.fullName}
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Desarrollador Full Stack & Estudiante de Ingeniería Informática
            </p>
          </div>
        </div>

        {/* Links & Social */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-indigo-500 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright & Top Scroll */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.shortName}. Todos los derechos reservados.
          </span>

          <button
            onClick={scrollToTop}
            className={`p-2 rounded-xl border transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
