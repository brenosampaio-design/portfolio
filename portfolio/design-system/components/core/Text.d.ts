import { ElementType, HTMLAttributes, ReactNode } from 'react';

export type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body'
  | 'small'
  | 'mono'
  | 'eyebrow';

/**
 * Text — the type scale as a component. Geist Sans for everything human;
 * Geist Mono for the technical (metadata, tags, numbers, labels).
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * Type role from the scale. Tracking tightens as type grows.
   * @default 'body'
   */
  variant?: TextVariant;
  /** Render as a different element. Sensible default per variant otherwise. */
  as?: ElementType;
  children: ReactNode;
}

export declare function Text(props: TextProps): JSX.Element;
