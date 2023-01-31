export type ForeningTypeValues =
  | 'turgruppe'
  | 'turlag'
  | 'forening'
  | 'sentral';
export type GroupTypeValues =
  | 'barn'
  | 'ung'
  | 'senior'
  | 'fjellsport'
  | 'other';

export const allTypes = {
  forening: {
    turgruppe: {
      id: 'turgruppe',
      label: 'Turgruppe',
      color: 'var(--color-dark-green)',
    },
    turlag: {
      id: 'turlag',
      label: 'Lokalt turlag',
      color: 'var(--color-blue)',
    },
    forening: {
      id: 'forening',
      label: 'Medlemsforening',
      color: 'var(--color-pink)',
    },
    sentral: {
      id: 'sentral',
      label: 'Sentral/nasjonal',
      color: 'var(--color-yellow)',
    },
  },
  group: {
    barn: {
      id: 'barn',
      label: 'Barnas Turlag',
    },
    ung: {
      id: 'ung',
      label: 'Ungdom',
    },
    senior: {
      id: 'senior',
      label: 'DNT Senior',
    },
    fjellsport: {
      id: 'fjellsport',
      label: 'DNT Fjellsport',
    },
    other: {
      id: 'other',
      label: 'Andre turgrupper',
    },
  },
};
