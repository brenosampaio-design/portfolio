import { HTMLAttributes } from 'react';

export type DividerVariant = 'hairline' | 'spaced' | 'labeled';

/**
 * Divider — structural separator. Structural, never decorative.
 * hairline: 1px line, no margin.
 * spaced: 1px line with 40px vertical margin.
 * labeled: centered text label flanked by hairlines.
 */
export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /** Visual variant. @default 'hairline' */
  variant?: DividerVariant;
  /** Label text — only renders when variant is 'labeled'. */
  label?: string;
}

export declare function Divider(props: DividerProps): JSX.Element;
