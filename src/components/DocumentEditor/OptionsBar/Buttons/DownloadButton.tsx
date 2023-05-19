import { Box, Button } from "@chakra-ui/react"
import { FaDownload } from "react-icons/fa"
import { BaseOptionsButton } from "./BaseOptionsButton"

// A button for downloading the rich text in JSON format

export const DownloadButton = () => {
    return (
        <BaseOptionsButton
            icon={FaDownload}
            // colorScheme=""
            onClick={() => { console.log('downloading') }}
        />
    )
}