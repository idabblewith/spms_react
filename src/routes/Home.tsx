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
} from "@chakra-ui/react"
import { GoTriangleDown } from "react-icons/go";
import { FcPrint, FcBullish, FcRatings, FcOk } from "react-icons/fc";


export const Home = () => {

    const hasTasks = false;
    const hasProjects = false;
    const hasPartnerships = false;
    const first_name = "Ben"

    return (
        <Box
            overflowY="auto"
            mt={6}
            minH={"500px"}
            bgColor={"white"}
            rounded={6}
            py={10}

        >
            {/* Simple wrapper */}
            <Box
                mx={10}
            >
                <Box
                    bgColor={"gray.100"}
                    rounded={6}
                    flexDir={"column"}
                    p={10}
                    pos={"relative"}
                >
                    <Flex
                        pos={"absolute"}
                        // justifyContent={"flex-end"}
                        right={6}
                    >
                        <Menu>
                            <MenuButton
                                as={Button} colorScheme='blue'
                            >
                                <Flex>
                                    <Center mr={1.5}>
                                        <FcRatings />
                                    </Center>


                                    <Text>Annual Report</Text>
                                    <Center ml={1.5}>
                                        <GoTriangleDown size={"12px"} style={{
                                            marginTop: "35%"
                                        }} />
                                    </Center>
                                    <MenuList>
                                        <MenuItem>
                                            {<FcBullish />}
                                            <Text ml={2}
                                            >
                                                Progress
                                            </Text>
                                        </MenuItem>
                                        <MenuItem>
                                            {<FcPrint />}
                                            <Text ml={2}
                                            >
                                                Print Preview
                                            </Text>
                                        </MenuItem>
                                    </MenuList>
                                </Flex>
                            </MenuButton>
                        </Menu>
                    </Flex>
                    <Heading>
                        SCIENCE PROJECT
                    </Heading>
                    <Heading>
                        MANAGEMENT SYSTEM
                    </Heading>

                    <br />
                    <Text
                        fontSize={"19px"}
                        fontWeight={"medium"}
                    >
                        Hello, {first_name}! Welcome to SPMS, DBCA's portal for project documentation, approval and reporting.
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
                    mt={6}
                    templateColumns={"repeat(3, 1fr)"}
                    gap={10}
                >
                    <Button
                        colorScheme="blue"
                        as="a" href="https://data.dbca.wa.gov.au/"
                    >
                        Data Catalogue
                    </Button>
                    <Button
                        colorScheme="green"
                        as={"a"} href="https://scientificsites.dpaw.wa.gov.au/"
                    >
                        Scientific Site Register
                    </Button>
                    <Button
                        colorScheme="red"
                        as={"a"} href="https://scienceprojects.dbca.wa.gov.au/arar_dashboard"
                    >
                        Projects Pending Approval
                    </Button>

                </Grid>

                <Center mt={6}>

                </Center>
            </Box>
        </Box >
    )
}