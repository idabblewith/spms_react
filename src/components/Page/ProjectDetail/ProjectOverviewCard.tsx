import { Box, Button, Center, Flex, Grid, Image, Tag, Text, useDisclosure } from "@chakra-ui/react"
import { AiFillCalendar, AiFillEdit, AiFillTag } from "react-icons/ai"
import { TbAlertOctagonFilled } from "react-icons/tb"
import { MdUnfoldMore } from "react-icons/md"
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from 'react-icons/hi'
import { ProjectDetailEditModal } from "../../Modals/ProjectDetailEditModal";

interface IProjectOverviewCardProps {
    pk: number;
    projectTitle: string;
    authors: string[];
    years: string;
    tags: string[];
    systemTags: string[];
    imageUrl: string;
    division: string;
    projectLabel: string;
}


export const ProjectOverviewCard = (
    { pk, projectTitle, imageUrl, years, authors, tags, systemTags, division, projectLabel }: IProjectOverviewCardProps
) => {

    const { isOpen: isEditProjectDetailModalOpen, onOpen: onEditProjectDetailModalOpen, onClose: onEditProjectDetailModalClose } = useDisclosure()

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
                            <Link to={`/projects/${pk}`}>
                                {projectTitle}
                            </Link>
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
                            <Tag
                                size={"sm"}
                                bgColor={"gray.600"}
                                color={"white"}
                            >
                                {division}
                            </Tag>
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
                                <Tag
                                    size={"sm"}
                                    ml={1}>{years}</Tag>

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
                    <Box>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod lacinia nibh. Nullam ultricies cursus lorem faucibus porta. Mauris id turpis eget ex auctor tempus. Praesent sagittis aliquam arcu non faucibus. Nunc eget tempor odio, sit amet venenatis urna. Aenean tortor ex, fermentum ut condimentum sed, lacinia ut enim. Donec aliquam mauris velit, sed placerat lorem imperdiet porttitor. Suspendisse aliquam mattis neque, vitae feugiat orci sagittis non. Donec vitae ex orci. Vestibulum vestibulum finibus leo ut varius. Mauris nulla nulla, posuere aliquet justo quis, cursus blandit ligula. Phasellus auctor sapien at libero convallis, vel aliquet nunc fringilla. Morbi scelerisque, ipsum sit amet tempus pulvinar, arcu enim suscipit massa, sit amet placerat sapien dolor ac nunc.
                    </Box>
                    <Box
                        pt={6}
                    >
                        <Button variant={"link"} colorScheme="blue"
                            leftIcon={<HiOutlineExternalLink />}
                        >
                            Review Datasets tagged with {projectLabel}
                        </Button>
                    </Box>
                    <Flex pt={6}
                        justifyContent={"right"}
                    >
                        <ProjectDetailEditModal
                            onClose={onEditProjectDetailModalClose}
                            isOpen={isEditProjectDetailModalOpen}
                        />
                        <Button colorScheme="blue"
                            leftIcon={<AiFillEdit />}
                            onClick={onEditProjectDetailModalOpen}
                        >
                            Edit Project Details
                        </Button>
                    </Flex>
                </Box>
            </Grid >
        </>
    )
}


