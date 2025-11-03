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
export { default as DuvaLogoSimple } from '@public/DUVA_Logo_Simple.svg?react';
export { default as FreiburgLogo } from '@public/FR_Logo_Rot-1.svg?react';
export { default as AlertCircleIcon } from '@public/icons/alert-circle-outline.svg?react';
// Icons from public/icons/
export { default as Barrierefreiheit } from '@public/icons/barrierefreiheit.svg?react';
export { default as BugIcon } from '@public/icons/bug-outline.svg?react';
export { default as ChevronRight } from '@public/icons/chevron-right.svg?react';
export { default as CloseIcon } from '@public/icons/close-outline.svg?react';
export { default as CreateIcon } from '@public/icons/create-outline.svg?react';
export { default as Gebaerdesprache } from '@public/icons/gebaerdesprache.svg?react';
export { default as LeichteSprache } from '@public/icons/leichte-sprache.svg?react';
export { default as MegaphoneIcon } from '@public/icons/megaphone-outline.svg?react';
export { default as MenuIcon } from '@public/icons/menu.svg?react';
export { default as NotificationIcon } from '@public/icons/notifications-outline.svg?react';
export { default as Person } from '@public/icons/person-outline.svg?react';
export { default as Suche } from '@public/icons/suche.svg?react';
export { default as ThumbsUp } from '@public/icons/thumbs-up-outline.svg?react';
export { default as Trash } from '@public/icons/trash-outline.svg?react';
