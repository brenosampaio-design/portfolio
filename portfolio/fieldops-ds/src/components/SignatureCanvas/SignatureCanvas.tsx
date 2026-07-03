import React, { useRef, useEffect, useState, useCallback } from "react"

export interface SignatureData {
  dataUrl: string
  timestamp: string
  deviceId: string
}

export interface SignatureCanvasProps {
  label?: string
  deviceId?: string
  onSign?: (data: SignatureData) => void
  onClear?: () => void
  disabled?: boolean
  className?: string
}

function getDeviceId(): string {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.slice(0, 32)
  }
  return "unknown-device"
}

export function SignatureCanvas({
  label = "Customer Signature",
  deviceId,
  onSign,
  onClear,
  disabled = false,
  className = "",
}: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawingRef = useRef(false)
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const [hasSigned, setHasSigned] = useState(false)

  const getCanvas = () => canvasRef.current
  const getCtx = () => canvasRef.current?.getContext("2d")

  const getPoint = (
    e: React.TouchEvent | React.MouseEvent | TouchEvent | MouseEvent,
    canvas: HTMLCanvasElement,
  ) => {
    const rect = canvas.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX
    const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  useEffect(() => {
    const canvas = getCanvas()
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.scale(dpr, dpr)
      ctx.strokeStyle = "var(--fo-sig-stroke, #111216)"
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
    }
  }, [])

  const startDrawing = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (disabled) return
      e.preventDefault()
      const canvas = getCanvas()
      if (!canvas) return
      isDrawingRef.current = true
      lastPointRef.current = getPoint(e, canvas)
    },
    [disabled],
  )

  const draw = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawingRef.current) return
    e.preventDefault()
    const canvas = getCanvas()
    const ctx = getCtx()
    if (!canvas || !ctx || !lastPointRef.current) return

    const current = getPoint(e, canvas)
    ctx.beginPath()
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y)
    ctx.lineTo(current.x, current.y)
    ctx.stroke()
    lastPointRef.current = current
    setHasSigned(true)
  }, [])

  const stopDrawing = useCallback(() => {
    if (!isDrawingRef.current) return
    isDrawingRef.current = false
    lastPointRef.current = null

    const canvas = getCanvas()
    if (!canvas || !hasSigned) return

    const signatureData: SignatureData = {
      dataUrl: canvas.toDataURL("image/png"),
      timestamp: new Date().toISOString(),
      deviceId: deviceId ?? getDeviceId(),
    }
    onSign?.(signatureData)
  }, [hasSigned, deviceId, onSign])

  const handleClear = useCallback(() => {
    const canvas = getCanvas()
    const ctx = getCtx()
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSigned(false)
    onClear?.()
  }, [onClear])

  return (
    <div className={["flex flex-col gap-1.5", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="text-xs font-medium text-[var(--fo-color-text-secondary)] leading-none">
          {label}
        </label>
      )}

      <div
        className={[
          "relative border rounded-[var(--fo-sig-radius)]",
          "overflow-hidden",
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-crosshair",
          hasSigned
            ? "border-[var(--fo-sig-border-focus)]"
            : "border-[var(--fo-sig-border)]",
        ].join(" ")}
        style={{ height: "var(--fo-sig-height, 160px)" }}
      >
        {!hasSigned && !disabled && (
          <p
            className="absolute inset-0 flex items-center justify-center text-sm text-[var(--fo-p-neutral-300)] pointer-events-none select-none"
            aria-hidden="true"
          >
            Sign here
          </p>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          aria-label={label}
          role="img"
        />

        {hasSigned && (
          <button
            onClick={handleClear}
            aria-label="Clear signature"
            className={[
              "absolute top-2 right-2",
              "flex items-center justify-center w-8 h-8 rounded",
              "text-[var(--fo-p-neutral-400)] hover:text-[var(--fo-p-error-500)]",
              "bg-white/80 backdrop-blur-sm",
              "transition-colors duration-150",
            ].join(" ")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        )}
      </div>

      {hasSigned && (
        <p className="font-mono text-[11px] text-[var(--fo-color-text-tertiary)]">
          Signed · {new Date().toLocaleString()} · {(deviceId ?? getDeviceId()).slice(0, 24)}
        </p>
      )}
    </div>
  )
}
