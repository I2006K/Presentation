import { Project, WorkExperience, Education, EnglishCertification, TechnicalSkill } from '../types';

export function calculateAge(birthDateStr: string = '2006-06-25'): number {
  const today = new Date();
  const birthDate = new Date(birthDateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const PERSONAL_INFO = {
  fullName: 'Iker Álvarez Cañadillas',
  shortName: 'Iker Álvarez',
  role: 'Desarrollador Full Stack & Estudiante de Ingeniería Informática',
  birthDate: '25/06/2006',
  age: calculateAge('2006-06-25'),
  location: 'Madrid, España',
  address: 'Calle Gainza, 69, Madrid, C. P. 28041',
  phone: '653 551 854',
  phoneFormatted: '+34 653 551 854',
  email: 'ikeralvarez21@gmail.com',
  github: 'https://github.com/I2006K',
  linkedin: 'https://www.linkedin.com/in/iker-álvarez-cañadillas-77a013339/',
  aboutSummary: `Soy un desarrollador de ${calculateAge('2006-06-25')} años con una aspiración clara: no solo ser un programador que escribe líneas de código, sino ser algo más. Mi meta es ayudar a las personas a resolver sus problemas, combatiendo la repetición, la monotonía y los tiempos de espera utilizando las últimas herramientas disponibles para crear soluciones con la mayor calidad y rapidez posible. Actualmente compagino mi grado universitario en Ingeniería Informática en la UNED con mis prácticas ampliadas en contabilidad y automatización en L'Oréal España y Portugal. Cuento con titulación en Grado Superior en Desarrollo de Aplicaciones Web (DAW) y Bachillerato Tecnológico.`,
  aiVisionQuote: `No solo quiero ser programador, quiero ser algo más: ayudar a la gente a solucionar sus problemas, a combatir la repetición y la espera utilizando las últimas herramientas disponibles para poder crear soluciones con la mayor calidad y rapidez posible.`,
  aiVisionDetail: `Para mí, la programación y la Inteligencia Artificial son palancas transformadoras para liberar el potencial humano. Al combatir la monotonía y suprimir los tiempos de espera mediante las herramientas más avanzadas de automatización e IA, permitimos que las personas se enfoquen en lo que realmente aporta valor. Mi compromiso es aportar la máxima calidad y velocidad en cada solución.`
};

export const ENGLISH_CERTIFICATE: EnglishCertification = {
  candidateName: 'Iker Alvarez Cañadillas',
  level: 'B2',
  examName: 'Linguaskill',
  issuingBody: 'Cambridge University Press & Assessment',
  issueDate: '26 Septiembre 2025',
  verificationNumber: 'LG0000006781',
  venue: 'Madrid, España (International House Madrid - ES330)',
  overallScore: 161,
  breakdown: {
    listening: { score: 166, level: 'B2' },
    reading: { score: 162, level: 'B2' },
    writing: { score: 163, level: 'B2' },
    speaking: { score: 154, level: 'B1' }
  }
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'loreal',
    role: 'Customer Care Management & Automatización',
    company: "L'Oréal España y Portugal",
    location: 'Madrid',
    period: '09/2025 - Presente',
    isCurrent: true,
    type: 'Prácticas / Dual VET',
    description: [
      "Prácticas del Grado Superior DAW ampliadas mediante ETT en el departamento de Contabilidad y Customer Care.",
      "Demostré una gran capacidad de adaptación e integración trabajando en entornos corporativos exigentes.",
      "Aporté mis conocimientos informáticos para optimizar y automatizar procesos internos repetitivos, reduciendo significativamente la carga de trabajo del equipo y mejorando la eficiencia operativa."
    ],
    highlights: [
      "Desarrollo de scripts internos y soluciones informáticas para automatización contable.",
      "Optimización de tareas de conciliación de datos y gestión con clientes.",
      "Uso de PowerAutomate, scripts de escritorio y consultas SQL/Excel avanzadas."
    ],
    techUsed: ['PowerAutomate', 'Python', 'JavaScript', 'SQL', 'Microsoft Office', 'Excel VBA']
  },
  {
    id: 'english-teacher',
    role: 'Profesor de Inglés (Voluntariado)',
    company: 'Centro de Mayores Del Zofio',
    location: 'Madrid',
    period: '02/2024 - 05/2024',
    type: 'Voluntariado',
    description: [
      "Organización e impartición de un curso voluntario de inglés de nivel A1-A2 para personas mayores durante 3 meses (30 horas lectivas).",
      "Planificación de lecciones participativas, dinámicas adaptadas y desarrollo de empatía y comunicación clara."
    ],
    highlights: [
      "30 horas lectivas dedicadas a la comunidad.",
      "Fomento de la paciencia, la oratoria y la capacidad pedagógica.",
      "Refuerzo activo del uso del idioma inglés."
    ],
    techUsed: ['Pedagogía', 'Inglés B2', 'Comunicación']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'degree-uned',
    title: 'Grado en Ingeniería Informática',
    institution: 'UNED (Universidad Nacional de Educación a Distancia)',
    location: 'Madrid',
    period: '2026 - Presente',
    isCurrent: true,
    details: 'Especialización en arquitectura de software, estructuras de datos avanzadas, fundamentos matemáticos y ciencias de la computación.'
  },
  {
    id: 'daw',
    title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'IES Pío Baroja',
    location: 'Madrid',
    period: '2024 - 2026',
    details: 'Formación profesional oficial en desarrollo frontend y backend, bases de datos relacionales, desplegado de servicios web, Java, PHP, JavaScript, HTML/CSS y metodologías ágiles.'
  },
  {
    id: 'bachillerato',
    title: 'Bachillerato Académico Tecnológico',
    institution: 'Colegio Rafaela Ybarra',
    location: 'Madrid',
    period: '2022 - 2024',
    details: 'Bases científicas y tecnológicas con énfasis en matemáticas aplicadas, física e iniciación a la programación.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'loreal-automation-hub',
    title: 'L\'Oréal Internal Task Automator',
    shortDescription: 'Sistema de automatización contable y procesamiento de facturas/gestión de clientes.',
    fullDescription: 'Herramienta desarrollada durante mi etapa en L\'Oréal para optimizar el flujo de trabajo del departamento contable. Automatiza la extracción de datos, generación de reportes y validación de transacciones repetitivas.',
    category: 'Automatización',
    tags: ['Python', 'SQL', 'PowerAutomate', 'JavaScript', 'Excel/CSV Engine'],
    keyFeatures: [
      'Parseo automático de extractos y conciliación de cuentas.',
      'Generación de alertas inteligentes ante discrepancias contables.',
      'Reducción del tiempo de procesamiento en un 60%.'
    ],
    impact: 'Optimización directa en la carga diaria de trabajo del equipo de Customer Care & Contabilidad.',
    architectureHighlight: 'Scripting modular en Python acoplado a flujos de trabajo de PowerAutomate e integración con HeidiSQL.',
    codeSnippet: {
      language: 'python',
      filename: 'accounting_reconciler.py',
      code: `import pandas as pd
import sqlite3
from datetime import datetime

def reconcile_statements(client_data_path, ledger_db):
    print("[+] Cargando registros contables para conciliación...")
    df_clients = pd.read_excel(client_data_path)
    conn = sqlite3.connect(ledger_db)
    
    # Filtrado y cruzado eficiente de IDs de transacción
    query = "SELECT * FROM transactions WHERE status = 'PENDING'"
    pending_tx = pd.read_sql_query(query, conn)
    
    matched = pd.merge(df_clients, pending_tx, on='invoice_id', how='inner')
    print(f"[✓] {len(matched)} transacciones conciliadas automáticamente.")
    return matched`
    },
    featured: true
  },
  {
    id: 'ai-architecture-advisor',
    title: 'AI Web Architecture Synthesizer',
    shortDescription: 'Generador interactivo de arquitecturas web con agentes de IA y diagramas en tiempo real.',
    fullDescription: 'Plataforma experimental en la que los desarrolladores introducen los requisitos de un proyecto y el motor analiza patrones arquitectónicos modernos (Microservicios vs Monolito modular, Serverless, AI Proxies, Cache Layers) recomendando el stack óptimo.',
    category: 'Web Architecture',
    tags: ['React', 'TypeScript', 'Tailwind', 'Gemini API', 'Express'],
    keyFeatures: [
      'Análisis sintáctico de requisitos para proponer stacks tecnológicos.',
      'Esquemas visuales interactivos de capas de datos e IA.',
      'Exportación de diagramas y prompts de configuración de infraestructura.'
    ],
    impact: 'Demuestra el poder de la IA acelerando las fases iniciales de diseño de sistemas.',
    architectureHighlight: 'Front-end React 19 desacoplado conectándose a un microservidor Node.js con SDK oficial de Google GenAI.',
    codeSnippet: {
      language: 'typescript',
      filename: 'architectureEngine.ts',
      code: `import { GoogleGenAI, Type } from '@google/genai';

export async function synthesizeArchitecture(requirements: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: \`Analiza estos requisitos y propone una Arquitectura Web moderna: \${requirements}\`,
    config: {
      responseMimeType: 'application/json',
      systemInstruction: 'Eres un Arquitecto de Software Principal experto en web y sistemas con IA.'
    }
  });
  return JSON.parse(response.text || '{}');
}`
    },
    featured: true
  },
  {
    id: 'daw-fullstack-portal',
    title: 'Portal de Gestión de Proyectos Web (DAW)',
    shortDescription: 'Aplicación web Full Stack construida con PHP, MySQL y JavaScript nativo.',
    fullDescription: 'Proyecto integral desarrollado en el marco del ciclo de Desarrollo de Aplicaciones Web. Incluye panel de administración, autenticación segura por roles, CRUD completo de registros y comunicación asíncrona mediante AJAX/Fetch API.',
    category: 'Full Stack',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML5/CSS3', 'Apache/XAMPP'],
    keyFeatures: [
      'Sistema de login y sesiones seguras en PHP con hash BCRYPT.',
      'Dashboard interactivo para control de proyectos y clientes.',
      'Consultas preparadas SQL para prevención de inyección de código.'
    ],
    impact: 'Base sólida de arquitectura cliente-servidor tradicional y control directo de base de datos SQL.',
    architectureHighlight: 'Patrón MVC (Modelo-Vista-Controlador) en PHP puro con conexión PDO a HeidiSQL/MySQL.',
    featured: true
  },
  {
    id: 'docker-java-microservices',
    title: 'Java Backend & Docker Containerized Suite',
    shortDescription: 'API RESTful en Java respaldada por Docker Desktop e integración SQL.',
    fullDescription: 'Demostración de habilidades en el desarrollo con Java orientado a objetos, persistencia JDBC/JPA y orquestación con Docker para fácil despliegue en entornos locales y productivos.',
    category: 'Backend & DB',
    tags: ['Java', 'Docker', 'SQL', 'Eclipse', 'HeidiSQL', 'REST API'],
    keyFeatures: [
      'Arquitectura multicapa en Java (Controller, Service, Repository).',
      'Containerización con Dockerfile y Docker Compose.',
      'Gestión de datos en MySQL local sincronizado mediante HeidiSQL.'
    ],
    impact: 'Consolidación de buenas prácticas de programación orientada a objetos (POO) y desacoplamiento.',
    featured: false
  }
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  // Lenguajes
  { name: 'Java', category: 'Lenguajes', level: 'Avanzado' },
  { name: 'JavaScript (ES6+)', category: 'Lenguajes', level: 'Avanzado' },
  { name: 'HTML5 & CSS3', category: 'Lenguajes', level: 'Avanzado' },
  { name: 'PHP', category: 'Lenguajes', level: 'Intermedio' },
  { name: 'SQL (MySQL/MariaDB)', category: 'Lenguajes', level: 'Avanzado' },
  { name: 'Python', category: 'Lenguajes', level: 'Intermedio' },
  { name: 'XML / JSON', category: 'Lenguajes', level: 'Avanzado' },

  // Herramientas y DevOps
  { name: 'VS Code & Eclipse', category: 'Herramientas y DevOps', level: 'Avanzado' },
  { name: 'Docker Desktop', category: 'Herramientas y DevOps', level: 'Intermedio' },
  { name: 'Git & GitHub', category: 'Herramientas y DevOps', level: 'Avanzado' },
  { name: 'HeidiSQL & XAMPP', category: 'Herramientas y DevOps', level: 'Avanzado' },
  { name: 'PowerAutomate', category: 'Herramientas y DevOps', level: 'Intermedio' },
  { name: 'Microsoft Office & Excel Avanzado', category: 'Herramientas y DevOps', level: 'Avanzado' },

  // Metodologías y Gestión
  { name: 'Inglés B2 (Linguaskill Cambridge)', category: 'Metodologías y Gestión', level: 'Avanzado' },
  { name: 'Resolución de Problemas', category: 'Metodologías y Gestión', level: 'Avanzado' },
  { name: 'Autoaprendizaje & Adaptabilidad', category: 'Metodologías y Gestión', level: 'Avanzado' },
  { name: 'Trabajo en Equipo', category: 'Metodologías y Gestión', level: 'Avanzado' },
  { name: 'Gran Disciplina & Responsabilidad', category: 'Metodologías y Gestión', level: 'Avanzado' }
];

export const AI_PILLARS = [
  {
    title: "De la Sintaxis a la Arquitectura",
    description: "La IA asume la generación de boilerplates y sintaxis repetitiva. El rol del programador evoluciona hacia la definición de arquitecturas resilientes, seguridad y modelos conceptuales.",
    icon: "Layers"
  },
  {
    title: "Automatización de Procesos",
    description: "Aplica herramientas inteligentes y automatizaciones (PowerAutomate, scripts en Python) para eliminar tareas manuales monótonas en contabilidad y gestión de datos.",
    icon: "Zap"
  },
  {
    title: "Agentes Autónomos & APIs AI-Native",
    description: "Integración de LLMs en el backend para realizar deducciones, parseo inteligente de documentos y optimización en tiempo real de interfaces web.",
    icon: "Bot"
  },
  {
    title: "Computación Cuántica & Futuro",
    description: "Curiosidad constante por las nuevas fronteras de la informática (ordenadores cuánticos, computación distribuida) para estar preparado ante los cambios tecnológicos.",
    icon: "Cpu"
  }
];
