
import { Box, Button, Center, Flex, Grid, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/All/NavigationBar"

import { AnimatePresence, motion } from "framer-motion"
import { testProjectCreationData } from "../api"
import { NewProjectCard } from "../components/Page/ProjectCreate/NewProjectCard"
import { InteractiveNewProjectCardv1 } from "../components/Page/ProjectCreate/InteractiveNewProjectCardv1"
import { InteractiveNewProjectCardv2 } from "../components/Page/ProjectCreate/InteractiveNewProjectCardv2"
import { useState } from "react"




export const NewProject = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Projects",
                    link: "/projects"
                }}
                subDirTwo={{
                    title: "Add New Project",
                    link: "/projects/new"
                }}
            />


            <Box
                bgColor={"gray.100"}
                rounded={6}
                flexDir={"column"}
                p={6}
                pos={"relative"}
                mt={10}
            >
                <Heading>
                    CREATE A NEW PROJECT
                </Heading>
                <br />
                <Text>
                    Projects differ by documentation structure, approval process, and reporting requirements. Make sure you choose the correct project type as you will not be able to change the project type after creation. If you need to change the project type, you need to have the project deleted by an admin and create a new project of the desired type.
                </Text>



            </Box>

            <AnimatePresence>
                <Grid
                    mt={10}
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        lg: "repeat(2, 1fr)",
                        "1xl": "repeat(4, 1fr)",
                    }}
                    gap={6}
                >
                    {testProjectCreationData.map((item, index) => {
                        return (
                            <NewProjectCard key={index}
                                title={item.title}
                                description={item.description}
                                buttonIcon={item.buttonIcon}
                                bulletPoints={item.bulletPoints}
                                colorScheme={item.colorScheme}
                            />
                            // <InteractiveNewProjectCardv1
                            //     index={index}
                            //     activeCard={activeCard}
                            //     setActiveCard={setActiveCard}
                            //     key={index}
                            //     title={item.title}
                            //     description={item.description}
                            //     buttonIcon={item.buttonIcon}
                            //     cardImage={item.cardImage}
                            //     bulletPoints={item.bulletPoints}
                            //     colorScheme={item.colorScheme}
                            // />
                        )
                    })}
                </Grid>
            </AnimatePresence>
        </>
    )
}