/**
 * Icon Components
 *
 * Centralized exports for all SVG icons from the public folder.
 * Import icons using: import { ChevronRight, Suche } from '@icons';
 */

import type { FC, SVGProps } from 'react';

export type Icon = FC<SVGProps<SVGSVGElement>>;

// Logos from public/
export { default as DuvaLogo } from '@public/DUVA_Logo_RGB.svg?react';
export { default as FreiburgLogo } from '@public/FR_Logo_Rot-1.svg?react';
// Icons from public/icons/
export { default as Barrierefreiheit } from '@public/icons/barrierefreiheit.svg?react';
export { default as ChevronRight } from '@public/icons/chevron-right.svg?react';
export { default as Gebaerdesprache } from '@public/icons/gebaerdesprache.svg?react';
export { default as LeichteSprache } from '@public/icons/leichte-sprache.svg?react';
export { default as Suche } from '@public/icons/suche.svg?react';
