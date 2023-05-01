import { Box, Button, Grid, Image, Tag, Text } from "@chakra-ui/react"
import { AiFillCalendar, AiFillEdit, AiFillTag } from "react-icons/ai"
import { TbAlertOctagonFilled } from "react-icons/tb"
import { MdUnfoldMore } from "react-icons/md"


interface IProjectCardProps {
    pk: number;
    projectTitle: string;
    authors: string[];
    years: string;
    tags: string[];
    systemTags: string[];
    imageUrl: string;
}

export const ProjectCard = ({ pk, projectTitle, imageUrl, years, authors, tags, systemTags }: IProjectCardProps) => {
    return (
        <>

            <Grid
                minH={"100px"}
                bg="blackAlpha.300"
                rounded={"lg"}
                mb={4}
                p={4}
                templateColumns="4fr 5fr"
                gap={3}
            >
                <Box
                    position={"relative"}
                >
                    <Image
                        src={imageUrl}
                        minW={"200px"}
                        minH={"125px"}
                        objectFit={"cover"}
                        rounded={"lg"}
                    />
                    <Button
                        variant={"unstyled"}
                        position={"absolute"}
                        top={0}
                        right={0}
                        color={"white"}
                    >
                        <AiFillEdit />
                    </Button>
                    {/* <Grid
                        pt={4}
                        rowGap={2}
                    >
                        <Button>More</Button>
                        <Button>Go To</Button>
                    </Grid> */}


                </Box>

                <Box
                    // bg={"orange.200"}
                    px={2}
                    pos={"relative"}
                    pb={10}
                >

                    <Box
                        pb={3}
                    >
                        <Button
                            fontSize="xl"
                            fontWeight="bold"
                            variant={"link"}
                            colorScheme="facebook"
                        >
                            {projectTitle}
                        </Button>
                        <Text color={"gray.600"} fontSize={"sm"}>
                            {authors.map((author, index) => `${author}${index !== authors.length - 1 ? ', ' : ''}`)}
                        </Text>
                    </Box>
                    <Grid
                        flexDir={"row"}
                        templateColumns={"repeat(1, 1fr)"}
                    >
                        <Box
                            pb={4}
                            display="inline-flex" alignItems="center"
                        >
                            <TbAlertOctagonFilled />
                            <Grid
                                gridTemplateColumns={{
                                    base: "repeat(3, 1fr)"
                                }}
                                gridGap={3}
                                ml={3}
                                // templateColumns={
                                //     {
                                //         base: "repeat(1, 1fr)",
                                //         lg: "repeat(2, 1fr)",
                                //         xl: "repeat(auto, 1fr)",

                                //     }
                                // }
                                // gridTemplateColumns={
                                //     {
                                //         base: "repeat(1, 1fr)",
                                //         md: "repeat(2, 1fr)",
                                //         xl: "repeat(3, 1fr)"
                                //     }
                                // } // set a fixed width for the grid columns
                                // gridTemplateRows={"28px"}
                                gap={4}

                            >
                                {
                                    systemTags.map((tag, index) => {
                                        return (
                                            <Tag
                                                p={1.5}
                                                bgColor={
                                                    tag === "Update Requested" ?
                                                        "red.500" :
                                                        tag === "Core Function" ?
                                                            "blue.500" : "gray.200"
                                                }
                                                textColor={"whiteAlpha.900"}
                                                fontSize={"xs"}
                                                key={index}
                                                textAlign={"center"} justifyContent={"center"}>
                                                {tag}
                                            </Tag>
                                        )
                                    })

                                }
                            </Grid>
                        </Box>
                        <Box
                            pb={4}
                            display="inline-flex" alignItems="center"
                        >
                            <AiFillCalendar
                                size={"16px"}
                            />
                            <Grid
                                ml={2}
                                templateColumns={
                                    {
                                        base: "repeat(1, 1fr)",
                                        lg: "repeat(2, 1fr)",
                                        xl: "repeat(auto, 1fr)",

                                    }
                                }
                                gridTemplateColumns={
                                    {
                                        base: "repeat(1, 1fr)",
                                        md: "repeat(2, 1fr)",
                                        xl: "repeat(3, 1fr)"
                                    }
                                } // set a fixed width for the grid columns
                                gridTemplateRows={"28px"}
                                gap={4}

                            >
                                <Text ml={1}>{years}</Text>

                            </Grid>
                        </Box>
                        <Box
                            display="inline-flex"
                            // alignItems="center"
                            pb={4}
                        >
                            <AiFillTag
                                size={"16px"}
                            />
                            <Grid
                                ml={3}
                                templateColumns={
                                    {
                                        base: "repeat(1, 1fr)",
                                        lg: "repeat(2, 1fr)",
                                        xl: "repeat(auto, 1fr)",

                                    }
                                }
                                gridTemplateColumns={
                                    {
                                        base: "repeat(1, 1fr)",
                                        md: "repeat(2, 1fr)",
                                        xl: "repeat(3, 1fr)"
                                    }
                                } // set a fixed width for the grid columns
                                gridTemplateRows={"28px"}
                                gap={4}
                            >
                                {
                                    tags.map((tag, index) => {
                                        return (
                                            <Tag
                                                size={"sm"}
                                                key={index}
                                                textAlign={"center"} justifyContent={"center"}
                                                p={"10px"}
                                            // noOfLines={2}
                                            // minH={"33px"}
                                            // h={"38px"}
                                            // width="200px"  
                                            // height="40px" 
                                            >
                                                {tag}
                                            </Tag>
                                        )
                                    })

                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Button
                        variant={"solid"}
                        colorScheme="blue"
                        position={"absolute"}
                        bottom={0}
                        right={"8px"}
                        size={"sm"}
                        rightIcon={<MdUnfoldMore />}
                    // color={"white"}
                    >
                        More
                    </Button>
                </Box>
            </Grid >
        </>
    )
}