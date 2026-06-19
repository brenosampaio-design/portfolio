import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

/**
 * Button — one primary action per view; Deep Moss is the only tint.
 * Use exactly one `primary` per view; everything else recedes to neutral.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual emphasis. Deep Moss carries the single primary action.
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /** Disabled state — 50% opacity, no pointer events. */
  disabled?: boolean;
  children: ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
