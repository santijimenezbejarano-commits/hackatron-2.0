const students = [
  {
    code: "CAMP-1024",
    name: "Valeria Rios",
    route: "JavaScript",
    grade: 82,
    attendance: 88,
    assignments: 76,
    participation: 70,
    elearning: 64,
    skills: { javascript: 58, html: 86, css: 80, logic: 66, teamwork: 72 },
  },
  {
    code: "CAMP-1088",
    name: "Mateo Arias",
    route: "JavaScript",
    grade: 61,
    attendance: 69,
    assignments: 55,
    participation: 43,
    elearning: 38,
    skills: { javascript: 42, html: 70, css: 61, logic: 48, teamwork: 50 },
  },
  {
    code: "CAMP-1140",
    name: "Sara Meza",
    route: "Backend",
    grade: 92,
    attendance: 96,
    assignments: 94,
    participation: 86,
    elearning: 90,
    skills: { javascript: 84, html: 88, css: 82, logic: 91, teamwork: 88 },
  },
  {
    code: "CAMP-1203",
    name: "Juan Torres",
    route: "JavaScript",
    grade: 70,
    attendance: 78,
    assignments: 69,
    participation: 62,
    elearning: 51,
    skills: { javascript: 55, html: 78, css: 74, logic: 60, teamwork: 63 },
  },
  {
    code: "CAMP-1281",
    name: "Daniela Mora",
    route: "Frontend",
    grade: 88,
    attendance: 82,
    assignments: 90,
    participation: 78,
    elearning: 84,
    skills: { javascript: 74, html: 95, css: 90, logic: 76, teamwork: 81 },
  },
  {
    code: "CAMP-1337",
    name: "Nicolas Peña",
    route: "Backend",
    grade: 53,
    attendance: 58,
    assignments: 47,
    participation: 40,
    elearning: 44,
    skills: { javascript: 40, html: 62, css: 57, logic: 43, teamwork: 46 },
  },
  {
    code: "CAMP-1402",
    name: "Laura Gomez",
    route: "Frontend",
    grade: 76,
    attendance: 84,
    assignments: 72,
    participation: 81,
    elearning: 68,
    skills: { javascript: 63, html: 84, css: 79, logic: 69, teamwork: 86 },
  },
  {
    code: "CAMP-1495",
    name: "Samuel Casas",
    route: "JavaScript",
    grade: 67,
    attendance: 74,
    assignments: 62,
    participation: 59,
    elearning: 57,
    skills: { javascript: 49, html: 75, css: 68, logic: 54, teamwork: 61 },
  },
  {
    code: "CAMP-1511",
    name: "Camila Ruiz",
    route: "Backend",
    grade: 85,
    attendance: 91,
    assignments: 80,
    participation: 77,
    elearning: 73,
    skills: { javascript: 72, html: 83, css: 78, logic: 82, teamwork: 79 },
  },
];

const fields = {
  grade: document.querySelector("#grade"),
  attendance: document.querySelector("#attendance"),
  assignments: document.querySelector("#assignments"),
  participation: document.querySelector("#participation"),
  elearning: document.querySelector("#elearning"),
};

const outputs = {
  studentSelect: document.querySelector("#studentSelect"),
  studentName: document.querySelector("#studentName"),
  studentMeta: document.querySelector("#studentMeta"),
  grade: document.querySelector("#gradeValue"),
  attendance: document.querySelector("#attendanceValue"),
  assignments: document.querySelector("#assignmentsValue"),
  participation: document.querySelector("#participationValue"),
  elearning: document.querySelector("#elearningValue"),
  studentPercentRows: document.querySelector("#studentPercentRows"),
  riskBadge: document.querySelector("#riskBadge"),
  riskScore: document.querySelector("#riskScore"),
  meterFill: document.querySelector("#meterFill"),
  recommendationsList: document.querySelector("#recommendationsList"),
  contentText: document.querySelector("#contentText"),
  supportFocus: document.querySelector("#supportFocus"),
  supportSourcesList: document.querySelector("#supportSourcesList"),
  mentorAnswerSection: document.querySelector("#mentorAnswerSection"),
  mentorAnswer: document.querySelector("#mentorAnswer"),
  questionInput: document.querySelector("#questionInput"),
  groupSize: document.querySelector("#groupSize"),
  groupsGrid: document.querySelector("#groupsGrid"),
};

