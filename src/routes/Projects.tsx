import { Image, Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, InputGroup, InputLeftElement, Input, Flex, Grid, Tag } from "@chakra-ui/react"
import { BsChatSquareFill } from "react-icons/bs";
import { GiQueenCrown } from 'react-icons/gi';
import { AiFillTag, AiFillEdit, AiFillCalendar } from 'react-icons/ai';
import { NavigationBar } from "../components/subcomponents/NavigationBar";
import SpiderWeb from "../assets/spiderweb.jpeg"
import Kokerbin from "../assets/kokerbin.jpeg"

export const Projects = () => (
    <>
        <NavigationBar
            subDirOne={{
                title: "Projects",
                link: "/projects"
            }}
            subDirTwo={{
                title: "Browse",
                link: "/projects/browse"
            }}
        />
        <Box mt={10}>
            <Box mb={6}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>Biodiversity and Conservation Science Projects
                </Text>
                <Text fontSize={"sm"} color={"gray.600"}>Click to expand</Text>
            </Box>
            <Accordion allowMultiple bg={"gray.100"} rounded={"2xl"}>
                <AccordionItem rounded={"2xl"}>
                    <h2>
                        <AccordionButton rounded={"2xl"}>
                            <Button variant={"link"} flex={1} justifyContent={"start"}>
                                Biodiversity Information Office
                            </Button>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg={"white"}>
                        <Box
                            rounded={"5px"}
                            minH={"300px"}
                            p={4}
                            my={4}
                            pos={"relative"}
                        // zIndex={1}
                        >
                            <Image
                                src={Kokerbin}
                                alt="background image"
                                objectFit="cover"
                                position="absolute"
                                top="0"
                                left="0"
                                width="100%"
                                height="100%"
                                rounded="5px"
                                opacity={"30%"}
                            />
                            <Box
                                p={4}
                                width="100%"
                                height="100%"
                                rounded={"5px"}
                                // zIndex={2}
                                bg={"whiteAlpha.600"}
                            >
                                <Grid

                                    templateColumns="auto 1fr"
                                    gap={4}
                                    alignItems="flex-start"
                                    justifyItems="flex-start"
                                    pb={4}
                                // zIndex={"2"}

                                >
                                    <Box
                                    // zIndex={"2"}
                                    >
                                        <Text fontSize="2xl" fontWeight="bold">Biodiversity Information Office</Text>
                                        <Text color="gray.600" fontSize="sm">Updated 6 months, 3 weeks ago by  Ronald McDonald</Text>
                                    </Box>
                                    <Box
                                        // zIndex={"2"}

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
                                    // zIndex={"2"}

                                    templateColumns="auto 1fr"
                                    gap={4}
                                    alignItems="flex-start"
                                    justifyItems="flex-start"
                                // bg="orange"
                                >
                                    <Box as={GiQueenCrown} size="18px"
                                        mt={2}
                                        // bg="red.500" 
                                        justifySelf={"center"}
                                    />
                                    <Text
                                    // bg="red.600"
                                    >
                                        Helen Ensikat
                                    </Text>
                                    <Box as={AiFillTag} size="18px"
                                        mt={2}
                                    />
                                    <Text
                                    >
                                        Biodiversity data; data sharing; data discovery; cross-sector collaboration; evidence-based decision-making.
                                    </Text>
                                    <Box as={BsChatSquareFill} size="18px"
                                        mt={2}
                                    />
                                    <Text
                                    >
                                        The Biodiversity Information Office (BIO) has been established as custodian and manager of the Biodiversity Data Repository for the biodiversity data collected and used by the Western Australian community. BIO will mobilise biodiversity data from all environment-related sectors, including government, industry, and community organisations, promoting a culture of collaboration and seamless data sharing across government, industry, research and the community. Greater access to biodiversity data will increase knowledge of our biodiversity and support informed decision making. BIO enhances the capability of the WA public sector to deliver services to a diverse range of stakeholders, leading to the delivery of sound policy outcomes and evidence-based decision-making. BIO is a core component of the WA digital transformation initiative, delivering data services for digital transformation of environmental assessment and approvals system (Environment Online) that is led by the Department of Water and Environmental Regulation (DWER). BIO will provide seamless integration with Environment Online to ensure access to the best available information to inform decision making. BIO is part of the partnership between WA and the Commonwealth Department of Agriculture, Water and the Environment (DAWE) to deliver the Digital Environmental Assessment Program as an integrated digital environmental assessment system and biodiversity data repository.
                                    </Text>

                                </Grid>
                            </Box>

                        </Box>

                        <Grid
                            minH={"100px"}
                            bg="red.500"
                            p={4}
                            templateColumns="auto 1fr"
                            gap={3}
                        >
                            <Box
                                position={"relative"}
                            >
                                <Image
                                    src={SpiderWeb}
                                    w={"200px"}
                                    h={"125px"}
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
                                bg={"orange.200"}
                                px={2}
                            >
                                <Box
                                    pb={3}
                                >
                                    <Text fontSize="xl" fontWeight="bold">BIO data collation program</Text>
                                    <Text color={"gray.600"} fontSize={"sm"}>A Barker, H Ensikat, K Grogan, Z Huq, D Murphy, C Piper, C Uehr, N Panine, R Cechner</Text>
                                    {/* 
                            <Grid
                                templateColumns={"repeat(6, 1fr)"}
                                gap={4}
                            >
                                <Tag textAlign={"center"} justifyContent={"center"}>Core Function</Tag>
                                <Tag textAlign={"center"} justifyContent={"center"}>Update Requested</Tag>
                            </Grid> */}

                                </Box>
                                <Box>
                                    <Box
                                        display="inline-flex" alignItems="center"
                                    >
                                        <AiFillCalendar />
                                        &nbsp;
                                        <Text ml={1}>2020-2024</Text>
                                    </Box>
                                    <Box
                                        display="inline-flex" alignItems="center"
                                    >
                                        <AiFillTag />
                                        &nbsp;
                                        <Grid
                                            ml={1}
                                            templateColumns={"repeat(6, 1fr)"}
                                            gap={4}
                                        >
                                            <Tag textAlign={"center"} justifyContent={"center"}>Core Function</Tag>
                                            <Tag textAlign={"center"} justifyContent={"center"}>Update Requested</Tag>
                                        </Grid>

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion >


        </Box>
    </>

);
