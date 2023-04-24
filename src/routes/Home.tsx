import {
    Box, Button, Center, Heading, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    MenuButton,
    Menu,
    Flex,
    MenuList,
    MenuItem,
    Grid,
    DarkMode,
    LightMode,
} from "@chakra-ui/react"
import { GoTriangleDown } from "react-icons/go";
import { FcPrint, FcBullish, FcRatings, FcOk, FcHighPriority } from "react-icons/fc";
import { NavMenu } from "../components/subcomponents/NavMenu";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import theme from "../theme";
import { testUserData } from "../api";

export const Home = () => {

    const hasTasks = false;
    const hasProjects = false;
    const hasPartnerships = false;

    // const [shouldConcat, setShouldConcat] = useState(false);
    // const [welcomeUser, setWelcomeUser] = useState("");

    // useEffect(() => {
    //     if (window.innerWidth < parseFloat(theme.breakpoints.lg) * 16) {
    //         setWelcomeUser("")
    //         setShouldConcat(true)
    //     }
    //     else {
    //         setWelcomeUser(`Hello, ${test_first_name}! Welcome to SPMS, DBCA's portal for project documentation, approval and reporting.`)
    //         setShouldConcat(false);
    //     }
    // }, [window.innerWidth])

    const [shouldConcat, setShouldConcat] = useState(false);
    const [welcomeUser, setWelcomeUser] = useState("");
    const [spmsText, setSpmsText] = useState("Science Project Management System");
    const [annualReportText, setAnnualReportText] = useState("Annual Report");

    const handleResize = useCallback(() => {
        // 1150 = the breakpoint at which issues occur with text overlaying
        if (window.innerWidth < 1150) {
            setWelcomeUser("");
            setShouldConcat(true);
            setSpmsText("SPMS");
            setAnnualReportText("Report");
        } else {
            setWelcomeUser(
                `Hello, ${testUserData[5].firstName}! Welcome to SPMS, DBCA's portal for project documentation, approval and reporting.`
            );
            setShouldConcat(false);
            setAnnualReportText("Annual Report");
            if (window.innerWidth < 1350) {
                setSpmsText("Science Project <br/> Management System");
            }
            else {
                setSpmsText("Science Project Management System");
            }
        }
    }, [theme.breakpoints.lg, testUserData[5].firstName]);

    useEffect(() => {
        handleResize(); // call the handleResize function once after mounting
        window.addEventListener("resize", handleResize); // add event listener to window object
        return () => window.removeEventListener("resize", handleResize); // remove event listener when unmounting
    }, [handleResize]);

    const navigate = useNavigate();

    return (

        <>
            <Box
                bgColor={"gray.100"}
                rounded={6}
                flexDir={"column"}
                p={10}
                pos={"relative"}
            >
                <Flex
                    pos={"absolute"}
                    right={6}
                >
                    {/* Annual Report Menu */}
                    <NavMenu
                        menuName={annualReportText}
                        leftIcon={<FcRatings />}
                        fColor={"white"}
                        hoverColor={"green.500"}
                        cScheme={"green"}
                        children={
                            <>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/arar/dashboard')
                                    }}
                                >
                                    {<FcBullish />}&nbsp;Progress
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/arar/current')
                                    }}
                                >
                                    {<FcPrint />}&nbsp;Print Preview
                                </MenuItem>
                            </>
                        } />
                </Flex>
                <Heading>
                    {/* This is okay as spmsText value is hardcoded, and not based on user input */}
                    <div dangerouslySetInnerHTML={{ __html: spmsText }} />
                </Heading>
                <br />
                <Text
                    fontSize={"19px"}
                    fontWeight={"medium"}
                >
                    {
                        welcomeUser
                    }

                </Text>
                <br />
                <Text>
                    Please update and submit (when ready) all documents awaiting your attention in "My Tasks", update project details and team lists of "My Projects" and "My Partnerships", create new projects and initiate closure of old projects as appropriate. If you get stuck, the User Manual has all the anwers!
                </Text>
            </Box>


            <Box
                mt={6}
            >
                <Accordion

                    defaultIndex={[0]}
                    allowToggle
                >
                    <AccordionItem
                    >
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: 'gray.500', color: 'white' }}
                            >
                                <Box as="span" flex='1' textAlign='left'>
                                    My Tasks
                                </Box>
                                {
                                    hasTasks ?
                                        <FcHighPriority /> :
                                        <FcOk />
                                }
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}
                        >
                            {
                                hasTasks ?
                                    "TASKS HERE" :
                                    <Flex>
                                        <Center>
                                            <FcOk />
                                            &nbsp;
                                            <Text>All done!</Text>
                                        </Center>
                                    </Flex>

                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: 'gray.500', color: 'white' }}
                            >
                                <Box as="span" flex='1' textAlign='left'>
                                    My Projects
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {
                                hasProjects ?
                                    "PROJECTS HERE" :
                                    "You are currently not associated with any projects."
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: 'gray.500', color: 'white' }}
                            >
                                <Box as="span" flex='1' textAlign='left'>
                                    My Partnerships
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {
                                hasPartnerships ?
                                    "PARTNERSHIPS HERE" :
                                    "You are currently not associated with any partnerships."
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>


            <Grid
                mt={10}
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                    xl: "repeat(3, 1fr)",
                }}
                gap={10}
            >
                <Button
                    colorScheme="blue"
                    as="a" href="https://data.dbca.wa.gov.au/"
                >
                    {
                        shouldConcat ?
                            "Data" :
                            "Data Catalogue"
                    }
                </Button>
                {/* BROKEN LINK? */}
                <Button
                    colorScheme="green"
                    as={"a"} href="https://scientificsites.dpaw.wa.gov.au/"
                >
                    {
                        shouldConcat ?
                            "Scientific Sites" :
                            "Scientific Site Register"
                    }
                </Button>
                <Button
                    colorScheme="red"
                    as={"a"} href="https://scienceprojects.dbca.wa.gov.au/arar_dashboard"
                    gridColumn={{ base: "1 / -1", xl: "auto" }}

                >
                    {
                        shouldConcat ?
                            "Projects Pending" :
                            "Projects Pending Approval"
                    }

                </Button>

            </Grid>

            <Center mt={6}>

            </Center>
        </>

    )
}