const recommendationBank = {
  high: [
    "Activar tutoria individual en las proximas 24 horas.",
    "Asignar ruta de recuperacion con ejercicios diarios de 20 minutos.",
    "Vincularlo a un grupo con lider academico y seguimiento del trainer.",
    "Enviar alerta al equipo de bienestar por patron de asistencia o entregas.",
  ],
  medium: [
    "Programar seguimiento semanal con metas cortas y medibles.",
    "Sugerir capsulas de repaso sobre las skills con menor dominio.",
    "Crear recordatorios antes de entregas y checkpoints de clase.",
  ],
  low: [
    "Mantener recomendaciones de profundizacion.",
    "Ofrecer retos opcionales para fortalecer dominio.",
    "Registrar progreso como caso estable.",
  ],
};

const labels = {
  high: "Riesgo alto",
  medium: "Riesgo medio",
  low: "Riesgo bajo",
};

const colors = {
  high: "var(--danger)",
  medium: "var(--accent-2)",
  low: "var(--accent)",
};

const supportSourceBank = {
  javascript: [
    {
      title: "MDN JavaScript Guide",
      type: "Documentacion",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",
      reason: "Refuerza sintaxis, funciones, arrays y objetos con ejemplos claros.",
    },
    {
      title: "JavaScript.info",
      type: "Ruta guiada",
      url: "https://javascript.info/",
      reason: "Sirve para repasar conceptos en orden y practicar despues de cada tema.",
    },
  ],
  html: [
    {
      title: "MDN HTML: elementos y formularios",
      type: "Documentacion",
      url: "https://developer.mozilla.org/es/docs/Web/HTML",
      reason: "Ayuda a corregir estructura semantica y uso correcto de etiquetas.",
    },
    {
      title: "FreeCodeCamp Responsive Web Design",
      type: "Practica",
      url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      reason: "Propone ejercicios cortos para consolidar maquetacion basica.",
    },
  ],
  css: [
    {
      title: "CSS Tricks: Flexbox y Grid",
      type: "Guia visual",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      reason: "Aclara patrones de layout que suelen bloquear avances en frontend.",
    },
    {
      title: "MDN CSS Layout",
      type: "Documentacion",
      url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout",
      reason: "Conecta teoria de cajas, flujo y responsividad con ejemplos.",
    },
  ],
  logic: [
    {
      title: "Exercism JavaScript",
      type: "Katas",
      url: "https://exercism.org/tracks/javascript",
      reason: "Permite practicar logica con feedback progresivo y retos pequeños.",
    },
    {
      title: "Codewars: fundamentos",
      type: "Practica",
      url: "https://www.codewars.com/",
      reason: "Entrena patrones de solucion en problemas breves.",
    },
  ],
  teamwork: [
    {
      title: "Pair programming con checklist",
      type: "Dinamica",
      reason: "Mejora comunicacion tecnica y responsabilidad compartida.",
    },
    {
      title: "Retrospectiva de 10 minutos",
      type: "Bienestar",
      reason: "Detecta bloqueos sociales antes de que afecten entregas.",
    },
  ],
  attendance: [
    {
      title: "Plan de recuperacion por ausencia",
      type: "Seguimiento",
      reason: "Resume clase perdida, practica minima y validacion con trainer.",
    },
  ],
  assignments: [
    {
      title: "Plantilla de entrega minima viable",
      type: "Productividad",
      reason: "Divide cada tarea en version base, pruebas y mejora final.",
    },
  ],
  elearning: [
    {
      title: "Rutina de e-learning 20-5",
      type: "Habito",
      reason: "20 minutos de practica y 5 de notas elevan constancia sin saturar.",
    },
  ],
  debugging: [
    {
      title: "Metodo leer-probar-aislar",
      type: "Depuracion",
      reason: "Reproduce el error, aisla una linea sospechosa y prueba una hipotesis a la vez.",
    },
    {
      title: "MDN: depurar JavaScript",
      type: "Guia tecnica",
      url: "https://developer.mozilla.org/es/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools",
      reason: "Muestra como usar las herramientas del navegador para encontrar errores.",
    },
  ],
  project: [
    {
      title: "Tablero Kanban personal",
      type: "Proyecto",
      reason: "Ordena pendientes en por hacer, haciendo y terminado para avanzar sin perder foco.",
    },
    {
      title: "GitHub Docs: README",
      type: "Documentacion",
      url: "https://docs.github.com/es/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
      reason: "Ayuda a explicar el proyecto, su objetivo y como ejecutarlo.",
    },
  ],
  time: [
    {
      title: "Bloques Pomodoro academicos",
      type: "Gestion del tiempo",
      reason: "Alterna 25 minutos de practica con 5 de pausa y cierra cada bloque con una nota.",
    },
    {
      title: "Checklist de estudio diario",
      type: "Habito",
      reason: "Convierte una duda grande en una accion medible para el dia.",
    },
  ],
  motivation: [
    {
      title: "Bitacora de progreso diario",
      type: "Motivacion",
      reason: "Registra un avance pequeño por dia para volver visible el progreso real.",
    },
  ],
  wellbeing: [
    {
      title: "Pausa de regulacion antes de estudiar",
      type: "Bienestar",
      reason: "Respira, nombra el bloqueo y elige una tarea minima para retomar control.",
    },
    {
      title: "Ruta de apoyo con trainer",
      type: "Acompanamiento",
      reason: "Si el bloqueo se repite, agenda una conversacion corta para separar lo academico de lo emocional.",
    },
  ],
  career: [
    {
      title: "Portafolio con evidencia tecnica",
      type: "Empleabilidad",
      reason: "Convierte ejercicios y proyectos en pruebas visibles de aprendizaje.",
    },
    {
      title: "GitHub Skills",
      type: "Practica profesional",
      url: "https://skills.github.com/",
      reason: "Refuerza flujo con repositorios, ramas y colaboracion para entrevistas o proyectos.",
    },
  ],
  general: [
    {
      title: "MDN Learn Web Development",
      type: "Ruta de aprendizaje",
      url: "https://developer.mozilla.org/es/docs/Learn",
      reason: "Sirve como punto de partida cuando la pregunta es amplia o mezcla varios temas.",
    },
  ],
};

