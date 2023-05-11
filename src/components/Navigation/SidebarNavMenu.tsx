import { Flex, Menu, MenuButton, Text, TextProps, Button, Center, MenuList, MenuGroup, MenuItem, useMenu, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsCodeSlash } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { GoTriangleDown } from "react-icons/go"
import { SiReadthedocs } from "react-icons/si"

interface ISidebarNavMenuProps extends TextProps {
    menuName?: string;
    // leftIcon?: React.ReactNode;
    cScheme?: string;
    hoverColor?: string;
    fColor?: string;
    leftIcon?: React.ReactNode;
    children?: React.ReactNode;
    noChevron?: boolean;
}

export const SidebarNavMenu = (
    { menuName, cScheme, leftIcon, fColor, hoverColor, children, noChevron, textAlign }: ISidebarNavMenuProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOpen(false);
    };

    // useEffect(() => {
    //     if (isOpen) {
    //         console.log("isOpen")
    //     }
    //     else {
    //         console.log("isClosed")
    //     }

    //     if (isHovered) {
    //         console.log("isHovered")
    //     }
    //     else { console.log("isNotHovered") }
    // }, [isOpen, isHovered])

    const bgStyle = isHovered || isOpen
        ? cScheme
            ? { bg: `${cScheme}.500` }
            : {}
        : cScheme ? `${cScheme}.500` : "transparent";

    const fontColorStyle = isHovered || isOpen
        ? fColor
            ? { color: fColor }
            : "white"
        : fColor ? fColor : "whiteAlpha.700";

    return (
        // Box required to prevent popper console.log on click
        <Box
        // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <Menu
                // onOpen={handleMenuOpen}
                // onClose={handleMenuClose}
                isOpen={isOpen}
            >
                <MenuButton
                    colorScheme={cScheme}

                    bg={bgStyle}

                    color={fontColorStyle}

                    _hover={
                        {
                            bg: hoverColor ? hoverColor : "white",
                            color: fColor ? fColor : "black"
                        }
                    }
                    _active={
                        {
                            bg: hoverColor ? hoverColor : "white",
                            color: fColor ? fColor : "black"

                        }
                    }

                    as={Button}
                    size={"lg"}
                    w={"100%"}
                    px={2}
                    py={5}

                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Flex
                        justifyContent={"space-between"}
                    >
                        {leftIcon ?
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                w={"100%"}
                            >
                                <Center
                                    mr={menuName ? 1.5 : 0}
                                // ml={3}
                                // width={"100%"}
                                // bg={"red"}
                                >
                                    <Box

                                        justifyContent={"end"}
                                        boxSize={5}
                                    >
                                        {leftIcon}
                                    </Box>
                                </Center>

                                <Center mr={menuName ? 1.5 : 0}>
                                    <Text>
                                        {menuName}
                                    </Text>
                                </Center>
                                <Center>

                                </Center>

                            </Box>

                            :
                            textAlign ?
                                <Text
                                // textAlign={textAlign}
                                >
                                    {menuName}
                                </Text>
                                :
                                <Text
                                >
                                    {menuName}
                                </Text>
                        }

                        {
                            noChevron ?
                                null :
                                <Center ml={1.5} >
                                    <GoTriangleDown size={"12px"}
                                    />
                                </Center>

                        }
                    </Flex>

                </MenuButton>

                <MenuList
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    mt={"-7.5px"}
                    w={"100%"}
                >
                    {children}
                </MenuList>
            </Menu >
        </Box>


    )
}