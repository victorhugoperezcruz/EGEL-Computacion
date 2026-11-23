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
export function MathExpression({ text, className = '' }) {
  if (!text || typeof text !== 'string') return null;

  // Tokenizador de expresiones matemáticas:
  // 1) Raíz cuadrada con paréntesis: √(...)
  // 2) Base con subíndice y/o superíndice: Palabra_(...) o Palabra_sub o Palabra^(...) o Palabra^sup
  // 3) Símbolos especiales: ∑, ∫, ≥, ≤, ≠, ≈, ∝, ⇔, ⇒, →, ⊕, ×, ·
  const tokenRegex =
    /(√\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9~']+(?:_(?:\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))?(?:\^(?:\([^()]+\)|[A-Za-zΑ-Ωα-ω0-9/+-]+))?|[∑∫≥≤≠≈∝⇔⇒→⊕×·])/g;

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
    <span className={`inline-flex flex-wrap items-baseline gap-y-1 ${className}`}>
      {parts.map((p, idx) =>
        p.type === 'token' ? (
          renderSingleToken(p.value, idx)
        ) : (
          <span key={idx} className="whitespace-pre-wrap">
            {p.value}
          </span>
        )
      )}
    </span>
  );
}

/**
 * Renderiza una fracción matemática apilada verticalmente con barra divisoria real.
 */
function VisualFraction({ num, den }) {
  return (
    <span className="inline-flex flex-col items-center justify-center align-middle mx-1.5 my-0.5 px-2.5 py-1 rounded-xl bg-white border border-[#D8D0C0] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <span className="px-1.5 pb-1 text-center text-xs sm:text-sm font-bold text-stone-900 border-b-2 border-stone-800 w-full leading-tight">
        <MathExpression text={num} />
      </span>
      <span className="px-1.5 pt-1 text-center text-xs sm:text-sm font-bold text-stone-900 leading-tight">
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
    <div className="bg-[#FAF7F2] border border-[#E2DAC8] rounded-xl p-3 sm:p-3.5 flex flex-col justify-between gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      {eq.title && (
        <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
          {eq.title}
        </div>
      )}

      <div className="bg-white border border-[#E5DEC9] rounded-xl px-3.5 py-2.5 flex flex-wrap items-center gap-1.5 text-sm sm:text-base font-bold text-stone-950 overflow-x-auto">
        {eq.lhs && (
          <span className="font-extrabold text-stone-950">
            <MathExpression text={eq.lhs} />
          </span>
        )}

        {eq.op && (
          <span className="px-1.5 py-0.5 rounded-md bg-amber-100/90 text-amber-950 font-mono text-xs sm:text-sm font-black border border-amber-300/80 mx-0.5">
            {eq.op}
          </span>
        )}

        {eq.lhsPrefix && (
          <span className="font-extrabold text-stone-950 ml-1">
            <MathExpression text={eq.lhsPrefix} />
          </span>
        )}

        {eq.fraction && (
          <VisualFraction num={eq.fraction.num} den={eq.fraction.den} />
        )}

        {eq.rhs && (
          <span className="font-bold text-stone-900">
            <MathExpression text={eq.rhs} />
          </span>
        )}

        {eq.rhsSuffix && (
          <span className="font-bold text-stone-800">
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
    <div className="bg-white border-2 border-[#E2DAC8] hover:border-teal-500/70 rounded-2xl p-4 sm:p-5 transition-all shadow-sm space-y-4">
      {/* Cabecera de la Fórmula */}
      <div className="flex flex-wrap items-start justify-between gap-2.5 pb-3 border-b border-[#EFEAE0]">
        <div className="flex items-start gap-2.5 flex-1 min-w-[220px]">
          {typeof index === 'number' && (
            <span className="px-2 py-0.5 rounded-lg bg-teal-800 text-white font-mono text-[11px] font-extrabold shrink-0 mt-0.5">
              F{index + 1}
            </span>
          )}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm sm:text-base font-extrabold text-stone-950 leading-snug">
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

        <div className="flex items-center gap-2 shrink-0">
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
              <BookOpen className="w-3.5 h-3.5 text-teal-700" />
              <span>
                {showVars
                  ? `Ocultar variables (${formula.variables.length})`
                  : `Ver qué significa cada variable (${formula.variables.length})`}
              </span>
              {showVars ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="px-2.5 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-teal-50 text-stone-700 hover:text-teal-900 border border-[#D8D0C0] text-[11px] font-bold flex items-center gap-1 transition cursor-pointer"
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
          } gap-2.5`}
        >
          {formula.equations.map((eq, eqIdx) => (
            <StructuredEquationBox key={eqIdx} eq={eq} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl p-3.5 text-sm font-bold text-stone-900">
          <MathExpression text={formula.code} />
        </div>
      )}

      {/* Desglose Explicativo de Variables ("¿Qué significa cada variable?") */}
      {hasVariables && showVars && (
        <div className="bg-[#FAF7F2] border border-[#E2DAC8] rounded-xl p-3.5 sm:p-4 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>
                Significado de cada Variable y Unidades (Sin confusión en el examen):
              </span>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 ${
              compact ? 'grid-cols-1' : 'sm:grid-cols-2'
            } gap-2.5`}
          >
            {formula.variables.map((v, vIdx) => (
              <div
                key={vIdx}
                className="bg-white border border-[#E5DEC9] rounded-xl p-2.5 sm:p-3 flex items-start gap-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <div className="px-2.5 py-1.5 rounded-lg bg-teal-50 border border-teal-300 text-teal-950 font-bold text-xs sm:text-sm shrink-0 min-w-[44px] text-center flex items-center justify-center">
                  <MathExpression text={v.symbol} />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-xs font-extrabold text-stone-950 leading-snug">
                      {v.name}
                    </span>
                    {v.unit && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-700 border border-[#D8D0C0]">
                        {v.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-700 leading-relaxed">
                    {v.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tip de Match Directo con Reactivos del Examen */}
      {formula.examMatch && (
        <div className="bg-amber-50/90 border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs text-amber-950 leading-relaxed flex items-start gap-2">
          <Target className="w-4 h-4 text-[#D95D39] shrink-0 mt-0.5" />
          <div>
            <strong className="font-extrabold text-[#D95D39] mr-1">
              Cómo hacer Match en la pregunta EGEL:
            </strong>
            <MathExpression text={formula.examMatch} />
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
