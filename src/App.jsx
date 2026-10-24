import React, { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Brain,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Clock,
  Award,
  Layers,
  Cpu,
  Code2,
  Network,
  Play,
  FileText,
  ChevronDown,
  ChevronUp,
  Target,
  Pause,
  Keyboard,
  Trash2,
  BookOpen,
  Search,
  Lightbulb,
  BookmarkCheck,
  Calculator,
  X,
  Eye,
  EyeOff,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  RefreshCw,
} from 'lucide-react';
import { THEORY_GUIDE } from './theoryData';
import SyncModal from './SyncModal';
import {
  getActiveSyncKey,
  pushToCloudDebounced,
  subscribeToCloudVault,
} from './syncService';
import { isFirebaseConfigured } from './firebaseConfig';

// Cargar todos los bancos de preguntas en src/data/ y subdirectorios
const rawDataModules = import.meta.glob('./data/**/*.json', { eager: true });

const SUBAREA_FILE_MAP = {
  'subarea-1-1-circuitos-electricos': {
    area: 'Implementación de Hardware',
    subarea: '1.1 Circuitos eléctricos y electrónica',
  },
  'subarea-1-2-arquitectura': {
    area: 'Implementación de Hardware',
    subarea: '1.2 Arquitectura de computadoras y diseño digital',
  },
  'subarea-1-3-sistemas-embebidos': {
    area: 'Implementación de Hardware',
    subarea: '1.3 Sistemas embebidos y tiempo real',
  },
  'subarea-1-4-automatizacion': {
    area: 'Implementación de Hardware',
    subarea: '1.4 Automatización y control',
  },
  'subarea-2-1-diseno-redes': {
    area: 'Implementación de Redes',
    subarea: '2.1 Diseño y direccionamiento de redes',
  },
  'subarea-2-2-administracion-redes': {
    area: 'Implementación de Redes',
    subarea: '2.2 Administración y configuración de redes',
  },
  'subarea-2-3-seguridad-redes': {
    area: 'Implementación de Redes',
    subarea: '2.3 Seguridad en redes',
  },
  'subarea-3-1-ingenieria-software': {
    area: 'Implementación de Software',
    subarea: '3.1 Ingeniería de software y calidad',
  },
  'subarea-3-2-programacion': {
    area: 'Implementación de Software',
    subarea: '3.2 Programación, estructuras de datos y algoritmos',
  },
  'subarea-3-3-manejo-datos': {
    area: 'Implementación de Software',
    subarea: '3.3 Bases de datos y manejo de datos',
  },
  'comprension-lectora': {
    area: 'Habilidades Transversales',
    subarea: '4.1 Comprensión Lectora',
  },
};

// Paleta Editorial Cálida y Vibrante (No Techy / No Aburrida)
const CANONICAL_AREAS = [
  {
    key: 'Implementación de Hardware',
    code: 'Área 1',
    shortLabel: 'Hardware',
    description: 'Circuitos, arquitectura de computadoras, embebidos y control',
    icon: Cpu,
    accentText: 'text-amber-800',
    accentBg: 'bg-amber-100/80',
    accentBorder: 'border-amber-300',
    badge: 'bg-amber-100 text-amber-900 border-amber-300',
    progressBar: 'bg-amber-600',
    btnPrimary:
      'bg-amber-600 hover:bg-amber-700 text-white shadow-sm shadow-amber-600/20',
  },
  {
    key: 'Implementación de Redes',
    code: 'Área 2',
    shortLabel: 'Redes',
    description: 'Diseño, direccionamiento IPv4/IPv6, enrutamiento, administración y seguridad',
    icon: Network,
    accentText: 'text-indigo-800',
    accentBg: 'bg-indigo-100/80',
    accentBorder: 'border-indigo-300',
    badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    progressBar: 'bg-indigo-600',
    btnPrimary:
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20',
  },
  {
    key: 'Implementación de Software',
    code: 'Área 3',
    shortLabel: 'Software',
    description: 'Ingeniería de software, calidad, algoritmos, estructuras y bases de datos',
    icon: Code2,
    accentText: 'text-teal-800',
    accentBg: 'bg-teal-100/80',
    accentBorder: 'border-teal-300',
    badge: 'bg-teal-100 text-teal-900 border-teal-300',
    progressBar: 'bg-teal-700',
    btnPrimary:
      'bg-teal-700 hover:bg-teal-800 text-white shadow-sm shadow-teal-700/20',
  },
  {
    key: 'Habilidades Transversales',
    code: 'Área 4',
    shortLabel: 'Comprensión Lectora',
    description: 'Análisis crítico, síntesis e interpretación de textos técnicos y científicos',
    icon: FileText,
    accentText: 'text-rose-800',
    accentBg: 'bg-rose-100/80',
    accentBorder: 'border-rose-300',
    badge: 'bg-rose-100 text-rose-900 border-rose-300',
    progressBar: 'bg-rose-600',
    btnPrimary:
      'bg-rose-600 hover:bg-rose-700 text-white shadow-sm shadow-rose-600/20',
  },
];

const AREA_STYLE_MAP = Object.fromEntries(
  CANONICAL_AREAS.map((a) => [a.key, a])
);

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

