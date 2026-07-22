import React, { useState } from 'react';
import { ENGLISH_CERTIFICATE } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck, ExternalLink, Globe, FileText, Check, ChevronRight, X } from 'lucide-react';

interface EnglishCertificateProps {
  darkMode: boolean;
}

export const EnglishCertificate: React.FC<EnglishCertificateProps> = ({ darkMode }) => {
  const [showVerifyModal, setShowVerifyModal] = useState<boolean>(false);

  return (
    <section id="english-cert" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
            <Globe className="w-3.5 h-3.5" />
            Acreditación Internacional de Idioma
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Nivel de Inglés B2 (Cambridge Linguaskill)
          </h2>
          <p className={`mt-3 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Certificación oficial emitida por Cambridge University Press & Assessment con acreditación de Marco Común Europeo (CEFR).
          </p>
        </div>

        {/* Certificate Card */}
        <div className={`max-w-4xl mx-auto rounded-3xl border p-6 sm:p-10 relative shadow-xl overflow-hidden ${
          darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          {/* Top Banner Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Summary */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                Council of Europe Level
              </span>
              <h3 className="text-5xl font-black text-amber-500 my-1">
                B2
              </h3>
              <p className={`text-xs font-mono mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Average Score: <strong className="text-amber-500 text-sm">161</strong>
              </p>

              <div className="mt-6 pt-4 border-t border-amber-500/20 w-full space-y-1 text-xs">
                <p className="font-semibold text-slate-400 font-mono">Linguaskill Cambridge</p>
                <p className="text-[11px] text-slate-500">Issued: {ENGLISH_CERTIFICATE.issueDate}</p>
                <p className="text-[11px] font-mono text-emerald-500 font-medium">Ref: {ENGLISH_CERTIFICATE.verificationNumber}</p>
              </div>
            </div>

            {/* Right Skill Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Desglose por Competencias
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">Linguaskill Module Performance</p>
                </div>

                <button
                  onClick={() => setShowVerifyModal(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verificar Certificado</span>
                </button>
              </div>

              {/* Subscores Grid */}
              <div className="grid grid-cols-2 gap-3">
                
                <div className={`p-3.5 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Listening</span>
                    <span className="font-bold text-emerald-500 font-mono">166 | B2</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Reading</span>
                    <span className="font-bold text-emerald-500 font-mono">162 | B2</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Writing</span>
                    <span className="font-bold text-emerald-500 font-mono">163 | B2</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Speaking</span>
                    <span className="font-bold text-indigo-400 font-mono">154 | B1</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800/20 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '77%' }}></div>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 text-xs text-slate-400 space-y-1">
                <p className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Uso del Inglés en el Entorno Profesional
                </p>
                <p>
                  Capacidad contrastada para lectura fluida de documentación técnica oficial, especificaciones de arquitectura, redacción de proyectos y comunicación en entornos internacionales (demostrada también en voluntariado docente).
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Verification Modal */}
        {showVerifyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl relative ${
              darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              <button
                onClick={() => setShowVerifyModal(false)}
                className={`absolute top-6 right-6 p-2 rounded-xl transition-colors ${
                  darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 font-bold">
                  Cambridge English
                </div>
                <div>
                  <h3 className="font-bold text-lg">Certificado Oficial Linguaskill</h3>
                  <p className="text-xs text-slate-500 font-mono">Cambridge University Press & Assessment</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Candidato:</span>
                  <span className="font-bold text-amber-400">Iker Alvarez Cañadillas</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Puntuación Promedio:</span>
                  <span className="font-bold text-emerald-400">161 (B2)</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Número de Verificación:</span>
                  <span className="font-bold text-indigo-400">LG0000006781</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Fecha de Expedición:</span>
                  <span>26 de Septiembre de 2025</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50">
                  <span className="text-slate-400">Centro Evaluador:</span>
                  <span>International House Madrid (ES330)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Certificado verificado mediante credenciales de Cambridge English.</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowVerifyModal(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Entendido
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
