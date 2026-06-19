import { HTMLAttributes } from 'react';

/**
 * PrincipleCard — a single design or brand principle.
 * Used in documentation, presentation boards, and about pages.
 */
export interface PrincipleCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Short concept annotation — Japanese term, keyword, or dash (e.g. '間 ma'). Optional. */
  annotation?: string;
  /** The principle statement — concise, direct, sentence-cased. */
  principle: string;
  /** Brief description — one or two plain sentences. */
  description?: string;
  /** Sequence number — auto-padded to '01', '02', etc. */
  index?: number;
}

export declare function PrincipleCard(props: PrincipleCardProps): JSX.Element;
