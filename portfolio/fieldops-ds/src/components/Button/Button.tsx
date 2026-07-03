import React from "react"

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive"
export type ButtonSize = "default" | "sm"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--fo-btn-primary-bg)] text-[var(--fo-btn-primary-text)] " +
    "hover:bg-[var(--fo-color-action-primary-hover)] active:bg-[var(--fo-color-action-primary-active)] " +
    "disabled:bg-[var(--fo-color-action-disabled)] disabled:text-[var(--fo-color-action-disabled-text)]",
  secondary:
    "bg-transparent border border-[var(--fo-color-action-primary)] text-[var(--fo-color-action-secondary-text)] " +
    "hover:bg-[var(--fo-color-action-secondary)] " +
    "disabled:border-[var(--fo-color-action-disabled)] disabled:text-[var(--fo-color-action-disabled-text)]",
  ghost:
    "bg-transparent text-[var(--fo-color-text-primary)] " +
    "hover:bg-[var(--fo-color-surface-sunken)] " +
    "disabled:text-[var(--fo-color-text-disabled)]",
  destructive:
    "bg-[var(--fo-color-action-destructive)] text-[var(--fo-color-action-destructive-text)] " +
    "hover:bg-[var(--fo-p-error-400)] " +
    "disabled:bg-[var(--fo-color-action-disabled)] disabled:text-[var(--fo-color-action-disabled-text)]",
}

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-[var(--fo-btn-height)] px-[var(--fo-btn-px)] text-base gap-2",
  sm:      "h-[var(--fo-btn-height-sm)] px-4 text-sm gap-1.5",
}

export function Button({
  variant = "primary",
  size = "default",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={[
        "inline-flex items-center justify-center font-semibold",
        "rounded-[var(--fo-btn-radius)]",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fo-color-border-focus)] focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? (
        <LoadingSpinner size={size === "sm" ? 16 : 20} />
      ) : (
        iconLeft && <span className="shrink-0">{iconLeft}</span>
      )}
      {children && <span>{children}</span>}
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  )
}

function LoadingSpinner({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeOpacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
