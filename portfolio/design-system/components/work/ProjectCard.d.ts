import { HTMLAttributes } from 'react';

/**
 * ProjectCard — reads like a product: problem first, role explicit, tags honest.
 * The preview is an honest empty frame until a real screen exists — never a
 * faked screenshot. Hover lifts gently (180ms).
 */
export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The work, named like a product — not a Dribbble shot. */
  title: string;
  /** Problem first: what was broken or hard before the work. */
  problem: string;
  /** Honest labels for domain and discipline. */
  tags?: string[];
  /** Role and scope line, e.g. "Concept · Product Design, flows, UI · 2026". */
  role?: string;
  /** Optional preview image. Omit for an honest empty frame. */
  previewSrc?: string;
  /** Caption inside the empty frame when no `previewSrc` is given. */
  previewLabel?: string;
}

export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
