import React, { useState } from 'react';
import { PERSONAL_INFO, AI_PILLARS } from '../data/portfolioData';
import { ArchitectureProposal } from '../types';
import { Sparkles, Bot, Zap, Cpu, Layers, ArrowRight, Code2, ShieldCheck, RefreshCw, Server, Database, Globe, Lightbulb } from 'lucide-react';

interface AIVisionProps {
  darkMode: boolean;
}

export const AIVision: React.FC<AIVisionProps> = ({ darkMode }) => {
  const [selectedScenario, setSelectedScenario] = useState<string>(
    'Automatización contable y conciliación bancaria inteligente en entorno corporativo'
  );
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [loadingArch, setLoadingArch] = useState<boolean>(false);
  const [archResult, setArchResult] = useState<ArchitectureProposal | null>({
    title: 'Arquitectura Web de Automatización Contable e IA Proxy',
    summary: 'Sistema distribuido de alto rendimiento desacoplado en capas. Un frontend SPA reactivo se comunica con un backend Node/Express proxy que orquesta modelos Gemini para parseo OCR/LLM y sincroniza datos con SQL en Docker.',
    components: [
      { name: 'Frontend Client (SPA)', role: 'Interfaz reactiva para revisión de facturas y control de estados', tech: 'React 19 + TypeScript + Tailwind CSS' },
      { name: 'Server AI Proxy', role: 'API segura y aislada para gestión de prompts y orquestación', tech: 'Node.js / Express + @google/genai SDK' },
      { name: 'Database & Storage', role: 'Persistencia de transacciones, estados y auditorías', tech: 'MySQL / MariaDB + HeidiSQL + Docker' },
      { name: 'Automation Pipeline', role: 'Ejecución de tareas repetitivas y exportación de datos', tech: 'Python + PowerAutomate Workflows' }
    ],
    aiIntegrationPoint: 'Extracción de campos estructurados (JSON) desde facturas ambiguas sin intervención manual.',
    automationBenefit: 'Ahorro estimado del 70% en tiempo de procesamiento manual por cada lote de facturas.'
  });

  const predefinedScenarios = [
    'Automatización contable y conciliación bancaria inteligente en entorno corporativo',
    'Portal de gestión de clientes con asistente IA conversacional y análisis predictivo',
    'Microservicios en Java y Docker con canal de optimización algorítmica',
    'Sistema de catálogo web con etiquetado automático por visión artificial'
  ];

  const handleSynthesize = async (promptToUse?: string) => {
    const text = promptToUse || customPrompt || selectedScenario;
    if (!text.trim()) return;

    setLoadingArch(true);
    try {
      const response = await fetch('/api/ai/architecture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemDescription: text })
      });
      let data: any = null;
      if (response.ok) {
        data = await response.json();
      }

      if (data && data.title) {
        setArchResult(data);
      } else {
        setArchResult(getFallbackArchitecture(text));
      }
    } catch (err) {
      console.warn('Backend architecture fetch unavailable, using client fallback:', err);
      setArchResult(getFallbackArchitecture(text));
    } finally {
      setLoadingArch(false);
    }
  };

  const getFallbackArchitecture = (problemText: string): ArchitectureProposal => {
    return {
      title: `Arquitectura de Solución para: "${problemText.slice(0, 35)}..."`,
      summary: 'Diseño de arquitectura desacoplada y orientada a la eliminación de tareas repetitivas y cuellos de botella mediante automatización acelerada.',
      components: [
        { name: 'Interfaz de Usuario SPA', role: 'Frontend reactivo de alta velocidad', tech: 'React 19 + TypeScript + Tailwind CSS' },
        { name: 'Backend Micro-Servicio', role: 'Lógica de negocio y servidor seguro', tech: 'Node.js / Express + Python' },
        { name: 'Base de Datos Relacional', role: 'Almacenamiento persistente y estructurado', tech: 'MySQL / MariaDB + Docker' },
        { name: 'Módulo de Automatización e IA', role: 'Eliminación de trabajo repetitivo y esperas', tech: 'PowerAutomate + Gemini API' }
      ],
      aiIntegrationPoint: 'Procesamiento automatizado de entradas de datos e inferencia asíncrona.',
      automationBenefit: 'Aumenta la velocidad de ejecución y garantiza la máxima calidad reduciendo errores de procesamiento manual.'
    };
  };

  return (
    <section id="ai-vision" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Visión Tecnológica & Vanguardia
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            La Inteligencia Artificial y la Nueva Arquitectura Web
          </h2>
          <p className={`mt-4 text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Enfoque estratégico sobre cómo la IA, la automatización y el desarrollo asistido están redefiniendo la ingeniería de software y la optimización de flujos de trabajo.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AI_PILLARS.map((pillar, idx) => {
            const icons = [<Layers className="w-6 h-6 text-indigo-500" />, <Zap className="w-6 h-6 text-amber-500" />, <Bot className="w-6 h-6 text-purple-500" />, <Cpu className="w-6 h-6 text-emerald-500" />];
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote & Vision Box */}
        <div className={`mb-16 p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
          darkMode ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-indigo-900/40' : 'bg-gradient-to-r from-indigo-50/70 via-purple-50/50 to-emerald-50/70 border-indigo-100'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-indigo-500 font-mono text-xs font-semibold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                Manifiesto de Desarrollo
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                "El programador del presente no solo escribe funciones; diseña sistemas donde la IA potencia la precisión humana."
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {PERSONAL_INFO.aiVisionDetail}
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col items-center sm:items-end">
              <div className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-mono font-bold shadow-md">
                Iker Álvarez C.
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-1">Full Stack Developer & Student</span>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Synthesizer */}
        <div className={`rounded-3xl border p-6 sm:p-8 relative ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-white border-slate-800'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                Simulador Interactivo
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                AI Web Architecture Synthesizer
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Comprueba cómo estructuro soluciones de software conectando frontend, backend, base de datos e integración con IA.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full">
                Powered by Gemini Flash
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4 mb-8">
            <p className="text-xs text-slate-300 font-mono">Selecciona un escenario de prueba o escribe tu problema de negocio:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {predefinedScenarios.map((scen) => (
                <button
                  key={scen}
                  onClick={() => {
                    setSelectedScenario(scen);
                    setCustomPrompt('');
                    handleSynthesize(scen);
                  }}
                  className={`p-3 rounded-xl text-left text-xs transition-all border ${
                    selectedScenario === scen && !customPrompt
                      ? 'bg-indigo-600/30 border-indigo-500 text-white font-medium'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {scen}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Ej: Sistema de control de inventario con alertas inteligentes y bot WhatsApp..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={() => handleSynthesize()}
                disabled={loadingArch}
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                {loadingArch ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analizando...</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-4 h-4" />
                    <span>Sintetizar Arquitectura</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Architecture Output */}
          {archResult && (
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-indigo-400">
                    {archResult.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {archResult.summary}
                  </p>
                </div>
              </div>

              {/* Components List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {archResult.components.map((comp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                      <Server className="w-3.5 h-3.5" />
                      {comp.name}
                    </div>
                    <p className="text-xs text-slate-300">{comp.role}</p>
                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
                        {comp.tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/40 space-y-1">
                  <span className="text-xs font-mono text-purple-300 font-semibold flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-purple-400" />
                    Punto de Integración IA
                  </span>
                  <p className="text-xs text-slate-300">{archResult.aiIntegrationPoint}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/40 space-y-1">
                  <span className="text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Impacto en Eficiencia y Automatización
                  </span>
                  <p className="text-xs text-slate-300">{archResult.automationBenefit}</p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
