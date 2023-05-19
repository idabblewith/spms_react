import { Button } from "@chakra-ui/react"
import { FaUpload } from "react-icons/fa"
import { BaseOptionsButton } from "./BaseOptionsButton"

// A button for uploading lexical JSON objects to the editor.
// If there is already text, this will be appended below.

export const UploadButton = () => {
    return (

        <BaseOptionsButton
            icon={FaUpload}
            // colorScheme=""
            onClick={() => { console.log('downloading') }}
        />
    )
}