import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"

interface IBaseToolbarButtonProps {
    children: ReactNode;
}

export const BaseToolbarButton = ({ children }: IBaseToolbarButtonProps) => {
    return (
        <Button
            flex={1}
        >
            {children}
        </Button>
    )
}