import { Box, Flex, Button, Input, Text, Grid, Center, useDisclosure, Spinner, } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { IUserData } from "../../types";
import { useQuery } from "@tanstack/react-query";
import _ from 'lodash';
import { AdminSliceSingle } from "./AdminSliceSingle";
import { testUserData } from "../../api";


export const SearchAndFilterUserSection = () => {




    // const { isLoading, data: items } = useQuery<ISimpleFilteredUsers[]>(
    //     {
    //         queryFn: getUsers,
    //         queryKey: ["simpleSlices"]
    //     }
    // );

    const [searchTerm, setSearchTerm] = useState("");

    const [filteredItems, setFilteredItems] = useState<IUserData[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFilteredItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);


    const [searchLoading, setSearchLoading] = useState<boolean>(false);

    const { isOpen: addIsOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();

    const debouncedHandleSearchChange = useRef(_.debounce((searchTerm: string, items: any) => {
        console.log("called api");
        console.log(items);
        setFilteredItems(
            //@ts-ignore
            items?.filter((item) =>
                item.username.toLowerCase().includes(searchTerm?.toLowerCase())
            )
        );
        setSearchLoading(false);
    }, 500)).current;

    const handleSearchChange =
        (e: React.FormEvent<HTMLInputElement>) => {
            const searchTerm = e.currentTarget.value;
            console.log(searchTerm);
            setSearchTerm(searchTerm);
            setSearchLoading(true);
            debouncedHandleSearchChange(searchTerm, testUserData);
        }


    return (
        <Box maxW={"100%"} maxH={"100%"}>
            <Flex width={"100%"} mt={4}>
                <Input
                    type="text"
                    placeholder="Search users by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Flex justifyContent={"flex-end"} width="100%">
                    <Button onClick={onAddOpen} >
                        Add
                    </Button>
                </Flex>
            </Flex>
            <Flex
                flexDir={"row"}
                mt={4}
                width="100%"
                justifyContent={"flex-start"}
                py={3}
            >
                <Flex minW={"70%"} justifyContent="flex-start" >
                    <Text mx={2} as={"b"}>User</Text>
                </Flex>
                <Flex minW={"30%"} justifyContent="space-around"
                >
                    <Box mr={4}
                    >
                        <Text as={"b"}></Text>
                    </Box>
                    <Box mr={4}
                    >
                        <Text as={"b"}>Edit</Text>
                    </Box>
                </Flex>

            </Flex>

            {searchLoading ?
                (
                    <Center w={"100%"} minH="100px"
                        pt={10}
                    >
                        <Spinner size={"xl"} />
                    </Center>
                ) :
                (<Grid
                    gridTemplateColumns={
                        "repeat(1,1fr)"
                    }
                >
                    {searchTerm !== ""
                        ?
                        currentFilteredItems?.map((u, i) => (
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
                            />
                        )
                        )
                        :
                        testUserData?.map((u, i) => (
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
                            />
                        )
                        )
                    }
                </Grid>)}
            {/* <Pagination /> */}
        </Box>

    )
}

