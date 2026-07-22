import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

const callGeminiWithFallback = async (ai: any, contents: any, config?: any) => {
  const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-3.6-flash"];
  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        ...(config ? { config } : {})
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err: any) {
      lastError = err;
    }
  }

  throw lastError || new Error("All Gemini models failed");
};

const getSmartFallbackReply = (userMessage: string): string => {
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

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", environment: "vercel" });
});

app.post("/api/ai/chat", async (req, res) => {
  const { message, history } = req.body || {};

  try {
    const ai = getAiClient();
    if (!ai) {
      return res.json({ reply: getSmartFallbackReply(message || ""), status: "fallback" });
    }

    const systemInstruction = `Eres "Iker AI", el asistente inteligente y representativo del portafolio web de Iker Álvarez Cañadillas.
Iker es un desarrollador Full Stack residente en Madrid (nacido el 25/06/2006, 20 años), graduado en DAW y estudiante de Ingeniería Informática en la UNED.
Misión y Filosofía personal de Iker:
"No solo quiero ser programador, quiero ser algo más: ayudar a la gente a solucionar sus problemas, a combatir la repetición y la espera utilizando las últimas herramientas disponibles para poder crear soluciones con la mayor calidad y rapidez posible."`;

    const contents = [
      { role: "user", parts: [{ text: systemInstruction }] },
      ...(history || []).map((h: any) => ({
        role: h.sender === "user" ? "user" : "model",
        parts: [{ text: h.text }]
      })),
      { role: "user", parts: [{ text: message || "" }] }
    ];

    const replyText = await callGeminiWithFallback(ai, contents);
    res.json({ reply: replyText, status: "success" });
  } catch (error: any) {
    res.json({ reply: getSmartFallbackReply(message || ""), status: "fallback" });
  }
});

app.post("/api/ai/architecture", async (req, res) => {
  const { problemDescription } = req.body || {};

  try {
    const ai = getAiClient();
    if (!ai) {
      return res.json({
        title: "Arquitectura Web Modular de Solución Rápida con IA",
        summary: "Propuesta arquitectónica desacoplada con cliente React, backend en Node/Express, capa de persistencia SQL en Docker y automatización con IA para eliminar tiempos de espera.",
        components: [
          { name: "Frontend SPA", role: "Interfaz de usuario reactiva y accesible", tech: "React + TypeScript + Tailwind CSS" },
          { name: "Backend Proxy API", role: "Servidor seguro con proxy de endpoints", tech: "Node.js / Express + TypeScript" },
          { name: "Base de Datos", role: "Persistencia relacional con consultas optimizadas", tech: "MySQL / HeidiSQL + Docker" },
          { name: "Automation Layer", role: "Automatización de flujos de trabajo repetitivos", tech: "Python / PowerAutomate" }
        ],
        aiIntegrationPoint: "Integración de modelos Gemini Flash para procesamiento inteligente y aceleración de tareas manuales.",
        automationBenefit: "Combate la repetición y los tiempos de espera optimizando hasta un 80% del trabajo operativo."
      });
    }

    const prompt = `Analiza la siguiente necesidad del cliente:
"${problemDescription}"

Proporciona un diseño de Arquitectura Web limpia alineada con la visión de Iker Álvarez.
Responde STRICTLY en formato JSON con la siguiente estructura exacta:
{
  "title": "Título corto de la arquitectura propuesta",
  "summary": "Resumen ejecutivo en 2 frases",
  "components": [
    { "name": "Nombre Componente", "role": "Rol en el sistema", "tech": "Tecnología sugerida" }
  ],
  "aiIntegrationPoint": "Punto exacto donde entra la IA",
  "automationBenefit": "Beneficio de eficiencia"
}`;

    const rawResponse = await callGeminiWithFallback(ai, prompt, { responseMimeType: "application/json" });
    const parsed = JSON.parse(rawResponse || "{}");
    res.json(parsed);
  } catch (error: any) {
    res.json({
      title: `Arquitectura de Solución para: "${(problemDescription || '').slice(0, 30)}..."`,
      summary: "Diseño de arquitectura acelerada por IA y automatización para erradicar procesos repetitivos y cuellos de botella.",
      components: [
        { name: "Interfaz de Usuario SPA", role: "Frontend reactivo de alta velocidad", tech: "React 19 + TypeScript + Tailwind CSS" },
        { name: "Backend Micro-Servicio", role: "Lógica de negocio y procesamiento de datos", tech: "Node.js / Express + Python" },
        { name: "Base de Datos Relacional", role: "Almacenamiento persistente de datos estructurados", tech: "MySQL / MariaDB + Docker" },
        { name: "Módulo de Automatización e IA", role: "Eliminación de tareas repetitivas y tiempos de espera", tech: "PowerAutomate + Gemini API" }
      ],
      aiIntegrationPoint: "Procesamiento automatizado de entradas y validación de datos en tiempo real.",
      automationBenefit: "Aumenta la velocidad de ejecución y garantiza la máxima calidad reduciendo errores humanos."
    });
  }
});

export default app;
