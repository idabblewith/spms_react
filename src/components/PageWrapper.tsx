import { Box } from "@chakra-ui/react"

interface IPageWrapperProps {
    children: React.ReactNode;
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {


    return (
        <Box
            mx={
                {
                    base: 4,
                    sm: 6,
                    md: "10%",
                    lg: "15%",
                }
            }
            pb={20}
        >

            {children}
        </Box>
    )
}