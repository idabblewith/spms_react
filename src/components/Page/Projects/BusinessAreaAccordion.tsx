import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Grid, Text, Image, Flex } from "@chakra-ui/react"
import { IProjectCardProps, ProjectCard } from "./ProjectCard"
import { AiFillEdit, AiFillTag } from "react-icons/ai"
import { GiQueenCrown } from "react-icons/gi";
import { BsChatSquareFill } from "react-icons/bs";
import { testProjectCardData } from "../../../api";
import { IProjectData } from "../../../types";
import { useTimeSince } from "../../../hooks/useTimeSince";


export interface IProjectAccordion {
    businessArea: string;
    businessAreaImage: string;
    businessAreaLeader: string;
    lastUpdateUserName: string;
    lastUpdateDate: Date;
    tags: string[];
    description: string;
    projects: IProjectCardProps[];
}

export const BusinessAreaAccordion = (
    {
        businessArea,
        businessAreaImage,
        businessAreaLeader,
        lastUpdateDate,
        lastUpdateUserName,
        tags,
        description,
        projects
    }: IProjectAccordion
) => {
    const renderUpdateTag = useTimeSince(lastUpdateDate)
    return (
        <>
            <Accordion
                allowMultiple bg={"gray.100"} rounded={"2xl"}
                my={3}
            >
                <AccordionItem rounded={"2xl"}>
                    <h2>
                        <AccordionButton
                            as={Button}
                            rounded={"2xl"}
                            variant={"link"} flex={1}
                            justifyContent={"start"}
                            w={"100%"}
                        >
                            {businessArea}
                            <Flex justifyContent={"right"} ml={"auto"}>
                                <AccordionIcon />
                            </Flex>

                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg={"white"}>
                        <Box
                            rounded={"5px"}
                            minH={"300px"}
                            p={4}
                            my={4}
                            pos={"relative"}
                        >
                            <Image
                                src={businessAreaImage}
                                alt="background image"
                                objectFit="cover"
                                position="absolute"
                                top="0"
                                left="0"
                                width="100%"
                                height="100%"
                                rounded="5px"
                                opacity={"20%"}
                            />
                            <Box
                                p={4}
                                width="100%"
                                height="100%"
                                rounded={"5px"}
                                bg={"whiteAlpha.600"}
                            >
                                <Grid

                                    templateColumns="auto 1fr"
                                    gap={4}
                                    alignItems="flex-start"
                                    justifyItems="flex-start"
                                    pb={4}
                                >
                                    <Box
                                    >
                                        <Text fontSize="2xl" fontWeight="bold">
                                            {/* Biodiversity Information Office */}
                                            {businessArea}
                                        </Text>
                                        <Text color="gray.600" fontSize="sm">
                                            {/* Updated 6 months, 3 weeks ago by Ronald McDonald */}
                                            {`Updated ${renderUpdateTag} by ${lastUpdateUserName}`}
                                        </Text>

                                    </Box>
                                    <Box

                                        justifyItems={"end"}
                                        justifySelf={"end"}
                                    >
                                        <Button
                                            colorScheme="blue"
                                            leftIcon={<AiFillEdit />}
                                        >
                                            Update
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid
                                    templateColumns="auto 1fr"
                                    gap={4}
                                    alignItems="flex-start"
                                    justifyItems="flex-start"
                                >
                                    <Box as={GiQueenCrown} size="18px"
                                        mt={2}
                                        justifySelf={"center"}
                                    />
                                    <Text
                                    >
                                        {businessAreaLeader}
                                    </Text>
                                    <Box as={AiFillTag} size="18px"
                                        mt={2}
                                    />
                                    <Text
                                    >
                                        {tags.join('; ')}
                                    </Text>
                                    <Box as={BsChatSquareFill} size="18px"
                                        mt={2}
                                    />
                                    <Text
                                    >
                                        {description}
                                    </Text>
                                </Grid>
                            </Box>
                        </Box>
                        {projects.map((data, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    pk={data.pk}
                                    projectTitle={data.projectTitle}
                                    authors={data.authors}
                                    years={data.years}
                                    tags={data.tags}
                                    projectTypeTag={data.projectTypeTag}
                                    statusTag={data.statusTag}
                                    imageUrl={data.imageUrl}
                                />
                            )
                        })}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion >
        </>
    )
}