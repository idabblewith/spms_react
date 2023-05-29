

// Buttons to go back and forth based on changes made to the document

import { Center, Divider, Flex } from "@chakra-ui/react"
import { UndoButton } from "../Buttons/UndoButton"
import { RedoButton } from "../Buttons/RedoButton"
import { useState } from "react";

export const TimeButtons = () => {

    const [canUndo, setCanUndo] = useState<boolean>(false);
    const [canRedo, setCanRedo] = useState<boolean>(false);

    return (
        <Flex
        >
            <UndoButton disabled={!canUndo} />
            <RedoButton disabled={!canRedo} />
        </Flex>

    )
}