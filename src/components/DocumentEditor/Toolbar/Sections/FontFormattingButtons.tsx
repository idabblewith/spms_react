import { Center, Divider, Flex } from "@chakra-ui/react"
import { BoldButton } from "../Buttons/BoldButton"
import { ItalicsButton } from "../Buttons/ItalicsButton"
import { UnderlineButton } from "../Buttons/UnderlineButton"
import { CodeBlockButton } from "../Buttons/CodeBlockButton"
import { LinkButton } from "../Buttons/LinkButton"
import { FontColorPickerButton } from "../MenuButtons/FontColorPickerButton"
import { FontHighlighterButton } from "../MenuButtons/FontHighlighterButton"
import { FontFormatterButton } from "../MenuButtons/FontFormatterButton"

export const FontFormattingButtons = () => {
    return (
        <Flex
        // flexGrow={1}
        >
            <BoldButton />
            <ItalicsButton />
            <UnderlineButton />
            <FontColorPickerButton />
            <FontHighlighterButton />
        </Flex>
    )
}