const skillAliases = {
  javascript: ["javascript", "js"],
  html: ["html"],
  css: ["css", "estilos"],
  logic: ["logic", "logica", "algoritmos", "programacion"],
  teamwork: ["teamwork", "equipo", "trabajo en equipo"],
};

const questionTopicAliases = {
  debugging: ["error", "bug", "depurar", "debug", "no funciona", "fallo", "rompe"],
  project: ["proyecto", "app", "pagina", "dashboard", "entrega final", "reto"],
  time: ["tiempo", "organizar", "organizacion", "horario", "atrasado", "atrasada", "procrastinar"],
  motivation: ["motivacion", "motivado", "motivada", "desanimo", "cansancio", "rendirme"],
  wellbeing: ["ansiedad", "estres", "bloqueado", "bloqueada", "nervios", "frustracion", "miedo"],
  career: ["empleo", "entrevista", "portafolio", "hoja de vida", "cv", "laboral"],
};

const topicLabels = {
  empty: "pregunta",
  risk: "riesgo",
  attendance: "asistencia",
  assignments: "entregas",
  grade: "notas",
  participation: "participacion",
  elearning: "e-learning",
  groups: "grupos",
  skill: "skill",
  debugging: "depuracion",
  project: "proyecto",
  time: "tiempo",
  motivation: "motivacion",
  wellbeing: "bienestar",
  career: "empleabilidad",
  general: "consulta abierta",
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getActiveStudent() {
  return students.find((student) => student.code === outputs.studentSelect.value) || students[0];
}

function getValues() {
  return Object.fromEntries(
    Object.entries(fields).map(([key, field]) => [key, Number(field.value)])
  );
}

function computeRisk(values) {
  const risk =
    (100 - values.grade) * 0.28 +
    (100 - values.attendance) * 0.2 +
    (100 - values.assignments) * 0.24 +
    (100 - values.participation) * 0.16 +
    (100 - values.elearning) * 0.12;

  return Math.round(clamp(risk, 0, 100));
}

function computePerformance(values) {
  return Math.round(
    values.grade * 0.3 +
      values.attendance * 0.15 +
      values.assignments * 0.25 +
      values.participation * 0.15 +
      values.elearning * 0.15
  );
}

function classify(risk) {
  if (risk >= 62) return "high";
  if (risk >= 34) return "medium";
  return "low";
}

function describePatterns(values) {
  const patterns = [];

  if (values.grade < 65) patterns.push("notas bajas");
  if (values.attendance < 75) patterns.push("asistencia irregular");
  if (values.assignments < 65) patterns.push("entregas incompletas");
  if (values.participation < 55) patterns.push("baja participacion");
  if (values.elearning < 55) patterns.push("poco uso de e-learning");

  return patterns.length ? patterns.join(" + ") : "trayectoria estable";
}

function getWeakSkills(student) {
  return Object.entries(student.skills)
    .sort((first, second) => first[1] - second[1])
    .slice(0, 2);
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function detectQuestionTopic(question, student) {
  const normalizedQuestion = normalizeText(question);
  const skillMatch = Object.keys(student.skills).find((skill) =>
    skillAliases[skill].some((alias) => normalizedQuestion.includes(alias))
  );
  const topicMatch = Object.keys(questionTopicAliases).find((topic) =>
    questionTopicAliases[topic].some((alias) => normalizedQuestion.includes(alias))
  );

  if (!normalizedQuestion.trim()) return "empty";
  if (topicMatch) return topicMatch;
  if (normalizedQuestion.includes("riesgo") || normalizedQuestion.includes("desercion")) {
    return "risk";
  }
  if (
    normalizedQuestion.includes("asistencia") ||
    normalizedQuestion.includes("fallas") ||
    normalizedQuestion.includes("faltas")
  ) {
    return "attendance";
  }
  if (
    normalizedQuestion.includes("entrega") ||
    normalizedQuestion.includes("trabajo") ||
    normalizedQuestion.includes("tarea")
  ) {
    return "assignments";
  }
  if (
    normalizedQuestion.includes("nota") ||
    normalizedQuestion.includes("calificacion") ||
    normalizedQuestion.includes("examen")
  ) {
    return "grade";
  }
  if (
    normalizedQuestion.includes("participacion") ||
    normalizedQuestion.includes("clase")
  ) {
    return "participation";
  }
  if (
    normalizedQuestion.includes("e-learning") ||
    normalizedQuestion.includes("elearning") ||
    normalizedQuestion.includes("plataforma")
  ) {
    return "elearning";
  }
  if (
    normalizedQuestion.includes("grupo") ||
    normalizedQuestion.includes("equipo") ||
    normalizedQuestion.includes("compet")
  ) {
    return "groups";
  }
  if (skillMatch) return "skill";

  return "general";
}

function getTopicSkill(question, student) {
  const normalizedQuestion = normalizeText(question);
  const skillName = Object.keys(student.skills).find((skill) =>
    skillAliases[skill].some((alias) => normalizedQuestion.includes(alias))
  );

  return skillName || getWeakSkills(student)[0][0];
}

function buildAiAnswer(student, values, question = "") {
  const risk = computeRisk(values);
  const level = classify(risk);
  const weakSkills = getWeakSkills(student);
  const weakest = weakSkills[0];
  const second = weakSkills[1];
  const context = describePatterns(values);
  const performance = computePerformance(values);
  const topic = detectQuestionTopic(question, student);
  const skill = getTopicSkill(question, student);
  const skillScore = student.skills[skill];
  const cleanQuestion = question.trim();
  const studentPercentage = `Porcentaje del estudiante: ${performance}%.`;

  const actionByLevel = {
    high: "Empecemos con una ruta de rescate: una sesion guiada, tres ejercicios cortos por dia y revision del trainer al cerrar cada jornada.",
    medium: "La mejor jugada es practicar en bloques pequeños: repaso de concepto, ejercicio aplicado y retroalimentacion inmediata.",
    low: "Vas estable; conviene subir dificultad con retos opcionales y explicarle el tema a un compañero para consolidar.",
  };

  const answers = {
    empty: `Escribe una pregunta concreta sobre ${student.name}: por ejemplo notas, asistencia, JavaScript, entregas o riesgo de desercion. Con esos datos puedo darte una recomendacion personalizada.`,
    risk: `${student.name} tiene ${risk}% de riesgo estimado, clasificado como ${labels[level].toLowerCase()}. El patron principal es ${context}. Para bajarlo, prioriza la metrica mas debil y revisa avances cada semana.`,
    attendance: `La asistencia actual es ${values.attendance}%. Si baja de 75%, aumenta el riesgo porque se pierden explicaciones y practica guiada. Recomendacion: agenda recuperaciones cortas despues de cada ausencia y valida apuntes con un compañero del grupo.`,
    assignments: `Las entregas estan en ${values.assignments}%. Este indicador pesa bastante porque muestra constancia. Recomendacion: divide cada trabajo en tres pasos: comprender el enunciado, entregar una version minima y mejorarla con feedback.`,
    grade: `El promedio actual es ${values.grade}. Si la dificultad aparece en examenes o trabajos, conviene repasar errores repetidos antes de avanzar. Para hoy: toma la ultima evaluacion, identifica dos fallos y repite ejercicios parecidos.`,
    participation: `La participacion esta en ${values.participation}%. Participar ayuda a detectar dudas temprano. Reto recomendado: hacer una pregunta por clase o explicar una solucion corta al equipo.`,
    elearning: `El uso de e-learning esta en ${values.elearning}%. Si lo subes, el modelo deberia ver mas estabilidad porque hay mas practica fuera del aula. Recomendacion: completa una capsula diaria y registra que concepto quedo claro.`,
    groups: `Con rendimiento ${performance}% y riesgo ${labels[level].toLowerCase()}, ${student.name} debe estar en un grupo balanceado con alguien fuerte en ${weakest[0]} y una actividad corta de competencia. El objetivo es practicar sin aislar al estudiante.`,
    skill: `Sobre ${skill}: el historial marca ${skillScore}% de dominio. Si sientes dificultad, probablemente se conecta con ${context}. ${actionByLevel[level]} Para reforzarlo: mira un ejemplo, resuelve un ejercicio pequeño y luego explica tu solucion en voz alta.`,
    debugging: `Si la pregunta es por un error, trabaja como detective: reproduce el fallo, lee el mensaje completo, aisla el bloque mas pequeño y cambia una sola cosa por intento. Para ${student.name}, conviene revisar primero ${weakest[0]} porque aparece como skill sensible (${weakest[1]}%).`,
    project: `Para avanzar en un proyecto, define una version minima que funcione hoy: una pantalla, una accion principal y una prueba manual. Con rendimiento ${performance}%, ${student.name} deberia partir por tareas cortas y pedir feedback antes de pulir estilos o extras.`,
    time: `Si el problema es organizarse, usa bloques de 25 minutos: repasar, practicar y anotar una duda concreta. El patron actual es ${context}, asi que la meta no es estudiar mas horas sino hacer visible el avance diario.`,
    motivation: `Cuando baja la motivacion, no empieces por una meta enorme. Elige una tarea de 10 minutos que deje evidencia: un commit, un ejercicio resuelto o una duda escrita. ${actionByLevel[level]}`,
    wellbeing: `Si hay estres o bloqueo, baja la carga primero: respira, nombra el bloqueo y separa el problema en el siguiente paso visible. Si se repite varios dias, conviene sumar apoyo del trainer o bienestar, no cargarlo en silencio.`,
    career: `Para prepararse laboralmente, ${student.name} necesita evidencia: proyectos pequeños, README claro y explicacion de decisiones tecnicas. La skill prioritaria para mostrar mejora ahora es ${weakest[0]} (${weakest[1]}%).`,
    general: `Sobre "${cleanQuestion}", no tengo una regla exacta, pero puedo orientarlo con el historial: ${student.name} tiene rendimiento ${performance}% y riesgo ${risk}%. El patron detectado es ${context}. Empieza por una accion pequeña relacionada con ${weakest[0]} (${weakest[1]}%), revisa el resultado y pide feedback al trainer si el bloqueo sigue.`,
  };

  return `${studentPercentage} ${answers[topic]}`;
}

function renderAiAnswer() {
  const student = getActiveStudent();
  const values = getValues();
  const question = outputs.questionInput.value.trim();

  if (!question) {
    outputs.mentorAnswer.textContent = "Escribe una pregunta para que la IA pueda responder con el contexto del estudiante.";
    outputs.mentorAnswerSection.classList.remove("is-empty");
    return;
  }

  outputs.mentorAnswer.textContent = buildAiAnswer(student, values, question);
  outputs.mentorAnswerSection.classList.remove("is-empty");
}

function clearAiAnswer() {
  outputs.mentorAnswer.textContent = "";
  outputs.mentorAnswerSection.classList.add("is-empty");
}

function renderRecommendations(level) {
  outputs.recommendationsList.innerHTML = "";

  recommendationBank[level].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    outputs.recommendationsList.append(item);
  });
}

