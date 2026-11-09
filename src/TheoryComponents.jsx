import React, { useState, useMemo } from 'react';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  BookOpen,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  LayoutGrid,
  RectangleHorizontal,
} from 'lucide-react';

function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Divide un párrafo en oraciones o cláusulas independientes respetando paréntesis
 * y abreviaturas comunes para presentarlas como viñetas (bullet points) legibles.
 */
function splitIntoBullets(text) {
  if (!text || typeof text !== 'string') return [];
  const res = [];
  let cur = '';
  let depth = 0;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '(') depth++;
    else if (ch === ')' && depth > 0) depth--;
    cur += ch;

    if (depth === 0 && (ch === '.' || ch === ';') && text[i + 1] === ' ') {
      const trimmed = cur.trim();
      const isAbbrev =
        /(?:ej|vs|etc|aprox|máx|mín|cap|ed|no|fig|\b[A-Z]|\b\d)\.$/.test(
          trimmed
        );
      if (!isAbbrev && trimmed.length > 12) {
        const clean = trimmed.replace(/;$/, '.');
        res.push(capitalizeFirst(clean));
        cur = '';
        i++;
      }
    }
  }

  if (cur.trim()) {
    res.push(capitalizeFirst(cur.trim()));
  }
  return res;
}

/**
 * Parsea un punto teórico plano en una estructura jerárquica rica:
 * - title: Título principal del concepto
 * - subtitleBadge: Etiqueta entre paréntesis del título (ej. "PDU", "Star / Full Mesh")
 * - introBullets: Viñetas introductorias antes de una lista numerada
 * - numberedItems: Sub-puntos numerados 1), 2), 3)... con subTitle, subBadge y subBullets
 * - bullets: Viñetas con sangría para puntos no numerados o notas finales
 */
