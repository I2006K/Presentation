import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Sparkles, Send, Bot, User, X, RefreshCw, MessageSquare } from 'lucide-react';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: '¡Hola! Soy Iker AI, el asistente virtual del portafolio. ¿En qué puedo ayudarte? Puedes preguntarme sobre la experiencia de Iker en L\'Oréal, sus proyectos en DAW, sus estudios en UNED o su visión sobre la Inteligencia Artificial.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!inputText.trim() || loading) return;

    const userMsgText = inputText.trim();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsgText,
          history: messages.slice(-6)
        })
      });

      let aiReplyText = '';
      if (response.ok) {
        const data = await response.json();
        aiReplyText = data.reply;
      }

      if (!aiReplyText) {
        aiReplyText = getSmartClientReply(userMsgText);
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.warn('Backend API fetch unavailable, utilizing client smart responder:', err);
      const fallbackText = getSmartClientReply(userMsgText);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getSmartClientReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("misión") || msg.includes("mision") || msg.includes("programador") || msg.includes("filosofía") || msg.includes("filosofia") || msg.includes("más") || msg.includes("mas") || msg.includes("propósito") || msg.includes("proposito")) {
      return "La misión de Iker va más allá de escribir código: busca ayudar a las personas a resolver sus problemas reales, combatiendo la repetición, la monotonía y los tiempos de espera utilizando las últimas herramientas de automatización e Inteligencia Artificial para crear soluciones con la mayor velocidad y calidad posible.";
    }

    if (msg.includes("l'oréal") || msg.includes("loreal") || msg.includes("trabajo") || msg.includes("empresa") || msg.includes("experiencia")) {
      return "Iker trabaja actualmente en Customer Care Management en L'Oréal España y Portugal. Desarrolla herramientas informáticas y scripts para automatizar procesos contables e internos, reduciendo tiempos de espera y optimizando los flujos de trabajo del equipo.";
    }

    if (msg.includes("inglés") || msg.includes("ingles") || msg.includes("cambridge") || msg.includes("b2") || msg.includes("linguaskill") || msg.includes("certificado") || msg.includes("idioma")) {
      return "Iker cuenta con el certificado oficial Cambridge Linguaskill B2 (puntuación promedio: 161). Destaca especialmente en Listening (166), Reading (162) y Writing (163). Utiliza el inglés habitualmente para leer documentación técnica oficial y en proyectos de voluntariado docente.";
    }

    if (msg.includes("edad") || msg.includes("años") || msg.includes("nacimiento") || msg.includes("cumple")) {
      return "Iker nació el 25 de junio de 2006 (20 años). A sus 20 años combina su formación universitaria en Ingeniería Informática en la UNED con experiencia profesional sólida y pasión por la tecnología.";
    }

    if (msg.includes("tecnología") || msg.includes("tecnologia") || msg.includes("stack") || msg.includes("lenguaje") || msg.includes("java") || msg.includes("python") || msg.includes("sql")) {
      return "El stack técnico de Iker abarca Java, JavaScript/TypeScript (React, Node.js), PHP, Python, SQL (MySQL, MariaDB, HeidiSQL), Docker Desktop, PowerAutomate y Git/GitHub.";
    }

    if (msg.includes("estudios") || msg.includes("uned") || msg.includes("daw") || msg.includes("educación") || msg.includes("educacion") || msg.includes("grado")) {
      return "Iker es titulado en Grado Superior de Desarrollo de Aplicaciones Web (DAW) por el IES Pío Baroja y actualmente cursa el Grado en Ingeniería Informática en la UNED en paralelo a su trabajo en L'Oréal.";
    }

    return "¡Hola! Soy Iker AI. Iker es Desarrollador Full Stack de 20 años en Madrid. Su propósito no es solo programar, sino ayudar a la gente a solucionar sus problemas, combatiendo la repetición y los tiempos de espera mediante las mejores herramientas disponibles. ¿Te gustaría conocer más sobre sus proyectos, su experiencia en L'Oréal o sus estudios en la UNED?";
  };

  const samplePrompts = [
    "¿Cuál es la misión de Iker más allá de programar?",
    "¿Qué tareas de automatización realiza Iker en L'Oréal?",
    "¿Cuál es el nivel de inglés de Iker y su certificado?",
    "¿Qué tecnologías domina Iker?",
    "¿Cuál es la opinión de Iker sobre el futuro de la programación con IA?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className={`w-full max-w-2xl h-[85vh] max-h-[700px] rounded-3xl border flex flex-col shadow-2xl relative overflow-hidden ${
        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base flex items-center gap-2">
                Asistente Virtual - Iker AI
              </h3>
              <p className="text-xs text-indigo-100 font-mono">Pregunta lo que quieras sobre mi CV y proyectos</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-xs'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-xs'
                  : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-bl-xs'
              }`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span className={`block text-[10px] mt-1 text-right font-mono opacity-60`}>
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className={`p-3 rounded-2xl text-xs flex items-center gap-2 ${
                darkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-100 text-slate-600'
              }`}>
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-500" />
                <span>Escribiendo respuesta...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800/60 overflow-x-auto flex items-center gap-2 text-xs">
          {samplePrompts.map((promptText, i) => (
            <button
              key={i}
              onClick={() => {
                setInputText(promptText);
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap text-[11px] font-mono border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {promptText}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu pregunta sobre Iker..."
            className={`flex-1 px-4 py-3 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-indigo-500 ${
              darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          />
          <button
            onClick={handleSend}
            disabled={loading || !inputText.trim()}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors disabled:opacity-50 flex items-center justify-center shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