function getSupportSources(student, values, level, question = "") {
  const cleanQuestion = question.trim();
  const weakSkills = getWeakSkills(student).map(([skill]) => skill);
  const topic = detectQuestionTopic(question, student);
  const topicSkill = getTopicSkill(question, student);
  const topicSources = topic === "empty" ? [] : supportSourceBank[topic] || supportSourceBank.general;
  const skillSources = cleanQuestion ? supportSourceBank[topicSkill] || [] : [];
  const sources = [
    ...topicSources,
    ...skillSources,
  ];

  if (cleanQuestion && values.attendance < 75) sources.push(...supportSourceBank.attendance);
  if (cleanQuestion && values.assignments < 70) sources.push(...supportSourceBank.assignments);
  if (cleanQuestion && values.elearning < 65) sources.push(...supportSourceBank.elearning);

  if (cleanQuestion && sources.length < 4) {
    sources.push(...supportSourceBank[weakSkills[0]], ...supportSourceBank[weakSkills[1]]);
  }

  if (cleanQuestion && level === "high") {
    sources.unshift({
      title: "Sesion de rescate con trainer",
      type: "Apoyo humano",
      reason: "Prioridad alta: revisar bloqueos hoy y acordar metas de 24 horas.",
    });
  }

  return sources
    .filter((source, index, list) =>
      list.findIndex((candidate) => candidate.title === source.title) === index
    )
    .slice(0, 4);
}

