import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Code, CheckCircle, Terminal, Layers, X, Sparkles } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['Todos', 'Automatización', 'Full Stack', 'Web Architecture', 'Backend & DB'];

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-4">
            <Code className="w-3.5 h-3.5" />
            Portafolio & Desarrollo
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Proyectos Destacados
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Una selección de desarrollos Full Stack, herramientas de automatización empresarial y prototipos de arquitectura web.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden group ${
                darkMode
                  ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Category & Featured Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      <Sparkles className="w-3 h-3" /> Destacado
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold transition-colors group-hover:text-indigo-500 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.shortDescription}
                </p>

                {/* Impact or Feature Bullet list */}
                <div className="space-y-2 pt-1">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                        darkMode ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className={`px-6 sm:px-8 py-4 border-t flex items-center justify-between gap-3 text-xs font-mono ${
                darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-indigo-500 hover:text-indigo-400 font-semibold flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Ver detalles & código</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors"
                      title="Ver en GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500 transition-colors"
                      title="Ver Demo En Vivo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl relative ${
              darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className={`absolute top-6 right-6 p-2 rounded-xl transition-colors ${
                  darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{activeProjectModal.title}</h3>
              </div>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {activeProjectModal.fullDescription}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Puntos Clave</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm">
                  {activeProjectModal.keyFeatures.map((kf, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeProjectModal.architectureHighlight && (
                <div className={`p-4 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-mono font-semibold text-indigo-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Arquitectura
                  </span>
                  <p className="text-xs text-slate-400">{activeProjectModal.architectureHighlight}</p>
                </div>
              )}

              {/* Code Snippet Viewer */}
              {activeProjectModal.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      {activeProjectModal.codeSnippet.filename}
                    </span>
                    <span className="uppercase text-[10px]">{activeProjectModal.codeSnippet.language}</span>
                  </div>
                  <pre className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto">
                    <code>{activeProjectModal.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${
                    darkMode ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
