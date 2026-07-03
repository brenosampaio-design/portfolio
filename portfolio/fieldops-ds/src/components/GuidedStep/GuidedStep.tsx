import React from "react"

export type StepCompletionState =
  | "completion-unlocked"
  | "completion-blocked"
  | "optional"
  | "completed"

export interface GuidedStepProps {
  stepNumber: number
  title: string
  description?: string
  completionState: StepCompletionState
  children?: React.ReactNode
  onAdvance?: () => void
  onSkip?: () => void
  isLast?: boolean
  className?: string
}

const stateConfig: Record<
  StepCompletionState,
  {
    containerBg: string
    containerBorder: string
    indicatorBg: string
    indicatorBorder: string
    indicatorText: string
    labelText: string
    showAdvance: boolean
    advanceEnabled: boolean
    showSkip: boolean
    connectorColor: string
  }
> = {
  "completion-unlocked": {
    containerBg:     "bg-[var(--fo-p-sage-50)]",
    containerBorder: "border-[var(--fo-p-sage-300)]",
    indicatorBg:     "bg-[var(--fo-p-sage-500)]",
    indicatorBorder: "",
    indicatorText:   "text-white",
    labelText:       "text-[var(--fo-color-text-primary)]",
    showAdvance:     true,
    advanceEnabled:  true,
    showSkip:        false,
    connectorColor:  "bg-[var(--fo-p-sage-300)]",
  },
  "completion-blocked": {
    containerBg:     "bg-[var(--fo-color-surface-elevated)]",
    containerBorder: "border-[var(--fo-p-error-300)]",
    indicatorBg:     "bg-white",
    indicatorBorder: "border-2 border-[var(--fo-p-error-400)]",
    indicatorText:   "text-[var(--fo-p-error-600)]",
    labelText:       "text-[var(--fo-color-text-primary)]",
    showAdvance:     true,
    advanceEnabled:  false,
    showSkip:        false,
    connectorColor:  "bg-[var(--fo-color-border-default)]",
  },
  optional: {
    containerBg:     "bg-[var(--fo-color-surface-elevated)]",
    containerBorder: "border-[var(--fo-color-border-default)]",
    indicatorBg:     "bg-[var(--fo-p-neutral-200)]",
    indicatorBorder: "",
    indicatorText:   "text-[var(--fo-p-neutral-500)]",
    labelText:       "text-[var(--fo-color-text-secondary)]",
    showAdvance:     true,
    advanceEnabled:  true,
    showSkip:        true,
    connectorColor:  "bg-[var(--fo-color-border-default)]",
  },
  completed: {
    containerBg:     "bg-[var(--fo-p-sage-50)]",
    containerBorder: "border-[var(--fo-p-sage-200)]",
    indicatorBg:     "bg-[var(--fo-p-sage-500)]",
    indicatorBorder: "",
    indicatorText:   "text-white",
    labelText:       "text-[var(--fo-p-sage-700)]",
    showAdvance:     false,
    advanceEnabled:  false,
    showSkip:        false,
    connectorColor:  "bg-[var(--fo-p-sage-300)]",
  },
}

export function GuidedStep({
  stepNumber,
  title,
  description,
  completionState,
  children,
  onAdvance,
  onSkip,
  isLast = false,
  className = "",
}: GuidedStepProps) {
  const config = stateConfig[completionState]
  const isCompleted = completionState === "completed"

  return (
    <div className={["flex gap-4", className].filter(Boolean).join(" ")}>
      {/* Left column: indicator + connector */}
      <div className="flex flex-col items-center">
        <div
          className={[
            "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
            "text-sm font-semibold",
            config.indicatorBg,
            config.indicatorBorder,
            config.indicatorText,
          ].join(" ")}
          aria-current={completionState !== "completed" ? "step" : undefined}
        >
          {isCompleted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            stepNumber
          )}
        </div>

        {!isLast && (
          <div
            className={["w-0.5 flex-1 my-1 min-h-[16px]", config.connectorColor].join(" ")}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right column: content */}
      <div
        className={[
          "flex-1 mb-4 p-4 border rounded-[var(--fo-p-radius-sm)]",
          "transition-colors duration-150",
          config.containerBg,
          config.containerBorder,
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className={["text-base font-semibold leading-tight", config.labelText].join(" ")}>
              {title}
            </h4>
            {description && (
              <p className="mt-1 text-sm text-[var(--fo-color-text-secondary)]">{description}</p>
            )}
          </div>
          {completionState === "optional" && (
            <span className="text-xs text-[var(--fo-p-neutral-500)] shrink-0 mt-0.5">Optional</span>
          )}
        </div>

        {children && <div className="mt-3">{children}</div>}

        {(config.showAdvance || config.showSkip) && (
          <div className="mt-3 flex items-center gap-2">
            {config.showAdvance && (
              <button
                onClick={config.advanceEnabled ? onAdvance : undefined}
                disabled={!config.advanceEnabled}
                className={[
                  "flex items-center gap-1.5 px-4 h-10 rounded-none text-sm font-semibold transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fo-color-border-focus)] focus-visible:ring-offset-2",
                  config.advanceEnabled
                    ? "bg-[var(--fo-color-action-primary)] text-white hover:bg-[var(--fo-color-action-primary-hover)]"
                    : "bg-[var(--fo-color-action-disabled)] text-[var(--fo-color-action-disabled-text)] cursor-not-allowed",
                ].join(" ")}
                aria-disabled={!config.advanceEnabled}
              >
                {completionState === "completion-blocked" ? (
                  <>
                    <LockIcon />
                    Required field
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            )}

            {config.showSkip && onSkip && (
              <button
                onClick={onSkip}
                className="text-sm text-[var(--fo-p-neutral-500)] hover:text-[var(--fo-color-text-secondary)] underline underline-offset-2 transition-colors"
              >
                Skip
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
