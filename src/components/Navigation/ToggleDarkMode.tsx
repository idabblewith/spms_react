import { HStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";

export const ToggleDarkMode = () => {
    const { toggleColorMode } = useColorMode();
    const LightDarkIcon = useColorModeValue(< FaMoon />, <FaSun />)

    return (
        <HStack>
            <IconButton
                onClick={toggleColorMode}
                size={"sm"}
                icon={LightDarkIcon}
                aria-label={"Toggle Dark Mode"}
            />
        </HStack>
    )

}