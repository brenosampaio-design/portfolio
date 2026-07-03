import figma from "@figma/code-connect"
import { SignatureCanvas } from "./SignatureCanvas"

/*
  Code Connect — SignatureCanvas
  New component — does not exist in Figma yet.
  Create in Figma file DvmaageUcmQA6MzcsUYPgX, then update this URL.
*/
figma.connect(SignatureCanvas, "https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX?node-id=PENDING", {
  props: {
    label:    figma.string("Label"),
    disabled: figma.boolean("Disabled"),
  },
  example: ({ label, disabled }) => (
    <SignatureCanvas
      label={label}
      disabled={disabled}
      onSign={(data) => console.log("Signed", data)}
    />
  ),
})