function parseStructuredPoint(pt) {
  if (!pt || typeof pt !== 'string') {
    return {
      title: '',
      subtitleBadge: '',
      introBullets: [],
      numberedItems: [],
      bullets: [],
    };
  }

  let depth = 0;
  const colons = [];
  for (let i = 0; i < pt.length; i++) {
    if (pt[i] === '(') depth++;
    else if (pt[i] === ')' && depth > 0) depth--;
    else if (pt[i] === ':' && depth === 0) colons.push(i);
  }

  let rawTitle = '';
  let rawBody = pt;
  if (colons.length > 0) {
    const splitIdx = colons[0];
    if (colons.length >= 2) {
      const firstSeg = pt.slice(0, colons[0]).trim();
      const secondSeg = pt.slice(colons[0] + 1, colons[1]).trim();
      if (
        firstSeg.length < 35 &&
        secondSeg.length < 85 &&
        !secondSeg.includes('. ') &&
        !/\b1\)/.test(secondSeg) &&
        !/^(El|La|Los|Las|Un|Una|Consta|Utiliza|Ante|Cuando|Para|De|En|Bus)\b/.test(
          secondSeg
        )
      ) {
        rawTitle = `${firstSeg} — ${secondSeg}`;
        rawBody = pt.slice(colons[1] + 1).trim();
      } else {
        rawTitle = firstSeg;
        rawBody = pt.slice(splitIdx + 1).trim();
      }
    } else {
      rawTitle = pt.slice(0, splitIdx).trim();
      rawBody = pt.slice(splitIdx + 1).trim();
    }
  }

  let title = rawTitle;
  let subtitleBadge = '';
  const badgeMatch = rawTitle.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (
    badgeMatch &&
    badgeMatch[1].trim().length > 5 &&
    badgeMatch[2].trim().length < 60
  ) {
    title = badgeMatch[1].trim();
    subtitleBadge = badgeMatch[2].trim();
  }

  // Detectar marcadores numerados 1) 2) 3) en profundidad de paréntesis 0
  let d = 0;
  const markerPositions = [];
  for (let i = 0; i < rawBody.length; i++) {
    if (rawBody[i] === '(') d++;
    else if (rawBody[i] === ')') {
      if (d > 0) d--;
      else {
        const lookbehind = rawBody.slice(Math.max(0, i - 4), i);
        const mNum = lookbehind.match(/(?:^|[\s:;,.])(\d+)$/);
        if (mNum && rawBody[i + 1] === ' ') {
          const numStr = mNum[1];
          const markerStart = i - numStr.length;
          markerPositions.push({
            num: numStr,
            start: markerStart,
            contentStart: i + 2,
          });
        }
      }
    }
  }

  if (markerPositions.length > 0) {
    const introText = rawBody
      .slice(0, markerPositions[0].start)
      .trim()
      .replace(/[:;,.]+$/, '');
    const introBullets = introText ? splitIntoBullets(introText) : [];
    const numberedItems = [];
    let outroBullets = [];

    for (let k = 0; k < markerPositions.length; k++) {
      const curr = markerPositions[k];
      const nextStart =
        k + 1 < markerPositions.length
          ? markerPositions[k + 1].start
          : rawBody.length;
      let seg = rawBody.slice(curr.contentStart, nextStart).trim();
      seg = seg.replace(/(?:[,;]?\s*y|[,;])\s*$/, '').trim();

      if (k === markerPositions.length - 1) {
        const beforeLast = rawBody.slice(
          Math.max(0, curr.start - 8),
          curr.start
        );
        const isCommaList =
          markerPositions.length >= 2 &&
          /[,;]\s*(?:y\s*)?$|^\s*y\s+$/.test(beforeLast);
        const allSentences = splitIntoBullets(seg);
        if (allSentences.length > 1) {
          if (isCommaList) {
            seg = allSentences[0];
            outroBullets = allSentences.slice(1);
          } else {
            const splitOutroIdx = allSentences.findIndex(
              (s, sIdx) =>
                sIdx > 0 &&
                /^(Posteriormente|A diferencia|Finalmente|Adicionalmente|Por su parte|Artefactos y Eventos|En Gestión de Proyectos|En Métricas de Software|Basta con romper|Con realimentación|En un Op-Amp|Si una impresora|Si el servidor DHCP)/i.test(
                  s
                )
            );
            if (splitOutroIdx !== -1) {
              outroBullets = allSentences.slice(splitOutroIdx);
              seg = allSentences.slice(0, splitOutroIdx).join(' ');
            }
          }
        }
      }

      let subDepth = 0;
      let subColonIdx = -1;
      for (let c = 0; c < seg.length; c++) {
        if (seg[c] === '(') subDepth++;
        else if (seg[c] === ')' && subDepth > 0) subDepth--;
        else if (seg[c] === ':' && subDepth === 0) {
          subColonIdx = c;
          break;
        }
      }

      let subTitle = '';
      let subBadge = '';
      let itemBody = seg;

      if (subColonIdx !== -1 && subColonIdx < 110) {
        const rawSub = seg.slice(0, subColonIdx).trim();
        itemBody = seg.slice(subColonIdx + 1).trim();
        const sbMatch = rawSub.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
        if (sbMatch && sbMatch[1].trim().length > 2) {
          subTitle = sbMatch[1].trim();
          subBadge = sbMatch[2].trim();
        } else {
          subTitle = rawSub;
        }
      } else {
        const cleanSeg = seg.replace(/\.\s*$/, '').trim();
        const openIdx = cleanSeg.indexOf('(');
        if (openIdx > 2 && openIdx < 65) {
          let pd = 0;
          let closeIdx = -1;
          for (let c = openIdx; c < cleanSeg.length; c++) {
            if (cleanSeg[c] === '(') pd++;
            else if (cleanSeg[c] === ')') {
              pd--;
              if (pd === 0) {
                closeIdx = c;
                break;
              }
            }
          }
          if (closeIdx !== -1) {
            const head = cleanSeg.slice(0, openIdx).trim();
            const inside = cleanSeg.slice(openIdx + 1, closeIdx).trim();
            const after = cleanSeg
              .slice(closeIdx + 1)
              .trim()
              .replace(/^[,;:]\s*/, '');
            if (!after) {
              subTitle = head;
              itemBody = inside;
            } else if (inside.length < 55) {
              subTitle = head;
              subBadge = inside;
              itemBody = after;
            }
          }
        }
      }

      const subBullets = splitIntoBullets(itemBody);
      numberedItems.push({ num: curr.num, subTitle, subBadge, subBullets });
    }

    return {
      title,
      subtitleBadge,
      introBullets,
      numberedItems,
      bullets: outroBullets,
    };
  }

  const bullets = splitIntoBullets(rawBody);
  return {
    title,
    subtitleBadge,
    introBullets: [],
    numberedItems: [],
    bullets,
  };
}