function renderSupportSources(student, values, level, question = "") {
  const cleanQuestion = question.trim();
  const weakestSkill = getWeakSkills(student)[0][0];
  const topic = detectQuestionTopic(question, student);
  const sources = getSupportSources(student, values, level, question);

  if (!cleanQuestion) {
    outputs.supportFocus.textContent = "Esperando pregunta";
    outputs.supportSourcesList.innerHTML = "";

    const item = document.createElement("li");
    item.innerHTML = `
      <strong>Escribe una pregunta</strong>
      <span>Agente listo</span>
      <p>Cuando el estudiante pregunte, aqui apareceran fuentes de apoyo relacionadas con el tema detectado.</p>
    `;
    outputs.supportSourcesList.append(item);
    return;
  }

  outputs.supportFocus.textContent = `Foco: ${
    topic === "general" ? weakestSkill : topicLabels[topic]
  } · ${labels[level]}`;
  outputs.supportSourcesList.innerHTML = "";

  sources.forEach((source) => {
    const item = document.createElement("li");
    const title = source.url
      ? `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a>`
      : `<strong>${source.title}</strong>`;

    item.innerHTML = `
      ${title}
      <span>${source.type}</span>
      <p>${source.reason}</p>
    `;
    outputs.supportSourcesList.append(item);
  });
}

