import { Box, Button } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"
import { BaseOptionsButton } from "./BaseOptionsButton"

// A button to clear the rich text editor of all information

export const ClearButton = () => {
    return (
        <BaseOptionsButton
            icon={FaTrashAlt}
            // colorScheme={"red"}
            onClick={() => { console.log('hello') }}
        />
    )
}