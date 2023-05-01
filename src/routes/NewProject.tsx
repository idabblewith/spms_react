
import { Box, Button, Center, Flex, Grid, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/NavigationBar"

import { AnimatePresence, motion } from "framer-motion"
import { testProjectCreationData } from "../api"
export const NewProject = () => {
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
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Box
                                    bgColor={"gray.100"}
                                    rounded={6}
                                    flexDir={"column"}
                                    p={6}
                                    position={"relative"}
                                    minH={
                                        {
                                            base: "350px",
                                            md: "300px",
                                            lg: "400px",
                                            '1xl': "450px",
                                        }
                                    }
                                >
                                    {/* TITLE */}
                                    <Center>
                                        <Heading
                                            size={"md"}
                                        >
                                            {item.title}
                                        </Heading>
                                    </Center>

                                    {/* DESCRIPTION */}
                                    <Center
                                        my={4}
                                        py={4}
                                    >
                                        <Text
                                            fontSize={"md"}
                                        >
                                            {item.description}
                                        </Text>
                                    </Center>

                                    {/* INFO */}
                                    <Center>
                                        <UnorderedList>
                                            {
                                                item.bulletPoints.map((point, index2) => (
                                                    <ListItem key={index2}
                                                        fontSize={"sm"}
                                                    >
                                                        {point}
                                                    </ListItem>
                                                )
                                                )}
                                        </UnorderedList>
                                    </Center>

                                    {/* BUTTON */}
                                    <Center
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        position="absolute"
                                        width="100%"
                                        py={6}
                                        px={3}
                                    // bg="red"
                                    >
                                        <Button
                                            colorScheme={item.colorScheme}
                                            leftIcon={<item.buttonIcon />}
                                        >
                                            Create {item.title}
                                        </Button>
                                    </Center>

                                </Box>
                            </motion.div>
                        )
                    })}
                </Grid>
            </AnimatePresence>
        </>
    )
}