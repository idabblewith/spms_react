import { Box, Flex, Grid } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ToolbarButtonContainerProps {
    children: ReactNode
}

export const ToolbarButtonContainer = ({ children }: ToolbarButtonContainerProps) => {
    return (
        <Grid
            // background={"gray.100"}
            backgroundColor={"whiteAlpha.800"}

            width={"100%"}
            // gridGap={"25px"}
            p={4}
            borderRadius={"20px 20px 0 0"}
        >
            {children}
        </Grid>
    )
}