/**
 * Renderiza texto enriquecido convirtiendo `código` en chips monoespaciados
 * y resaltando frases clave iniciales para facilitar la lectura rápida.
 */
export function FormattedRichText({ text }) {
  if (!text || typeof text !== 'string') return null;

  // Detectar si la viñeta tiene un prefijo corto seguido de ":" (ej. "Idea central: ...")
  let leadLabel = '';
  let restText = text;

  let depth = 0;
  let colonIdx = -1;
  for (let i = 0; i < Math.min(text.length, 75); i++) {
    if (text[i] === '(') depth++;
    else if (text[i] === ')' && depth > 0) depth--;
    else if (text[i] === ':' && depth === 0) {
      colonIdx = i;
      break;
    }
  }

  if (colonIdx !== -1 && colonIdx > 2) {
    leadLabel = text.slice(0, colonIdx + 1);
    restText = text.slice(colonIdx + 1);
  } else {
    // Resaltar sujeto inicial antes de verbo clave o coma introductoria corta
    const introComma = text.match(
      /^((?:En una conexión en \w+|En cambio|Por el contrario|Por su parte|En el modelo \w+|Bajo el estándar [\w/-]+|En Windows|En sistemas Linux[\w\s]*|Categoría \w+|Clase [A-D]|Lectura \d+|Nivel \w+),?)\s+(.*)$/i
    );
    if (introComma) {
      leadLabel = introComma[1];
      restText = ' ' + introComma[2];
    }
  }

  const renderInlineTokens = (str) => {
    const parts = str.split(/(`[^`]+`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 mx-0.5 rounded-md bg-teal-100/90 text-teal-950 font-mono text-[11px] sm:text-xs font-bold border border-teal-300/80"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  return (
    <span>
      {leadLabel && (
        <strong className="font-extrabold text-stone-950">
          {renderInlineTokens(leadLabel)}
        </strong>
      )}
      {renderInlineTokens(restText)}
    </span>
  );
}

/**
 * Cuerpo estructurado de un punto teórico (con listas numeradas indentadas,
 * badges y bullet points claros). Se usa tanto en las tarjetas de lectura como
 * en el reverso de las Flashcards.
 */
export function StructuredPointBody({ parsed, areaStyle }) {
  const { introBullets, numberedItems, bullets } = parsed;

  return (
    <div className="space-y-3">
      {/* Viñetas introductorias (si existen antes de 1), 2), 3)) */}
      {introBullets.length > 0 && (
        <ul className="space-y-1.5 pl-1">
          {introBullets.map((b, bIdx) => (
            <li
              key={bIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed"
            >
              <span className="text-amber-600 font-black mt-0.5 shrink-0">
                ▸
              </span>
              <div className="flex-1 min-w-0">
                <FormattedRichText text={b} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-elementos numerados 1), 2), 3)... con sangría, badge numérico y viñetas */}
      {numberedItems.length > 0 && (
        <div className="pl-2 sm:pl-4 border-l-2 border-[#DFD7C6] space-y-2.5">
          {numberedItems.map((item, iIdx) => (
            <div
              key={iIdx}
              className="bg-white border border-[#E6DFD1] rounded-xl p-3 sm:p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-start gap-2.5">
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-black shrink-0 mt-0.5 border ${
                    areaStyle?.badge ||
                    'bg-amber-100 text-amber-900 border-amber-300'
                  }`}
                >
                  {item.num}
                </span>

                <div className="flex-1 min-w-0 space-y-1.5">
                  {(item.subTitle || item.subBadge) && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.subTitle && (
                        <span className="font-extrabold text-stone-950 text-xs sm:text-sm">
                          <FormattedRichText text={item.subTitle} />
                        </span>
                      )}
                      {item.subBadge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                          {item.subBadge}
                        </span>
                      )}
                    </div>
                  )}

                  {item.subBullets.length === 1 ? (
                    <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <FormattedRichText text={item.subBullets[0]} />
                    </div>
                  ) : (
                    <ul className="space-y-1.5 pt-0.5">
                      {item.subBullets.map((sb, sbIdx) => (
                        <li
                          key={sbIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 leading-relaxed"
                        >
                          <span className="text-amber-600 font-bold mt-0.5 shrink-0">
                            •
                          </span>
                          <div className="flex-1 min-w-0">
                            <FormattedRichText text={sb} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Viñetas con sangría y marcador visual para puntos sin numeración o notas de cierre */}
      {bullets.length > 0 && (
        <ul className="space-y-2 pl-1 sm:pl-2">
          {bullets.map((b, bIdx) => (
            <li
              key={bIdx}
              className="bg-white border border-[#E8E2D5] rounded-xl px-3.5 py-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span className="w-5 h-5 rounded-md bg-amber-100/80 border border-amber-300/80 text-amber-900 flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">
                ▸
              </span>
              <div className="flex-1 min-w-0">
                <FormattedRichText text={b} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Tarjeta visual para un concepto dentro del Modo Guía Estructurada.
 */
export function StructuredPointCard({
  pt,
  index,
  pointKey,
  areaStyle,
  isRecallMode,
  isRevealed,
  onToggleReveal,
}) {
  const parsed = useMemo(() => parseStructuredPoint(pt), [pt]);
  const showBody = !isRecallMode || isRevealed;

  const itemCountBadge =
    parsed.numberedItems.length > 0
      ? `${parsed.numberedItems.length} puntos desglosados`
      : parsed.bullets.length > 1
      ? `${parsed.bullets.length} ideas clave`
      : null;

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 transition-all ${
        showBody
          ? 'bg-[#FAF7F2] border-[#E2DAC9]'
          : 'bg-white border-amber-300 shadow-sm hover:border-amber-400'
      }`}
    >
      {/* Cabecera del Concepto */}
      <div className="flex flex-wrap items-start justify-between gap-2.5 mb-3">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <span className="px-2 py-0.5 rounded-lg bg-stone-900 text-white font-mono text-[11px] font-extrabold shrink-0 mt-0.5">
            #{index + 1}
          </span>
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <h4 className="font-extrabold text-stone-950 text-sm sm:text-base leading-snug">
              <FormattedRichText text={parsed.title || `Concepto ${index + 1}`} />
            </h4>
            {parsed.subtitleBadge && (
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                  areaStyle?.badge ||
                  'bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                {parsed.subtitleBadge}
              </span>
            )}
            {itemCountBadge && !showBody && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                {itemCountBadge}
              </span>
            )}
          </div>
        </div>

        {onToggleReveal && (
          <button
            type="button"
            onClick={() => onToggleReveal(pointKey)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold flex items-center gap-1.5 transition shrink-0 cursor-pointer ${
              isRecallMode
                ? showBody
                  ? 'bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0]'
                  : 'bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-sm'
                : 'bg-white hover:bg-[#EFEAE0] text-stone-600 border border-[#E5DEC9]'
            }`}
            title="Ocultar o revelar este concepto para poner a prueba tu memoria"
          >
            {showBody ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Ocultar</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Revelar ({itemCountBadge || 'respuesta'})</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Contenido Estructurado o Reto Oculto */}
      {showBody ? (
        <StructuredPointBody parsed={parsed} areaStyle={areaStyle} />
      ) : (
        <button
          type="button"
          onClick={() => onToggleReveal && onToggleReveal(pointKey)}
          className="w-full text-left rounded-xl border border-dashed border-amber-400 bg-amber-50/60 hover:bg-amber-100/60 p-4 transition flex items-center justify-between gap-3 cursor-pointer"
        >
          <div className="text-xs sm:text-sm text-amber-950 font-medium">
            <strong className="font-extrabold">Reto de memoria activa:</strong>{' '}
            Intenta recordar{' '}
            {parsed.numberedItems.length > 0
              ? `los ${parsed.numberedItems.length} elementos de este tema`
              : 'los puntos clave de este concepto'}{' '}
            y haz clic aquí para comprobar.
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 font-extrabold text-xs shrink-0 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            Ver desglose
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Tablero interactivo de Flashcards que cambia por completo la distribución de la página
 * permitiendo estudiar en Mosaico de Tarjetas Volteables (2 columnas) o en Modo Mazo 1×1.
 */
export function InteractiveFlashcardsDeck({
  guide,
  areaStyle,
  onExitFlashcards,
}) {
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' | 'single'
  const [flippedMap, setFlippedMap] = useState({});
  const [statusMap, setStatusMap] = useState({}); // cardId -> 'mastered' | 'review'
  const [singleIndex, setSingleIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);

  const allCards = useMemo(() => {
    const deck = [];
    (guide.sections || []).forEach((sec, sIdx) => {
      (sec.points || []).forEach((pt, pIdx) => {
        const parsed = parseStructuredPoint(pt);
        deck.push({
          id: `concept_${guide.subareaCode}_${sIdx}_${pIdx}`,
          type: 'concept',
          typeLabel: 'Concepto Clave',
          blockTitle: sec.title.replace(/^\d+\.\s*/, ''),
          blockNumber: sIdx + 1,
          frontTitle: parsed.title || `Concepto ${pIdx + 1}`,
          frontBadge: parsed.subtitleBadge,
          hintText:
            parsed.numberedItems.length > 0
              ? `Contiene ${parsed.numberedItems.length} elementos numerados para recordar`
              : `Contiene ${parsed.bullets.length} puntos clave`,
          parsed,
        });
      });
    });

    (guide.formulas || []).forEach((f, fIdx) => {
      deck.push({
        id: `formula_${guide.subareaCode}_${fIdx}`,
        type: 'formula',
        typeLabel: 'Fórmula / Comando',
        blockTitle: 'Fórmulas y Reglas Exactas',
        blockNumber: null,
        frontTitle: f.label,
        frontBadge: 'Regla Exacta',
        hintText: 'Recuerda la ecuación, comando o valores exactos',
        formulaCode: f.code,
      });
    });

    (guide.examTips || []).forEach((tip, tIdx) => {
      deck.push({
        id: `tip_${guide.subareaCode}_${tIdx}`,
        type: 'tip',
        typeLabel: 'Tip de Examen CENEVAL',
        blockTitle: 'Punto Clave de Examen',
        blockNumber: null,
        frontTitle: `Pregunta típica de examen #${tIdx + 1}`,
        frontBadge: 'Tip EGEL',
        hintText: `${tip.slice(0, 58)}...`,
        tipText: tip,
      });
    });

    return deck;
  }, [guide]);

  const filteredCards = useMemo(() => {
    let list = allCards;
    if (categoryFilter === 'CONCEPTS') {
      list = allCards.filter((c) => c.type === 'concept');
    } else if (categoryFilter === 'FORMULAS') {
      list = allCards.filter((c) => c.type === 'formula');
    } else if (categoryFilter === 'TIPS') {
      list = allCards.filter((c) => c.type === 'tip');
    } else if (categoryFilter === 'REVIEW') {
      list = allCards.filter((c) => statusMap[c.id] !== 'mastered');
    }

    if (isShuffled) {
      const copy = [...list];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = (i * 7 + 3) % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
    return list;
  }, [allCards, categoryFilter, statusMap, isShuffled]);

  const masteredCount = useMemo(
    () => allCards.filter((c) => statusMap[c.id] === 'mastered').length,
    [allCards, statusMap]
  );

  const toggleFlip = (cardId) => {
    setFlippedMap((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const flipAll = (val) => {
    const next = {};
    filteredCards.forEach((c) => {
      next[c.id] = val;
    });
    setFlippedMap(next);
  };

  const markCardStatus = (cardId, status, e) => {
    if (e) e.stopPropagation();
    setStatusMap((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === status ? undefined : status,
    }));
  };

  const safeSingleIdx = Math.min(
    singleIndex,
    Math.max(0, filteredCards.length - 1)
  );
  const activeSingleCard = filteredCards[safeSingleIdx];

  const renderCardBack = (card) => {
    if (card.type === 'formula') {
      return (
        <div className="bg-teal-50/90 border-2 border-teal-300 rounded-xl p-4 text-center space-y-2">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
            Fórmula / Regla Exacta
          </div>
          <code className="block text-xs sm:text-sm font-mono font-extrabold text-teal-950 bg-white border border-teal-200 px-3 py-2.5 rounded-lg break-words">
            {card.formulaCode}
          </code>
        </div>
      );
    }
    if (card.type === 'tip') {
      return (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-2.5">
          <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <FormattedRichText text={card.tipText} />
          </div>
        </div>
      );
    }
    return <StructuredPointBody parsed={card.parsed} areaStyle={areaStyle} />;
  };

  return (
    <div className="space-y-5">
      {/* Barra de Control del Tablero de Flashcards */}
      <div className="bg-gradient-to-r from-amber-50 via-white to-teal-50/50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Tablero de Flashcards Interactivas
                </h3>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300">
                  {masteredCount} / {allCards.length} dominadas
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Toca cualquier tarjeta para voltearla y ver su desglose con viñetas. Marca las que ya dominas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Selector de Distribución: Mosaico 2 cols vs Tarjeta 1x1 */}
            <div className="flex items-center bg-[#F3EFE6] p-1 rounded-xl border border-[#D8D0C0]">
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Mosaico</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setLayoutMode('single');
                  setSingleIndex(0);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  layoutMode === 'single'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <RectangleHorizontal className="w-3.5 h-3.5" />
                <span>Mazo 1×1</span>
              </button>
            </div>

            {onExitFlashcards && (
              <button
                type="button"
                onClick={onExitFlashcards}
                className="px-3 py-2 rounded-xl bg-white hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0] text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                <span>Volver a Guía Visual</span>
              </button>
            )}
          </div>
        </div>

        {/* Filtros por tipo de tarjeta y acciones rápidas */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E5DEC9]">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'ALL', label: `Todas (${allCards.length})` },
              {
                id: 'CONCEPTS',
                label: `Conceptos (${
                  allCards.filter((c) => c.type === 'concept').length
                })`,
              },
              {
                id: 'FORMULAS',
                label: `Fórmulas (${
                  allCards.filter((c) => c.type === 'formula').length
                })`,
              },
              {
                id: 'TIPS',
                label: `Tips Examen (${
                  allCards.filter((c) => c.type === 'tip').length
                })`,
              },
              {
                id: 'REVIEW',
                label: `Por dominar (${allCards.length - masteredCount})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setCategoryFilter(tab.id);
                  setSingleIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  categoryFilter === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsShuffled((v) => !v)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition cursor-pointer ${
                isShuffled
                  ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                  : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border-[#D8D0C0]'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{isShuffled ? 'Mezcladas' : 'Mezclar'}</span>
            </button>
            <button
              type="button"
              onClick={() => flipAll(true)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#EFEAE0] text-stone-700 border border-[#D8D0C0] text-xs font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Revelar todas</span>
            </button>
            <button
              type="button"
              onClick={() => flipAll(false)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#EFEAE0] text-stone-700 border border-[#D8D0C0] text-xs font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Ocultar todas</span>
            </button>
          </div>
        </div>
      </div>

      {filteredCards.length === 0 ? (
        <div className="bg-white border border-[#E5DEC9] rounded-2xl p-8 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
          <h4 className="text-base font-extrabold text-stone-900">
            ¡Excelente! Ya marcaste todas las tarjetas de este filtro como dominadas.
          </h4>
          <button
            type="button"
            onClick={() => setCategoryFilter('ALL')}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold"
          >
            Ver todas las tarjetas
          </button>
        </div>
      ) : layoutMode === 'single' && activeSingleCard ? (
        /* MODO MAZO 1 POR 1 (ENFOQUE GRANDE) */
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-stone-600 px-1">
            <span>
              Tarjeta {safeSingleIdx + 1} de {filteredCards.length} •{' '}
              <strong className="text-stone-900">
                {activeSingleCard.blockTitle}
              </strong>
            </span>
            <span className="font-mono text-amber-800">
              Haz clic en la tarjeta para voltear
            </span>
          </div>

          <div
            onClick={() => toggleFlip(activeSingleCard.id)}
            className={`rounded-3xl border-2 p-6 sm:p-8 transition-all cursor-pointer shadow-md min-h-[280px] flex flex-col justify-between ${
              flippedMap[activeSingleCard.id]
                ? 'bg-[#FAF7F2] border-teal-500'
                : 'bg-white border-amber-400 hover:border-amber-500'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E5DEC9]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    {activeSingleCard.typeLabel}
                  </span>
                  {activeSingleCard.frontBadge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                      {activeSingleCard.frontBadge}
                    </span>
                  )}
                </div>

                <span className="text-xs font-extrabold text-teal-800 flex items-center gap-1">
                  {flippedMap[activeSingleCard.id] ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Ocultar respuesta
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Mostrar respuesta
                    </>
                  )}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-stone-950 leading-snug mb-4">
                <FormattedRichText text={activeSingleCard.frontTitle} />
              </h3>

              {!flippedMap[activeSingleCard.id] ? (
                <div className="my-8 p-6 rounded-2xl bg-amber-50/70 border border-dashed border-amber-300 text-center space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-amber-950">
                    {activeSingleCard.hintText}
                  </div>
                  <div className="text-xs text-stone-500">
                    Piensa tu respuesta y toca cualquier parte de la tarjeta para comprobarla
                  </div>
                </div>
              ) : (
                <div className="mt-4 pt-2">
                  {renderCardBack(activeSingleCard)}
                </div>
              )}
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t border-[#E5DEC9]"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) =>
                    markCardStatus(activeSingleCard.id, 'mastered', e)
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                    statusMap[activeSingleCard.id] === 'mastered'
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ya lo domino</span>
                </button>
                <button
                  type="button"
                  onClick={(e) =>
                    markCardStatus(activeSingleCard.id, 'review', e)
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                    statusMap[activeSingleCard.id] === 'review'
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repasar luego</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safeSingleIdx === 0}
                  onClick={() => setSingleIndex((i) => Math.max(0, i - 1))}
                  className="px-3.5 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#E5DEC9] disabled:opacity-40 text-xs font-bold text-stone-800 flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <button
                  type="button"
                  disabled={safeSingleIdx >= filteredCards.length - 1}
                  onClick={() =>
                    setSingleIndex((i) =>
                      Math.min(filteredCards.length - 1, i + 1)
                    )
                  }
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-xs font-bold text-white flex items-center gap-1 cursor-pointer"
                >
                  Siguiente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODO MOSAICO DE FLASHCARDS (CUADRÍCULA DE 2 COLUMNAS) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCards.map((card, idx) => {
            const isFlipped = Boolean(flippedMap[card.id]);
            const cardStatus = statusMap[card.id];

            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className={`rounded-2xl border-2 p-5 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                  isFlipped
                    ? 'bg-[#FAF7F2] border-teal-500 md:col-span-2'
                    : cardStatus === 'mastered'
                    ? 'bg-teal-50/40 border-teal-400 hover:border-teal-600'
                    : cardStatus === 'review'
                    ? 'bg-amber-50/60 border-amber-400 hover:border-amber-600'
                    : 'bg-white border-[#E2DAC9] hover:border-amber-400 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-stone-900 text-white font-mono text-[11px] font-bold">
                        #{idx + 1}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                        {card.blockNumber
                          ? `Bloque ${card.blockNumber}`
                          : card.typeLabel}
                      </span>
                      {card.frontBadge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                          {card.frontBadge}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                        isFlipped
                          ? 'bg-stone-200 text-stone-800'
                          : 'bg-amber-500 text-stone-950 shadow-sm'
                      }`}
                    >
                      {isFlipped ? (
                        <>
                          <EyeOff className="w-3 h-3" /> Cerrar tarjeta
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" /> Voltear tarjeta
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-stone-950 leading-snug mb-2">
                    <FormattedRichText text={card.frontTitle} />
                  </h4>

                  {!isFlipped ? (
                    <div className="mt-3 p-3 rounded-xl bg-[#FAF7F2] border border-dashed border-[#D8D0C0] flex items-center justify-between gap-2">
                      <span className="text-xs text-stone-600 font-medium">
                        {card.hintText}
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 shrink-0">
                        Toca para ver →
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-[#E5DEC9]">
                      {renderCardBack(card)}
                    </div>
                  )}
                </div>

                {/* Botones de dominio en el pie de la tarjeta */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between gap-2 pt-3 mt-4 border-t border-[#EFEAE0]"
                >
                  <span className="text-[11px] text-stone-500 truncate">
                    {card.blockTitle}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => markCardStatus(card.id, 'mastered', e)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                        cardStatus === 'mastered'
                          ? 'bg-teal-700 text-white'
                          : 'bg-white hover:bg-teal-50 text-teal-800 border border-teal-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Domino</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => markCardStatus(card.id, 'review', e)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                        cardStatus === 'review'
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-white hover:bg-amber-50 text-amber-900 border border-amber-300'
                      }`}
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Repasar</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
