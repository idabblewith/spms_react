import { AccordionPanel, Box, AccordionButton, Accordion, AccordionIcon, AccordionItem, Flex, Text, Center } from "@chakra-ui/react"
import { FcHighPriority, FcOk } from "react-icons/fc"
import { testMyPartnershipsData } from "../../../api"
import { testMyProjectData } from "../../../api"
import { testMyTaskData } from "../../../api"

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

    return (
        <>
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
                                    tasks.length >= 1 ?
                                        <FcHighPriority /> :
                                        <FcOk />
                                }
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}
                        >
                            {
                                tasks.length >= 1 ?
                                    tasks.map((task, index) => {
                                        return (
                                            <p key={index}>{task.name}</p>
                                        )
                                    }) :
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
                                projects.length >= 1 ?
                                    projects.map((project, index) => {
                                        return (
                                            <p key={index}>{project.name}</p>
                                        )
                                    }) :
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
                                partnerships.length >= 1 ?
                                    partnerships.map((partnership, index) => {
                                        return (
                                            <p key={index}>{partnership.name}</p>
                                        )
                                    }) :
                                    "You are currently not associated with any partnerships."
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}