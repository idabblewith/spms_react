import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"

interface IBaseToolbarButtonProps {
    children: ReactNode;
    disabled?: boolean;
    isActive?: boolean;
    onClick?: () => void;
}

export const BaseToolbarButton = ({ children, disabled, isActive, onClick }: IBaseToolbarButtonProps) => {
    return (
        <Button
            // flex={1}
            mx={1}
            variant={"ghost"}
            isDisabled={disabled}
            bg={isActive ? "gray.200" : undefined}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}