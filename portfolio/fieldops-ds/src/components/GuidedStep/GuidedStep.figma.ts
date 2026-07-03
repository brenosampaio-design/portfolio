import figma from "@figma/code-connect"
import { GuidedStep } from "./GuidedStep"

/*
  Code Connect — GuidedStep
  Figma component set: node 29:79 in file DvmaageUcmQA6MzcsUYPgX

  NOTE: Figma currently has Pending/Active/Completed/Skipped states.
  The correct states are completion-unlocked/completion-blocked/optional/completed.
  This mapping translates the existing Figma states to the correct semantic model.
  Update the Figma component states before publishing Code Connect.
*/
figma.connect(GuidedStep, "https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX?node-id=29:79", {
  props: {
    completionState: figma.enum("State", {
      "Completion Unlocked": "completion-unlocked",
      "Completion Blocked":  "completion-blocked",
      Optional:              "optional",
      Completed:             "completed",
    }),
    stepNumber: figma.number("Step Number"),
    title:       figma.string("Title"),
    description: figma.string("Description"),
    isLast:      figma.boolean("Is Last"),
  },
  example: ({ completionState, stepNumber, title, description, isLast }) => (
    <GuidedStep
      completionState={completionState}
      stepNumber={stepNumber}
      title={title}
      description={description}
      isLast={isLast}
    />
  ),
})
