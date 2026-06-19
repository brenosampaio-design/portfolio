import { HTMLAttributes, ReactNode } from 'react';

/**
 * Tag — a mono label for domain and discipline (e.g. "B2B", "Design System").
 * Always neutral; tags never carry colour.
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
