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
import { NavMenu } from "./subcomponents/NavMenu";
import { useNavigate } from "react-router-dom";


import theme from "../theme";

const OldHeader = () => {
    const dividerColor = useColorModeValue("gray.400", "whiteAlpha.700");

    const first_name = "Ben"

    const navigate = useNavigate();

    const arar_publications = [
        {
            fileUrl: "https://scienceprojects.dbca.wa.gov.au/static/files/arar-2017-2018.pdf",
            years: "2017-2018"
        },
        {
            fileUrl: "https://scienceprojects.dbca.wa.gov.au/static/files/arar-2016-2017.pdf",
            years: "2016-2017"
        },
        {
            fileUrl: "https://scienceprojects.dbca.wa.gov.au/static/files/arar-2015-2016.pdf",
            years: "2015-2016"
        },
    ]


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
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        <Text fontSize={18}>SPMS</Text>
                    </Button>

                    {/* Projects */}
                    <NavMenu menuName="Projects" children={
                        <>
                            <MenuGroup
                                title="Create or Browse" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem
                                    onClick={() => {
                                        navigate('/projects')
                                    }}
                                >
                                    {<CgBrowse />}
                                    <Text ml={2}
                                    >
                                        Browse Projects
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/projects/new')
                                    }}
                                >
                                    {<CgPlayListAdd />}
                                    <Text ml={2}>
                                        Create New Project
                                    </Text>
                                </MenuItem>
                            </MenuGroup>
                        </>
                    } />

                    {/* Reports */}
                    <NavMenu menuName="Reports" children={
                        <>
                            <MenuGroup
                                title="Annual Research Activity Report" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >

                                <MenuItem
                                    onClick={() => {
                                        navigate('/reports/dashboard')
                                    }}
                                >
                                    {<CgViewList />}
                                    <Text ml={2}
                                    >
                                        Overview
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/reports/current')
                                    }}
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
                                {
                                    arar_publications.map(publication => {
                                        return (
                                            <MenuItem
                                                onClick={() => {
                                                    window.open(publication.fileUrl, "_blank");
                                                }}
                                            >
                                                {<ImBook />}
                                                <Text ml={2}>
                                                    ARAR {publication.years}
                                                </Text>
                                            </MenuItem>
                                        )
                                    })
                                }

                            </MenuGroup>
                        </>
                    } />

                    {/* Staff */}
                    <NavMenu menuName="Staff" children={
                        <>
                            <MenuGroup
                                title="Users" fontSize={"12px"} color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem
                                    onClick={() => {
                                        navigate('/users')
                                    }}
                                >
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
                                <MenuItem
                                    onClick={() => {
                                        navigate('users/add')
                                    }}
                                >
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

                        </>
                    } />

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

                <HStack
                    px={3}
                >
                    {/* <ToggleDarkMode /> */}

                    {/* Project Search */}
                    <ProjectSearchBar />

                    {/* Profile */}
                    <NavMenu menuName={`Welcome, ${first_name}`} children={
                        <>
                            <MenuGroup
                                title="Documentation" fontSize={"12px"}
                                color={"gray.500"} textAlign={"center"}
                            >
                                <MenuItem
                                    onClick={() => {
                                        window.open("https://sdis.readthedocs.io", "_blank");
                                    }}
                                >
                                    {<SiReadthedocs />}
                                    <Text ml={2}>
                                        User Manual
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/api')
                                    }}
                                >
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
                                <MenuItem
                                    onClick={() => {
                                        navigate('/users/me')
                                    }}
                                >
                                    {<FaUserCircle />}
                                    <Text ml={2}>
                                        My SPMS Profile
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        window.open('https://sww.dpaw.wa.gov.au/', "_blank")
                                    }}
                                >
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
                        </>
                    } />
                    {/* <Menu>
                        <MenuButton
                            as={Button}
                            size={"sm"}
                            px={2}
                            py={5}
                            _hover={{ bg: "whiteAlpha.900", color: "black" }}
                            variant={"ghost"}
                            color={"whiteAlpha.700"}
                        >
                            <Flex>
                                <Text>
                                    Welcome, {first_name}
                                </Text>
                                <Center ml={1.5} >
                                    <GoTriangleDown size={"12px"}
                                    />

                                </Center>
                            </Flex>
                        </MenuButton>


                        <MenuList
                            _hover={{ bg: "whiteAlpha.900", color: "black" }}
                        >
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
                    </Menu> */}
                </HStack>

            </HStack>
        </Box>
    )
}

export default OldHeader;