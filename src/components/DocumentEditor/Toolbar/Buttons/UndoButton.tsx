import { FaUndo } from "react-icons/fa"
import { BaseToolbarButton } from "./BaseToolbarButton"

interface Props {
    disabled?: boolean;
}

export const UndoButton = ({ disabled }: Props) => {
    return (
        <BaseToolbarButton
            disabled={disabled}
        >
            <FaUndo />
        </BaseToolbarButton>
    )
}