import React from "react"

export type InputSize = "default" | "sm"
export type InputState = "default" | "error" | "disabled"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  helperText?: string
  errorMessage?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  inputSize?: InputSize
  state?: InputState
}

export function Input({
  label,
  helperText,
  errorMessage,
  iconLeft,
  iconRight,
  inputSize = "default",
  state = "default",
  id,
  className = "",
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? React.useId()
  const isError = state === "error" || Boolean(errorMessage)
  const isDisabled = state === "disabled" || disabled

  const borderClass = isError
    ? "border-[var(--fo-input-border-error)] focus-within:ring-[var(--fo-color-border-error)]"
    : "border-[var(--fo-input-border)] hover:border-[var(--fo-input-border-hover)] focus-within:border-[var(--fo-input-border-focus)] focus-within:ring-[var(--fo-color-border-focus)]"

  const heightClass = inputSize === "sm"
    ? "h-[var(--fo-btn-height-sm)]"
    : "h-[var(--fo-input-height)]"

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-[var(--fo-input-label)] leading-none"
        >
          {label}
        </label>
      )}

      <div
        className={[
          "flex items-center gap-2",
          "px-[var(--fo-input-px)]",
          "border rounded-[var(--fo-input-radius)]",
          "bg-[var(--fo-input-bg)]",
          "focus-within:ring-2 focus-within:ring-offset-0 transition-shadow duration-150",
          heightClass,
          borderClass,
          isDisabled ? "bg-[var(--fo-input-bg-disabled)] opacity-60 cursor-not-allowed pointer-events-none" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {iconLeft && (
          <span className="shrink-0 text-[var(--fo-input-icon)]">{iconLeft}</span>
        )}

        <input
          {...props}
          id={inputId}
          disabled={isDisabled}
          className={[
            "flex-1 min-w-0 bg-transparent outline-none",
            "text-base text-[var(--fo-input-text)]",
            "placeholder:text-[var(--fo-input-placeholder)]",
            "disabled:cursor-not-allowed",
          ].join(" ")}
        />

        {iconRight && (
          <span className="shrink-0 text-[var(--fo-input-icon)]">{iconRight}</span>
        )}
      </div>

      {(errorMessage || helperText) && (
        <p
          className={[
            "text-xs",
            isError
              ? "text-[var(--fo-color-text-error)]"
              : "text-[var(--fo-input-helper)]",
          ].join(" ")}
          role={isError ? "alert" : undefined}
        >
          {errorMessage ?? helperText}
        </p>
      )}
    </div>
  )
}
