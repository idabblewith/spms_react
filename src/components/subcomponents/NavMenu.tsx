import { Flex, Menu, MenuButton, Text, Button, Center, MenuList, MenuGroup, MenuItem, useMenu } from "@chakra-ui/react"
import { useState } from "react"
import { BsCodeSlash } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { GoTriangleDown } from "react-icons/go"
import { SiReadthedocs } from "react-icons/si"

interface INavMenuProps {
    menuName: string;
    cScheme?: string;
    hoverColor?: string;
    fColor?: string;
    leftIcon?: React.ReactNode;
    children?: React.ReactNode;
}

export const NavMenu = ({ menuName, cScheme, leftIcon, fColor, hoverColor, children }: INavMenuProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMenuOpen = () => {
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

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
        <Menu
            onOpen={handleMenuOpen}
            onClose={handleMenuClose}
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
                size={"sm"}
                px={2}
                py={5}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}


            >
                <Flex>
                    {leftIcon ?
                        <Center mr={1.5}>
                            {leftIcon}
                        </Center>
                        :
                        null
                    }
                    <Text
                    >
                        {menuName}
                    </Text>
                    <Center ml={1.5} >
                        <GoTriangleDown size={"12px"}
                        />
                    </Center>
                </Flex>

            </MenuButton>

            <MenuList>
                {children}
            </MenuList>
        </Menu >

    )
}