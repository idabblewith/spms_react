import { Box, Flex, Button, Input, Text, Grid, Center, useDisclosure, Spinner, Checkbox, Select, Stat, StatLabel, Collapse, InputGroup, InputRightAddon, Modal, ModalContent, FormControl, FormHelperText, InputLeftElement, ModalCloseButton, ModalHeader, ModalOverlay, Icon, } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { IUserData } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import _ from 'lodash';
import { AdminSliceSingle, BoxContainer } from "./AdminSliceSingle";
import { testUserData } from "../../../api";
import { BsSearch } from 'react-icons/bs';
import { CreateUserModal } from "../../Modals/CreateUserModal";
import { Pagination } from "../All/Pagination";


export const SearchAndFilterUserSection = () => {



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

    const { isOpen: isCreateUserModalOpen, onOpen: onCreateUserOpen, onClose: onCreateUserClose } = useDisclosure();


    return (
        <Box maxW={"100%"} maxH={"100%"}>
            <CreateUserModal isOpen={isCreateUserModalOpen} onClose={onCreateUserClose} />


            <Grid width={"100%"} mt={4}

            >
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Search by username, name, or email"
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
                <Grid
                    justifyContent={"flex-end"}
                    alignContent={"flex-end"}
                    alignItems={"flex-end"}
                    justifySelf={"flex-end"}
                    width={{
                        base: "100%",
                        lg: "40%",
                        xl: "25%"
                    }}
                    gridTemplateColumns={
                        {
                            base: "repeat(2, 1fr)",
                            lg: "repeat(2, 1fr)",
                        }
                    }
                    gridColumnGap={4}
                    pt={3}
                // justifyItems="end"
                >
                    <Button onClick={handleToggleFilters}
                    // mt={4}
                    // colorScheme=""
                    >
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </Button>
                    <Button onClick={onCreateUserOpen}
                        colorScheme={"blue"}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
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
                            <StatLabel>External to DBCA?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Show as Group?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Is Staff?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Is Superuser?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Is Active?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Select>
                        </Stat>
                        <Stat>
                            <StatLabel>Show as Group?</StatLabel>
                            <Select
                                placeholder="All"
                                value={programFilter}
                                onChange={(e) => setProgramFilter(e.target.value)}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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
            <Grid
                templateColumns={{
                    base: "5fr 5fr 1fr",
                    // lg: "1fr 2fr 3fr 3fr 1fr",
                }}
                alignItems="center"
                p={4}
                borderWidth={1}
                width="100%"
                mt={5}
            >
                {/* <Flex alignItems={"center"} justifyContent={"space-around"}> */}
                {/* <Checkbox
                        // bg={"red"}
                        isChecked={selectAllCheckboxValue}
                        onChange={handleCheckChange}
                        mr={20}
                    /> */}
                {/* </Flex> */}
                <BoxContainer ml={2} w="100%" overflow="hidden" textOverflow={"ellipsis"}>
                    <Text as={"b"}>User</Text>
                </BoxContainer>
                <Box ml={6} w="100%" overflow="hidden" textOverflow={"ellipsis"}>
                    <Text as={"b"}>Email</Text>
                </Box>
                <Center>
                    <Text as={"b"}>More</Text>
                </Center>
            </Grid>

            {searchLoading ? (
                <Center w={"100%"} minH="100px" pt={10}>
                    <Spinner size={"xl"} />
                </Center>
            ) : (
                <Pagination data={filteredItems} type={'user'} />
            )}
        </Box>
    );
}

