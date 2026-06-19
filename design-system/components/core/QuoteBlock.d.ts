import { HTMLAttributes } from 'react';

export type QuoteBlockSize = 'sm' | 'md' | 'lg';

/**
 * QuoteBlock — editorial pull quote in Cormorant Garamond italic.
 * Use sparingly: case study openers, section punctuation, editorial accents only.
 * Never for UI text, body paragraphs, or repeated content.
 */
export interface QuoteBlockProps extends HTMLAttributes<HTMLElement> {
  /** The quoted text. Quotation marks are added automatically. */
  quote: string;
  /** Speaker or source name — DM Sans medium below the quote. */
  attribution?: string;
  /** Context label: role, company, date — mono below attribution. */
  context?: string;
  /** Size scale. @default 'md' */
  size?: QuoteBlockSize;
}

export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;
