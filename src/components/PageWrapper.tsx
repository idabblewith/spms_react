import { Box } from "@chakra-ui/react"

interface IPageWrapperProps {
    children: React.ReactNode;
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
    return (
        <Box
            mx={6}
        // mb={6}
        // minH={"100%"}
        // minW={"100%"}
        >
            {children}
        </Box>
    )
}