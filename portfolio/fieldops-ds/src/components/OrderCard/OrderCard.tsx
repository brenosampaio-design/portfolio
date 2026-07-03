import React from "react"
import { StatusBadge, type BadgeVariant } from "../StatusBadge/StatusBadge"

export type OrderStatus = "new" | "in-progress" | "completed" | "overdue"

export interface OrderCardProps {
  orderId: string
  title: string
  customer: string
  address?: string
  scheduledTime?: string
  status: OrderStatus
  priority?: "high" | "normal" | "low"
  syncPending?: boolean
  onClick?: () => void
  className?: string
}

const statusToVariant: Record<OrderStatus, BadgeVariant> = {
  new:         "active",
  "in-progress":"default",
  completed:   "completed",
  overdue:     "error",
}

const statusLabels: Record<OrderStatus, string> = {
  new:          "New",
  "in-progress":"In Progress",
  completed:    "Completed",
  overdue:      "Overdue",
}

const priorityIndicator: Record<"high" | "normal" | "low", string> = {
  high:   "bg-[var(--fo-p-error-500)]",
  normal: "bg-[var(--fo-p-terracota-400)]",
  low:    "bg-[var(--fo-p-neutral-400)]",
}

export function OrderCard({
  orderId,
  title,
  customer,
  address,
  scheduledTime,
  status,
  priority = "normal",
  syncPending = false,
  onClick,
  className = "",
}: OrderCardProps) {
  const Tag = onClick ? "button" : "div"

  return (
    <Tag
      onClick={onClick}
      className={[
        "relative w-full text-left",
        "flex flex-col gap-[var(--fo-card-gap,12px)]",
        "bg-[var(--fo-card-bg)] border border-[var(--fo-card-border)]",
        "rounded-[var(--fo-card-radius)] p-[var(--fo-card-padding)]",
        "shadow-[var(--fo-card-shadow)]",
        "min-h-[var(--fo-p-space-12)]",
        onClick ? "hover:shadow-[var(--fo-shadow-md)] hover:border-[var(--fo-color-action-primary)] transition-all duration-150 cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Priority bar */}
      <span
        className={["absolute left-0 top-3 bottom-3 w-1 rounded-r", priorityIndicator[priority]].join(" ")}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-2 pl-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-[var(--fo-color-text-primary)] leading-tight truncate">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-[var(--fo-color-text-secondary)] truncate">{customer}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {syncPending && (
            <span
              className="w-2 h-2 rounded-full bg-[var(--fo-p-neutral-400)]"
              aria-label="Sync pending"
              title="Sync pending"
            />
          )}
          <StatusBadge variant={statusToVariant[status]} label={statusLabels[status]} />
        </div>
      </div>

      <div className="pl-3 flex flex-col gap-1">
        {address && (
          <p className="text-xs text-[var(--fo-color-text-secondary)] flex items-center gap-1.5">
            <LocationIcon />
            {address}
          </p>
        )}
        {scheduledTime && (
          <p className="text-xs text-[var(--fo-color-text-secondary)] flex items-center gap-1.5">
            <ClockIcon />
            {scheduledTime}
          </p>
        )}
      </div>

      <div className="pl-3 border-t border-[var(--fo-color-border-subtle)] pt-2">
        <span className="font-mono text-xs text-[var(--fo-color-text-tertiary)]">{orderId}</span>
      </div>
    </Tag>
  )
}

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
