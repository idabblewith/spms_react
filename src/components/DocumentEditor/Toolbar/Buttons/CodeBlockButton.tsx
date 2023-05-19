import { BsCodeSlash } from "react-icons/bs"
import { BaseToolbarButton } from "./BaseToolbarButton"

// A button for formatting text as code

export const CodeBlockButton = () => {
    return (
        <BaseToolbarButton>
            <BsCodeSlash />
        </BaseToolbarButton>
    )
}