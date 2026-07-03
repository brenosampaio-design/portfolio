import figma from "@figma/code-connect"
import { OfflineIndicator } from "./OfflineIndicator"

/*
  Code Connect — OfflineIndicator
  New component — does not exist in Figma yet.
  Create in Figma file DvmaageUcmQA6MzcsUYPgX, then update this URL.
*/
figma.connect(OfflineIndicator, "https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX?node-id=PENDING", {
  props: {
    state: figma.enum("State", {
      Offline:      "offline",
      Syncing:      "syncing",
      Reconnecting: "reconnecting",
    }),
    pendingCount: figma.number("Pending Count"),
  },
  example: ({ state, pendingCount }) => (
    <OfflineIndicator state={state} pendingCount={pendingCount} />
  ),
})
