import { Box, Button, Center, DarkMode, Divider, Flex, HStack, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AiFillPrinter } from "react-icons/ai";
import { CgViewList } from "react-icons/cg";
import { ImBook, ImUsers } from "react-icons/im";
import { FaUserPlus, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { SiReadthedocs } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";


import { CgPlayListAdd, CgBrowse } from "react-icons/cg";
import { ToggleDarkMode } from "./subcomponents/ToggleDarkMode";
import { ProjectSearchBar } from "./subcomponents/ProjectSearchBar";

const OldHeader = () => {
    const dividerColor = useColorModeValue("gray.400", "whiteAlpha.700");

    const first_name = "Ben"


    return (
        <Box>
            {/* Nav background */}
            <HStack bgColor={"blackAlpha.800"}
                py={2}
                roundedBottom={6}
                alignItems="center" justifyContent="space-between"
            >



                {/* Basic Navigation */}
                <HStack spacing={2}>

                    {/* SMPS Logo/Title */}
                    <Button
                        px={5}
                        color={"whiteAlpha.700"}
                        size={"md"}
                        variant={"unstyled"}
                    >
                        <Text fontSize={18}>SPMS</Text>
                    </Button>

                    {/* Projects */}
                    <Menu>
                        <MenuButton
                            as={Button}
                            size={"sm"}
                            px={2}
                            py={5}
                            variant={"ghost"}
                            color={"whiteAlpha.700"}
                        >
                            <Flex>
                                <Text>
                                    Projects
                                </Text>
                                <Center ml={1.5}>
                                    <GoTriangleDown size={"12px"}
                                    />
                                </Center>
                            </Flex>
                        </MenuButton>

                        <MenuList>
                            <MenuGroup
                                title="Create or Browse" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem>
                                    {<CgBrowse />}
                                    <Text ml={2}
                                    >
                                        Browse Projects
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                >
                                    {<CgPlayListAdd />}
                                    <Text ml={2}>
                                        Create New Project
                                    </Text>
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>

                    {/* Reports */}
                    <Menu>
                        <MenuButton
                            as={Button}
                            size={"sm"}
                            variant={"ghost"}
                            color={"whiteAlpha.700"}
                        >
                            <Flex>
                                <Text>
                                    Reports
                                </Text>
                                <Center ml={1.5} >
                                    <GoTriangleDown size={"12px"}
                                    />

                                </Center>
                            </Flex>
                        </MenuButton>

                        <MenuList>
                            <MenuGroup
                                title="Annual Research Activity Report" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >

                                <MenuItem>
                                    {<CgViewList />}
                                    <Text ml={2}
                                    >
                                        Overview
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                >
                                    {<AiFillPrinter />}
                                    <Text ml={2}>
                                        Print Preview
                                    </Text>
                                </MenuItem>
                            </MenuGroup>
                            <Divider

                                borderColor={dividerColor}
                                my={1}
                            />
                            <MenuGroup
                                title="Published" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem>
                                    {<ImBook />}
                                    <Text ml={2}>
                                        ARAR 2017-2018
                                    </Text>
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>

                    {/* Staff */}
                    <Menu>
                        <MenuButton
                            as={Button}
                            size={"sm"}
                            variant={"ghost"}
                            color={"whiteAlpha.700"}
                            rightIcon={<GoTriangleDown size={"12px"}
                            />
                            }
                        >
                            Staff
                        </MenuButton>

                        <MenuList>
                            <MenuGroup
                                title="Users" fontSize={"12px"} color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem>
                                    {<ImUsers />}
                                    <Text ml={2}
                                    >
                                        Browse SPMS Users
                                    </Text>
                                </MenuItem>
                                {/* <MenuItem
                            >
                                {<FaUserCircle />}
                                <Text ml={2}>
                                    View SPMS Profile
                                </Text>
                            </MenuItem> */}
                                <MenuItem>
                                    {<FaUserPlus />}
                                    <Text ml={2}>
                                        Register External Colleague
                                    </Text>
                                </MenuItem>
                                {/* <Center>
                                <Text
                                    color={"gray.400"}
                                    fontSize={"11px"}
                                    pt={2}
                                >
                                    Science Division Intranet
                                </Text>
                            </Center>
                            <MenuItem>
                                {<FaUserCircle />}
                                <Text ml={2}>
                                    View Divisional Profile
                                </Text>
                            </MenuItem> */}

                            </MenuGroup>

                        </MenuList>
                    </Menu>

                    {/* API */}
                    {/* <Button
                        size={"sm"}
                        variant={"ghost"}
                        color={"whiteAlpha.700"}
                    >
                        API
                    </Button> */}

                    {/* User Manual */}
                    {/* <Button
                        variant={"ghost"}
                        size={"sm"}
                        color={"red.500"}
                        as="a" href="https://sdis.readthedocs.io"
                        target="_blank" rel="noopener noreferrer"
                    >
                        User Manual
                    </Button> */}

                </HStack>

                {/* Profile & Search */}
                <HStack
                    px={3}
                >
                    {/* <ToggleDarkMode /> */}
                    <ProjectSearchBar />
                    <Menu>
                        <MenuButton
                            as={Button}
                            size={"sm"}
                            variant={"ghost"}
                            color={"whiteAlpha.900"}
                            rightIcon={<GoTriangleDown size={"12px"}
                            />
                            }
                        >
                            Welcome, {first_name}
                        </MenuButton>

                        <MenuList>
                            <MenuGroup
                                title="Documentation" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem>
                                    {<SiReadthedocs />}
                                    <Text ml={2}>
                                        User Manual
                                    </Text>
                                </MenuItem>
                                <MenuItem>
                                    {<BsCodeSlash />}
                                    <Text ml={2}>
                                        API
                                    </Text>
                                </MenuItem>

                            </MenuGroup>
                            <MenuGroup
                                title="DBCA Account" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem>
                                    {<FaUserCircle />}
                                    <Text ml={2}>
                                        My SPMS Profile
                                    </Text>
                                </MenuItem>
                                <MenuItem>
                                    {<FaUserCircle />}
                                    <Text ml={2}>
                                        My Divisional Profile
                                    </Text>
                                </MenuItem>
                                <MenuItem>
                                    {<FiLogOut />}
                                    <Text ml={2}>
                                        Logout
                                    </Text>
                                </MenuItem>

                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </HStack>

            </HStack>
        </Box>
    )
}

export default OldHeader;