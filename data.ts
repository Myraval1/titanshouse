import { Plan } from './types';

export const plans: Plan[] = [
  // --- PLANES ASISTIDOS ---
  
  // Mensuales
  {
    id: "asistido-2-3-dias",
    name: "Plan Asistido 2-3 Días",
    price: "$36.000",
    period: "/mes",
    category: "asistido",
    subCategory: "mensual",
    description: "Ideal para quienes buscan constancia con guía profesional.",
    features: [
      "Acceso al gimnasio: Lunes a Domingo",
      "Asistencia de entrenador: 2-3 veces por semana",
      "Rutina y corrección de técnica",
      "Sin contrato de permanencia"
    ]
  },
  {
    id: "asistido-4-dias",
    name: "Plan Asistido 4 Días",
    price: "$40.000",
    period: "/mes",
    category: "asistido",
    subCategory: "mensual",
    recommended: true,
    description: "Mayor frecuencia de asistencia para resultados acelerados.",
    features: [
      "Acceso al gimnasio: Lunes a Domingo",
      "Asistencia de entrenador: 4 veces por semana",
      "Rutina y corrección de técnica",
      "Sin contrato de permanencia"
    ]
  },
  {
    id: "asistido-5-dias",
    name: "Plan Asistido 5 Días",
    price: "$46.000",
    period: "/mes",
    category: "asistido",
    subCategory: "mensual",
    description: "Máximo acompañamiento para un rendimiento superior.",
    features: [
      "Acceso al gimnasio: Lunes a Domingo",
      "Asistencia de entrenador: 5 veces por semana",
      "Rutina y corrección de técnica",
      "Sin contrato de permanencia"
    ]
  },
  {
    id: "pase-diario-asistido",
    name: "Pase Diario Asistido",
    price: "$10.000",
    period: "/día",
    category: "asistido",
    subCategory: "mensual", // Grouped with monthly for display logic
    description: "Prueba la experiencia Titans con un entrenador por un día.",
    features: [
      "Acceso por 1 día",
      "Asistencia de entrenador incluida",
      "Corrección de técnica inmediata"
    ]
  },

  // Largo Plazo Asistidos
  {
    id: "trimestral-asistido",
    name: "Plan Trimestral Asistido",
    price: "$105.000",
    period: "/trimestre",
    category: "asistido",
    subCategory: "largo_plazo",
    description: "Equivalente a $35.000 mensual. Asistencia ilimitada.",
    features: [
      "Asistencia Ilimitada (Lun-Vie)",
      "Ahorras frente al plan mensual",
      "Acceso total al gimnasio",
      "Sin contrato forzoso"
    ]
  },
  {
    id: "semestral-asistido",
    name: "Plan Semestral Asistido",
    price: "$190.000",
    period: "/semestre",
    category: "asistido",
    subCategory: "largo_plazo",
    description: "Equivalente a $32.000 mensual. Compromiso real.",
    features: [
      "Asistencia Ilimitada (Lun-Vie)",
      "Mejor valor mensual",
      "Congelamiento disponible (según condiciones)",
      "Acceso total al gimnasio"
    ]
  },
  {
    id: "anual-asistido",
    name: "Plan Anual Asistido",
    price: "$335.000",
    period: "/año",
    category: "asistido",
    subCategory: "largo_plazo",
    description: "Equivalente a $28.000 mensual. La opción más económica.",
    features: [
      "Asistencia Ilimitada (Lun-Vie)",
      "El precio más bajo por mes",
      "Congelamiento disponible",
      "Acceso total al gimnasio"
    ]
  },

  // AM Asistidos
  {
    id: "am-2-dias",
    name: "Plan AM 2 Días",
    price: "$30.000",
    period: "/mes",
    category: "asistido",
    subCategory: "am",
    description: "Horario exclusivo 08:00 - 13:00.",
    features: [
      "Acceso Lunes a Domingo (08:00 - 13:00)",
      "Asistencia: 2 días por semana",
      "Rutina matutina",
      "Precio reducido"
    ]
  },
  {
    id: "am-3-dias",
    name: "Plan AM 3 Días",
    price: "$33.000",
    period: "/mes",
    category: "asistido",
    subCategory: "am",
    description: "Horario exclusivo 08:00 - 13:00.",
    features: [
      "Acceso Lunes a Domingo (08:00 - 13:00)",
      "Asistencia: 3 días por semana",
      "Ideal para empezar el día",
      "Precio reducido"
    ]
  },
  {
    id: "am-4-dias",
    name: "Plan AM 4 Días",
    price: "$38.000",
    period: "/mes",
    category: "asistido",
    subCategory: "am",
    description: "Horario exclusivo 08:00 - 13:00.",
    features: [
      "Acceso Lunes a Domingo (08:00 - 13:00)",
      "Asistencia: 4 días por semana",
      "Alta frecuencia matutina",
      "Precio reducido"
    ]
  },
  {
    id: "am-5-dias",
    name: "Plan AM 5 Días",
    price: "$42.000",
    period: "/mes",
    category: "asistido",
    subCategory: "am",
    description: "Horario exclusivo 08:00 - 13:00.",
    features: [
      "Acceso Lunes a Domingo (08:00 - 13:00)",
      "Asistencia: 5 días por semana",
      "Entrenamiento diario guiado",
      "Precio reducido"
    ]
  },

  // --- PLANES GENERALES ---

  // Mensuales Generales
  {
    id: "general-mensual",
    name: "Plan General Mensual",
    price: "$30.000",
    period: "/mes",
    category: "general",
    subCategory: "mensual",
    recommended: true,
    description: "Entrena a tu ritmo, sin restricciones de horario.",
    features: [
      "Acceso ilimitado al gimnasio",
      "Sin rutina asignada",
      "Staff disponible para dudas puntuales",
      "Sin contrato de permanencia"
    ]
  },
  {
    id: "general-estudiante",
    name: "Plan General Estudiante",
    price: "$25.000",
    period: "/mes",
    category: "general",
    subCategory: "mensual",
    description: "Tarifa especial presentando certificado de alumno regular.",
    features: [
      "Precio preferencial estudiantes",
      "Acceso ilimitado al gimnasio",
      "Sin rutina asignada",
      "Requiere certificado vigente"
    ]
  },
  {
    id: "pase-diario-general",
    name: "Pase Diario General",
    price: "$6.000",
    period: "/día",
    category: "general",
    subCategory: "mensual",
    description: "Entrena por el día sin compromisos.",
    features: [
      "Acceso por 1 día",
      "Uso libre de instalaciones",
      "Sin evaluación"
    ]
  },

  // Largo Plazo Generales
  {
    id: "trimestral-general",
    name: "Plan Trimestral General",
    price: "$75.000",
    period: "/trimestre",
    category: "general",
    subCategory: "largo_plazo",
    description: "Equivalente a $25.000 mensual.",
    features: [
      "Ahorro considerable",
      "Acceso ilimitado",
      "Sin rutina asignada",
      "Pago único"
    ]
  },
  {
    id: "semestral-general",
    name: "Plan Semestral General",
    price: "$132.000",
    period: "/semestre",
    category: "general",
    subCategory: "largo_plazo",
    description: "Equivalente a $22.000 mensual.",
    features: [
      "Excelente relación precio/calidad",
      "Acceso ilimitado",
      "Sin rutina asignada",
      "Pago único"
    ]
  },
  {
    id: "anual-general",
    name: "Plan Anual General",
    price: "$240.000",
    period: "/año",
    category: "general",
    subCategory: "largo_plazo",
    description: "Equivalente a $20.000 mensual. La mejor tarifa base.",
    features: [
      "Tarifa mensual más baja",
      "Acceso ilimitado todo el año",
      "Sin rutina asignada",
      "Pago único"
    ]
  },

  // AM General
  {
    id: "am-general",
    name: "Plan AM General",
    price: "$25.000",
    period: "/mes",
    category: "general",
    subCategory: "am",
    description: "Entrena solo en horario de mañana (08:00 - 13:00).",
    features: [
      "Acceso restringido (08:00 - 13:00)",
      "Uso libre de instalaciones",
      "Precio económico",
      "Sin asistencia"
    ]
  }
];