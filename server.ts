import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini AI Client lazily or safely
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. AI capabilities will run in fallback mock mode if called.");
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Helper to call Gemini with a fallback chain across available models
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
        console.warn(`[Gemini Fallback] Model '${model}' failed with error: ${err.message || err}. Trying next model...`);
      }
    }

    throw lastError || new Error("All Gemini models failed");
  };

  const getSmartFallbackReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("misión") || msg.includes("mision") || msg.includes("programador") || msg.includes("filosofía") || msg.includes("filosofia") || msg.includes("más") || msg.includes("mas") || msg.includes("propósito") || msg.includes("proposito")) {
      return "La misión de Iker va más allá de escribir código: busca ayudar a las personas a resolver sus problemas reales, combatiendo la repetición, la monotonía y los tiempos de espera utilizando las últimas herramientas de automatización e Inteligencia Artificial para crear soluciones con la mayor calidad y rapidez posible.";
    }
    
    if (msg.includes("l'oréal") || msg.includes("loreal") || msg.includes("trabajo") || msg.includes("empresa") || msg.includes("experiencia")) {
      return "Iker trabaja actualmente en Customer Care Management en L'Oréal España y Portugal. En su día a día desarrolla herramientas informáticas y scripts para automatizar procesos contables e internos, liberando al equipo de tareas repetitivas y acelerando la resolución de incidencias.";
    }

    if (msg.includes("inglés") || msg.includes("ingles") || msg.includes("cambridge") || msg.includes("b2") || msg.includes("linguaskill") || msg.includes("certificado") || msg.includes("idioma")) {
      return "Iker cuenta con el certificado oficial Cambridge Linguaskill B2 (puntuación promedio: 161). Destaca especialmente en Listening (166), Reading (162) y Writing (163). Utiliza el inglés habitualmente para leer documentación técnica oficial y en proyectos de voluntariado docente.";
    }

    if (msg.includes("edad") || msg.includes("años") || msg.includes("nacimiento") || msg.includes("cumple")) {
      return "Iker nació el 25 de junio de 2006 (20 años). A sus 20 años combina su formación universitaria en Ingeniería Informática en la UNED con experiencia profesional sólida y pasión por la tecnología.";
    }

    if (msg.includes("tecnología") || msg.includes("tecnologia") || msg.includes("stack") || msg.includes("lenguaje") || msg.includes("java") || msg.includes("python") || msg.includes("sql")) {
      return "El stack técnico de Iker abarca Java, JavaScript/TypeScript, PHP, Python, SQL (MySQL/MariaDB/HeidiSQL), Docker Desktop, PowerAutomate, VS Code, Eclipse y Git/GitHub, integrado en arquitecturas web modernas con React y Tailwind CSS.";
    }

    if (msg.includes("estudios") || msg.includes("uned") || msg.includes("daw") || msg.includes("educación") || msg.includes("educacion") || msg.includes("grado")) {
      return "Iker es titulado en Grado Superior de Desarrollo de Aplicaciones Web (DAW) por el IES Pío Baroja y actualmente cursa el Grado en Ingeniería Informática en la UNED en paralelo a su trabajo en L'Oréal.";
    }

    return "¡Hola! Soy Iker AI. Iker es un Desarrollador Full Stack de 20 años en Madrid. Su enfoque principal es ayudar a las personas solucionando sus problemas y eliminando la repetición y los tiempos de espera mediante las mejores herramientas disponibles. ¿Deseas saber más sobre su experiencia en L'Oréal, sus estudios en UNED o su filosofía?";
  };

  // Healthcheck API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Chat API - Pregúntale al Asistente de Iker
  app.post("/api/ai/chat", async (req, res) => {
    const { message, history } = req.body;

    try {
      const ai = getAiClient();

      if (!ai) {
        return res.json({
          reply: getSmartFallbackReply(message || ""),
          status: "fallback"
        });
      }

      const systemInstruction = `Eres "Iker AI", el asistente inteligente y representativo del portafolio web de Iker Álvarez Cañadillas.
Iker es un desarrollador Full Stack residente en Madrid (nacido el 25/06/2006, 20 años), graduado en DAW (Grado Superior en Desarrollo de Aplicaciones Web - IES Pío Baroja) y actualmente estudiante del Grado en Ingeniería Informática en la UNED.
Misión y Filosofía personal de Iker:
"No solo quiero ser programador, quiero ser algo más: ayudar a la gente a solucionar sus problemas, a combatir la repetición y la espera utilizando las últimas herramientas disponibles para poder crear soluciones con la mayor calidad y rapidez posible."

Saber clave sobre Iker:
- Experiencia laboral actual: Customer Care Management en L'Oréal España y Portugal (desde 09/2025 en VET + ETT). Ha desarrollado herramientas informáticas y scripts para automatización de procesos contables e internos, reduciendo tiempos de espera y carga de trabajo.
- Voluntariado: Profesor de inglés (A1-A2) en Centro de Mayores Del Zofio (30h).
- Nivel de inglés: Certificado Linguaskill B2 por Cambridge English (Score: 161 - Listening 166, Reading 162, Writing 163, Speaking 154).
- Tecnologías principales: Java, JavaScript, HTML/CSS, PHP, Python, SQL (MySQL/MariaDB/HeidiSQL), Docker Desktop, VS Code, Eclipse, PowerAutomate, Git/GitHub.
- Visión sobre la IA y Arquitectura Web: Considera que las herramientas de IA son fundamentales para liberar el tiempo humano, aumentar la precisión y crear soluciones rápidas y de máxima calidad.
Responde siempre con profesionalidad, entusiasmo, elegancia y brevedad en español (puedes responder en inglés si te preguntan en inglés).`;

      const contents = [
        { role: "user", parts: [{ text: systemInstruction }] },
        ...(history || []).map((h: any) => ({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        })),
        { role: "user", parts: [{ text: message }] }
      ];

      const replyText = await callGeminiWithFallback(ai, contents);
      res.json({ reply: replyText, status: "success" });
    } catch (error: any) {
      console.warn("Gemini API quota/error in /api/ai/chat. Using intelligent fallback answer:", error.message || error);
      res.json({
        reply: getSmartFallbackReply(message || ""),
        status: "fallback"
      });
    }
  });

  // AI Architecture Synthesizer API
  app.post("/api/ai/architecture", async (req, res) => {
    const { problemDescription } = req.body;

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

      const prompt = `Un usuario propone el siguiente reto o problema de negocio web/software:
"${problemDescription}"

Proporciona un diseño de Arquitectura Web limpia alineada con la visión de Iker Álvarez (Full Stack, automatización con IA para combatir la repetición y esperas, bases de datos eficientes, containerización con Docker).
Responde STRICTLY en formato JSON con la siguiente estructura exacta:
{
  "title": "Título corto de la arquitectura propuesta",
  "summary": "Resumen conciso del enfoque (máximo 2-3 frases)",
  "components": [
    { "name": "Nombre del componente", "role": "Función en el sistema", "tech": "Tecnología recomendada (ej: React, Java, Docker, SQL, Python)" }
  ],
  "aiIntegrationPoint": "Cómo se aplica la IA o automatización de forma inteligente en este sistema",
  "automationBenefit": "Beneficio concreto de eficiencia o reducción de tareas manuales"
}`;

      const rawResponse = await callGeminiWithFallback(ai, prompt, {
        responseMimeType: "application/json"
      });

      const parsed = JSON.parse(rawResponse || "{}");
      res.json(parsed);
    } catch (error: any) {
      console.warn("Gemini API quota/error in /api/ai/architecture. Using structured fallback response:", error.message || error);
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

  // Vite development middleware or production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server executing on http://0.0.0.0:${PORT}`);
  });
}

startServer();
