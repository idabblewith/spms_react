import { Center, Divider, Flex } from "@chakra-ui/react"
import { TextSizeButton } from "../MenuButtons/TextSizeButton"
import { FontSelectorButton } from "../MenuButtons/FontSelectorButton"

export const FontStylingButtons = () => {
    return (
        <Flex
        // flexGrow={1}
        // justifyContent={"space-between"}
        >
            <FontSelectorButton />
            <TextSizeButton />
        </Flex>
    )
}