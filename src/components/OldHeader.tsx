// Components
import { CgPlayListAdd, CgBrowse } from "react-icons/cg";
import { ToggleDarkMode } from "./subcomponents/ToggleDarkMode";
import { ProjectSearchBar } from "./subcomponents/ProjectSearchBar";
import { NavMenu } from "./subcomponents/NavMenu";

// Chakra
import { Avatar, Box, Button, Center, DarkMode, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, HStack, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, VStack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";


// React, Settings, & Nav
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";

// Icon imports
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs"
import { AiFillPrinter } from "react-icons/ai";
import { CgViewList } from "react-icons/cg";
import { ImBook, ImUsers } from "react-icons/im";
import { FaUserPlus, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { SiReadthedocs } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { Navitar } from "./subcomponents/Navitar";
import { SidebarNavMenu } from "./subcomponents/SidebarNavMenu";
import { testUserData } from "../api";

const ProjectMenuContents = () => {
    const navigate = useNavigate();
    return (
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

    )
}

const ReportMenuContents = () => {
    const navigate = useNavigate();
    const dividerColor = useColorModeValue("gray.400", "whiteAlpha.700");

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
                                key={publication.years}
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
    )
}

const StaffMenuContents = () => {
    const navigate = useNavigate();

    return (
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


            </MenuGroup>

        </>

    )
}

const OldHeader = () => {

    const navigate = useNavigate();

    const [shouldShowHamburger, setShouldShowHamburger] = useState(false);
    const [windowSizeValue, setWindowSizeValue] = useState<number>(480);

    const { isOpen: drawerIsOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
    const drawerBtnRef = React.useRef<HTMLButtonElement>(null);

    const test_user_data = {
        username: "Ben",
        first_name: "Benjamintheman123",
    }

    const handleResize = () => {
        if (window.innerWidth < parseFloat(theme.breakpoints.lg)) {
            setShouldShowHamburger(true);
        } else {
            setShouldShowHamburger(false);
        }
        setWindowSizeValue(window.innerWidth);
    };

    useEffect(() => {
        handleResize(); // initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [theme.breakpoints.lg]);




    return (
        <Box>
            {/* Nav background */}
            <HStack bgColor={"blackAlpha.800"}
                py={2}
                roundedBottom={6}
                alignItems="center" justifyContent="space-between"
            >
                <HStack spacing={2}
                    flexGrow={1}
                >

                    {/* SMPS Logo/Title */}
                    <Box>
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

                    </Box>

                    {/* <Box
                        flexGrow={1}
                        // bg={"red"}
                        justifyContent={"space-between"}
                        display={"flex"}
                    > */}
                    {
                        shouldShowHamburger ?
                            <Box
                                flexGrow={1}
                                // bg={"red"}
                                justifyContent={"end"}
                                display={"flex"}
                            >
                                <Box
                                    mx={3}
                                >
                                    <Button
                                        ref={drawerBtnRef}
                                        onClick={onDrawerOpen}
                                        variant={"solid"}
                                        color={"white"}
                                        bg={"gray.600"}
                                        _hover={
                                            {
                                                bg: "white",
                                                color: "black"
                                            }
                                        }
                                    >
                                        <GiHamburgerMenu size={"22px"} />
                                    </Button>
                                    <Drawer
                                        isOpen={drawerIsOpen}
                                        placement="right"
                                        onClose={onDrawerClose}
                                        finalFocusRef={drawerBtnRef}
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent
                                            bg={"blackAlpha.900"}
                                        >
                                            <DrawerCloseButton color={"white"} />

                                            <DrawerHeader
                                                borderBottomWidth="1px" color="white"
                                            >
                                                Menu
                                            </DrawerHeader>
                                            <DrawerBody>
                                                <VStack
                                                    py={3}
                                                >
                                                    <HStack>
                                                        {/* Project Search */}
                                                        <Box>
                                                            <ProjectSearchBar />
                                                        </Box>
                                                        <Box
                                                            pl={4}
                                                            pr={1.5}
                                                        >
                                                            <Navitar
                                                                userData={testUserData[4]}
                                                                windowSize={windowSizeValue}
                                                            />
                                                        </Box>
                                                    </HStack>


                                                    <Grid
                                                        w={"100%"}
                                                        py={2}
                                                    >
                                                        {/* Projects */}
                                                        <SidebarNavMenu
                                                            menuName="Projects"
                                                            leftIcon={<AiFillProject />}
                                                            children={
                                                                <ProjectMenuContents />
                                                            }

                                                        />

                                                        {/* Reports */}
                                                        <SidebarNavMenu
                                                            menuName="Reports"
                                                            leftIcon={<IoMdDocument />}
                                                            children={
                                                                <ReportMenuContents />
                                                            }
                                                        />

                                                        {/* Staff */}
                                                        <SidebarNavMenu
                                                            menuName="Staff"
                                                            leftIcon={<BsFillPeopleFill />}
                                                            children={
                                                                <StaffMenuContents />
                                                            }
                                                        />

                                                    </Grid>

                                                </VStack>


                                            </DrawerBody>
                                        </DrawerContent>
                                    </Drawer>
                                </Box>
                            </Box>

                            :
                            <Box
                                flexGrow={1}
                                // bg={"red"}
                                justifyContent={"space-between"}
                                display={"flex"}
                            >
                                {/* Basic Navigation */}
                                <HStack>
                                    {/* Projects */}
                                    <NavMenu menuName="Projects" children={
                                        <ProjectMenuContents />
                                    } />

                                    {/* Reports */}
                                    <NavMenu menuName="Reports" children={
                                        <ReportMenuContents />
                                    } />

                                    {/* Staff */}
                                    <NavMenu menuName="Staff" children={
                                        <StaffMenuContents />
                                    } />
                                </HStack>

                                {/* RHS Items */}
                                <HStack
                                    px={3}
                                >
                                    {/* Project Search */}
                                    <ProjectSearchBar />

                                    {/* Profile */}
                                    {/* <NavMenu menuName={`Welcome, ${test_first_name}`} children={
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
                                    } /> */}
                                    <Navitar shouldShowName userData={testUserData[4]} windowSize={windowSizeValue} />
                                </HStack>
                            </Box>
                    }


                </HStack>

            </HStack>
        </Box>
    )
}

export default OldHeader;

{/* <MenuItem
                            >
                                {<FaUserCircle />}
                                <Text ml={2}>
                                    View SPMS Profile
                                </Text>
                            </MenuItem> */}

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


{/* API */ }
{/* <Button
                        size={"sm"}
                        variant={"ghost"}
                        color={"whiteAlpha.700"}
                    >
                        API
                    </Button> */}

{/* User Manual */ }
{/* <Button
                        variant={"ghost"}
                        size={"sm"}
                        color={"red.500"}
                        as="a" href="https://sdis.readthedocs.io"
                        target="_blank" rel="noopener noreferrer"
                    >
                        User Manual
                    </Button> */}


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
                                    Welcome, {test_first_name}
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