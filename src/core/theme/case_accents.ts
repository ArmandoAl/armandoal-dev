const accents = [
  '--case-accent: var(--md-primary); --case-accent-container: var(--md-primary-container); --case-on-accent-container: var(--md-on-primary-container);',
  '--case-accent: var(--md-tertiary); --case-accent-container: var(--md-tertiary-container); --case-on-accent-container: var(--md-on-tertiary-container);',
];

const secondary = '--case-accent: var(--md-secondary); --case-accent-container: var(--md-secondary-container); --case-on-accent-container: var(--md-on-secondary-container);';

export const caseAccentStyle = (order: number): string => accents[order - 1] ?? secondary;
