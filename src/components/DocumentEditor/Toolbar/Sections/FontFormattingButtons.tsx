import { Flex } from "@chakra-ui/react"
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
        <Flex>
            <BoldButton />
            <ItalicsButton />
            <UnderlineButton />
            <CodeBlockButton />
            <LinkButton />
            <FontColorPickerButton />
            <FontHighlighterButton />
            {/* <FontFormatterButton /> */}
        </Flex>
    )
}