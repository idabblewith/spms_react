
import { Box, Button, Center, Flex, Grid, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { NavigationBar } from "../components/subcomponents/NavigationBar"

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

            <Grid
                mt={10}
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                    "1xl": "repeat(4, 1fr)",
                }}
                gap={6}
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
                            Science Project
                        </Heading>
                    </Center>

                    {/* DESCRIPTION */}
                    <Center
                        my={4}
                    >
                        <Text>
                            A project with a defined period of scientific activities.
                        </Text>
                    </Center>

                    {/* INFO */}
                    <Center>
                        <UnorderedList>
                            <ListItem>Has an approval process to determine its fit within Departmental stragegy and priorities.</ListItem>
                            <ListItem>Has a formal closure process.</ListItem>
                            <ListItem>Requires annual reporting.</ListItem>
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
                            colorScheme="blue"
                        >
                            Create Science Project
                        </Button>
                    </Center>

                </Box>
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
                            Core Function

                        </Heading>
                    </Center>

                    {/* DESCRIPTION */}
                    <Center
                        my={4}
                    >
                        <Text>
                            An ongoing science function with an indefinite period of activity.
                        </Text>
                    </Center>

                    {/* INFO */}
                    <Center>
                        <UnorderedList>
                            <ListItem>Has no approval process.</ListItem>
                            <ListItem>Has an immediate closure process.</ListItem>
                            <ListItem>Requires annual reporting.</ListItem>
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
                            colorScheme="blue"
                        >
                            Create Core Function
                        </Button>
                    </Center>

                </Box>
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
                            Student Project
                        </Heading>
                    </Center>

                    {/* DESCRIPTION */}
                    <Center
                        my={4}
                    >
                        <Text>
                            Supervision of a tertiary student.
                        </Text>
                    </Center>

                    {/* INFO */}
                    <Center>
                        <UnorderedList>
                            <ListItem>Has no formal approval process.</ListItem>
                            <ListItem>Has immediate closure without formal process.</ListItem>
                            <ListItem>Requires annual reporting.</ListItem>
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
                            colorScheme="blue"
                        >
                            Create Student Project
                        </Button>
                    </Center>

                </Box>
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
                    justifyContent={"center"}
                >
                    {/* TITLE */}
                    <Center>
                        <Heading
                            size={"md"}
                        >
                            External Partnership
                        </Heading>
                    </Center>

                    {/* DESCRIPTION */}
                    <Center
                        my={4}
                    >
                        <Text>
                            Participation in an externally managed project.
                        </Text>
                    </Center>

                    {/* INFO */}
                    <Center>
                        <UnorderedList>
                            <ListItem>Has no formal approval process.</ListItem>
                            <ListItem>Has immediate closure without formal process.</ListItem>
                            <ListItem>Project details are automatically included in annual reporting.</ListItem>
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
                            colorScheme="blue"
                        >
                            Create External Partnership
                        </Button>
                    </Center>

                </Box>

            </Grid>
        </>
    )
}