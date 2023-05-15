import { AccordionPanel, Box, AccordionButton, Accordion, AccordionIcon, AccordionItem, Flex, Text, Center, Button, Grid } from "@chakra-ui/react"
import { FcHighPriority, FcOk } from "react-icons/fc"
import { testMyPartnershipsData } from "../../../api"
import { testMyProjectData } from "../../../api"
import { testMyTaskData } from "../../../api"
import { AiFillProject } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"

interface ITask {
    name: string
}

interface IProject {
    name: string;
}

interface IPartnership {
    name: string;
}

interface ITaskandAssociationsProps {
    tasks: ITask[];
    projects: IProject[];
    partnerships: IPartnership[];
}

// PULL IN DATA FROM DB HERE and REPLACE tasks, projects, partnerships below with that data

export const MyTasksAndAssociations = () => {

    const tasks = testMyTaskData
    const projects = testMyProjectData
    const partnerships = testMyPartnershipsData

    const defaultIndex = [
        tasks.length <= 5 && tasks.length >= 1 ? 0 : null,
        projects.length <= 5 && projects.length >= 1 ? 1 : null,
        partnerships.length <= 5 && partnerships.length >= 1 ? 2 : null,
    ].map((index) => (index !== null ? index : -1));

    return (
        <>
            <Box
                mt={6}
            >
                <Accordion
                    defaultIndex={defaultIndex}
                    allowMultiple
                >
                    <AccordionItem>
                        <AccordionButton
                            bg={"gray.500"}
                            color={"white"}
                            // _expanded={{ bg: 'gray.500', color: 'white' }}
                            _hover={{ bg: 'gray.500', color: 'white' }}
                            userSelect={"none"}
                        >
                            <Box as="span" flex='1' textAlign='left'>
                                My Tasks
                            </Box>
                            {
                                tasks.length >= 1 ?
                                    <Box
                                        display={"inline-flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                    >
                                        <Box mr={2}>
                                            {tasks.length}
                                        </Box>
                                        <FcHighPriority />
                                    </Box>
                                    :
                                    <FcOk />
                            }
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}
                            userSelect={"none"}
                        >
                            {
                                tasks.length >= 1 ?
                                    (
                                        <Grid
                                            justifyItems={"start"}
                                        >
                                            {tasks.map((task, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        variant={"link"}
                                                        colorScheme={"blue"}
                                                        size={"lg"}
                                                    >
                                                        {task.name}
                                                    </Button>
                                                )
                                            })}
                                        </Grid>
                                    )
                                    :
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
                    <AccordionItem>
                        <AccordionButton
                            bg={"gray.500"}
                            color={"white"}
                            // _expanded={{ bg: 'gray.500', color: 'white' }}
                            _hover={{ bg: 'gray.500', color: 'white' }}
                            userSelect={"none"}

                        >
                            <Box as="span" flex='1' textAlign='left'>
                                My Projects
                            </Box>
                            {projects.length >= 1 ?
                                <Box
                                    display={"inline-flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Box mr={2}>
                                        {projects.length}
                                    </Box>
                                    <AiFillProject />
                                </Box>
                                : null
                            }
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}
                            userSelect={"none"}
                        >
                            {

                                projects.length >= 1 ?
                                    (
                                        <Grid
                                            justifyItems={"start"}
                                        >
                                            {projects.map((project, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        variant={"link"}
                                                        colorScheme={"blue"}
                                                        size={"lg"}
                                                    >
                                                        {project.name}
                                                    </Button>
                                                )
                                            })}
                                        </Grid>
                                    ) :
                                    "You are currently not associated with any projects."
                            }
                        </AccordionPanel>

                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            bg={"gray.500"}
                            color={"white"}
                            // _expanded={{ bg: 'gray.500', color: 'white' }}
                            _hover={{ bg: 'gray.500', color: 'white' }}
                            userSelect={"none"}

                        >
                            <Box as="span" flex='1' textAlign='left'>
                                My Partnerships
                            </Box>
                            {partnerships.length >= 1 ?
                                <Box
                                    display={"inline-flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Box mr={2}>
                                        {partnerships.length}
                                    </Box>
                                    <FaUserFriends />
                                </Box>
                                : null
                            }
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}
                            userSelect={"none"}
                        >
                            {
                                partnerships.length >= 1 ?
                                    (
                                        <Grid
                                            justifyItems={"start"}
                                        >
                                            {partnerships.map((partnership, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        variant={"link"}
                                                        colorScheme={"blue"}
                                                        size={"lg"}
                                                    >
                                                        {partnership.name}
                                                    </Button>
                                                )
                                            })}
                                        </Grid>
                                    ) :
                                    "You are currently not associated with any partnerships."
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}