function renderStudentOptions() {
  outputs.studentSelect.innerHTML = "";

  students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.code;
    option.textContent = `${student.code} - ${student.name}`;
    outputs.studentSelect.append(option);
  });
}

function loadStudent(student) {
  Object.entries(fields).forEach(([key, field]) => {
    field.value = student[key];
    field.disabled = true;
  });

  updateModel();
}

function updateModel({ refreshGroups = true } = {}) {
  const values = getValues();
  const student = getActiveStudent();
  const risk = computeRisk(values);
  const level = classify(risk);
  const performance = computePerformance(values);
  const content = {
    high: "Ruta de recuperacion, microevaluacion y sesion guiada.",
    medium: "Repaso adaptativo, practica breve y recordatorios.",
    low: "Contenido avanzado y recomendaciones de profundizacion.",
  };

  outputs.studentName.textContent = student.name;
  outputs.studentMeta.textContent = `${student.code} · Ruta ${student.route} · rendimiento ${performance}%`;
  outputs.grade.textContent = values.grade;
  outputs.attendance.textContent = `${values.attendance}%`;
  outputs.assignments.textContent = `${values.assignments}%`;
  outputs.participation.textContent = `${values.participation}%`;
  outputs.elearning.textContent = `${values.elearning}%`;
  outputs.riskBadge.textContent = labels[level];
  outputs.riskBadge.style.background = colors[level];
  outputs.riskScore.textContent = `${risk}%`;
  outputs.meterFill.style.width = `${risk}%`;
  outputs.meterFill.style.background = colors[level];
  outputs.contentText.textContent = content[level];

  renderRecommendations(level);
  renderSupportSources(student, values, level, outputs.questionInput.value);
  renderStudentPercentTable();

  if (refreshGroups) {
    renderGroups();
  }
}

