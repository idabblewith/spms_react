import { AlignButton } from "./MenuButtons/AlignButton"
import { ElementTypeButton } from "./MenuButtons/ElementTypeButton"
import { InsertButton } from "./MenuButtons/InsertButton"
import { FontFormattingButtons } from "./Sections/FontFormattingButtons"
import { FontStylingButtons } from "./Sections/FontStylingButtons"
import { TimeButtons } from "./Sections/TimeButtons"
import { ToolbarButtonContainer } from "./ToolbarButtonContainer"

export const RichTextToolbar = () => {
    return (
        <ToolbarButtonContainer>
            {/* <TimeButtons /> */}
            {/* <ElementTypeButton /> */}
            {/* <FontStylingButtons /> */}
            <FontFormattingButtons />
            {/* <InsertButton /> */}
            {/* <AlignButton /> */}
        </ToolbarButtonContainer>
    )
}