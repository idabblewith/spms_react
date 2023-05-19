import { FaUndo } from "react-icons/fa"
import { BaseToolbarButton } from "./BaseToolbarButton"


export const UndoButton = () => {
    return (
        <BaseToolbarButton>
            <FaUndo />
        </BaseToolbarButton>
    )
}