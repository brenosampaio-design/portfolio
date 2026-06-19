import { HTMLAttributes, ReactNode } from 'react';

export type StatusVariant = 'default' | 'urgent' | 'done';

/**
 * Status — neutral by default; colour only for the exception.
 * Reserve `urgent` (the only Vermilion) for a genuine exception — when it
 * shows up, it should mean something.
 */
export interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * `default` (neutral dot) · `done` (✓) · `urgent` (Vermilion).
   * @default 'default'
   */
  variant?: StatusVariant;
  children: ReactNode;
}

export declare function Status(props: StatusProps): JSX.Element;
