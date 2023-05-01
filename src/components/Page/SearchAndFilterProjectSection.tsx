import { Box, Image, Flex, Button, Input, Text, Grid, Center, useDisclosure, Spinner, Checkbox, Select, Stat, StatLabel, Collapse, InputGroup, InputRightAddon, Modal, ModalContent, FormControl, FormHelperText, InputLeftElement, ModalCloseButton, ModalHeader, ModalOverlay, Icon, Accordion, AccordionItem, AccordionPanel, Tag, AccordionButton, AccordionIcon, } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { IUserData } from "../../types";
import { useQuery } from "@tanstack/react-query";
import _ from 'lodash';
import { AdminSliceSingle, BoxContainer } from "./AdminSliceSingle";
import { testUserData } from "../../api";
import { BsSearch } from 'react-icons/bs';
import { AddUserModal } from "../Modals/AddUserModal";
import { AiFillCalendar, AiFillEdit, AiFillTag } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { BsChatSquareFill } from "react-icons/bs";
import { GiQueenCrown } from 'react-icons/gi';
import { ProjectCard } from "./ProjectCard";
import { testProejctCardData } from "../../api";
import Kokerbin from "../../assets/kokerbin.jpeg"


export const SearchAndFilterProjectSection = () => {

    const downloadAllProjectsCSV = () => {
        console.log("Downloading...")
    }

    const [searchTerm, setSearchTerm] = useState("");

    const [filteredItems, setFilteredItems] = useState<IUserData[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [currentFilteredItems, setCurrentFilteredItems] = useState(
        filteredItems.slice(indexOfFirstItem, indexOfLastItem)
    );

    const [searchLoading, setSearchLoading] = useState<boolean>(false);

    // const { isOpen: addIsOpen, onOpen: onAddOpen, onClose: onAddClose } =
    //     useDisclosure();

    const [programFilter, setProgramFilter] = useState("");

    const debouncedHandleSearchChange = useRef(
        _.debounce((searchTerm: string, items: any) => {
            const filteredUsers = items.filter(
                (user: IUserData) =>
                    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
            console.log("called api");
            console.log(filteredUsers);

            setFilteredItems(filteredUsers);
            setSearchLoading(false);
        }, 500)
    ).current;

    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchTerm = e.currentTarget.value;
        setSearchTerm(searchTerm);
        setSearchLoading(true);
        if (searchTerm === "") {
            setFilteredItems(testUserData);
            setSearchLoading(false);
            return;
        }
        debouncedHandleSearchChange(searchTerm, testUserData);
    };

    const [selectAllCheckboxValue, setSelectAllCheckboxValue] =
        useState<boolean>(false);

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectAllCheckboxValue(!selectAllCheckboxValue);
    };

    useEffect(() => {
        if (programFilter !== "" || searchTerm !== "") {
            const filteredUsers = testUserData.filter(
                (user: IUserData) =>
                    (programFilter === "" ||
                        user.program?.toLowerCase() === programFilter.toLowerCase()) &&
                    (searchTerm === "" ||
                        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setFilteredItems(filteredUsers);
        } else {
            setFilteredItems(testUserData);
        }
    }, [programFilter, searchTerm]);

    useEffect(() => {
        setCurrentFilteredItems(
            filteredItems.slice(indexOfFirstItem, indexOfLastItem)
        );
    }, [filteredItems, indexOfFirstItem, indexOfLastItem]);


    const fieldNames = [
        "BCS Biodiversity Information Office",
        "BCS Biogeography",
        "BCS Animal Science",
        "BCS Plant Science and Herbarium",
        "BCS Ecosystem Science",
        "BCS Marine Science",
        "BCS Fire Science",
        "BCS Kings Park Science",
        "BCS Perth Zoo Science",
        "BCS Rivers and Estuaries Science",
        "BCS Remote Sensing and Spatial Analysis",
        "BCS Species and Communities",
        "BCS Ecoinformatics",
        "BGPA Business and Finance",
        "BGPA Business and Community Engagement",
        "BGPA Horticulture and Living Collections",
        "BGPA Environment and Infrastructure",
        "CEM Ecosystem Health Branch",
        "CEM Forest Management Branch",
        "CEM Wildlife Protection Branch",
        "CEM Rivers and Estuaries Branch",
        "CEM Environmental Management Branch",
        "PVS Visitor Services Branch",
        "PVS Aboriginal Engagement, Planning and Lands Branch",
        "PVS Tourism and Concessions Branch",
        "PVS Visitor Communications and Marketing Branch",
        "RFMS Fire Management Services Branch",
        "RFMS Region Goldfields",
        "RFMS Region Kimberley",
        "RFMS Region Midwest",
        "RFMS Region Pilbara",
        "RFMS Region South West",
        "RFMS Region Swan",
        "RFMS Region Warren",
        "RFMS Region Wheatbelt",
        "RIA Business Services",
        "RIA Environment, Heritage and Parks Services",
        "RIA Infrastructure",
        "RIA Contracts",
        "RIA Marketing and Events",
        "RIA Visitor Services",
        "ZPA Executive and Corporate Services",
        "ZPA Life Sciences",
        "ZPA Community Engagement",
    ]

    const [showFilters, setShowFilters] = useState(false);

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    }

    const { isOpen: isAddUserModalOpen, onOpen: onAddUserOpen, onClose: onAddUserClose } = useDisclosure();


    return (
        <Box maxW={"100%"} maxH={"100%"}>
            <AddUserModal isOpen={isAddUserModalOpen} onClose={onAddUserClose} />
            <Button onClick={handleToggleFilters} mt={4}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <Collapse in={showFilters} animateOpacity >
                <Flex mt={4} flexDirection={"column"}
                    // bg={"gray.100"}
                    rounded={"2xl"}
                    // bg={"white.100"}
                    border={"1px"}
                    borderColor={"gray.300"}
                    px={2}
                    mb={1}
                >
                    {/* 
                

                
                */}
                    <Center py={2}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>Filters</Text>
                    </Center>
                    <Grid
                        p={3}
                        gridTemplateColumns={
                            {
                                base: "repeat(2, 1fr)",
                                lg: "repeat(3,1fr)"
                            }
                        }
                        gridColumnGap={5}
                        gridRowGap={3}
                    >
                        <Stat>
                            <StatLabel>Type</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="corefunctionproject">Core Function</option>
                                <option value="externalproject">External Project</option>
                                <option value="scienceproject">Science Project</option>
                                <option value="studentproject">Student Project</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Year</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Start Date</StatLabel>
                            <Select
                                placeholder="Any Date"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="any">Any Date</option>
                                <option value="thisyear">This Year</option>
                                <option value="pastyear">Past Year</option>
                                <option value="pastsixmonths">Past Six Months</option>
                                <option value="pastthreemonths">Past Three Months</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Division</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="any">Any Date</option>
                                <option value="thisyear">This Year</option>
                                <option value="pastyear">Past Year</option>
                                <option value="pastsixmonths">Past Six Months</option>
                                <option value="pastthreemonths">Past Three Months</option>
                            </Select>
                        </Stat>                        <Stat>
                            <StatLabel>Is Active</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Status</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="new">New: Pending Concept Plan Approval</option>
                                <option value="planpending">New: Pending Project Plan Approval</option>
                                <option value="approved">Approved: Active</option>
                                <option value="updatereq">Update: Requested</option>
                                <option value="closurependingform">Closure: Pending Closure Form Approval</option>
                                <option value="closurependingupdate">Closure: Pending Final Update</option>
                                <option value="closurefinalupdate">Closure: Final Update Requested</option>
                                <option value="completed">Completed: Closed</option>
                                <option value="terminated">Terminated: Closed</option>
                                <option value="suspended">Suspended</option>

                            </Select>
                        </Stat>
                    </Grid>

                    <Box
                        m={3}>
                        <Stat>
                            <StatLabel>Business Area</StatLabel>
                            <Select
                                placeholder="All Business Areas"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                {fieldNames.map((name, index) => {
                                    return (
                                        <option key={index} value={name}>{name}</option>
                                    )
                                })}
                            </Select>
                        </Stat>
                    </Box>

                </Flex>

            </Collapse>
            <Flex width={"100%"} mt={4}>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Search by title or number"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        borderRadius="md"
                        paddingRight="2rem" // Add some padding to prevent text overlapping the icon
                        borderColor="gray.300" // Set border color to match the InputRightAddon border color

                    />
                    <InputRightAddon
                        children={<BsSearch />}
                        background="transparent"
                        borderColor="gray.300" // Set border color to match the Input border color
                        borderWidth="1px" // Add borderWidth to show the border around the addon
                        pointerEvents="none"
                        height="100%"
                        zIndex="1" // Add zIndex to place the addon above the input
                        _hover={{
                            borderColor: "gray.300", // Prevents the border color change on hover
                        }}

                    />
                </InputGroup>
                <Flex justifyContent={"flex-end"} width="100%">
                    <Button
                        leftIcon={<FaDownload />}
                        variant={"solid"}
                        colorScheme="blue"
                        onClick={downloadAllProjectsCSV}
                    >Download All Projects</Button>
                </Flex>
            </Flex>
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
                                            <Text fontSize="2xl" fontWeight="bold">Biodiversity Information Office</Text>
                                            <Text color="gray.600" fontSize="sm">Updated 6 months, 3 weeks ago by  Ronald McDonald</Text>
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
                            {testProejctCardData.map((data, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        pk={data.pk}
                                        projectTitle={data.projectTitle}
                                        authors={data.authors}
                                        years={data.years}
                                        tags={data.tags}
                                        systemTags={data.systemTags}
                                        imageUrl={data.imageUrl}
                                    />
                                )
                            })}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion >
            </Box>


            {/* {searchLoading ? (
                <Center w={"100%"} minH="100px" pt={10}>
                    <Spinner size={"xl"} />
                </Center>
            ) : (
                <Grid gridTemplateColumns={"repeat(1,1fr)"}>
                    {filteredItems?.map((u, i) => (
                        <AdminSliceSingle
                            key={i}
                            pk={u.pk}
                            username={u.username}
                            email={u.email}
                            firstName={u.firstName}
                            fullName={u.fullName}
                            program={u.program}
                            workCenter={u.workCenter}
                            imageLink={u.imageLink}
                            checkBoxState={selectAllCheckboxValue}
                        />
                    ))}
                </Grid>
            )} */}
            {/* <Pagination /> */}
        </Box>
    );
}

