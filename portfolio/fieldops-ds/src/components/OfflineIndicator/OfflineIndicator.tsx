import React from "react"

export type ConnectivityState = "offline" | "syncing" | "reconnecting"

export interface OfflineIndicatorProps {
  state: ConnectivityState
  pendingCount?: number
  className?: string
}

const stateConfig: Record<
  ConnectivityState,
  { bg: string; text: string; icon: string; label: string; detail: (count?: number) => string }
> = {
  offline: {
    bg:   "bg-[var(--fo-color-conn-offline-bg)]",
    text: "text-[var(--fo-color-conn-offline-text)]",
    icon: "text-[var(--fo-color-conn-offline-icon)]",
    label: "Offline",
    detail: (count) =>
      count ? `${count} change${count !== 1 ? "s" : ""} saved locally` : "Changes saved locally",
  },
  syncing: {
    bg:   "bg-[var(--fo-color-conn-syncing-bg)]",
    text: "text-[var(--fo-color-conn-syncing-text)]",
    icon: "text-[var(--fo-color-conn-syncing-icon)]",
    label: "Syncing",
    detail: (count) =>
      count ? `Uploading ${count} change${count !== 1 ? "s" : ""} — don't close` : "Uploading — don't close",
  },
  reconnecting: {
    bg:   "bg-[var(--fo-color-conn-reconnecting-bg)]",
    text: "text-[var(--fo-color-conn-reconnecting-text)]",
    icon: "text-[var(--fo-color-conn-reconnecting-icon)]",
    label: "Reconnecting",
    detail: () => "Retrying connection…",
  },
}

export function OfflineIndicator({
  state,
  pendingCount,
  className = "",
}: OfflineIndicatorProps) {
  const config = stateConfig[state]

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${config.label}: ${config.detail(pendingCount)}`}
      className={[
        "inline-flex items-center gap-2",
        "px-3 py-1.5",
        "rounded-[var(--fo-offline-radius)]",
        "text-xs font-medium",
        config.bg,
        config.text,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={config.icon} aria-hidden="true">
        {state === "offline" && <WifiOffIcon />}
        {state === "syncing" && <SyncingIcon />}
        {state === "reconnecting" && <ReconnectingIcon />}
      </span>

      <span className="font-semibold">{config.label}</span>
      <span className="opacity-75">—</span>
      <span>{config.detail(pendingCount)}</span>
    </div>
  )
}

function WifiOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="1" y1="1" x2="23" y2="23" />
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
      <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  )
}

function SyncingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}

function ReconnectingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}
