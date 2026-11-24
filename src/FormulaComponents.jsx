import React, { useState } from 'react';
import {
  Calculator,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Target,
} from 'lucide-react';

/**
 * Convierte una cadena matemática (con subíndices _, superíndices ^, raíces √(...)
 * y símbolos especiales ∑, ∫, ≥, ≤, ∝, ⊕) en elementos JSX con tipografía matemática real.
 */
export function MathExpression({ text, className = '', noBadge = false }) {
  if (!text || typeof text !== 'string') return null;

  // Tokenizador de expresiones matemáticas y notaciones técnicas:
  // 1) Código inline entre backticks: `...`
  // 2) Notación asintótica Big-O / McCabe: O(...) o V(G)
  // 3) Raíz cuadrada con paréntesis: √(...)
  // 4) Base con subíndice (_) y/o superíndice (^) obligatorio: Palabra_(...) o Palabra_sub o Palabra^(...) o Palabra^sup
  // 5) Símbolos especiales: ∑, ∫, ≥, ≤, ≠, ≈, ∝, ⇔, ⇒, →, ⊕, ×, ·
  const tokenRegex =
    /(`[^`]+`|\bO\((?:1|log(?:_?2|₂)?\s*n|n\s*(?:·\s*)?log(?:_?2|₂)?\s*n|n[²³23]?|V[²³23]?|E\s*log\s*[EV]|\(V\s*\+\s*E\)\s*log\s*V|V\s*\+\s*E|2\^n|n!)\)|\bV\(G\)|√\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9~']+(?:_(?:\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+)(?:\^(?:\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))?|\^(?:\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))|[∑∫≥≤≠≈∝⇔⇒→⊕×·])/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        value: text.slice(lastIndex, match.index),
      });
    }
    parts.push({
      type: 'token',
      value: match[0],
    });
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      value: text.slice(lastIndex),
    });
  }

  const renderSingleToken = (tok, key) => {
    // 0. Código inline entre backticks `...`
    if (tok.startsWith('`') && tok.endsWith('`') && tok.length > 2) {
      const innerCode = tok.slice(1, -1);
      if (noBadge) {
        return <MathExpression key={key} text={innerCode} noBadge />;
      }
      return (
        <code
          key={key}
          className={`px-1.5 py-0.5 mx-0.5 rounded-md bg-teal-100/90 text-teal-950 font-mono text-[0.9em] font-bold border border-teal-300/80 ${
            innerCode.length <= 18 ? 'whitespace-nowrap' : 'break-words'
          }`}
        >
          <MathExpression text={innerCode} noBadge />
        </code>
      );
    }

    // 0.5 Notación Big-O o V(G): nunca partirse a mitad de línea
    if (/^(?:O\(.+\)|V\(G\))$/.test(tok)) {
      if (noBadge) {
        return (
          <span key={key} className="whitespace-nowrap font-mono font-extrabold">
            {tok}
          </span>
        );
      }
      return (
        <span
          key={key}
          className="inline-block px-1.5 py-0.2 mx-0.5 rounded-md bg-indigo-50 text-indigo-950 font-mono text-[0.92em] font-extrabold border border-indigo-200/90 whitespace-nowrap align-baseline"
        >
          {tok}
        </span>
      );
    }

    // 1. Raíz cuadrada: √(contenido)
    if (tok.startsWith('√(') && tok.endsWith(')')) {
      const inner = tok.slice(2, -1);
      return (
        <span
          key={key}
          className="inline-flex items-baseline font-serif font-bold mx-0.5"
        >
          <span className="text-teal-800 text-[1.15em] leading-none mr-[1px]">
            √
          </span>
          <span className="border-t-2 border-teal-800 px-1 pt-[1px] leading-tight">
            <MathExpression text={inner} />
          </span>
        </span>
      );
    }

    // 2. Operadores y símbolos matemáticos destacados
    if (/^[∑∫]$/.test(tok)) {
      return (
        <span
          key={key}
          className="inline-block font-serif font-black text-[1.25em] text-amber-800 mx-0.5 align-middle leading-none"
        >
          {tok}
        </span>
      );
    }

    if (/^[≥≤≠≈∝⇔⇒→⊕×·]$/.test(tok)) {
      return (
        <span
          key={key}
          className="inline-block font-mono font-black text-teal-800 mx-0.5"
        >
          {tok}
        </span>
      );
    }

    // 3. Variables con subíndice (_) y/o superíndice (^)
    const subSupMatch = tok.match(
      /^([A-Za-zΑ-Ωα-ω0-9~']+?)(?:_(\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))?(?:\^(\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))?$/
    );

    if (subSupMatch && (subSupMatch[2] || subSupMatch[3])) {
      const base = subSupMatch[1];
      const rawSub = subSupMatch[2]
        ? subSupMatch[2].replace(/^\(|\)$/g, '')
        : null;
      const rawSup = subSupMatch[3]
        ? subSupMatch[3].replace(/^\(|\)$/g, '')
        : null;

      return (
        <span key={key} className="inline-flex items-baseline">
          <span className="font-serif italic font-bold text-stone-950">
            {base}
          </span>
          {rawSub && (
            <sub className="text-[0.74em] font-sans font-extrabold text-teal-900 not-italic ml-[1px] -bottom-[0.2em]">
              {rawSub}
            </sub>
          )}
          {rawSup && (
            <sup className="text-[0.74em] font-mono font-extrabold text-[#D95D39] not-italic ml-[1px] -top-[0.45em]">
              {rawSup}
            </sup>
          )}
        </span>
      );
    }

    return <React.Fragment key={key}>{tok}</React.Fragment>;
  };

  return (
    <span className={`inline ${className}`}>
      {parts.map((p, idx) =>
        p.type === 'token' ? (
          renderSingleToken(p.value, idx)
        ) : (
          <React.Fragment key={idx}>{p.value}</React.Fragment>
        )
      )}
    </span>
  );
}

/**
 * Divide una cadena de símbolos separados por coma (respetando paréntesis)
 * para mostrar cada símbolo como un chip individual limpio y sin saltos internos.
 */
function splitSymbolChips(symbolStr) {
  if (!symbolStr || typeof symbolStr !== 'string') return [];
  const chips = [];
  let cur = '';
  let depth = 0;
  for (let i = 0; i < symbolStr.length; i++) {
    const ch = symbolStr[i];
    if (ch === '(' || ch === '[') depth++;
    else if ((ch === ')' || ch === ']') && depth > 0) depth--;

    if (depth === 0 && ch === ',') {
      if (cur.trim()) chips.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) chips.push(cur.trim());
  return chips;
}

/**
 * Divide un texto por un carácter separador únicamente en profundidad de paréntesis 0.
 */
function splitAtDepthZero(str, separatorRegex) {
  if (!str || typeof str !== 'string') return [];
  const res = [];
  let cur = '';
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(' || ch === '[') depth++;
    else if ((ch === ')' || ch === ']') && depth > 0) depth--;

    if (depth === 0) {
      const rest = str.slice(i);
      const m = rest.match(separatorRegex);
      if (m && m.index === 0) {
        if (cur.trim()) res.push(cur.trim());
        cur = '';
        i += m[0].length - 1;
        continue;
      }
    }
    cur += ch;
  }
  if (cur.trim()) res.push(cur.trim());
  return res;
}

/**
 * Formatea una cláusula individual resaltando en negrita su concepto o etiqueta inicial.
 */
function FormattedClause({ text }) {
  if (!text || typeof text !== 'string') return null;
  const clean = text.trim();

  // Detectar prefijo antes de ":" o "=" o "→" en los primeros 55 caracteres
  let depth = 0;
  let splitIdx = -1;
  let splitChar = '';
  for (let i = 0; i < Math.min(clean.length, 55); i++) {
    const ch = clean[i];
    if (ch === '(' || ch === '[') depth++;
    else if ((ch === ')' || ch === ']') && depth > 0) depth--;
    else if (depth === 0 && (ch === ':' || ch === '=' || ch === '→')) {
      splitIdx = i;
      splitChar = ch;
      break;
    }
  }

  if (splitIdx > 0) {
    const head = clean.slice(0, splitIdx + (splitChar === ':' ? 1 : 0)).trim();
    const tail = clean.slice(splitIdx + 1).trim();
    return (
      <span>
        <strong className="font-extrabold text-stone-950">
          <MathExpression text={head} />
        </strong>
        {splitChar !== ':' && (
          <span className="font-mono font-black text-teal-800 mx-1">
            {splitChar}
          </span>
        )}
        {splitChar === ':' ? ' ' : ''}
        <MathExpression text={tail} />
      </span>
    );
  }

  return <MathExpression text={clean} />;
}

/**
 * Renderiza el significado de una variable (`v.meaning`) de forma visual y estructurada:
 * - Si es una jerarquía separada por `<` (como Big-O), muestra tarjetas numeradas paso a paso.
 * - Si es una escala de niveles (como Syslog 0: Emergency, 1: Alert...), muestra chips visuales.
 * - Si tiene múltiples oraciones o puntos separados por `;`, los desglosa en viñetas fáciles de leer.
 */
function StructuredVariableMeaning({ text }) {
  if (!text || typeof text !== 'string') return null;

  // 1. Detectar jerarquía de comparación con "<" (ej. O(1) Constante < O(log n) Logarítmica < ...)
  const lessThanParts = splitAtDepthZero(text.replace(/\.\s*$/, ''), /^\s*<\s*/);
  if (lessThanParts.length >= 3) {
    const tierStyles = [
      'bg-emerald-50/90 border-emerald-300 text-emerald-950',
      'bg-teal-50/90 border-teal-300 text-teal-950',
      'bg-amber-50/90 border-amber-300 text-amber-950',
      'bg-orange-50/90 border-orange-300 text-orange-950',
      'bg-rose-50/90 border-rose-300 text-rose-950',
    ];

    return (
      <div className="space-y-2 pt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {lessThanParts.map((part, idx) => {
            const style = tierStyles[Math.min(idx, tierStyles.length - 1)];
            const parenMatch = part.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
            const mainLabel = parenMatch ? parenMatch[1].trim() : part;
            const subDetail = parenMatch ? parenMatch[2].trim() : '';

            return (
              <div
                key={idx}
                className={`rounded-xl border p-2.5 flex flex-col justify-between gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${style}`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/80 border border-current/20">
                    {idx + 1}° {idx === 0 ? 'Más rápido' : idx === lessThanParts.length - 1 ? 'Más lento' : ''}
                  </span>
                </div>
                <div className="text-xs font-extrabold leading-snug">
                  <MathExpression text={mainLabel} />
                </div>
                {subDetail && (
                  <div className="text-[11px] font-medium opacity-90 leading-tight pt-0.5 border-t border-current/15">
                    <MathExpression text={subDetail} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Detectar escala de códigos separados por comas (ej. "0: Emergency, 1: Alert, 2: Critical...")
  const sentences = splitAtDepthZero(text, /^(?:\.|;)\s+/);
  const firstSentence = sentences[0] || '';
  const commaColonItems = splitAtDepthZero(firstSentence, /^,\s+/);
  const isColonScale =
    commaColonItems.length >= 4 &&
    commaColonItems.every((item) => /^[^:]{1,12}:\s+.+$/.test(item));

  if (isColonScale) {
    const restSentences = sentences.slice(1);
    return (
      <div className="space-y-2 pt-1">
        <div className="flex flex-wrap gap-1.5">
          {commaColonItems.map((item, idx) => {
            const [k, ...vRest] = item.split(':');
            return (
              <span
                key={idx}
                className="px-2 py-1 rounded-lg bg-[#FAF7F2] border border-[#DFD7C6] text-[11px] text-stone-800 inline-flex items-center gap-1"
              >
                <strong className="font-mono font-black text-teal-900">
                  {k.trim()}:
                </strong>
                <span className="font-semibold">{vRest.join(':').trim()}</span>
              </span>
            );
          })}
        </div>
        {restSentences.map((s, sIdx) => (
          <div
            key={sIdx}
            className="text-[11px] sm:text-xs font-bold text-amber-950 bg-amber-50/80 border border-amber-200 rounded-lg px-2.5 py-1.5"
          >
            <FormattedClause text={s} />
          </div>
        ))}
      </div>
    );
  }

  // 3. Si tiene múltiples cláusulas separadas por ";" o ". ", mostrarlas como lista de viñetas limpia
  if (sentences.length >= 2) {
    return (
      <ul className="space-y-1.5 pt-0.5">
        {sentences.map((clause, cIdx) => (
          <li
            key={cIdx}
            className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-700 leading-relaxed"
          >
            <span className="text-teal-700 font-black mt-0.5 shrink-0">▸</span>
            <div className="flex-1 min-w-0 break-words">
              <FormattedClause text={clause} />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // 4. Oración simple enriquecida
  return (
    <p className="text-[11px] sm:text-xs text-stone-700 leading-relaxed break-words">
      <FormattedClause text={text} />
    </p>
  );
}

/**
 * Renderiza el bloque "Cómo hacer Match en la pregunta EGEL" desglosando listas
 * numeradas 1), 2), 3) o reglas separadas por ";" en tarjetas visuales escaneables.
 */
function StructuredExamMatch({ text }) {
  if (!text || typeof text !== 'string') return null;

  // Detectar si contiene puntos numerados 1) ... 2) ...
  const numberedSplit = text.split(/(?:^|[\s:;])(?=\d+\)\s)/);
  const numberedItems = [];
  let introText = '';

  if (numberedSplit.length >= 2) {
    numberedSplit.forEach((seg) => {
      const trimmed = seg.trim().replace(/[;.]$/, '');
      const m = trimmed.match(/^(\d+)\)\s*(.*)$/);
      if (m) {
        numberedItems.push({ num: m[1], body: m[2].trim() });
      } else if (trimmed) {
        introText = trimmed.replace(/:$/, '');
      }
    });
  }

  if (numberedItems.length >= 2) {
    return (
      <div className="space-y-2 mt-1">
        {introText && (
          <div className="text-xs font-bold text-amber-950">
            <MathExpression text={introText} />:
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {numberedItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-amber-300/90 rounded-xl p-2.5 flex items-start gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span className="w-5 h-5 rounded-md bg-[#D95D39] text-white font-mono text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                {item.num}
              </span>
              <div className="flex-1 min-w-0 text-[11px] sm:text-xs text-stone-800 leading-relaxed break-words">
                <FormattedClause text={item.body} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Detectar lista de valores rápidos separados por ";" (ej. "/24 = 254 hosts; /25 = 126 hosts...")
  const semiParts = splitAtDepthZero(text, /^;\s+/);
  if (semiParts.length >= 3) {
    let firstIntro = '';
    const chipItems = [...semiParts];
    const colonPos = chipItems[0].indexOf(':');
    if (colonPos !== -1 && colonPos < 70) {
      firstIntro = chipItems[0].slice(0, colonPos).trim();
      chipItems[0] = chipItems[0].slice(colonPos + 1).trim();
    }

    return (
      <div className="space-y-2 mt-1">
        {firstIntro && (
          <div className="text-xs font-bold text-amber-950">
            <MathExpression text={firstIntro} />:
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {chipItems.map((c, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-amber-300 rounded-lg px-2.5 py-1.5 text-[11px] sm:text-xs text-stone-800 leading-snug"
            >
              <FormattedClause text={c.replace(/\.$/, '')} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Múltiples oraciones separadas por ". "
  const sentences = splitAtDepthZero(text, /^\.\s+/);
  if (sentences.length >= 2) {
    return (
      <ul className="space-y-1.5 mt-1">
        {sentences.map((s, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-xs text-amber-950 leading-relaxed"
          >
            <span className="text-[#D95D39] font-black mt-0.5 shrink-0">▸</span>
            <div className="flex-1 min-w-0 break-words">
              <FormattedClause text={s} />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-0.5 text-xs text-amber-950 leading-relaxed">
      <FormattedClause text={text} />
    </div>
  );
}

/**
 * Renderiza una fracción matemática apilada verticalmente con barra divisoria real.
 */
function VisualFraction({ num, den }) {
  return (
    <span className="inline-flex flex-col items-center justify-center align-middle mx-1.5 my-0.5 px-2.5 py-1 rounded-xl bg-white border border-[#D8D0C0] shadow-[0_1px_2px_rgba(0,0,0,0.04)] max-w-full">
      <span className="px-1.5 pb-1 text-center text-xs sm:text-sm font-bold text-stone-900 border-b-2 border-stone-800 w-full leading-tight break-words">
        <MathExpression text={num} />
      </span>
      <span className="px-1.5 pt-1 text-center text-xs sm:text-sm font-bold text-stone-900 leading-tight break-words">
        <MathExpression text={den} />
      </span>
    </span>
  );
}

/**
 * Renderiza un bloque de ecuación individual con formato visual matemático
 * (soporta fracciones apiladas, prefijos, operadores resaltados y sufijos).
 */
export function StructuredEquationBox({ eq }) {
  if (!eq) return null;

  return (
    <div className="bg-[#FAF7F2] border border-[#E2DAC8] rounded-xl p-3 sm:p-3.5 flex flex-col justify-between gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] min-w-0">
      {eq.title && (
        <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-stone-500 break-words">
          {eq.title}
        </div>
      )}

      <div className="bg-white border border-[#E5DEC9] rounded-xl px-3 sm:px-3.5 py-2.5 flex flex-wrap items-center gap-1.5 text-xs sm:text-base font-bold text-stone-950 overflow-x-auto min-w-0">
        {eq.lhs && (
          <span className="font-extrabold text-stone-950 min-w-0 break-words">
            <MathExpression text={eq.lhs} />
          </span>
        )}

        {eq.op && (
          <span className="px-1.5 py-0.5 rounded-md bg-amber-100/90 text-amber-950 font-mono text-xs sm:text-sm font-black border border-amber-300/80 mx-0.5 shrink-0">
            {eq.op}
          </span>
        )}

        {eq.lhsPrefix && (
          <span className="font-extrabold text-stone-950 ml-1 min-w-0 break-words">
            <MathExpression text={eq.lhsPrefix} />
          </span>
        )}

        {eq.fraction && (
          <VisualFraction num={eq.fraction.num} den={eq.fraction.den} />
        )}

        {eq.rhs && (
          <span className="font-bold text-stone-900 min-w-0 break-words">
            <MathExpression text={eq.rhs} />
          </span>
        )}

        {eq.rhsSuffix && (
          <span className="font-bold text-stone-800 min-w-0 break-words">
            <MathExpression text={eq.rhsSuffix} />
          </span>
        )}

        {eq.trailingFraction && (
          <VisualFraction
            num={eq.trailingFraction.num}
            den={eq.trailingFraction.den}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Tarjeta completa de una Fórmula:
 * - Cabecera con nombre, categoría y botón de copiar
 * - Ecuaciones matemáticas con formato visual (fracciones, exponentes, subíndices, raíces)
 * - Glosario detallado de cada variable ("¿Qué significa cada variable y su unidad?")
 * - Tip de Match directo con preguntas del examen CENEVAL EGEL
 */
export function FormulaCard({
  formula,
  index,
  defaultExpanded = true,
  compact = false,
}) {
  const [showVars, setShowVars] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);

  if (!formula) return null;

  const handleCopy = (e) => {
    e.stopPropagation();
    const copyStr = `${formula.label}: ${formula.code}`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(copyStr);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const hasVariables =
    Array.isArray(formula.variables) && formula.variables.length > 0;
  const hasEquations =
    Array.isArray(formula.equations) && formula.equations.length > 0;

  return (
    <div className="bg-white border-2 border-[#E2DAC8] hover:border-teal-500/70 rounded-2xl p-4 sm:p-5 transition-all shadow-sm space-y-4 min-w-0">
      {/* Cabecera de la Fórmula */}
      <div className="flex flex-wrap items-start justify-between gap-2.5 pb-3 border-b border-[#EFEAE0]">
        <div className="flex items-start gap-2.5 flex-1 min-w-[180px] sm:min-w-[220px]">
          {typeof index === 'number' && (
            <span className="px-2 py-0.5 rounded-lg bg-teal-800 text-white font-mono text-[11px] font-extrabold shrink-0 mt-0.5">
              F{index + 1}
            </span>
          )}
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm sm:text-base font-extrabold text-stone-950 leading-snug break-words">
                {formula.label}
              </h4>
              {formula.category && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                  {formula.category}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {hasVariables && (
            <button
              type="button"
              onClick={() => setShowVars((v) => !v)}
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold flex items-center gap-1 transition cursor-pointer ${
                showVars
                  ? 'bg-teal-100 text-teal-950 border border-teal-300'
                  : 'bg-[#FAF7F2] hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>
                {showVars
                  ? `Ocultar variables (${formula.variables.length})`
                  : `Ver qué significa cada variable (${formula.variables.length})`}
              </span>
              {showVars ? (
                <ChevronUp className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="px-2.5 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-teal-50 text-stone-700 hover:text-teal-900 border border-[#D8D0C0] text-[11px] font-bold flex items-center gap-1 transition cursor-pointer shrink-0"
            title="Copiar fórmula y resumen"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-teal-700" />
                <span className="text-teal-800">Copiada</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Ecuaciones Matemáticas Formateadas Visualmente */}
      {hasEquations ? (
        <div
          className={`grid grid-cols-1 ${
            formula.equations.length > 1 && !compact
              ? 'md:grid-cols-2'
              : 'grid-cols-1'
          } gap-2.5 min-w-0`}
        >
          {formula.equations.map((eq, eqIdx) => (
            <StructuredEquationBox key={eqIdx} eq={eq} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-3.5 text-sm font-bold text-stone-900 break-words">
          <MathExpression text={formula.code} />
        </div>
      )}

      {/* Desglose Explicativo de Variables ("¿Qué significa cada variable?") */}
      {hasVariables && showVars && (
        <div className="bg-[#FAF7F2] border border-[#E2DAC8] rounded-xl p-3.5 sm:p-4 space-y-2.5 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>
                Significado de cada Variable y Unidades (Sin confusión en el examen):
              </span>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 ${
              compact ? 'grid-cols-1' : 'sm:grid-cols-2'
            } gap-3 min-w-0`}
          >
            {formula.variables.map((v, vIdx) => {
              const symbolChips = splitSymbolChips(v.symbol);
              const isWideVariable =
                !compact &&
                (symbolChips.length >= 3 ||
                  (v.meaning && v.meaning.length > 145) ||
                  (formula.variables.length % 2 === 1 &&
                    vIdx === formula.variables.length - 1));

              return (
                <div
                  key={vIdx}
                  className={`bg-white border border-[#E5DEC9] rounded-xl p-3 sm:p-3.5 flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] min-w-0 ${
                    isWideVariable ? 'sm:col-span-2' : ''
                  }`}
                >
                  {/* Fila 1: Chips de Símbolos + Unidad */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-[#F3EFE6]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {symbolChips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className={`px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-300 text-teal-950 font-bold text-xs sm:text-sm inline-flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.02)] ${
                            chip.length <= 22
                              ? 'whitespace-nowrap'
                              : 'break-words max-w-full'
                          }`}
                        >
                          <MathExpression text={chip} noBadge />
                        </span>
                      ))}
                    </div>

                    {v.unit && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-700 border border-[#D8D0C0] shrink-0">
                        {v.unit}
                      </span>
                    )}
                  </div>

                  {/* Fila 2: Nombre de la Variable a ancho completo */}
                  <div className="text-xs sm:text-[13px] font-extrabold text-stone-950 leading-snug break-words">
                    {v.name}
                  </div>

                  {/* Fila 3: Explicación estructurada en viñetas o escalera visual */}
                  <StructuredVariableMeaning text={v.meaning} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tip de Match Directo con Reactivos del Examen */}
      {formula.examMatch && (
        <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-3.5 text-xs text-amber-950 leading-relaxed flex items-start gap-2.5">
          <Target className="w-4 h-4 text-[#D95D39] shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0 break-words">
            <div className="font-extrabold text-[#D95D39] uppercase tracking-wider text-[11px]">
              Cómo hacer Match rápido en la pregunta EGEL:
            </div>
            <StructuredExamMatch text={formula.examMatch} />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Sección completa de Fórmulas Formateadas y Glosario de Variables para una Subárea.
 */
export function FormulaSectionList({
  formulas = [],
  title = 'Fórmulas Formateadas, Significado de Variables y Reglas de Match',
  compact = false,
}) {
  const [expandAllVars, setExpandAllVars] = useState(true);

  if (!formulas || formulas.length === 0) return null;

  return (
    <div className="bg-white border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EFEAE0]">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-stone-900 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-teal-700 shrink-0" />
            <span>{title}</span>
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Cada ecuación muestra su estructura matemática real, qué significa cada variable, sus unidades y cómo identificarla en los reactivos.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExpandAllVars((v) => !v)}
          className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0] text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer shrink-0"
        >
          <BookOpen className="w-3.5 h-3.5 text-teal-700" />
          <span>
            {expandAllVars
              ? 'Contraer glosarios de variables'
              : 'Expandir todas las variables'}
          </span>
        </button>
      </div>

      <div className="space-y-4">
        {formulas.map((f, idx) => (
          <FormulaCard
            key={`${f.id || idx}_${expandAllVars}`}
            formula={f}
            index={idx}
            defaultExpanded={expandAllVars}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
}
