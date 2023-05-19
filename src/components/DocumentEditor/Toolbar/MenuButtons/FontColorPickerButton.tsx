import { Button } from "@chakra-ui/react"
import { FaCaretDown, FaFont } from "react-icons/fa"
// A dropdown button that pops open a hex color selector to adjust the color of the font.

// Has hex text area to select the color via the code value
// Has preset colors (red, orange, yellow, brown, lime green, green, magenta, purple, skyblue, cyan, lime, black, dark gray, gray, white)
// Has color are to select on a gradient, with an accompanying slider below for changing tone of color

export const FontColorPickerButton = () => {
    return (
        <Button
            leftIcon={<FaFont />}
            rightIcon={<FaCaretDown />}
        ></Button>
    )
}