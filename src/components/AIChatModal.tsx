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

      const data = await response.json();
      const aiReplyText = data.reply || 'Disculpa, ocurrió un error temporal en la respuesta.';

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Error querying AI assistant:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: 'Disculpa, no pude conectarme al servidor. Puedes contactar directamente a Iker a través de ikeralvarez21@gmail.com o +34 653 551 854.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
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
