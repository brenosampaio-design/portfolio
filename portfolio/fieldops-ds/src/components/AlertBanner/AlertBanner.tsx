import React from "react"

export type AlertVariant = "error" | "warning" | "success" | "info"

export interface AlertBannerProps {
  variant: AlertVariant
  title?: string
  message: string
  onDismiss?: () => void
  action?: { label: string; onClick: () => void }
  className?: string
}

const variantConfig: Record<
  AlertVariant,
  { bg: string; border: string; text: string; icon: string; accentBorder: string; iconSvg: React.ReactNode }
> = {
  error: {
    bg:           "bg-[var(--fo-color-feedback-error-bg)]",
    border:       "border-[var(--fo-color-feedback-error-border)]",
    text:         "text-[var(--fo-color-feedback-error-text)]",
    icon:         "text-[var(--fo-color-feedback-error-icon)]",
    accentBorder: "border-l-[3px] border-l-[var(--fo-p-error-500)]",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  warning: {
    bg:           "bg-[var(--fo-color-feedback-warning-bg)]",
    border:       "border-[var(--fo-color-feedback-warning-border)]",
    text:         "text-[var(--fo-color-feedback-warning-text)]",
    icon:         "text-[var(--fo-color-feedback-warning-icon)]",
    accentBorder: "",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  success: {
    bg:           "bg-[var(--fo-color-feedback-success-bg)]",
    border:       "border-[var(--fo-color-feedback-success-border)]",
    text:         "text-[var(--fo-color-feedback-success-text)]",
    icon:         "text-[var(--fo-color-feedback-success-icon)]",
    accentBorder: "",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  info: {
    bg:           "bg-[var(--fo-color-feedback-info-bg)]",
    border:       "border-[var(--fo-color-feedback-info-border)]",
    text:         "text-[var(--fo-color-feedback-info-text)]",
    icon:         "text-[var(--fo-color-feedback-info-icon)]",
    accentBorder: "",
    iconSvg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
}

export function AlertBanner({
  variant,
  title,
  message,
  onDismiss,
  action,
  className = "",
}: AlertBannerProps) {
  const config = variantConfig[variant]
  const roleMap: Record<AlertVariant, "alert" | "status"> = {
    error: "alert", warning: "alert", success: "status", info: "status",
  }

  return (
    <div
      role={roleMap[variant]}
      className={[
        "flex items-start gap-3",
        "px-[var(--fo-alert-px)] py-[var(--fo-alert-py)]",
        "border rounded-[var(--fo-alert-radius)]",
        config.bg,
        config.border,
        config.accentBorder,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={["shrink-0 mt-0.5", config.icon].join(" ")}>{config.iconSvg}</span>

      <div className="flex-1 min-w-0">
        {title && (
          <p className={["text-sm font-semibold mb-0.5", config.text].join(" ")}>{title}</p>
        )}
        <p className={["text-sm", config.text].join(" ")}>{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className={["mt-2 text-sm font-semibold underline underline-offset-2", config.text].join(" ")}
          >
            {action.label}
          </button>
        )}
      </div>

      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className={["shrink-0 -mr-1 p-1 rounded opacity-60 hover:opacity-100 transition-opacity", config.text].join(" ")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  )
}
