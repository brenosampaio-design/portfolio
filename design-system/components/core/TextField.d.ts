import { InputHTMLAttributes, CSSProperties } from 'react';

/**
 * TextField — labelled input with a visible focus ring (the one accent, Moss).
 * Label, input and help are wired together for screen readers.
 */
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visible label — always present; accessibility is part of the craft. */
  label: string;
  /** Helper text shown beneath the field. */
  help?: string;
  /** Validation error — turns border + ring Vermilion. */
  error?: string;
  /** Style for the outer wrapper div. */
  containerStyle?: CSSProperties;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
