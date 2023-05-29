import { Box, Center, Flex, Link, Spacer, Text } from "@chakra-ui/react"
import { useCurrentYear } from "../../hooks/useCurrentYear";

export const Footer = () => {

    const currentYear = useCurrentYear();

    return (
        <Box
            position="absolute"
            bottom="0"
            width="100%"
            color="whiteAlpha.600"
            bgColor="blackAlpha.800"
            py={4}
            userSelect={"none"}
        >
            <Center fontSize="12px" textAlign="center">
                <Link color="whiteAlpha.800" href="https://github.com/dbca-wa/sdis">
                    SPMS v5.0.0
                </Link>
                &nbsp;
                <Text>© 2012-{currentYear} DBCA. All rights reserved.</Text>
            </Center>
        </Box>
    );

}