function normalizeOptions(opcionesRaw) {
  if (Array.isArray(opcionesRaw)) {
    return opcionesRaw.map((op, i) => ({
      id: String(op.id || OPTION_LETTERS[i] || 'A').toUpperCase(),
      texto: String(op.texto || '').trim(),
    }));
  }
  if (opcionesRaw && typeof opcionesRaw === 'object') {
    return Object.entries(opcionesRaw).map(([key, val]) => ({
      id: String(key).toUpperCase(),
      texto: String(val || '').trim(),
    }));
  }
  return [];
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Mezcla aleatoriamente el contenido de las opciones para que el usuario no memorice la letra,
 * pero REASIGNA los incisos siempre en orden estricto "A, B, C, D" y actualiza `respuesta_correcta`.
 */
function prepareQuestionWithOrderedLabels(question, isRetryInSession = false) {
  const originalCorrectId = String(question.respuesta_correcta || 'A').toUpperCase();
  const optionsWithCorrectFlag = question.opciones.map((op) => ({
    texto: op.texto,
    isCorrect: String(op.id).toUpperCase() === originalCorrectId,
  }));

  const shuffled = shuffleArray(optionsWithCorrectFlag);

  let newCorrectLetter = 'A';
  const relabeledOptions = shuffled.map((item, idx) => {
    const letter = OPTION_LETTERS[idx] || String(idx + 1);
    if (item.isCorrect) {
      newCorrectLetter = letter;
    }
    return {
      id: letter,
      texto: item.texto,
    };
  });

  return {
    ...question,
    opciones: relabeledOptions,
    respuesta_correcta: newCorrectLetter,
    isRetryInSession,
  };
}

function loadAllQuestions() {
  const allQuestions = [];
  const seenTexts = new Set();

  Object.entries(rawDataModules).forEach(([filePath, moduleContent]) => {
    const fileName = filePath.split('/').pop().replace('.json', '');
    const items = Array.isArray(moduleContent.default)
      ? moduleContent.default
      : Array.isArray(moduleContent)
      ? moduleContent
      : [];

    const mappedMeta = SUBAREA_FILE_MAP[fileName];

    if (fileName === 'comprension-lectora') {
      items.forEach((lecturaBlock, lIdx) => {
        const titulo = lecturaBlock.titulo || `Lectura ${lIdx + 1}`;
        const parrafos = Array.isArray(lecturaBlock.parrafos)
          ? lecturaBlock.parrafos
          : [];
        const preguntasLectura = Array.isArray(lecturaBlock.preguntas)
          ? lecturaBlock.preguntas
          : [];

        preguntasLectura.forEach((q, qIdx) => {
          const opcionesNorm = normalizeOptions(q.opciones);
          if (!q.pregunta || opcionesNorm.length === 0) return;

          allQuestions.push({
            id: `comp_lectora_${lIdx + 1}_${qIdx + 1}`,
            area: 'Habilidades Transversales',
            subarea: '4.1 Comprensión Lectora',
            pregunta: q.pregunta.trim(),
            opciones: opcionesNorm,
            respuesta_correcta: String(q.respuesta_correcta || 'A').toUpperCase(),
            explicacion:
              q.explicacion ||
              'Respuesta fundamentada en el análisis del texto.',
            lecturaTitulo: titulo,
            lecturaParrafos: parrafos,
          });
        });
      });
    } else {
      items.forEach((q, idx) => {
        if (!q || !q.pregunta) return;
        const normalizedQuestionText = q.pregunta.trim().toLowerCase();
        if (seenTexts.has(normalizedQuestionText)) return;
        seenTexts.add(normalizedQuestionText);

        const opcionesNorm = normalizeOptions(q.opciones);
        if (opcionesNorm.length === 0) return;

        const area =
          q.area || mappedMeta?.area || 'Implementación de Software';
        const subarea =
          q.subarea || mappedMeta?.subarea || '3.1 Ingeniería de software y calidad';
        const id = q.id || `${fileName}_${String(idx + 1).padStart(3, '0')}`;

        allQuestions.push({
          id,
          area,
          subarea,
          pregunta: q.pregunta.trim(),
          opciones: opcionesNorm,
          respuesta_correcta: String(q.respuesta_correcta || 'A').toUpperCase(),
          explicacion:
            q.explicacion ||
            'Fundamento técnico verificado conforme al temario EGEL.',
        });
      });
    }
  });

  return allQuestions;
}

const PROGRESS_STORAGE_KEY = 'egel_pro_progress_v3';
const ACTIVE_SESSION_STORAGE_KEY = 'egel_pro_active_session_v3';
const MIN_QUESTIONS_PER_LESSON = 35;

function formatReadableText(text) {
  if (!text || typeof text !== 'string') return text || '';
  return text.replace(/_{3,}/g, ' _____ ');
}

const defaultProgress = {
  lastStudyDate: new Date().toISOString().slice(0, 10),
  lessonSize: 35,
  questionStats: {},
  subareaStats: {},
  mistakeIds: [],
  examHistory: [],
};

export default function App() {
  // =========================================================================
  // 1. TODOS LOS HOOKS AL INICIO DEL COMPONENTE (NUNCA DESPUÉS DE UN RETURN)
  // =========================================================================
  const allQuestions = useMemo(() => loadAllQuestions(), []);

  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProgress,
          ...parsed,
          lessonSize: Math.max(
            MIN_QUESTIONS_PER_LESSON,
            parsed.lessonSize || MIN_QUESTIONS_PER_LESSON
          ),
        };
      }
    } catch (e) {
      console.error('Error leyendo progreso:', e);
    }
    return defaultProgress;
  });

  const savedActiveState = useMemo(() => {
    try {
      const raw = localStorage.getItem(ACTIVE_SESSION_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Error restaurando sesión activa:', e);
    }
    return null;
  }, []);

  const [sessionConfig, setSessionConfig] = useState(
    () => savedActiveState?.sessionConfig || null
  );
  const [sessionQueue, setSessionQueue] = useState(
    () => savedActiveState?.sessionQueue || []
  );
  const [currentIndex, setCurrentIndex] = useState(
    () => savedActiveState?.currentIndex || 0
  );
  const [selectedOption, setSelectedOption] = useState(
    () => savedActiveState?.selectedOption || null
  );
  const [isAnswerChecked, setIsAnswerChecked] = useState(
    () => savedActiveState?.isAnswerChecked || false
  );
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(
    () => savedActiveState?.isCorrectAnswer || false
  );
  const [showReadingText, setShowReadingText] = useState(true);
  const [sessionResults, setSessionResults] = useState(
    () =>
      savedActiveState?.sessionResults || {
        correctFirstTry: 0,
        totalAnswered: 0,
        mistakesMade: [],
        repairedMistakes: [],
      }
  );

  const [examQuestions, setExamQuestions] = useState(
    () => savedActiveState?.examQuestions || []
  );
  const [examAnswers, setExamAnswers] = useState(
    () => savedActiveState?.examAnswers || {}
  );
  const [examCurrentIdx, setExamCurrentIdx] = useState(
    () => savedActiveState?.examCurrentIdx || 0
  );
  const [examSecondsLeft, setExamSecondsLeft] = useState(
    () => savedActiveState?.examSecondsLeft || 0
  );
  const [examSummary, setExamSummary] = useState(
    () => savedActiveState?.examSummary || null
  );

  const [activeTab, setActiveTab] = useState(() => {
    const initialTab = savedActiveState?.activeTab || 'home';
    const hasSessionQ =
      Array.isArray(savedActiveState?.sessionQueue) &&
      savedActiveState.sessionQueue.length > 0;
    const hasExamQ =
      Array.isArray(savedActiveState?.examQuestions) &&
      savedActiveState.examQuestions.length > 0;

    if (
      (initialTab === 'session' || initialTab === 'pre_session_reading') &&
      !hasSessionQ
    ) {
      return 'home';
    }
    if (initialTab === 'simulacro_active' && !hasExamQ) {
      return 'home';
    }
    return initialTab;
  });

  const [selectedAreaFilter, setSelectedAreaFilter] = useState('ALL');
  const [selectedTheorySubarea, setSelectedTheorySubarea] = useState(
    () =>
      savedActiveState?.selectedTheorySubarea ||
      '1.1 Circuitos eléctricos y electrónica'
  );
  const [theorySearchQuery, setTheorySearchQuery] = useState('');
  const [theoryViewMode, setTheoryViewMode] = useState('interactive');
  const [activeTheorySectionIdx, setActiveTheorySectionIdx] = useState(0);
  const [theoryRecallMode, setTheoryRecallMode] = useState(false);
  const [revealedPointsMap, setRevealedPointsMap] = useState({});
  const [copiedFormulaIdx, setCopiedFormulaIdx] = useState(null);
  const [revealedCatalogQuestions, setRevealedCatalogQuestions] = useState({});
  const [showTheorySources, setShowTheorySources] = useState(false);
  const [showTheoryDrawerInQuiz, setShowTheoryDrawerInQuiz] = useState(false);
  const [preReadingSubareaTab, setPreReadingSubareaTab] = useState(
    () => savedActiveState?.preReadingSubareaTab || ''
  );
  const [checkedReadingBlocks, setCheckedReadingBlocks] = useState(
    () => savedActiveState?.checkedReadingBlocks || {}
  );

  // Sincronización entre dispositivos sin cuentas (Firebase Firestore anónimo)
  const [syncKey, setSyncKey] = useState(() => getActiveSyncKey());
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleApplyRemoteData = useCallback((remoteData) => {
    if (!remoteData) return;
    setIsSyncing(true);
    if (remoteData.progress) {
      setProgress((prev) => ({
        ...prev,
        ...remoteData.progress,
      }));
    }
    if (remoteData.activeSession) {
      const s = remoteData.activeSession;
      if (s.activeTab) setActiveTab(s.activeTab);
      if (s.sessionConfig) setSessionConfig(s.sessionConfig);
      if (s.sessionQueue) setSessionQueue(s.sessionQueue);
      if (typeof s.currentIndex === 'number') setCurrentIndex(s.currentIndex);
      if (s.selectedOption !== undefined) setSelectedOption(s.selectedOption);
      if (s.isAnswerChecked !== undefined) setIsAnswerChecked(s.isAnswerChecked);
      if (s.isCorrectAnswer !== undefined) setIsCorrectAnswer(s.isCorrectAnswer);
      if (s.sessionResults) setSessionResults(s.sessionResults);
      if (s.examQuestions) setExamQuestions(s.examQuestions);
      if (s.examAnswers) setExamAnswers(s.examAnswers);
      if (typeof s.examCurrentIdx === 'number') setExamCurrentIdx(s.examCurrentIdx);
      if (typeof s.examSecondsLeft === 'number') setExamSecondsLeft(s.examSecondsLeft);
      if (s.examSummary) setExamSummary(s.examSummary);
      if (s.selectedTheorySubarea) setSelectedTheorySubarea(s.selectedTheorySubarea);
      if (s.preReadingSubareaTab) setPreReadingSubareaTab(s.preReadingSubareaTab);
      if (s.checkedReadingBlocks) setCheckedReadingBlocks(s.checkedReadingBlocks);
    }
    setTimeout(() => setIsSyncing(false), 800);
  }, []);

  // Escuchar cambios de la nube en tiempo real
  useEffect(() => {
    if (!syncKey) return;
    const unsubscribe = subscribeToCloudVault(syncKey, (remoteData) => {
      handleApplyRemoteData(remoteData);
    });
    return () => unsubscribe();
  }, [syncKey, handleApplyRemoteData]);

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
      pushToCloudDebounced(syncKey, progress, null);
    } catch (e) {
      console.error('Error guardando progreso:', e);
    }
  }, [progress, syncKey]);

  useEffect(() => {
    try {
      const payload = {
        activeTab,
        selectedTheorySubarea,
        preReadingSubareaTab,
        checkedReadingBlocks,
        sessionConfig,
        sessionQueue,
        currentIndex,
        selectedOption,
        isAnswerChecked,
        isCorrectAnswer,
        sessionResults,
        examQuestions,
        examAnswers,
        examCurrentIdx,
        examSecondsLeft,
        examSummary,
      };
      localStorage.setItem(ACTIVE_SESSION_STORAGE_KEY, JSON.stringify(payload));
      pushToCloudDebounced(syncKey, progress, payload);
    } catch (e) {
      console.error('Error guardando sesión activa:', e);
    }
  }, [
    activeTab,
    selectedTheorySubarea,
    preReadingSubareaTab,
    checkedReadingBlocks,
    sessionConfig,
    sessionQueue,
    currentIndex,
    selectedOption,
    isAnswerChecked,
    isCorrectAnswer,
    sessionResults,
    examQuestions,
    examAnswers,
    examCurrentIdx,
    examSecondsLeft,
    examSummary,
    syncKey,
    progress,
  ]);

  const orderedAreas = useMemo(() => {
    return CANONICAL_AREAS.map((areaDef) => {
      const areaQs = allQuestions.filter((q) => q.area === areaDef.key);
      const subMap = {};
      areaQs.forEach((q) => {
        if (!subMap[q.subarea]) subMap[q.subarea] = [];
        subMap[q.subarea].push(q);
      });

      const sortedSubareas = Object.entries(subMap)
        .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
        .map(([subareaName, questions]) => ({
          name: subareaName,
          code: subareaName.split(' ')[0],
          cleanTitle: subareaName.replace(/^\d+\.\d+\s*/, ''),
          questions,
        }));

      return {
        ...areaDef,
        totalQuestions: areaQs.length,
        allAreaQuestions: areaQs,
        subareas: sortedSubareas,
      };
    }).filter((a) => a.totalQuestions > 0);
  }, [allQuestions]);

  const subareaMetricsMap = useMemo(() => {
    const metrics = {};
    orderedAreas.forEach((areaObj) => {
      areaObj.subareas.forEach((sub) => {
        let attempts = 0;
        let correct = 0;
        let wrong = 0;
        let masteredCount = 0;
        let pendingMistakes = 0;

        sub.questions.forEach((q) => {
          const st = progress.questionStats[q.id];
          if (st) {
            attempts += st.attempts || 0;
            correct += st.correct || 0;
            wrong += st.wrong || 0;
            if ((st.consecutiveCorrect || 0) >= 1 && (st.correct || 0) > 0) {
              masteredCount += 1;
            }
          }
          if (progress.mistakeIds.includes(q.id)) {
            pendingMistakes += 1;
          }
        });

        const accuracy =
          attempts > 0 ? Math.round((correct / attempts) * 100) : null;
        const masteryPct = Math.round(
          (masteredCount / sub.questions.length) * 100
        );
        const priorityScore =
          pendingMistakes * 35 +
          wrong * 15 +
          (accuracy !== null ? (100 - accuracy) * 0.6 : 25);

        metrics[sub.name] = {
          area: areaObj.key,
          subarea: sub.name,
          cleanTitle: sub.cleanTitle,
          code: sub.code,
          totalQuestions: sub.questions.length,
          attempts,
          correct,
          wrong,
          masteredCount,
          accuracy,
          masteryPct,
          pendingMistakes,
          priorityScore,
          questions: sub.questions,
        };
      });
    });
    return metrics;
  }, [orderedAreas, progress]);

  const weaknessList = useMemo(() => {
    return Object.values(subareaMetricsMap).sort(
      (a, b) => b.priorityScore - a.priorityScore
    );
  }, [subareaMetricsMap]);

  const mistakeQuestions = useMemo(() => {
    return allQuestions.filter((q) => progress.mistakeIds.includes(q.id));
  }, [allQuestions, progress.mistakeIds]);

  const globalStats = useMemo(() => {
    let totalAttempts = 0;
    let totalCorrect = 0;
    let masteredQuestions = 0;

    allQuestions.forEach((q) => {
      const st = progress.questionStats[q.id];
      if (st) {
        totalAttempts += st.attempts || 0;
        totalCorrect += st.correct || 0;
        if ((st.consecutiveCorrect || 0) >= 1 && (st.correct || 0) > 0) {
          masteredQuestions += 1;
        }
      }
    });

    const globalAccuracy =
      totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
      totalAttempts,
      totalCorrect,
      masteredQuestions,
      globalAccuracy,
    };
  }, [allQuestions, progress.questionStats]);

  // Hooks de la vista de Teoría (declarados siempre arriba para respetar las reglas de Hooks)
  const activeTheoryObj = useMemo(() => {
    return (
      THEORY_GUIDE.find((t) => t.subareaName === selectedTheorySubarea) ||
      THEORY_GUIDE[0]
    );
  }, [selectedTheorySubarea]);

  const activeTheoryAreaStyle =
    AREA_STYLE_MAP[activeTheoryObj.area] ||
    AREA_STYLE_MAP['Implementación de Hardware'] ||
    CANONICAL_AREAS[0];

  const subareaStudyQuestions = useMemo(() => {
    return subareaMetricsMap[activeTheoryObj.subareaName]?.questions || [];
  }, [subareaMetricsMap, activeTheoryObj]);

  const normalizedTheoryQuery = theorySearchQuery.trim().toLowerCase();

  const filteredStudyQuestions = useMemo(() => {
    if (!normalizedTheoryQuery) return subareaStudyQuestions;
    return subareaStudyQuestions.filter(
      (q) =>
        q.pregunta.toLowerCase().includes(normalizedTheoryQuery) ||
        q.explicacion.toLowerCase().includes(normalizedTheoryQuery)
    );
  }, [subareaStudyQuestions, normalizedTheoryQuery]);

  const filteredTheorySections = useMemo(() => {
    if (!normalizedTheoryQuery) return activeTheoryObj.sections || [];
    return (activeTheoryObj.sections || [])
      .map((sec) => {
        const titleOrDescMatches =
          sec.title.toLowerCase().includes(normalizedTheoryQuery) ||
          (sec.description || '').toLowerCase().includes(normalizedTheoryQuery);
        if (titleOrDescMatches) return sec;
        const matchingPoints = sec.points.filter((pt) =>
          pt.toLowerCase().includes(normalizedTheoryQuery)
        );
        if (matchingPoints.length > 0) {
          return { ...sec, points: matchingPoints };
        }
        return null;
      })
      .filter(Boolean);
  }, [activeTheoryObj, normalizedTheoryQuery]);

  const matchingOtherSubareas = useMemo(() => {
    if (!normalizedTheoryQuery) return [];
    return THEORY_GUIDE.filter((g) => {
      if (g.subareaName === activeTheoryObj.subareaName) return false;
      const inSummary = g.summary.toLowerCase().includes(normalizedTheoryQuery);
      const inTopics = (g.keyTopics || []).some((t) =>
        t.toLowerCase().includes(normalizedTheoryQuery)
      );
      const inSections = (g.sections || []).some(
        (s) =>
          s.title.toLowerCase().includes(normalizedTheoryQuery) ||
          (s.description || '').toLowerCase().includes(normalizedTheoryQuery) ||
          s.points.some((p) => p.toLowerCase().includes(normalizedTheoryQuery))
      );
      const inFormulas = (g.formulas || []).some(
        (f) =>
          f.label.toLowerCase().includes(normalizedTheoryQuery) ||
          f.code.toLowerCase().includes(normalizedTheoryQuery)
      );
      return inSummary || inTopics || inSections || inFormulas;
    });
  }, [activeTheoryObj, normalizedTheoryQuery]);

  const filteredAreas = useMemo(() => {
    return selectedAreaFilter === 'ALL'
      ? orderedAreas
      : orderedAreas.filter((a) => a.key === selectedAreaFilter);
  }, [orderedAreas, selectedAreaFilter]);

  function openTheoryForSubarea(subareaName) {
    setSelectedTheorySubarea(subareaName);
    setTheorySearchQuery('');
    setActiveTheorySectionIdx(0);
    setRevealedPointsMap({});
    setActiveTab('theory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function togglePointReveal(pointKey) {
    setRevealedPointsMap((prev) => ({
      ...prev,
      [pointKey]: !prev[pointKey],
    }));
  }

  function toggleCatalogQuestionReveal(questionId) {
    setRevealedCatalogQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }

  function handleCopyFormula(codeText, idx) {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(codeText);
    }
    setCopiedFormulaIdx(idx);
    setTimeout(() => {
      setCopiedFormulaIdx((prev) => (prev === idx ? null : prev));
    }, 1800);
  }

  function scorePoolForUser(pool) {
    return pool
      .map((q) => {
        const st = progress.questionStats[q.id] || {
          attempts: 0,
          correct: 0,
          wrong: 0,
          consecutiveCorrect: 0,
        };
        const isMistake = progress.mistakeIds.includes(q.id);
        const subSt = progress.subareaStats[q.subarea] || {
          attempts: 0,
          correct: 0,
          wrong: 0,
        };
        const subAccuracy =
          subSt.attempts > 0 ? subSt.correct / subSt.attempts : 0.5;

        let weight = 10;
        if (isMistake) weight += 100;
        if (st.wrong > st.correct) weight += 50;
        if (st.attempts === 0) weight += 30;
        weight += Math.round((1 - subAccuracy) * 40);
        weight -= (st.consecutiveCorrect || 0) * 12;
        weight += Math.random() * 15;

        return { question: q, weight };
      })
      .sort((a, b) => b.weight - a.weight)
      .map((item) => item.question);
  }

  function startAdaptiveLesson({
    title,
    subtitle,
    mode = 'adaptive',
    pool = allQuestions,
    count = progress.lessonSize,
    skipPreReading = false,
  }) {
    if (!pool || pool.length === 0) return;

    const targetCount = Math.max(MIN_QUESTIONS_PER_LESSON, count);
    let prioritized = scorePoolForUser(pool);

    if (prioritized.length < targetCount) {
      const existingIds = new Set(prioritized.map((q) => q.id));
      const fallbackQuestions = scorePoolForUser(
        allQuestions.filter((q) => !existingIds.has(q.id))
      );
      prioritized = [...prioritized, ...fallbackQuestions];
    }

    const selected = prioritized
      .slice(0, Math.min(targetCount, prioritized.length))
      .map((q) => prepareQuestionWithOrderedLabels(q, false));

    const firstSubarea =
      selected[0]?.subarea || '1.1 Circuitos eléctricos y electrónica';

    setSessionConfig({ title, subtitle, mode });
    setSessionQueue(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrectAnswer(false);
    setShowReadingText(true);
    setShowTheoryDrawerInQuiz(false);
    setPreReadingSubareaTab(firstSubarea);
    setCheckedReadingBlocks({});
    setSessionResults({
      correctFirstTry: 0,
      totalAnswered: selected.length,
      mistakesMade: [],
      repairedMistakes: [],
    });

    setActiveTab(skipPreReading ? 'session' : 'pre_session_reading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleCheckAnswer = useCallback(() => {
    if (!selectedOption || isAnswerChecked || sessionQueue.length === 0) return;
    const currentQ = sessionQueue[currentIndex];
    const correct = selectedOption === currentQ.respuesta_correcta;

    setIsAnswerChecked(true);
    setIsCorrectAnswer(correct);

    setProgress((prev) => {
      const prevQ = prev.questionStats[currentQ.id] || {
        attempts: 0,
        correct: 0,
        wrong: 0,
        consecutiveCorrect: 0,
      };
      const prevSub = prev.subareaStats[currentQ.subarea] || {
        area: currentQ.area,
        attempts: 0,
        correct: 0,
        wrong: 0,
      };

      const newConsecutive = correct ? (prevQ.consecutiveCorrect || 0) + 1 : 0;

      let updatedMistakes = [...prev.mistakeIds];
      if (!correct && !updatedMistakes.includes(currentQ.id)) {
        updatedMistakes.push(currentQ.id);
      } else if (correct && updatedMistakes.includes(currentQ.id)) {
        updatedMistakes = updatedMistakes.filter((id) => id !== currentQ.id);
      }

      return {
        ...prev,
        questionStats: {
          ...prev.questionStats,
          [currentQ.id]: {
            attempts: prevQ.attempts + 1,
            correct: prevQ.correct + (correct ? 1 : 0),
            wrong: prevQ.wrong + (correct ? 0 : 1),
            consecutiveCorrect: newConsecutive,
            lastSeen: Date.now(),
          },
        },
        subareaStats: {
          ...prev.subareaStats,
          [currentQ.subarea]: {
            area: currentQ.area,
            attempts: prevSub.attempts + 1,
            correct: prevSub.correct + (correct ? 1 : 0),
            wrong: prevSub.wrong + (correct ? 0 : 1),
          },
        },
        mistakeIds: updatedMistakes,
      };
    });

    setSessionResults((prev) => {
      const wasMistakeBefore = progress.mistakeIds.includes(currentQ.id);
      return {
        ...prev,
        correctFirstTry:
          correct && !currentQ.isRetryInSession
            ? prev.correctFirstTry + 1
            : prev.correctFirstTry,
        mistakesMade:
          !correct && !prev.mistakesMade.some((m) => m.id === currentQ.id)
            ? [...prev.mistakesMade, currentQ]
            : prev.mistakesMade,
        repairedMistakes:
          correct &&
          wasMistakeBefore &&
          !prev.repairedMistakes.includes(currentQ.id)
            ? [...prev.repairedMistakes, currentQ.id]
            : prev.repairedMistakes,
      };
    });

    if (!correct) {
      setSessionQueue((prevQueue) => [
        ...prevQueue,
        prepareQuestionWithOrderedLabels(currentQ, true),
      ]);
    }
  }, [selectedOption, isAnswerChecked, sessionQueue, currentIndex, progress.mistakeIds]);

  const handleNextQuestion = useCallback(() => {
    setShowTheoryDrawerInQuiz(false);
    if (currentIndex + 1 < sessionQueue.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrectAnswer(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
      setSessionQueue([]);
      setSessionConfig(null);
      setActiveTab('session_summary');
    }
  }, [currentIndex, sessionQueue.length]);

  useEffect(() => {
    if (activeTab !== 'session' || sessionQueue.length === 0) return;
    const currentQ = sessionQueue[currentIndex];
    if (!currentQ) return;

    function onKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
      const key = e.key.toUpperCase();

      if (!isAnswerChecked) {
        const keyMap = {
          '1': 'A',
          '2': 'B',
          '3': 'C',
          '4': 'D',
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D',
        };
        const mappedLetter = keyMap[key];
        if (mappedLetter && currentQ.opciones.some((o) => o.id === mappedLetter)) {
          e.preventDefault();
          setSelectedOption(mappedLetter);
          return;
        }
        if (e.key === 'Enter' && selectedOption) {
          e.preventDefault();
          handleCheckAnswer();
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNextQuestion();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    activeTab,
    sessionQueue,
    currentIndex,
    isAnswerChecked,
    selectedOption,
    handleCheckAnswer,
    handleNextQuestion,
  ]);

  function discardActiveSession() {
    setSessionQueue([]);
    setSessionConfig(null);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  }

  function startSimulacro(numQuestions = 70) {
    const shuffled = shuffleArray(allQuestions).slice(
      0,
      Math.min(numQuestions, allQuestions.length)
    );
    const prepared = shuffled.map((q) => prepareQuestionWithOrderedLabels(q, false));

    setExamQuestions(prepared);
    setExamAnswers({});
    setExamCurrentIdx(0);
    setExamSecondsLeft(prepared.length * 90);
    setActiveTab('simulacro_active');
  }

  const handleFinishSimulacro = useCallback(() => {
    if (examQuestions.length === 0) return;
    let totalCorrect = 0;
    const byArea = {};
    const newMistakeIds = new Set(progress.mistakeIds);
    const newQuestionStats = { ...progress.questionStats };
    const newSubareaStats = { ...progress.subareaStats };

    examQuestions.forEach((q) => {
      const userAns = examAnswers[q.id] || null;
      const isRight = userAns === q.respuesta_correcta;
      if (isRight) totalCorrect += 1;

      if (!byArea[q.area]) {
        byArea[q.area] = { total: 0, correct: 0 };
      }
      byArea[q.area].total += 1;
      if (isRight) byArea[q.area].correct += 1;

      const prevQ = newQuestionStats[q.id] || {
        attempts: 0,
        correct: 0,
        wrong: 0,
        consecutiveCorrect: 0,
      };
      newQuestionStats[q.id] = {
        attempts: prevQ.attempts + 1,
        correct: prevQ.correct + (isRight ? 1 : 0),
        wrong: prevQ.wrong + (isRight ? 0 : 1),
        consecutiveCorrect: isRight ? (prevQ.consecutiveCorrect || 0) + 1 : 0,
        lastSeen: Date.now(),
      };

      const prevSub = newSubareaStats[q.subarea] || {
        area: q.area,
        attempts: 0,
        correct: 0,
        wrong: 0,
      };
      newSubareaStats[q.subarea] = {
        area: q.area,
        attempts: prevSub.attempts + 1,
        correct: prevSub.correct + (isRight ? 1 : 0),
        wrong: prevSub.wrong + (isRight ? 0 : 1),
      };

      if (!isRight) {
        newMistakeIds.add(q.id);
      } else {
        newMistakeIds.delete(q.id);
      }
    });

    const pct = Math.round((totalCorrect / examQuestions.length) * 100);
    let dictamen = 'Aún no satisfactorio';
    if (pct >= 85) dictamen = 'Desempeño Sobresaliente (TDS)';
    else if (pct >= 70) dictamen = 'Desempeño Satisfactorio (DS)';

    const summaryObj = {
      id: Date.now(),
      date: new Date().toLocaleString('es-MX'),
      total: examQuestions.length,
      correct: totalCorrect,
      pct,
      dictamen,
      byArea,
    };

    setProgress((prev) => ({
      ...prev,
      questionStats: newQuestionStats,
      subareaStats: newSubareaStats,
      mistakeIds: Array.from(newMistakeIds),
      examHistory: [summaryObj, ...(prev.examHistory || []).slice(0, 9)],
    }));

    setExamSummary(summaryObj);
    setExamQuestions([]);
    if (pct >= 70) {
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch {}
    }
    setActiveTab('simulacro_summary');
  }, [examQuestions, examAnswers, progress]);

  useEffect(() => {
    if (activeTab !== 'simulacro_active') return;
    if (examSecondsLeft <= 0) {
      handleFinishSimulacro();
      return;
    }
    const timer = setInterval(() => {
      setExamSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTab, examSecondsLeft, handleFinishSimulacro]);

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // =========================================================================
  // 2. VISTAS DE RENDERIZADO
  // =========================================================================

  // VISTA 0: FASE 1 — LECTURA PREVIA DE FUNDAMENTOS ANTES DE LAS PREGUNTAS
  if (activeTab === 'pre_session_reading' && sessionQueue.length > 0) {
    const uniqueSubareasInSession = Array.from(
      new Set(sessionQueue.map((q) => q.subarea))
    ).sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));

    const activeReadingSubarea =
      uniqueSubareasInSession.includes(preReadingSubareaTab)
        ? preReadingSubareaTab
        : uniqueSubareasInSession[0];

    const readingGuide =
      THEORY_GUIDE.find((t) => t.subareaName === activeReadingSubarea) ||
      THEORY_GUIDE[0];

    const readingAreaStyle =
      AREA_STYLE_MAP[readingGuide.area] ||
      AREA_STYLE_MAP['Implementación de Software'];

    const totalSectionsCount = readingGuide.sections?.length || 0;
    const completedSectionsCount = (readingGuide.sections || []).filter(
      (_, idx) => checkedReadingBlocks[`${readingGuide.subareaCode}_${idx}`]
    ).length;

    return (
      <div className="min-h-screen bg-[#F8F5EE] text-stone-900 flex flex-col">
        {/* Barra Superior de la Fase de Lectura Previa */}
        <header className="border-b border-[#E5DEC9] bg-white/95 backdrop-blur sticky top-0 z-20 shadow-sm">
          <div className="max-w-5xl w-full mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('home')}
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 px-3 py-1.5 rounded-xl bg-[#F3EFE6] hover:bg-[#E7E0D2] text-xs font-bold transition"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>Menú</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    Paso 1 de 2: Lectura Previa
                  </span>
                  <span className="text-xs text-stone-500 hidden sm:inline">
                    → Paso 2: Comprobación ({sessionQueue.length} reactivos)
                  </span>
                </div>
                <h1 className="text-sm sm:text-base font-extrabold text-stone-900 mt-0.5">
                  {sessionConfig?.title || readingGuide.subareaName}
                </h1>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveTab('session');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md shadow-[#D95D39]/20"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Ir al Cuestionario ({sessionQueue.length} preg.)</span>
            </button>
          </div>
        </header>

        {/* Contenido de Estudio Previo al Cuestionario */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 space-y-6">
          {uniqueSubareasInSession.length > 1 && (
            <div className="bg-white border border-[#E5DEC9] rounded-2xl p-4 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-2.5">
                Subáreas incluidas en esta sesión ({uniqueSubareasInSession.length}) — Selecciona para leer sus fundamentos:
              </div>
              <div className="flex flex-wrap gap-2">
                {uniqueSubareasInSession.map((subName) => {
                  const active = subName === activeReadingSubarea;
                  return (
                    <button
                      key={subName}
                      onClick={() => setPreReadingSubareaTab(subName)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                        active
                          ? 'bg-stone-900 text-white shadow-sm'
                          : 'bg-[#FAF7F2] text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                      }`}
                    >
                      {subName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Resumen Ejecutivo y Mapa de Conceptos a Evaluar */}
          <div className="bg-white border border-[#E5DEC9] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span
                  className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md border mb-2 ${readingAreaStyle.badge}`}
                >
                  {readingGuide.area}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  {readingGuide.subareaName}
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  {readingGuide.summary}
                </p>
              </div>

              <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl px-4 py-3 text-right shrink-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Lectura Completada
                </div>
                <div className="text-lg font-black text-teal-700">
                  {completedSectionsCount} / {totalSectionsCount} bloques
                </div>
                <button
                  onClick={() => {
                    setTheoryRecallMode((v) => !v);
                    setRevealedPointsMap({});
                  }}
                  className={`mt-2 px-3 py-1 rounded-lg text-[11px] font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                    theoryRecallMode
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : 'bg-white text-stone-700 border border-[#D8D0C0] hover:bg-[#EFEAE0]'
                  }`}
                >
                  {theoryRecallMode ? (
                    <Eye className="w-3.5 h-3.5" />
                  ) : (
                    <EyeOff className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {theoryRecallMode ? 'Autoevaluación ON' : 'Modo Flashcards'}
                  </span>
                </button>
              </div>
            </div>

            {readingGuide.keyTopics?.length > 0 && (
              <div className="pt-3 border-t border-[#EFEAE0]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 mb-2">
                  Conceptos que comprobarás en las preguntas de esta lección:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {readingGuide.keyTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-stone-800 border border-[#E5DEC9]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bloques de Lectura con Casilla de "Tema Comprendido" */}
          <div className="space-y-4">
            {(readingGuide.sections || []).map((sec, idx) => {
              const blockKey = `${readingGuide.subareaCode}_${idx}`;
              const isChecked = Boolean(checkedReadingBlocks[blockKey]);

              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl p-6 transition shadow-sm ${
                    isChecked
                      ? 'border-teal-500 bg-teal-50/30'
                      : 'border-[#E5DEC9]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-stone-900 flex items-center gap-2">
                      <span
                        className={`w-2 h-5 rounded-full shrink-0 ${readingAreaStyle.progressBar}`}
                      />
                      {sec.title}
                    </h3>

                    <button
                      onClick={() =>
                        setCheckedReadingBlocks((prev) => ({
                          ...prev,
                          [blockKey]: !prev[blockKey],
                        }))
                      }
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                        isChecked
                          ? 'bg-teal-700 text-white'
                          : 'bg-[#FAF7F2] text-stone-700 hover:bg-[#EFEAE0] border border-[#D8D0C0]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isChecked ? 'Bloque comprendido' : 'Marcar como leído'}</span>
                    </button>
                  </div>

                  {sec.description && (
                    <p className="text-xs sm:text-sm text-stone-700 mb-4 leading-relaxed bg-[#FAF7F2] border-l-4 border-amber-500 pl-3.5 py-2.5 rounded-r-lg">
                      {sec.description}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {sec.points.map((pt, pIdx) => {
                      const [boldPart, ...restParts] = pt.split(':');
                      const hasColon = restParts.length > 0;
                      return (
                        <li
                          key={pIdx}
                          className="bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl p-4 text-xs sm:text-sm text-stone-700 leading-relaxed"
                        >
                          {hasColon ? (
                            <>
                              <strong className="text-stone-950 font-extrabold">
                                {boldPart}:
                              </strong>
                              {restParts.join(':')}
                            </>
                          ) : (
                            pt
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Tablas Comparativas */}
          {readingGuide.tables?.length > 0 && (
            <div className="space-y-4">
              {readingGuide.tables.map((tbl, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-white border border-[#E5DEC9] rounded-2xl p-6 overflow-hidden shadow-sm"
                >
                  <h3 className="text-base font-extrabold text-stone-900 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span>{tbl.title}</span>
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-[#E5DEC9]">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#F3EFE6] border-b border-[#E5DEC9] text-stone-900">
                          {tbl.headers.map((h, hIdx) => (
                            <th
                              key={hIdx}
                              className="py-3 px-4 font-extrabold uppercase tracking-wider text-[11px] text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EFEAE0]">
                        {tbl.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="bg-white hover:bg-[#FAF7F2] transition"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 leading-relaxed ${
                                  cIdx === 0
                                    ? 'font-bold text-stone-900 whitespace-nowrap'
                                    : 'text-stone-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fórmulas y Comandos */}
          {readingGuide.formulas?.length > 0 && (
            <div className="bg-white border border-[#E5DEC9] rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-extrabold text-stone-900 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-700" />
                Fórmulas, Comandos y Reglas Exactas para el Cuestionario
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {readingGuide.formulas.map((f, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs sm:text-sm font-bold text-stone-800">
                      {f.label}
                    </span>
                    <code className="text-xs sm:text-sm font-mono font-bold text-teal-900 bg-teal-100/80 border border-teal-300 px-3 py-1.5 rounded-lg">
                      {f.code}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips de Examen */}
          {readingGuide.examTips?.length > 0 && (
            <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                <Lightbulb className="w-4 h-4 text-amber-700" />
                Puntos Clave que Preguntará el Cuestionario
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                {readingGuide.examTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-amber-700">→</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Botón Final de Paso a la Comprobación de Conocimientos */}
          <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-white border-2 border-[#D95D39]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#D95D39] mb-1">
                Paso 2 de 2 • Comprobación de Conocimientos Adquiridos
              </div>
              <h3 className="text-lg font-extrabold text-stone-900">
                ¿Listo para poner a prueba lo que acabas de leer?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Responderás {sessionQueue.length} reactivos tipo EGEL con retroalimentación inmediata y acceso al apunte en vivo.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('session');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto shrink-0 px-6 py-4 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-[#D95D39]/25"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>COMENZAR PREGUNTAS ({sessionQueue.length})</span>
            </button>
          </div>
        </main>
      </div>
    );
  }

  // VISTA 1: Sesión de Estudio Intensiva (Con Botón de Consulta Teórica en Vivo)
  if (activeTab === 'session' && sessionQueue.length > 0) {
    const currentQ = sessionQueue[currentIndex] || sessionQueue[0];
    const progressPct = Math.round(((currentIndex + 1) / sessionQueue.length) * 100);
    const areaStyle =
      AREA_STYLE_MAP[currentQ.area] || AREA_STYLE_MAP['Implementación de Software'];
    const currentTheoryGuide =
      THEORY_GUIDE.find((t) => t.subareaName === currentQ.subarea) ||
      THEORY_GUIDE[0];

    return (
      <div className="min-h-screen bg-[#F8F5EE] text-stone-900 flex flex-col">
        {/* Barra Superior */}
        <header className="border-b border-[#E5DEC9] bg-white/95 backdrop-blur sticky top-0 z-20 shadow-sm">
          <div className="max-w-3xl w-full mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('home')}
              title="Pausar y volver al menú (tu progreso queda guardado)"
              className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#F3EFE6] hover:bg-[#E7E0D2] text-xs font-bold transition shrink-0"
            >
              <Pause className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pausar</span>
            </button>

            <button
              onClick={() => {
                setPreReadingSubareaTab(currentQ.subarea);
                setActiveTab('pre_session_reading');
              }}
              title="Volver a la pantalla completa de Lectura Previa"
              className="flex items-center gap-1.5 text-teal-900 px-2.5 sm:px-3 py-1.5 rounded-xl bg-teal-100 hover:bg-teal-200/80 border border-teal-300 text-xs font-bold transition shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lectura</span>
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-xs mb-1 gap-2">
                <span className="font-bold text-stone-700 truncate min-w-0 text-[11px] sm:text-xs">
                  {sessionConfig?.title || currentQ.subarea}
                </span>
                <span className="font-mono font-extrabold text-[#D95D39] shrink-0 text-[11px] sm:text-xs">
                  <span className="hidden xs:inline sm:inline">Pregunta </span>{currentIndex + 1}/{sessionQueue.length}
                </span>
              </div>
              <div className="bg-[#E8E2D5] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#D95D39] to-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(3, progressPct)}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => setShowTheoryDrawerInQuiz((v) => !v)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200/80 border border-amber-300 text-amber-900 text-xs font-bold transition shrink-0"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Apunte</span>
            </button>
          </div>
        </header>

        {/* Contenedor Principal */}
        <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 sm:py-6 flex flex-col pb-6 sm:pb-8">
          <div>
            {/* Panel Desplegable de Teoría y Fórmulas durante el Quiz */}
            {showTheoryDrawerInQuiz && currentTheoryGuide && (
              <div className="mb-6 bg-white border-2 border-amber-400 rounded-2xl p-4 sm:p-5 shadow-xl max-h-[65vh] overflow-y-auto space-y-4">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E5DEC9]">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                      Enciclopedia Teórica en Vivo • {currentTheoryGuide.subareaName}
                    </span>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {currentTheoryGuide.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowTheoryDrawerInQuiz(false)}
                    className="p-1.5 rounded-lg bg-[#F3EFE6] hover:bg-[#E5DEC9] text-stone-700 shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {currentTheoryGuide.formulas?.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
                      Fórmulas, Comandos y Reglas Exactas:
                    </div>
                    {currentTheoryGuide.formulas.map((f, i) => (
                      <div
                        key={i}
                        className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-lg px-3 py-2 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                      >
                        <span className="text-stone-800 font-bold">{f.label}:</span>
                        <code className="text-teal-900 font-mono font-semibold break-all text-[11px] sm:text-xs">{f.code}</code>
                      </div>
                    ))}
                  </div>
                )}

                {currentTheoryGuide.sections?.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-800">
                      Fundamentos del Temario ({currentTheoryGuide.sections.length} bloques):
                    </div>
                    {currentTheoryGuide.sections.map((sec, sIdx) => (
                      <details
                        key={sIdx}
                        className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-3 group"
                      >
                        <summary className="text-xs font-bold text-stone-900 cursor-pointer list-none flex items-center justify-between">
                          <span>{sec.title}</span>
                          <ChevronDown className="w-4 h-4 text-stone-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        {sec.description && (
                          <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                            {sec.description}
                          </p>
                        )}
                        <ul className="mt-2 space-y-1.5 text-xs text-stone-700 leading-relaxed border-t border-[#E5DEC9] pt-2">
                          {sec.points.map((pt, pIdx) => (
                            <li key={pIdx}>• {pt}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}

                {currentTheoryGuide.examTips?.length > 0 && (
                  <div className="bg-amber-50 border border-amber-300 rounded-xl p-3">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 mb-1.5">
                      Tips CENEVAL para no fallar:
                    </div>
                    <ul className="space-y-1 text-xs text-amber-950">
                      {currentTheoryGuide.examTips.map((tip, tIdx) => (
                        <li key={tIdx}>→ {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-[11px] text-stone-500 pt-1 border-t border-[#E5DEC9] break-words">
                  <strong className="text-stone-700">Fuentes: </strong>
                  {currentTheoryGuide.sources.join(' • ')}
                </div>
              </div>
            )}

            {/* Metadatos Limpios */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-lg border ${areaStyle.badge}`}
                >
                  {currentQ.area}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-white text-stone-700 border border-[#E5DEC9]">
                  {currentQ.subarea}
                </span>
                {currentQ.isRetryInSession && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                    <RotateCcw className="w-3.5 h-3.5" />
                    Repaso de error
                  </span>
                )}
              </div>

              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                <Keyboard className="w-3.5 h-3.5" />
                Teclas A-D y Enter
              </span>
            </div>

            {/* Visor de Lectura para Comprensión Lectora */}
            {currentQ.lecturaTitulo &&
              Array.isArray(currentQ.lecturaParrafos) &&
              currentQ.lecturaParrafos.length > 0 && (
                <div className="mb-5 bg-white border border-rose-300 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setShowReadingText((v) => !v)}
                    className="w-full px-4 py-3 bg-rose-50 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-4 h-4 text-rose-700 shrink-0" />
                      <span className="text-xs sm:text-sm font-extrabold text-rose-950 truncate">
                        Lectura: {currentQ.lecturaTitulo}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-rose-800 flex items-center gap-1 shrink-0">
                      {showReadingText ? (
                        <>
                          Ocultar <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Leer texto <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </button>
                  {showReadingText && (
                    <div className="p-4 max-h-60 overflow-y-auto space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-rose-200">
                      {currentQ.lecturaParrafos.map((parrafo, idxP) => (
                        <p key={idxP} className="break-words">
                          <strong className="text-rose-700 mr-1">
                            [{idxP + 1}]
                          </strong>
                          {parrafo}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

            {/* Enunciado */}
            <div className="bg-white border border-[#E5DEC9] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-5 shadow-sm">
              <h2 className="text-base sm:text-lg font-extrabold text-stone-900 leading-relaxed break-words">
                {formatReadableText(currentQ.pregunta)}
              </h2>
            </div>

            {/* Opciones en orden A, B, C, (D) */}
            <div className="space-y-3">
              {currentQ.opciones.map((opcion) => {
                const isSelected = selectedOption === opcion.id;
                const isCorrectOption = opcion.id === currentQ.respuesta_correcta;

                let cardStyle =
                  'bg-white border-[#E5DEC9] hover:border-stone-400 text-stone-800 shadow-sm';
                let badgeStyle = 'bg-[#F3EFE6] text-stone-700 border-[#D8D0C0]';

                if (!isAnswerChecked && isSelected) {
                  cardStyle =
                    'bg-amber-50/90 border-[#D95D39] text-stone-950 shadow-md';
                  badgeStyle = 'bg-[#D95D39] text-white font-extrabold border-[#D95D39]';
                } else if (isAnswerChecked) {
                  if (isCorrectOption) {
                    cardStyle =
                      'bg-teal-50 border-teal-600 text-teal-950 shadow-md';
                    badgeStyle =
                      'bg-teal-700 text-white font-extrabold border-teal-700';
                  } else if (isSelected && !isCorrectOption) {
                    cardStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                    badgeStyle = 'bg-rose-600 text-white font-extrabold border-rose-600';
                  } else {
                    cardStyle =
                      'bg-white/60 border-[#E5DEC9] text-stone-400';
                  }
                }

                return (
                  <button
                    key={opcion.id}
                    disabled={isAnswerChecked}
                    onClick={() => setSelectedOption(opcion.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-center gap-3 sm:gap-3.5 ${cardStyle}`}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center text-xs sm:text-sm font-mono font-bold shrink-0 transition ${badgeStyle}`}
                    >
                      {opcion.id}
                    </span>
                    <span className="text-xs sm:text-base font-medium leading-snug flex-1 min-w-0 break-words">
                      {formatReadableText(opcion.texto)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>

        {/* Barra Inferior Fija de Comprobación y Siguiente Pregunta */}
        <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E5DEC9] px-4 py-3 sm:py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <div className="max-w-3xl mx-auto w-full">
            {!isAnswerChecked ? (
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleCheckAnswer}
                className={`w-full py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base tracking-wide transition shadow-md active:scale-[0.99] ${
                  selectedOption
                    ? 'bg-[#D95D39] hover:bg-[#C04D2B] text-white cursor-pointer shadow-[#D95D39]/25'
                    : 'bg-[#E5DEC9] text-stone-500 cursor-not-allowed shadow-none'
                }`}
              >
                {selectedOption ? 'COMPROBAR RESPUESTA' : 'SELECCIONA UNA RESPUESTA'}
              </button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {isCorrectAnswer ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <h3 className="font-extrabold text-xs sm:text-base truncate">
                      {isCorrectAnswer
                        ? '¡Respuesta Correcta!'
                        : `Incorrecto • La opción correcta es la ${currentQ.respuesta_correcta}`}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowTheoryDrawerInQuiz(true)}
                    className="text-xs font-extrabold underline text-stone-800 hover:text-stone-950 shrink-0"
                  >
                    Ver apunte
                  </button>
                </div>

                <div className="bg-[#FAF7F2] rounded-xl p-2.5 sm:p-3.5 text-xs sm:text-sm text-stone-800 leading-relaxed border border-[#E5DEC9] max-h-24 sm:max-h-36 overflow-y-auto">
                  <span className="font-extrabold text-[#D95D39] mr-1.5">
                    Justificación Técnica:
                  </span>
                  {formatReadableText(currentQ.explicacion)}
                </div>

                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className={`w-full py-3 sm:py-3.5 rounded-xl font-extrabold text-sm text-white flex items-center justify-center gap-2 transition shadow-md active:scale-[0.99] ${
                    isCorrectAnswer
                      ? 'bg-teal-700 hover:bg-teal-800'
                      : 'bg-rose-600 hover:bg-rose-700'
                  }`}
                >
                  <span>SIGUIENTE PREGUNTA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // VISTA 2: Resumen de Lección Completada
  if (activeTab === 'session_summary') {
    const accuracyFirstTry =
      sessionResults.totalAnswered > 0
        ? Math.round(
            (sessionResults.correctFirstTry / sessionResults.totalAnswered) * 100
          )
        : 100;

    return (
      <div className="min-h-screen bg-[#F8F5EE] text-stone-900 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white border border-[#E5DEC9] rounded-3xl p-7 text-center shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-amber-700" />
          </div>

          <h2 className="text-2xl font-extrabold text-stone-900 mb-1">
            ¡Sesión Completada!
          </h2>
          <p className="text-stone-600 text-sm mb-6">
            Completaste los {sessionResults.totalAnswered} reactivos de la sesión y
            reforzaste tus errores.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
            <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-2xl p-2.5 sm:p-3.5">
              <div className="text-[10px] sm:text-[11px] text-stone-500 font-bold mb-1">
                EVALUADOS
              </div>
              <div className="text-xl sm:text-2xl font-black text-stone-900">
                {sessionResults.totalAnswered}
              </div>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-2xl p-2.5 sm:p-3.5">
              <div className="text-[10px] sm:text-[11px] text-stone-500 font-bold mb-1">
                ACIERTOS
              </div>
              <div className="text-xl sm:text-2xl font-black text-stone-900">
                {sessionResults.correctFirstTry}/{sessionResults.totalAnswered}
              </div>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-2xl p-2.5 sm:p-3.5">
              <div className="text-[10px] sm:text-[11px] text-stone-500 font-bold mb-1">
                PRECISIÓN
              </div>
              <div className="text-xl sm:text-2xl font-black text-teal-700">
                {accuracyFirstTry}%
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setActiveTab('home')}
              className="flex-1 py-3.5 rounded-xl bg-[#F3EFE6] hover:bg-[#E5DEC9] font-bold text-sm text-stone-800 transition"
            >
              Volver al Panel Principal
            </button>
            <button
              onClick={() =>
                startAdaptiveLesson({
                  title: 'Entrenamiento Adaptativo Intensivo',
                  subtitle: 'Priorizando tus subáreas débiles',
                  mode: 'adaptive',
                  pool: allQuestions,
                  count: progress.lessonSize,
                })
              }
              className="flex-1 py-3.5 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] font-bold text-sm text-white transition"
            >
              Nueva Sesión ({progress.lessonSize} preg.)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // VISTA 3: Simulacro CENEVAL EGEL Activo
  if (activeTab === 'simulacro_active' && examQuestions.length > 0) {
    const q = examQuestions[examCurrentIdx] || examQuestions[0];
    const answeredCount = Object.keys(examAnswers).length;

    return (
      <div className="min-h-screen bg-[#F8F5EE] text-stone-900 flex flex-col">
        <header className="bg-white border-b border-[#E5DEC9] px-3 sm:px-4 py-2.5 sm:py-3.5 sticky top-0 z-20 shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button
                onClick={() => setActiveTab('home')}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#F3EFE6] hover:bg-[#E5DEC9] text-xs font-bold text-stone-700 shrink-0"
              >
                Pausar
              </button>
              <span className="px-2 sm:px-3 py-1 rounded-lg bg-indigo-100 border border-indigo-300 text-indigo-900 font-bold text-[11px] sm:text-xs shrink-0">
                SIMULACRO
              </span>
              <span className="text-xs text-stone-600 truncate">
                <span className="hidden sm:inline">Respondidas: </span>
                <strong className="text-stone-900">{answeredCount}</strong>/{examQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border ${
                  examSecondsLeft < 120
                    ? 'bg-rose-100 border-rose-400 text-rose-800 animate-pulse'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                {formatTime(examSecondsLeft)}
              </div>

              <button
                onClick={handleFinishSimulacro}
                className="px-3 sm:px-4 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition shrink-0"
              >
                <span className="hidden sm:inline">Entregar Examen</span>
                <span className="sm:hidden">Entregar</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-5xl w-full mx-auto flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 p-3 sm:p-6">
          <div className="lg:col-span-3 flex flex-col bg-white border border-[#E5DEC9] rounded-2xl p-4 sm:p-6 shadow-sm">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900">
                  Reactivo {examCurrentIdx + 1} de {examQuestions.length}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF7F2] text-stone-700 border border-[#E5DEC9]">
                  {q.area} • {q.subarea}
                </span>
              </div>

              {q.lecturaTitulo &&
                Array.isArray(q.lecturaParrafos) &&
                q.lecturaParrafos.length > 0 && (
                  <div className="mb-4 bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 max-h-52 overflow-y-auto text-xs text-stone-800 space-y-2">
                    <div className="font-extrabold text-rose-900">
                      Lectura: {q.lecturaTitulo}
                    </div>
                    {q.lecturaParrafos.map((p, i) => (
                      <p key={i} className="break-words">
                        <strong className="text-rose-700">[{i + 1}] </strong>
                        {p}
                      </p>
                    ))}
                  </div>
                )}

              <p className="text-base sm:text-lg font-extrabold text-stone-900 leading-relaxed mb-5 sm:mb-6 break-words">
                {formatReadableText(q.pregunta)}
              </p>

              <div className="space-y-3">
                {q.opciones.map((op) => {
                  const selected = examAnswers[q.id] === op.id;
                  return (
                    <button
                      key={op.id}
                      onClick={() =>
                        setExamAnswers((prev) => ({ ...prev, [q.id]: op.id }))
                      }
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition flex items-center gap-3 sm:gap-3.5 ${
                        selected
                          ? 'bg-indigo-50 border-indigo-600 text-stone-950 font-medium shadow-sm'
                          : 'bg-[#FAF7F2] border-[#E5DEC9] hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                          selected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-stone-700 border border-[#D8D0C0]'
                        }`}
                      >
                        {op.id}
                      </span>
                      <span className="text-xs sm:text-base min-w-0 break-words flex-1">{formatReadableText(op.texto)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#E5DEC9]">
              <button
                disabled={examCurrentIdx === 0}
                onClick={() => {
                  setExamCurrentIdx((i) => Math.max(0, i - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-[#F3EFE6] hover:bg-[#E5DEC9] disabled:opacity-40 text-sm font-bold text-stone-800"
              >
                Anterior
              </button>

              {examCurrentIdx + 1 < examQuestions.length ? (
                <button
                  onClick={() => {
                    setExamCurrentIdx((i) => i + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={handleFinishSimulacro}
                  className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm"
                >
                  Finalizar y Calificar
                </button>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#E5DEC9] rounded-2xl p-4 h-fit max-h-[60vh] sm:max-h-[75vh] overflow-y-auto shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-3">
              Navegación ({examQuestions.length})
            </h3>
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 sm:gap-2">
              {examQuestions.map((item, idx) => {
                const isDone = Boolean(examAnswers[item.id]);
                const isCurr = idx === examCurrentIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setExamCurrentIdx(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`h-8 sm:h-9 rounded-lg text-xs font-bold border transition ${
                      isCurr
                        ? 'border-indigo-700 bg-indigo-600 text-white'
                        : isDone
                        ? 'border-teal-400 bg-teal-100 text-teal-900'
                        : 'border-[#E5DEC9] bg-[#FAF7F2] text-stone-600 hover:bg-[#EFEAE0]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // VISTA 4: Resultados del Simulacro CENEVAL EGEL
  if (activeTab === 'simulacro_summary' && examSummary) {
    return (
      <div className="min-h-screen bg-[#F8F5EE] text-stone-900 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E5DEC9] rounded-3xl p-6 sm:p-8 mb-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DEC9]">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                  Resultado del Simulacro EGEL
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                  {examSummary.dictamen}
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Los reactivos fallados se agregaron automáticamente a tu lista de
                  refuerzo prioritario.
                </p>
              </div>
              <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-2xl px-6 py-4 text-center">
                <div className="text-3xl font-black text-teal-700">
                  {examSummary.pct}%
                </div>
                <div className="text-xs text-stone-600 font-semibold">
                  {examSummary.correct} / {examSummary.total} aciertos
                </div>
              </div>
            </div>

            <h3 className="text-xs font-extrabold text-stone-500 uppercase tracking-wider mt-6 mb-3">
              Desglose por Área CENEVAL
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {Object.entries(examSummary.byArea).map(([areaName, stats]) => {
                const areaPct = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div
                    key={areaName}
                    className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-2xl p-4"
                  >
                    <div className="text-xs font-bold text-stone-700 mb-1">
                      {areaName}
                    </div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-2xl font-extrabold text-stone-900">
                        {areaPct}%
                      </span>
                      <span className="text-xs text-stone-500 font-semibold">
                        {stats.correct}/{stats.total}
                      </span>
                    </div>
                    <div className="w-full bg-[#E5DEC9] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          areaPct >= 80
                            ? 'bg-teal-600'
                            : areaPct >= 60
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${areaPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('home')}
                className="px-5 py-3 rounded-xl bg-[#F3EFE6] hover:bg-[#E5DEC9] font-bold text-sm text-stone-800"
              >
                Volver al Panel Principal
              </button>
              {mistakeQuestions.length > 0 && (
                <button
                  onClick={() =>
                    startAdaptiveLesson({
                      title: 'Refuerzo de Errores del Simulacro',
                      subtitle: `Sesión intensiva de ${progress.lessonSize} reactivos`,
                      mode: 'mistakes',
                      pool: mistakeQuestions,
                      count: progress.lessonSize,
                    })
                  }
                  className="px-5 py-3 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white font-bold text-sm flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reforzar Errores Ahora ({mistakeQuestions.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VISTA PRINCIPAL (MÓDULOS, TEORÍA Y FUNDAMENTOS, REFUERZO Y SIMULACROS)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-stone-900 flex flex-col">
      {/* Header Principal Cálido y Editorial */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-[#F8F5EE]/95 border-b border-[#E5DEC9]">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D95D39] to-amber-600 flex items-center justify-center shadow-md shadow-[#D95D39]/20">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg tracking-tight text-stone-900">
                  EGEL Estudio
                </h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                  {allQuestions.length} reactivos
                </span>
              </div>
              <p className="text-xs text-stone-600 hidden sm:block">
                Lectura fundamentada y práctica intensiva para Ingeniería en Computación
              </p>
            </div>
          </div>

          {/* Controles Superiores */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1 bg-white border border-[#E5DEC9] rounded-xl p-1 text-xs shadow-sm">
              <span className="text-stone-600 font-semibold px-2 hidden md:inline">
                Por lección:
              </span>
              {[35, 45, 60].map((sz) => (
                <button
                  key={sz}
                  onClick={() =>
                    setProgress((prev) => ({ ...prev, lessonSize: sz }))
                  }
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    progress.lessonSize === sz
                      ? 'bg-[#D95D39] text-white'
                      : 'text-stone-700 hover:bg-[#F3EFE6]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-[#E5DEC9] text-teal-800 text-xs font-bold shadow-sm">
              <Target className="w-3.5 h-3.5 text-teal-700" />
              <span>{globalStats.globalAccuracy}%<span className="hidden sm:inline"> precisión</span></span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-[#E5DEC9] text-stone-700 text-xs font-bold shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
              <span>{globalStats.masteredQuestions}/{allQuestions.length} dominadas</span>
            </div>

            <button
              onClick={() => setShowSyncModal(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white hover:bg-[#F3EFE6] border border-[#E5DEC9] text-stone-700 hover:text-indigo-600 text-xs font-bold shadow-sm transition"
              title="Sincronizar entre computadora y teléfono sin cuentas"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden md:inline">Dispositivos</span>
              {isSyncing ? (
                <RefreshCw className="w-2.5 h-2.5 text-indigo-500 animate-spin" />
              ) : (
                <span
                  className={`w-2 h-2 rounded-full ${
                    isFirebaseConfigured() ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                  title={
                    isFirebaseConfigured()
                      ? 'Nube lista para sincronizar'
                      : 'Firebase pendiente de credenciales'
                  }
                />
              )}
            </button>
          </div>
        </div>

        {/* Pestañas Principales */}
        <div className="max-w-6xl mx-auto px-4 flex gap-2 overflow-x-auto pb-3">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 ${
              activeTab === 'home'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
            }`}
          >
            <Layers className="w-4 h-4" />
            Módulos por Área
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 ${
              activeTab === 'theory'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Teoría y Fundamentos (100%)
          </button>

          <button
            onClick={() => setActiveTab('weakness')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 ${
              activeTab === 'weakness'
                ? 'bg-[#D95D39] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            Refuerzo de Fallos
            {mistakeQuestions.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-md text-[11px] bg-rose-100 text-rose-900 border border-rose-300">
                {mistakeQuestions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('simulacro_setup')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shrink-0 ${
              activeTab === 'simulacro_setup'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
            }`}
          >
            <Clock className="w-4 h-4" />
            Simulacro Cronometrado
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl w-full mx-auto px-4 py-6 flex-1 space-y-6">
        {/* Banner de Sesión Guardada en Curso */}
        {(sessionQueue.length > 0 || examQuestions.length > 0) && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200/70 flex items-center justify-center text-amber-900 shrink-0">
                <Play className="w-5 h-5 fill-amber-900" />
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  Sesión de estudio guardada automáticamente
                </div>
                <div className="text-sm font-bold text-stone-900">
                  {sessionQueue.length > 0
                    ? `${sessionConfig?.title || 'Sesión de estudio'} • Pregunta ${
                        currentIndex + 1
                      } de ${sessionQueue.length}`
                    : `Simulacro EGEL • Reactivo ${examCurrentIdx + 1} de ${
                        examQuestions.length
                      }`}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (sessionQueue.length > 0) discardActiveSession();
                  else setExamQuestions([]);
                }}
                className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Descartar</span>
              </button>
              <button
                onClick={() =>
                  setActiveTab(
                    sessionQueue.length > 0 ? 'pre_session_reading' : 'simulacro_active'
                  )
                }
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-amber-200/80 hover:bg-amber-300 text-amber-950 text-xs font-extrabold flex items-center justify-center gap-1.5 transition"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Lectura Previa</span>
              </button>
              <button
                onClick={() =>
                  setActiveTab(
                    sessionQueue.length > 0 ? 'session' : 'simulacro_active'
                  )
                }
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Continuar Preguntas</span>
              </button>
            </div>
          </div>
        )}

        {/* ===============================================================
            PESTAÑA 1: MÓDULOS POR ÁREA
        =============================================================== */}
        {activeTab === 'home' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-amber-100/90 via-orange-50/70 to-white border border-amber-300 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D95D39] bg-white border border-amber-300 px-2.5 py-1 rounded-lg mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Lectura Guiada + Práctica Adaptativa
                  </span>
                  <h2 className="text-xl font-extrabold text-stone-900">
                    Sesión Integral de Estudio ({progress.lessonSize} preguntas)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 max-w-lg leading-relaxed">
                    Inicia con la lectura de fundamentos de tus subáreas prioritarias y comprueba lo aprendido con reactivos tipo CENEVAL.
                  </p>
                </div>

                <button
                  onClick={() =>
                    startAdaptiveLesson({
                      title: 'Entrenamiento Adaptativo',
                      subtitle: `${progress.lessonSize} reactivos seleccionados`,
                      mode: 'adaptive',
                      pool: allQuestions,
                      count: progress.lessonSize,
                    })
                  }
                  className="shrink-0 px-5 py-3.5 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-md shadow-[#D95D39]/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Iniciar Estudio
                </button>
              </div>

              <div className="rounded-2xl bg-white border border-[#E5DEC9] p-5 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">
                    Dominio del Temario
                  </span>
                  <span className="text-xs font-extrabold text-teal-800">
                    {globalStats.masteredQuestions} / {allQuestions.length} dominadas
                  </span>
                </div>

                <div className="w-full bg-[#EFEAE0] h-2.5 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-teal-600 h-full rounded-full transition-all"
                    style={{
                      width: `${Math.round(
                        (globalStats.masteredQuestions / allQuestions.length) * 100
                      )}%`,
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    startAdaptiveLesson({
                      title: 'Repaso de Errores y Áreas Débiles',
                      subtitle: `${progress.lessonSize} preguntas de refuerzo`,
                      mode: 'mistakes',
                      pool:
                        mistakeQuestions.length > 0
                          ? mistakeQuestions
                          : weaknessList[0]?.questions || allQuestions,
                      count: progress.lessonSize,
                    })
                  }
                  className="w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-800 border border-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {mistakeQuestions.length > 0
                    ? `Reforzar ${mistakeQuestions.length} errores pendientes`
                    : `Reforzar subárea prioritaria`}
                </button>
              </div>
            </div>

            {/* Filtro por Materia / Área */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedAreaFilter('ALL')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedAreaFilter === 'ALL'
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                  }`}
                >
                  Todas las Áreas ({orderedAreas.length})
                </button>
                {orderedAreas.map((areaObj) => {
                  const Icon = areaObj.icon;
                  const active = selectedAreaFilter === areaObj.key;
                  return (
                    <button
                      key={areaObj.key}
                      onClick={() => setSelectedAreaFilter(areaObj.key)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                        active
                          ? 'bg-stone-900 text-white'
                          : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>
                        {areaObj.code}: {areaObj.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Secciones Ordenadas por Área y Subárea */}
            <div className="space-y-8">
              {filteredAreas.map((areaObj) => {
                const AreaIcon = areaObj.icon;

                return (
                  <section
                    key={areaObj.key}
                    className="bg-white border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EFEAE0]">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl ${areaObj.accentBg} border ${areaObj.accentBorder} flex items-center justify-center ${areaObj.accentText}`}
                        >
                          <AreaIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[11px] font-extrabold uppercase tracking-wider ${areaObj.accentText}`}
                            >
                              {areaObj.code}
                            </span>
                            <span className="text-xs text-stone-400">•</span>
                            <span className="text-xs text-stone-600 font-semibold">
                              {areaObj.totalQuestions} reactivos
                            </span>
                          </div>
                          <h3 className="text-lg font-extrabold text-stone-900">
                            {areaObj.key}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          startAdaptiveLesson({
                            title: areaObj.key,
                            subtitle: `Lectura previa + Práctica de ${areaObj.code}`,
                            mode: 'adaptive',
                            pool: areaObj.allAreaQuestions,
                            count: progress.lessonSize,
                          })
                        }
                        className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition ${areaObj.btnPrimary}`}
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        Estudiar Área ({progress.lessonSize} preg.)
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {areaObj.subareas.map((sub) => {
                        const m = subareaMetricsMap[sub.name];
                        const lessonCount = Math.max(
                          MIN_QUESTIONS_PER_LESSON,
                          Math.min(progress.lessonSize, sub.questions.length)
                        );

                        return (
                          <div
                            key={sub.name}
                            className="bg-[#FAF7F2] border border-[#E5DEC9] hover:border-stone-400 rounded-xl p-4 flex flex-col justify-between transition"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${areaObj.badge}`}
                                >
                                  Subárea {sub.code}
                                </span>

                                <div className="flex items-center gap-1.5">
                                  {m.pendingMistakes > 0 && (
                                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-300">
                                      {m.pendingMistakes} por reforzar
                                    </span>
                                  )}
                                  <span
                                    className={`text-xs font-extrabold ${
                                      m.accuracy === null
                                        ? 'text-stone-500'
                                        : m.accuracy >= 80
                                        ? 'text-teal-700'
                                        : m.accuracy >= 60
                                        ? 'text-amber-700'
                                        : 'text-rose-700'
                                    }`}
                                  >
                                    {m.accuracy !== null ? `${m.accuracy}%` : 'Nuevo'}
                                  </span>
                                </div>
                              </div>

                              <h4 className="font-extrabold text-sm text-stone-900 leading-snug mb-3">
                                {sub.cleanTitle}
                              </h4>

                              <div className="mb-4">
                                <div className="flex items-center justify-between text-[11px] text-stone-600 font-medium mb-1">
                                  <span>
                                    Dominadas: {m.masteredCount}/{sub.questions.length}
                                  </span>
                                  <span>{m.masteryPct}%</span>
                                </div>
                                <div className="w-full bg-[#E5DEC9] h-1.5 rounded-full overflow-hidden">
                                  <div
                                    className={`${areaObj.progressBar} h-full rounded-full transition-all`}
                                    style={{ width: `${m.masteryPct}%` }}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Dos acciones claras: Solo Teoría o Estudiar (Lectura Previa + Práctica) */}
                            <div className="grid grid-cols-5 gap-2">
                              <button
                                onClick={() => openTheoryForSubarea(sub.name)}
                                className="col-span-2 py-2.5 rounded-lg bg-white hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0] font-bold text-xs flex items-center justify-center gap-1.5 transition"
                              >
                                <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                                <span>Teoría</span>
                              </button>

                              <button
                                onClick={() =>
                                  startAdaptiveLesson({
                                    title: sub.name,
                                    subtitle: areaObj.key,
                                    mode: 'subarea',
                                    pool: sub.questions,
                                    count: lessonCount,
                                  })
                                }
                                className={`col-span-3 py-2.5 rounded-lg font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${areaObj.btnPrimary}`}
                              >
                                <Play className="w-3.5 h-3.5 fill-white" />
                                <span>Estudiar ({lessonCount})</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </>
        )}

        {/* ===============================================================
            PESTAÑA 2: SECCIÓN DE TEORÍA, FUNDAMENTOS Y FUENTES VERÍDICAS
        =============================================================== */}
        {activeTab === 'theory' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Índice Lateral de Subáreas (1.1 a 4.1) + Buscador Global */}
            <aside className="lg:col-span-1 space-y-4">
              <div className="bg-white border border-[#E5DEC9] rounded-2xl p-4 lg:sticky lg:top-32 space-y-4 shadow-sm">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-2">
                    Buscador del Temario
                  </h3>
                  <div className="relative">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={theorySearchQuery}
                      onChange={(e) => setTheorySearchQuery(e.target.value)}
                      placeholder="Ej. OSI, Puertos, PID, BCNF..."
                      className="w-full bg-[#FAF7F2] border border-[#D8D0C0] focus:border-teal-600 rounded-xl pl-9 pr-8 py-2 text-xs text-stone-900 outline-none"
                    />
                    {theorySearchQuery && (
                      <button
                        onClick={() => setTheorySearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-800"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {matchingOtherSubareas.length > 0 && (
                  <div className="bg-teal-50 border border-teal-300 rounded-xl p-2.5">
                    <div className="text-[11px] font-bold text-teal-900 mb-1.5">
                      También encontrado en:
                    </div>
                    <div className="space-y-1">
                      {matchingOtherSubareas.map((m) => (
                        <button
                          key={m.subareaCode}
                          onClick={() => setSelectedTheorySubarea(m.subareaName)}
                          className="w-full text-left px-2 py-1.5 rounded-lg bg-white hover:bg-teal-100/60 text-[11px] font-bold text-stone-800 border border-teal-200 flex items-center gap-1.5 transition"
                        >
                          <span className="font-mono text-teal-800">
                            {m.subareaCode}
                          </span>
                          <span className="truncate">
                            {m.subareaName.replace(/^\d+\.\d+\s*/, '')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-3">
                    Temario Oficial EGEL (100%)
                  </h3>
                  <div className="space-y-4">
                    {CANONICAL_AREAS.map((areaDef) => {
                      const areaPrefix = `${areaDef.code.replace('Área ', '')}.`;
                      const areaGuides = THEORY_GUIDE.filter(
                        (g) =>
                          g.area === areaDef.key ||
                          g.subareaCode.startsWith(areaPrefix)
                      );
                      return (
                        <div key={areaDef.key}>
                          <div
                            className={`text-[11px] font-extrabold uppercase tracking-wider ${areaDef.accentText} mb-1.5 px-2`}
                          >
                            {areaDef.code}: {areaDef.shortLabel}
                          </div>
                          <div className="space-y-1">
                            {areaGuides.map((g) => {
                              const isSelected =
                                g.subareaName === activeTheoryObj.subareaName;
                              return (
                                <button
                                  key={g.subareaCode}
                                  onClick={() => {
                                    setSelectedTheorySubarea(g.subareaName);
                                  }}
                                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                                    isSelected
                                      ? 'bg-stone-900 text-white shadow-sm'
                                      : 'text-stone-700 hover:bg-[#F3EFE6]'
                                  }`}
                                >
                                  <span className="font-mono">{g.subareaCode}</span>
                                  <span className="truncate">
                                    {g.subareaName.replace(/^\d+\.\d+\s*/, '')}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenido Teórico Detallado de la Subárea Seleccionada */}
            <div className="lg:col-span-3 space-y-6">
              {/* Cabecera del Apunte Teórico, Temas Cubiertos y Fuentes */}
              <div className="bg-white border border-[#E5DEC9] rounded-2xl p-6 space-y-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#EFEAE0]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md border ${activeTheoryAreaStyle.badge}`}
                      >
                        {activeTheoryObj.area}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-300">
                        {activeTheoryObj.sections?.length || 0} bloques •{' '}
                        {activeTheoryObj.tables?.length || 0} tablas •{' '}
                        {activeTheoryObj.formulas?.length || 0} fórmulas
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                      {activeTheoryObj.subareaName}
                    </h2>
                    <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                      {activeTheoryObj.summary}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      startAdaptiveLesson({
                        title: activeTheoryObj.subareaName,
                        subtitle: activeTheoryObj.area,
                        mode: 'subarea',
                        pool: subareaStudyQuestions,
                        count: progress.lessonSize,
                        skipPreReading: true,
                      })
                    }
                    className={`w-full sm:w-auto shrink-0 px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${activeTheoryAreaStyle.btnPrimary}`}
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Comprobar con {progress.lessonSize} Preguntas</span>
                  </button>
                </div>

                {/* Barra de Herramientas Interactivas de Teoría */}
                <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
                      Modo de Estudio:
                    </span>
                    <button
                      onClick={() => setTheoryViewMode('interactive')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                        theoryViewMode === 'interactive'
                          ? 'bg-stone-900 text-white shadow-sm'
                          : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#D8D0C0]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Por Bloques Interactivos</span>
                    </button>
                    <button
                      onClick={() => setTheoryViewMode('all')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                        theoryViewMode === 'all'
                          ? 'bg-stone-900 text-white shadow-sm'
                          : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#D8D0C0]'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Vista Completa</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setTheoryRecallMode((v) => !v);
                        setRevealedPointsMap({});
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition ${
                        theoryRecallMode
                          ? 'bg-amber-500 text-stone-950 shadow-sm'
                          : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#D8D0C0]'
                      }`}
                      title="Oculta explicaciones para que intentes recordarlas antes de verlas"
                    >
                      {theoryRecallMode ? (
                        <Eye className="w-3.5 h-3.5 text-stone-950" />
                      ) : (
                        <EyeOff className="w-3.5 h-3.5 text-stone-500" />
                      )}
                      <span>
                        {theoryRecallMode ? 'Autoevaluación Activada' : 'Modo Flashcards / Recall'}
                      </span>
                    </button>

                    <button
                      onClick={() => setShowTheorySources((v) => !v)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                        showTheorySources
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#D8D0C0]'
                      }`}
                    >
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-700" />
                      <span>Fuentes</span>
                    </button>
                  </div>
                </div>

                {/* Mapa de Cobertura Total de Tópicos de la Subárea */}
                {activeTheoryObj.keyTopics?.length > 0 && (
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 mb-2">
                      Mapa de Cobertura del Temario CENEVAL ({activeTheoryObj.keyTopics.length} temas esenciales — clic para filtrar):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeTheoryObj.keyTopics.map((topic, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => setTheorySearchQuery(topic.split(' ')[0])}
                          title="Filtrar por este tema"
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#EFEAE0] text-stone-800 border border-[#E5DEC9] transition"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fuentes Bibliográficas Verídicas (Desplegable o fija) */}
                {showTheorySources && (
                  <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-2">
                      <BookmarkCheck className="w-4 h-4 text-amber-700" />
                      Fuentes Bibliográficas y Documentos Base del Proyecto
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {activeTheoryObj.sources.map((src, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>{src}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Selector de Bloques si está en modo Interactivo */}
              {theoryViewMode === 'interactive' && filteredTheorySections.length > 1 && (
                <div className="bg-white border border-[#E5DEC9] rounded-2xl p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-stone-500">
                    <span>Navega por Tema ({filteredTheorySections.length} módulos)</span>
                    <span className="text-stone-400 font-mono">
                      {activeTheorySectionIdx + 1} de {filteredTheorySections.length}
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                    {filteredTheorySections.map((sec, sIdx) => {
                      const isActive = sIdx === activeTheorySectionIdx;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => setActiveTheorySectionIdx(sIdx)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold text-left shrink-0 max-w-[240px] truncate transition ${
                            isActive
                              ? 'bg-stone-900 text-white shadow-sm'
                              : 'bg-[#FAF7F2] text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                          }`}
                        >
                          <span className="font-mono mr-1.5">{sIdx + 1}.</span>
                          <span>{sec.title.replace(/^\d+\.\s*/, '')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bloques de Fundamentos Teóricos Exhaustivos */}
              <div className="space-y-4">
                {(theoryViewMode === 'interactive' && filteredTheorySections.length > 0
                  ? [filteredTheorySections[Math.min(activeTheorySectionIdx, filteredTheorySections.length - 1)]]
                  : filteredTheorySections
                ).map((sec, idx) => {
                  const actualSectionIndex =
                    theoryViewMode === 'interactive'
                      ? Math.min(activeTheorySectionIdx, filteredTheorySections.length - 1)
                      : idx;

                  return (
                    <div
                      key={actualSectionIndex}
                      className="bg-white border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <h3 className="text-base sm:text-lg font-extrabold text-stone-900 flex items-center gap-2">
                          <span
                            className={`w-2.5 h-6 rounded-full shrink-0 ${activeTheoryAreaStyle.progressBar}`}
                          />
                          <span>{sec.title}</span>
                        </h3>

                        {theoryViewMode === 'interactive' && filteredTheorySections.length > 1 && (
                          <div className="flex items-center gap-1.5">
                            <button
                              disabled={actualSectionIndex === 0}
                              onClick={() =>
                                setActiveTheorySectionIdx((i) => Math.max(0, i - 1))
                              }
                              className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFEAE0] disabled:opacity-40 border border-[#D8D0C0] text-stone-700"
                              title="Tema anterior"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-xs font-mono font-bold px-2 text-stone-600">
                              {actualSectionIndex + 1}/{filteredTheorySections.length}
                            </span>
                            <button
                              disabled={actualSectionIndex === filteredTheorySections.length - 1}
                              onClick={() =>
                                setActiveTheorySectionIdx((i) =>
                                  Math.min(filteredTheorySections.length - 1, i + 1)
                                )
                              }
                              className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFEAE0] disabled:opacity-40 border border-[#D8D0C0] text-stone-700"
                              title="Siguiente tema"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>

                      {sec.description && (
                        <p className="text-xs sm:text-sm text-stone-700 mb-4 leading-relaxed bg-[#FAF7F2] border-l-4 border-amber-500 pl-3.5 py-2.5 rounded-r-lg">
                          {sec.description}
                        </p>
                      )}

                      {theoryRecallMode && (
                        <div className="mb-3 text-[11px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                          <span>
                            Modo Autoevaluación activo: Lee el concepto en negrita e intenta recordarlo antes de pulsar Revelar.
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-3">
                        {sec.points.map((pt, pIdx) => {
                          const [boldPart, ...restParts] = pt.split(':');
                          const hasColon = restParts.length > 0;
                          const pointKey = `${actualSectionIndex}_${pIdx}`;
                          const isRevealed =
                            !theoryRecallMode || Boolean(revealedPointsMap[pointKey]);

                          return (
                            <div
                              key={pIdx}
                              className={`rounded-xl border p-4 transition-all ${
                                isRevealed
                                  ? 'bg-[#FAF7F2] border-[#E8E2D5]'
                                  : 'bg-white border-amber-300 shadow-sm'
                              }`}
                            >
                              {hasColon ? (
                                <div className="space-y-2">
                                  <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="font-extrabold text-stone-950 text-xs sm:text-sm flex items-center gap-1.5">
                                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                                      {boldPart}
                                    </span>

                                    {theoryRecallMode && (
                                      <button
                                        onClick={() => togglePointReveal(pointKey)}
                                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition ${
                                          isRevealed
                                            ? 'bg-[#EFEAE0] text-stone-700'
                                            : 'bg-amber-500 text-stone-950 shadow-sm'
                                        }`}
                                      >
                                        {isRevealed ? (
                                          <>
                                            <EyeOff className="w-3 h-3" /> Ocultar
                                          </>
                                        ) : (
                                          <>
                                            <Eye className="w-3 h-3" /> Revelar explicación
                                          </>
                                        )}
                                      </button>
                                    )}
                                  </div>

                                  {isRevealed ? (
                                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-3.5 border-l-2 border-[#D8D0C0]">
                                      {restParts.join(':')}
                                    </p>
                                  ) : (
                                    <div className="text-xs text-stone-400 italic pl-3.5">
                                      Contenido oculto para autoevaluación. ¿Recuerdas los detalles clave? Haz clic en Revelar.
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                                  {pt}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tablas Comparativas de Referencia Rápida */}
              {activeTheoryObj.tables?.length > 0 && (
                <div className="space-y-4">
                  {activeTheoryObj.tables.map((tbl, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white border border-[#E5DEC9] rounded-2xl p-6 overflow-hidden shadow-sm"
                    >
                      <h3 className="text-base font-extrabold text-stone-900 mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
                        <span>{tbl.title}</span>
                      </h3>
                      <div className="overflow-x-auto rounded-xl border border-[#E5DEC9]">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-[#F3EFE6] border-b border-[#E5DEC9] text-stone-900">
                              {tbl.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="py-3 px-4 font-extrabold uppercase tracking-wider text-[11px] text-stone-700"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EFEAE0]">
                            {tbl.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="bg-white hover:bg-[#FAF7F2] transition"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`py-3 px-4 leading-relaxed ${
                                      cIdx === 0
                                        ? 'font-bold text-stone-900 whitespace-nowrap'
                                        : 'text-stone-700'
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Fórmulas, Estándares y Comandos Clave con Copiado Rápido */}
              {activeTheoryObj.formulas?.length > 0 && (
                <div className="bg-white border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-teal-700" />
                      <span>Fórmulas, Comandos y Reglas Exactas para el Examen</span>
                    </h3>
                    <span className="text-[11px] font-bold text-stone-500">
                      Haz clic en cualquier fórmula para copiarla
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {activeTheoryObj.formulas.map((f, i) => {
                      const isCopied = copiedFormulaIdx === i;
                      return (
                        <div
                          key={i}
                          className="bg-[#FAF7F2] border border-[#E5DEC9] hover:border-teal-400 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition"
                        >
                          <span className="text-xs sm:text-sm font-bold text-stone-800">
                            {f.label}
                          </span>
                          <button
                            onClick={() => handleCopyFormula(f.code, i)}
                            className="flex items-center justify-between sm:justify-start gap-2 bg-teal-100/80 hover:bg-teal-200/90 border border-teal-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold text-teal-950 transition text-left cursor-pointer"
                            title="Copiar fórmula"
                          >
                            <code className="truncate max-w-[280px] sm:max-w-md">{f.code}</code>
                            {isCopied ? (
                              <Check className="w-4 h-4 text-teal-700 shrink-0" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-teal-700/80 shrink-0" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Consejos Clave y Trampas Frecuentes del CENEVAL */}
              {activeTheoryObj.examTips?.length > 0 && (
                <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-700" />
                    Puntos Clave para No Fallar en el Examen EGEL
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    {activeTheoryObj.examTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-amber-700">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Glosario / Catálogo de Reactivos Resueltos y Explicados de esta Subárea */}
              <div className="bg-white border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                      Catálogo de Reactivos con Autoevaluación ({filteredStudyQuestions.length})
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Ponte a prueba intentando responder mentalmente antes de pulsar "Ver Respuesta y Fundamento".
                    </p>
                  </div>

                  {/* Buscador de conceptos dentro de la subárea */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={theorySearchQuery}
                      onChange={(e) => setTheorySearchQuery(e.target.value)}
                      placeholder="Filtrar reactivos y conceptos..."
                      className="w-full bg-[#FAF7F2] border border-[#D8D0C0] focus:border-teal-600 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                  {filteredStudyQuestions.map((q, idx) => {
                    const isQuestionRevealed = Boolean(revealedCatalogQuestions[q.id]);
                    const correctObj = q.opciones.find(
                      (o) =>
                        String(o.id).toUpperCase() ===
                        String(q.respuesta_correcta).toUpperCase()
                    );
                    return (
                      <div
                        key={q.id}
                        className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-4 transition"
                      >
                        <div className="text-xs sm:text-sm font-bold text-stone-900 mb-2.5">
                          <span className="text-[#D95D39] font-mono mr-2">
                            #{idx + 1}
                          </span>
                          {q.pregunta}
                        </div>

                        {/* Opciones en minitarjetas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.opciones.map((op) => {
                            const isCorrect = String(op.id).toUpperCase() === String(q.respuesta_correcta).toUpperCase();
                            return (
                              <div
                                key={op.id}
                                className={`text-xs p-2 rounded-lg border transition ${
                                  isQuestionRevealed && isCorrect
                                    ? 'bg-teal-100/70 border-teal-400 text-teal-950 font-semibold'
                                    : 'bg-white border-[#E8E2D5] text-stone-700'
                                }`}
                              >
                                <span className="font-mono font-bold mr-1.5 text-stone-900">
                                  {op.id})
                                </span>
                                <span>{op.texto}</span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="pt-2 border-t border-[#E8E2D5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <button
                            onClick={() => toggleCatalogQuestionReveal(q.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                              isQuestionRevealed
                                ? 'bg-[#E5DEC9] text-stone-800'
                                : 'bg-[#D95D39] hover:bg-[#C04D2B] text-white shadow-sm'
                            }`}
                          >
                            {isQuestionRevealed ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>Ocultar Solución</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5" />
                                <span>Ver Respuesta y Fundamento</span>
                              </>
                            )}
                          </button>

                          {isQuestionRevealed && correctObj && (
                            <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md">
                              Correcta: {correctObj.id} ({correctObj.texto})
                            </span>
                          )}
                        </div>

                        {isQuestionRevealed && (
                          <div className="mt-3 text-xs text-stone-700 leading-relaxed bg-white border border-amber-200 rounded-lg p-3">
                            <strong className="text-amber-800">Fundamento Técnico: </strong>
                            {q.explicacion}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===============================================================
            PESTAÑA 3: REFUERZO DE FALLOS
        =============================================================== */}
        {activeTab === 'weakness' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#E5DEC9] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-xl font-extrabold text-stone-900">
                  Centro de Refuerzo de Fallos
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Subáreas ordenadas automáticamente desde las que requieren mayor atención
                  según tus respuestas.
                </p>
              </div>
              <button
                onClick={() =>
                  startAdaptiveLesson({
                    title: 'Sesión Intensiva de Errores y Debilidades',
                    subtitle: `${progress.lessonSize} reactivos priorizados`,
                    mode: 'mistakes',
                    pool:
                      mistakeQuestions.length > 0
                        ? mistakeQuestions
                        : weaknessList[0]?.questions || allQuestions,
                    count: progress.lessonSize,
                  })
                }
                className="shrink-0 px-5 py-3 rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 transition shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Iniciar Refuerzo ({progress.lessonSize} preg.)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weaknessList.map((item) => {
                const areaStyle =
                  AREA_STYLE_MAP[item.area] ||
                  AREA_STYLE_MAP['Implementación de Software'];
                return (
                  <div
                    key={item.subarea}
                    className="bg-white border border-[#E5DEC9] rounded-xl p-4 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${areaStyle.badge}`}
                        >
                          {item.code} • {areaStyle.shortLabel}
                        </span>
                        <span
                          className={`text-xs font-extrabold ${
                            item.accuracy === null
                              ? 'text-stone-500'
                              : item.accuracy >= 80
                              ? 'text-teal-700'
                              : item.accuracy >= 60
                              ? 'text-amber-700'
                              : 'text-rose-700'
                          }`}
                        >
                          {item.accuracy !== null
                            ? `${item.accuracy}% precisión`
                            : 'Sin evaluar'}
                        </span>
                      </div>

                      <h3 className="text-sm font-extrabold text-stone-900 mb-2">
                        {item.cleanTitle}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-stone-600 mb-4">
                        <span>
                          Aciertos:{' '}
                          <strong className="text-teal-700">{item.correct}</strong>
                        </span>
                        <span>•</span>
                        <span>
                          Fallos:{' '}
                          <strong className="text-rose-700">{item.wrong}</strong>
                        </span>
                        <span>•</span>
                        <span>
                          Pendientes:{' '}
                          <strong className="text-amber-800">
                            {item.pendingMistakes}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      <button
                        onClick={() => openTheoryForSubarea(item.subarea)}
                        className="col-span-2 py-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0] font-bold text-xs flex items-center justify-center gap-1.5 transition"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                        <span>Teoría</span>
                      </button>
                      <button
                        onClick={() =>
                          startAdaptiveLesson({
                            title: `Refuerzo: ${item.subarea}`,
                            subtitle: item.area,
                            mode: 'subarea',
                            pool: item.questions,
                            count: progress.lessonSize,
                          })
                        }
                        className="col-span-3 py-2.5 rounded-lg bg-stone-900 hover:bg-[#D95D39] text-white font-bold text-xs transition"
                      >
                        Reforzar ({progress.lessonSize})
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===============================================================
            PESTAÑA 4: SIMULACRO CRONOMETRADO
        =============================================================== */}
        {activeTab === 'simulacro_setup' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border border-[#E5DEC9] rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                Evaluación Cronometrada
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1 mb-2">
                Simulador de Examen EGEL
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Sin pistas durante la prueba. Tu progreso se guarda automáticamente por si
                recargas la página.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    count: 35,
                    label: 'SESIÓN RÁPIDA (52 MIN)',
                    color: 'text-indigo-700',
                    desc: '35 reactivos balanceados entre todas las áreas.',
                  },
                  {
                    count: 70,
                    label: 'MEDIO EXAMEN (105 MIN)',
                    color: 'text-teal-700',
                    desc: '70 reactivos para medir resistencia y precisión.',
                  },
                  {
                    count: 140,
                    label: 'SIMULACRO EXTENSO (210 MIN)',
                    color: 'text-amber-700',
                    desc: '140 reactivos tipo sesión larga de evaluación.',
                  },
                  {
                    count: 250,
                    label: 'EXAMEN COMPLETO (375 MIN)',
                    color: 'text-[#D95D39]',
                    desc: '250 reactivos exhaustivos de todo el banco.',
                  },
                ].map((opt) => (
                  <button
                    key={opt.count}
                    onClick={() => startSimulacro(opt.count)}
                    className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E5DEC9] hover:border-indigo-500 text-left transition shadow-sm"
                  >
                    <div className={`text-xs font-extrabold ${opt.color} mb-1`}>
                      {opt.label}
                    </div>
                    <div className="text-xl font-black text-stone-900 mb-1">
                      {opt.count} Reactivos
                    </div>
                    <p className="text-xs text-stone-600">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E5DEC9] rounded-2xl p-6 shadow-sm">
              <h3 className="font-extrabold text-sm text-stone-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-600" />
                Historial de Simulacros
              </h3>
              {!progress.examHistory || progress.examHistory.length === 0 ? (
                <p className="text-xs text-stone-500">
                  Aún no has finalizado ningún simulacro.
                </p>
              ) : (
                <div className="space-y-3">
                  {progress.examHistory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-3.5"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-extrabold text-teal-800">
                          {item.pct}% ({item.correct}/{item.total})
                        </span>
                        <span className="text-stone-500">{item.date}</span>
                      </div>
                      <div className="text-xs font-bold text-stone-800">
                        {item.dictamen}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Modal de Sincronización entre Dispositivos */}
      <SyncModal
        isOpen={showSyncModal}
        onClose={() => setShowSyncModal(false)}
        syncKey={syncKey}
        onApplyRemoteData={handleApplyRemoteData}
        onSyncKeyChange={(newKey) => setSyncKey(newKey)}
        isSyncing={isSyncing}
      />
    </div>
  );
}
