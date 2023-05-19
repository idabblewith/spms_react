import { Box, Button, Center, Flex, Grid, Spinner, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AdminSliceSingle } from "../Users/AdminSliceSingle";

interface IPaginationProps {
    data: any;
    type: string;
}

export const Pagination = ({ data, type }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <Box>
            <Box>
                {/* {searchLoading ? (
                <Center w={"100%"} minH="100px" pt={10}>
                    <Spinner size={"xl"} />
                </Center>
            ) : ( */}
                {/* Render the current page's data */}
                {
                    type === "user" ?
                        (
                            <Grid gridTemplateColumns={"repeat(1,1fr)"}>
                                {currentData?.map((u: any, i: number) => (
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
                                    // checkBoxState={selectAllCheckboxValue}
                                    />
                                ))}
                            </Grid>

                        )
                        :
                        type === "project" ?
                            (
                                <>
                                    hi
                                </>
                            )
                            :
                            null
                }

                <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                    mb={2}
                    pt={8}
                    w={"100%"}
                    justifyContent={"center"}
                >
                    <Button
                        onClick={() => handleClick(currentPage - 1)}
                        isDisabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            onClick={() => handleClick(index + 1)}
                            colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        onClick={() => {

                            handleClick(currentPage + 1)

                            console.log(`${currentPage} / ${totalPages}`)

                        }}
                        isDisabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};


// Todo:
// Drag and Drop - team management
// Tags input and end on semicolon (suggestive)
// Suggetive Project Search bar
// Make buttons open modals
// 