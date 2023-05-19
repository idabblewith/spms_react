

// Buttons to go back and forth based on changes made to the document

import { Flex } from "@chakra-ui/react"
import { UndoButton } from "../Buttons/UndoButton"
import { RedoButton } from "../Buttons/RedoButton"

export const TimeButtons = () => {
    return (
        <Flex>
            <UndoButton />
            <RedoButton />
        </Flex>

    )
}