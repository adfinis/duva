import type {
  SaveChoiceQuestionInput,
  SaveDateQuestionInput,
  SaveFloatQuestionInput,
  SaveFormInput,
  SaveIntegerQuestionInput,
  SaveOptionInput,
  SaveTextareaQuestionInput,
  SaveTextQuestionInput,
} from '@/gql/__generated__/graphql';

// External JSON structure types (NWS format)
interface ExternalFormData {
  id: string;
  beschreibungText: string;
  zeitbezugVon?: string;
  zeitbezugBis?: string;
  sachdateiAlias?: string;
  sachdateiTabelle?: string;
  satzaufbau: {
    id: string;
    beschreibungText: string;
    satzeintrag: SatzEintrag[];
  };
}

interface SatzEintrag {
  satzPos: number;
  feldAlias: string;
  feldtyp: string; // e.g., "Ordnungsmerkmal" makes field required
  merkmal: {
    id: string;
    beschreibungText: string;
  };
  verschluesselung: {
    id: string;
    verschlusselungstyp: string; // D=Date, Z=Time, I=String, S=Choice, W=Number, G=Geometry
    laenge: number;
    fehlenderWert: unknown;
    beschreibungText: string;
    formatmaske?: string; // For D/Z types
    nachkommastellen?: number; // For W type - determines integer vs float
    schluesseltabellen?: SchluesseltabellenEntry[];
  };
}

interface SchluesseltabellenEntry {
  id: string;
  schluessel: number | string;
  beschreibungText: string;
}

// Parsed Caluma structure
export interface ParsedForm {
  form: SaveFormInput;
  questions: ParsedQuestion[];
}

export interface ParsedQuestion {
  __typename:
    | 'TextQuestion'
    | 'TextareaQuestion'
    | 'IntegerQuestion'
    | 'FloatQuestion'
    | 'DateQuestion'
    | 'ChoiceQuestion';
  input:
    | SaveTextQuestionInput
    | SaveTextareaQuestionInput
    | SaveIntegerQuestionInput
    | SaveFloatQuestionInput
    | SaveDateQuestionInput
    | SaveChoiceQuestionInput;
  options?: SaveOptionInput[];
  originalOrder: number;
}

/**
 * Generate slug from field alias (lowercase, kebab-case)
 * slug entspricht dem FeldAlias
 */
