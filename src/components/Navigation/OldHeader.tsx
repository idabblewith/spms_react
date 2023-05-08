// Components
import { CgPlayListAdd, CgBrowse } from "react-icons/cg";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { ProjectSearchBar } from "../Page/All/ProjectSearchBar";
import { NavMenu } from "../Navigation/NavMenu";

// Chakra
import { Avatar, Box, Button, Center, DarkMode, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, HStack, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, VStack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";


// React, Settings, & Nav
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

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


import { Navitar } from "./Navitar";
import { SidebarNavMenu } from "../Navigation/SidebarNavMenu";
import { AddUserModal } from "../Modals/AddUserModal";

import { testUserData } from "../../api";


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
                        navigate('/projects/browse')
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
            fileUrl: "https://scienceprojects.dbca.wa.gov.au/media/ararreports/11/AnnualReport20212022_138.pdf",
            years: "2021-2022"
        },
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
// const { isOpen: isAddUserModalOpenTop, onOpen: onAddUserOpenTop, onClose: onAddUserCloseTop } = useDisclosure();

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
                        // onAddUserOpenTop();
                    }}
                >
                    {<FaUserPlus />}
                    <Text ml={2}>
                        Add New User
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
                                                                userData={testUserData[5]}
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
                                    <Navitar shouldShowName userData={testUserData[5]} windowSize={windowSizeValue} />
                                </HStack>
                            </Box>
                    }
                </HStack>
            </HStack>
        </Box>
    )
}

export default OldHeader;