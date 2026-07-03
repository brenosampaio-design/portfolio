import React from "react"

export type BadgeVariant = "default" | "active" | "completed" | "warning" | "error" | "offline"

export interface StatusBadgeProps {
  variant?: BadgeVariant
  label: string
  dot?: boolean
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default:   "bg-[var(--fo-p-neutral-100)] text-[var(--fo-p-neutral-700)]",
  active:    "bg-[var(--fo-p-info-50)] text-[var(--fo-p-info-700)]",
  completed: "bg-[var(--fo-p-sage-50)] text-[var(--fo-p-sage-700)]",
  warning:   "bg-[var(--fo-p-warning-50)] text-[var(--fo-p-warning-700)]",
  error:     "bg-[var(--fo-p-error-50)] text-[var(--fo-p-error-700)]",
  offline:   "bg-[var(--fo-p-neutral-200)] text-[var(--fo-p-neutral-600)]",
}

const dotColors: Record<BadgeVariant, string> = {
  default:   "bg-[var(--fo-p-neutral-500)]",
  active:    "bg-[var(--fo-p-info-500)]",
  completed: "bg-[var(--fo-p-sage-500)]",
  warning:   "bg-[var(--fo-p-warning-500)]",
  error:     "bg-[var(--fo-p-error-500)]",
  offline:   "bg-[var(--fo-p-neutral-400)]",
}

export function StatusBadge({
  variant = "default",
  label,
  dot = false,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1",
        "px-[var(--fo-badge-px)] py-[var(--fo-badge-py)]",
        "rounded-[var(--fo-badge-radius)]",
        "text-xs font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot && (
        <span
          className={["w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant]].join(" ")}
          aria-hidden="true"
        />
      )}
      {label}
    </span>
  )
}