function generateSlug(feldAlias: string): string {
  return feldAlias.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Check if field is required
 * Ordnungsmerkmal → required: true
 */
function isFieldRequired(feldtyp: string): string {
  return feldtyp.toUpperCase() === 'ORDNUNGSMERKMAL' ? 'true' : 'false';
}

/**
 * Parse options from schluesseltabellen
 * Schlüssel → value, Ausprägung (beschreibungText) → label
 */
function parseOptions(
  schluesseltabellen: SchluesseltabellenEntry[],
  questionSlug: string,
): SaveOptionInput[] {
  return schluesseltabellen.map((entry, index) => ({
    slug: `${questionSlug}-option-${index}`,
    label: entry.beschreibungText, // Ausprägung
    isHidden: 'false',
    meta: JSON.stringify({
      originalKey: entry.schluessel, // Schlüssel
      originalId: entry.id,
    }),
  }));
}

/**
 * Parse a single field entry into a Caluma question
 * Maps NWS data types (D/Z/I/S/W/G) to Caluma question types
 */
function parseQuestion(eintrag: SatzEintrag): ParsedQuestion | null {
  const { feldAlias, feldtyp, merkmal, verschluesselung, satzPos } = eintrag;
  const slug = generateSlug(feldAlias);
  const label = verschluesselung.beschreibungText; // Label from Verschlüsselung
  const isRequired = isFieldRequired(feldtyp);
  const typ = verschluesselung.verschlusselungstyp;

  const baseInput = {
    slug,
    label,
    isRequired,
    isHidden: 'false',
    infoText: merkmal.beschreibungText, // Merkmal as additional info
    meta: JSON.stringify({
      originalAlias: feldAlias,
      originalPosition: satzPos,
      verschlusselungsId: verschluesselung.id,
      merkmalId: merkmal.id,
      feldtyp,
    }),
  };

  // D - Datum (Date) → DateQuestion
  if (typ === 'D') {
    const input: SaveDateQuestionInput = {
      ...baseInput,
      hintText: verschluesselung.formatmaske
        ? `Format: ${verschluesselung.formatmaske}`
        : 'Date',
    };
    return { __typename: 'DateQuestion', input, originalOrder: satzPos };
  }

  // Z - Zeit (Time) → DateQuestion (Caluma doesn't have separate Time type)
  if (typ === 'Z') {
    const input: SaveDateQuestionInput = {
      ...baseInput,
      hintText: verschluesselung.formatmaske
        ? `Time format: ${verschluesselung.formatmaske}`
        : 'Time',
    };
    return { __typename: 'DateQuestion', input, originalOrder: satzPos };
  }

  // G - Geometrie (Geometry) → No mapping, skip
  if (typ === 'G') {
    console.info(`Skipping geometry field: ${feldAlias}`);
    return null;
  }

  // I - Identifizierender Schlüssel (identifying key)
  // ≤200 chars → TextQuestion, >200 chars → TextareaQuestion
  if (typ === 'I') {
    if (verschluesselung.laenge <= 200) {
      const input: SaveTextQuestionInput = {
        ...baseInput,
        maxLength: verschluesselung.laenge,
        hintText: `Max ${verschluesselung.laenge} characters`,
      };
      return { __typename: 'TextQuestion', input, originalOrder: satzPos };
    }
    const input: SaveTextareaQuestionInput = {
      ...baseInput,
      maxLength: verschluesselung.laenge,
      hintText: `Max ${verschluesselung.laenge} characters`,
    };
    return { __typename: 'TextareaQuestion', input, originalOrder: satzPos };
  }

  // S - Schlüsseltabelle (key table) → ChoiceQuestion
  if (typ === 'S') {
    if (!verschluesselung.schluesseltabellen?.length) {
      console.warn(`Choice field ${feldAlias} has no options, skipping`);
      return null;
    }
    const options = parseOptions(verschluesselung.schluesseltabellen, slug);
    const input: SaveChoiceQuestionInput = {
      ...baseInput,
      hintText: `Select from ${options.length} options`,
      options: [], // Will be populated with option IDs after creation
    };
    return {
      __typename: 'ChoiceQuestion',
      input,
      options,
      originalOrder: satzPos,
    };
  }

  // W - Wert (value/number)
  // nachkommastellen > 0 → FloatQuestion, else → IntegerQuestion
  if (typ === 'W') {
    const hasDecimals =
      verschluesselung.nachkommastellen != null &&
      verschluesselung.nachkommastellen > 0;

    if (hasDecimals) {
      const input: SaveFloatQuestionInput = {
        ...baseInput,
        hintText: `Number with ${verschluesselung.nachkommastellen} decimal places`,
      };
      return { __typename: 'FloatQuestion', input, originalOrder: satzPos };
    }

    const input: SaveIntegerQuestionInput = {
      ...baseInput,
      maxValue: Number.parseInt('9'.repeat(verschluesselung.laenge)),
      hintText: `Max ${verschluesselung.laenge} digits`,
    };
    return { __typename: 'IntegerQuestion', input, originalOrder: satzPos };
  }

  // Unknown type - fallback to TextQuestion with warning
  console.warn(
    `Unknown verschlusselungstyp '${typ}' for field ${feldAlias}, using TextQuestion`,
  );
  const input: SaveTextQuestionInput = {
    ...baseInput,
    maxLength: verschluesselung.laenge || 255,
  };
  return { __typename: 'TextQuestion', input, originalOrder: satzPos };
}

/**
 * Parse external NWS JSON data into Caluma form structure
 */
export function parseExternalForm(data: ExternalFormData): ParsedForm {
  const { beschreibungText, zeitbezugVon, zeitbezugBis, satzaufbau } = data;

  // Create form input
  const form: SaveFormInput = {
    slug: generateSlug(satzaufbau.beschreibungText),
    name: beschreibungText,
    description: `${satzaufbau.beschreibungText}${zeitbezugVon ? ` (${zeitbezugVon} - ${zeitbezugBis})` : ''}`,
    isPublished: false,
    meta: JSON.stringify({
      originalId: data.id,
      sachdateiAlias: data.sachdateiAlias,
      sachdateiTabelle: data.sachdateiTabelle,
      zeitbezugVon,
      zeitbezugBis,
      satzaufbauId: satzaufbau.id,
    }),
  };

  // Parse all questions, filtering out null (skipped) ones
  const questions = satzaufbau.satzeintrag
    .map(parseQuestion)
    .filter((q): q is ParsedQuestion => q !== null)
    .sort((a, b) => a.originalOrder - b.originalOrder);

  return { form, questions };
}