function performanceForStudent(student) {
  return computePerformance({
    grade: student.grade,
    attendance: student.attendance,
    assignments: student.assignments,
    participation: student.participation,
    elearning: student.elearning,
  });
}

function renderStudentPercentTable() {
  const activeStudent = getActiveStudent();
  outputs.studentPercentRows.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    const percentage = performanceForStudent(student);

    if (student.code === activeStudent.code) {
      row.classList.add("is-active");
    }

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.code}</td>
      <td class="percentage-cell">${percentage}/100</td>
    `;

    outputs.studentPercentRows.append(row);
  });
}

function makeBalancedGroups(groupSize) {
  const sorted = [...students].sort(
    (first, second) => performanceForStudent(second) - performanceForStudent(first)
  );
  const groupCount = Math.ceil(sorted.length / groupSize);
  const groups = Array.from({ length: groupCount }, () => []);

  sorted.forEach((student, index) => {
    const cycle = Math.floor(index / groupCount);
    const position = index % groupCount;
    const groupIndex = cycle % 2 === 0 ? position : groupCount - 1 - position;
    groups[groupIndex].push(student);
  });

  return groups;
}

function getGroupAverage(group) {
  return Math.round(
    group.reduce((total, student) => total + performanceForStudent(student), 0) / group.length
  );
}

function getStudentGroupProfile(student, groupAverage) {
  const performance = performanceForStudent(student);
  const difference = performance - groupAverage;
  const weakestSkill = getWeakSkills(student)[0][0];

  if (difference >= 8) {
    return {
      performance,
      difference,
      role: "lider de apoyo",
      groupVariable: "apoya al equipo",
      target: `Explicar ${weakestSkill} a un compañero y validar entregas.`,
    };
  }

  if (difference <= -8) {
    return {
      performance,
      difference,
      role: "refuerzo guiado",
      groupVariable: "sube al promedio",
      target: `Practicar ${weakestSkill} hasta acercarse al ${groupAverage}%.`,
    };
  }

  return {
    performance,
    difference,
    role: "par competitivo",
    groupVariable: "mantiene equilibrio",
    target: `Resolver el reto grupal y comparar solucion con el equipo.`,
  };
}

function formatDifference(difference) {
  if (difference > 0) return `+${difference}`;
  return String(difference);
}

function getGroupChallenge(average) {
  if (average < 62) {
    return "Reto IA: reconstruir una funcion JavaScript paso a paso con pistas y pruebas.";
  }

  if (average < 78) {
    return "Reto IA: resolver una kata de arrays y explicar el patron usado al equipo.";
  }

  return "Reto IA: crear un mini dashboard y ayudar a otro grupo a depurar su solucion.";
}

function renderGroups() {
  const groupSize = clamp(Number(outputs.groupSize.value), 2, 5);
  const groups = makeBalancedGroups(groupSize);
  outputs.groupsGrid.innerHTML = "";

  groups.forEach((group, index) => {
    const average = getGroupAverage(group);
    const card = document.createElement("article");
    card.className = "group-card";
    card.innerHTML = `
      <h3>Grupo ${index + 1}<span class="pill">${average}%</span></h3>
      <ul>
        ${group
          .map((student) => {
            const profile = getStudentGroupProfile(student, average);

            return `
              <li>
                <strong>${student.name}</strong>
                <small>${student.code} · individual ${profile.performance}% · grupo ${average}% · ajuste ${formatDifference(profile.difference)}</small>
                <span class="group-variable">${profile.role}: ${profile.groupVariable}</span>
                <small>${profile.target}</small>
              </li>
            `;
          })
          .join("")}
      </ul>
      <small>${getGroupChallenge(average)}</small>
    `;

    outputs.groupsGrid.append(card);
  });
}

outputs.studentSelect.addEventListener("change", () => {
  loadStudent(getActiveStudent());
  clearAiAnswer();
});

outputs.questionInput.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "Enter") {
    renderAiAnswer();
  }
});
outputs.questionInput.addEventListener("input", () => {
  updateModel({ refreshGroups: false });
  clearAiAnswer();
});
document.querySelector("#askButton").addEventListener("click", renderAiAnswer);
document.querySelector("#groupButton").addEventListener("click", renderGroups);
outputs.groupSize.addEventListener("input", renderGroups);

renderStudentOptions();
outputs.studentSelect.value = students[0].code;
loadStudent(students[0]);
