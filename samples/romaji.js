// Adapted from the product module; see docs/PROVENANCE.md.
/**
 * Validación de input romaji en tiempo real.
 * Portado de `input_validator.dart` y `meca_evaluator.dart` (kz_domain).
 * Cero dependencias — lógica pura testeable.
 */

/** Estado del input del usuario en tiempo real. */

/** Resultado de la evaluación MECA (onChange). */

/**
 * Alternativas COMPLETAS de romaji aceptadas.
 * Clave: romaji canónico. Valor: alternativas que cuentan como acierto.
 */
export const ROMAJI_ALTERNATIVES                                              = {
  shi: ['si'],
  chi: ['ti'],
  tsu: ['tu'],
  fu: ['hu'],
  ji: ['zi'],
  sha: ['sya'],
  shu: ['syu'],
  sho: ['syo'],
  cha: ['tya'],
  chu: ['tyu'],
  cho: ['tyo'],
  ja: ['zya'],
  ju: ['zyu'],
  jo: ['zyo'],
}         ;

/**
 * Prefijos parciales válidos por romaji canónico.
 * SOLO prefijos parciales — las alternativas completas van en ROMAJI_ALTERNATIVES
 * y se evalúan ANTES que los prefijos (regla de precedencia).
 */
const MULTI_CHAR_PREFIXES                                              = {
  shi: ['s', 'sh'],
  chi: ['c', 'ch', 't'],
  tsu: ['t', 'ts'],
  fu: ['f', 'h'],
  ji: ['j', 'z'],
  sha: ['sh', 's', 'sy'],
  shu: ['sh', 's', 'sy'],
  sho: ['sh', 's', 'sy'],
  cha: ['ch', 'c', 'ty'],
  chu: ['ch', 'c', 'ty'],
  cho: ['ch', 'c', 'ty'],
  ja: ['j', 'z', 'zy'],
  ju: ['j', 'z', 'zy'],
  jo: ['j', 'z', 'zy'],
}         ;

/**
 * Evalúa el paso actual del input contra el target romaji (InputValidator).
 * Precedencia: alternativas completas → prefijo canónico → prefijos de alternativas → error.
 */
export function evaluateStep(input        , targetRomaji        )             {
  if (input.length === 0) return 'neutral';
  if (input === targetRomaji) return 'success';

  // Alternativas COMPLETAS primero (ej. 'si' === 'shi').
  // Debe ir antes de los prefijos para no devolver `progress` cuando
  // el input ya es una alternativa completa válida.
  const alternatives = ROMAJI_ALTERNATIVES[targetRomaji];
  if (alternatives?.includes(input)) return 'success';

  // Prefijo válido del romaji canónico.
  if (targetRomaji.startsWith(input)) return 'progress';

  // Prefijos de alternativas multi-carácter.
  const prefixes = MULTI_CHAR_PREFIXES[targetRomaji];
  if (prefixes?.includes(input)) return 'progress';

  return 'error';
}

/**
 * Evaluación MECA en tiempo real (onChange).
 * Acepta romaji canónico, alternativas o el kana/kanji directo.
 * Misma precedencia que evaluateStep.
 */
export function mecaEvaluate(
  input        ,
  targetRomaji        ,
  targetKana        ,
)                       {
  if (input.length === 0) return 'prefix';

  const normalizedInput = input.trim().toLowerCase();
  const normalizedRomaji = targetRomaji.trim().toLowerCase();
  const trimmedInput = input.trim();

  // Acierto directo (romaji canónico o kana directo).
  if (normalizedInput === normalizedRomaji || trimmedInput === targetKana) return 'hit';

  // Prefijo válido del kana directo (ej. 'か' para 'かん').
  if (targetKana.startsWith(trimmedInput)) return 'prefix';

  // Alternativas completas (ej. 'si' === 'shi').
  const alternatives = ROMAJI_ALTERNATIVES[normalizedRomaji];
  if (alternatives?.includes(normalizedInput)) return 'hit';

  // Prefijo válido del romaji canónico (ej. 'k' para 'ka').
  if (normalizedRomaji.startsWith(normalizedInput)) return 'prefix';

  // Prefijo válido de alternativas (ej. 'sy' para 'sya' cuando target es 'sha').
  if (alternatives) {
    for (const alt of alternatives) {
      if (alt.startsWith(normalizedInput)) return 'prefix';
    }
  }

  return 'error';
}
