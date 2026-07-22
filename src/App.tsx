import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIVision } from './components/AIVision';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Skills } from './components/Skills';
import { EnglishCertificate } from './components/EnglishCertificate';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatModal } from './components/AIChatModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Section observer for scroll highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'ai-vision', 'projects', 'experience', 'skills', 'english-cert', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero darkMode={darkMode} onOpenAIChat={() => setIsAIChatOpen(true)} />
        <AIVision darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <ExperienceEducation darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <EnglishCertificate darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Floating AI Assistant Trigger Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
          title="Abrir Asistente IA de Iker"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span className="font-mono">Pregunta a Iker AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Interactive AI Chat Modal */}
      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
