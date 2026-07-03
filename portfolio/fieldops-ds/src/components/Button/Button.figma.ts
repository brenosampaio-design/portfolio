import figma from "@figma/code-connect"
import { Button } from "./Button"

/*
  Code Connect — Button
  Figma component set: node 15:46 in file DvmaageUcmQA6MzcsUYPgX
  Maps Figma variant properties → React prop types.
*/
figma.connect(Button, "https://www.figma.com/design/DvmaageUcmQA6MzcsUYPgX?node-id=15:46", {
  props: {
    variant: figma.enum("Variant", {
      Primary:     "primary",
      Secondary:   "secondary",
      Ghost:       "ghost",
      Destructive: "destructive",
    }),
    size: figma.enum("Size", {
      Default: "default",
      SM:      "sm",
    }),
    loading: figma.boolean("Loading"),
    disabled: figma.boolean("Disabled"),
    children: figma.string("Label"),
    iconLeft:  figma.boolean("Icon Left", { true: figma.instance("Icon Left"),  false: undefined }),
    iconRight: figma.boolean("Icon Right", { true: figma.instance("Icon Right"), false: undefined }),
  },
  example: ({ variant, size, loading, disabled, children, iconLeft, iconRight }) => (
    <Button
      variant={variant}
      size={size}
      loading={loading}
      disabled={disabled}
      iconLeft={iconLeft}
      iconRight={iconRight}
    >
      {children}
    </Button>
  ),
})
