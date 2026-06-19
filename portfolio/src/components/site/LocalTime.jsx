"use client";

import { useEffect, useState } from "react";

/*
 * LocalTime — Breno's real local time (Valencia / Europe/Madrid).
 * Renders nothing until mounted to avoid hydration mismatch; updates each minute.
 */
export function LocalTime({ timeZone = "Europe/Madrid" }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
      timeZoneName: "short",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30 * 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span suppressHydrationWarning>{time || "—"}</span>;
}
