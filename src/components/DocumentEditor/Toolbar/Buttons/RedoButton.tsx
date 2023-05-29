import { FaRedo } from "react-icons/fa"
import { BaseToolbarButton } from "./BaseToolbarButton"

interface Props {
    disabled?: boolean;
}

export const RedoButton = ({ disabled }: Props) => {
    return (
        <BaseToolbarButton
            disabled={disabled}
        >
            <FaRedo />
        </BaseToolbarButton>
    )
}