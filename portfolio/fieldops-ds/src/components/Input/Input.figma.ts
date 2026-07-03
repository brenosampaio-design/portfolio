import figma from "@figma/code-connect"
import { Input } from "./Input"

/*
  Code Connect — Input
  Figma component set: node 19:80 in file DvmaageUcmQA6MzcsUYPgX
*/
figma.connect(Input, "https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX?node-id=19:80", {
  props: {
    inputSize: figma.enum("Size", {
      Default: "default",
      SM:      "sm",
    }),
    state: figma.enum("State", {
      Default:  "default",
      Error:    "error",
      Disabled: "disabled",
    }),
    label:        figma.string("Label"),
    helperText:   figma.string("Helper"),
    errorMessage: figma.string("Error Message"),
    placeholder:  figma.string("Placeholder"),
    iconLeft:  figma.boolean("Icon Left",  { true: figma.instance("Icon Left"),  false: undefined }),
    iconRight: figma.boolean("Icon Right", { true: figma.instance("Icon Right"), false: undefined }),
  },
  example: ({ inputSize, state, label, helperText, errorMessage, placeholder, iconLeft, iconRight }) => (
    <Input
      inputSize={inputSize}
      state={state}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      placeholder={placeholder}
      iconLeft={iconLeft}
      iconRight={iconRight}
    />
  ),
})
