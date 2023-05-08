import { Box, Button, Center, Collapse, Flex, Grid, GridItem, Tag, Text } from '@chakra-ui/react'
import { useState } from 'react';


interface IDocumentActions {
    type: string;
}


export const DocumentActions = () => {
    const [showActions, setShowActions] = useState(false);
    const handleToggleActionsVisibility = () => {
        setShowActions(!showActions);
    }

    return (
        <>
            <Grid
                mb={4}
                templateColumns={'repeat(2, 1fr)'}
            >
                <GridItem
                    colSpan={1}
                // bg={"red"}
                >
                    <Grid
                        py={3}
                        gridTemplateColumns={"repeat(2, 1fr)"}
                    // bg="pink"
                    >
                        <Box
                            pl={4}
                        >
                            <Text
                                fontWeight={"bold"}
                            >
                                Progress:
                            </Text>

                        </Box>
                        <Box>
                            <Button
                                as={Tag}
                                colorScheme='green'
                                textAlign={"center"}
                                justifyContent={"center"}
                                size={"sm"}
                            >
                                Approved
                            </Button>
                        </Box>
                    </Grid>
                </GridItem>
                <GridItem
                    colSpan={1}
                // bg={"red"}
                >
                    <Box
                        py={3}
                    >
                        <Text
                            fontSize={"sm"}
                            color={"gray.500"}
                        >
                            Last updated by Jarid Prince on 05/05/2023
                        </Text>
                    </Box>
                </GridItem>

                <GridItem
                    colSpan={1}
                >
                    <Flex
                        // bg={"pink"}
                        width={"100%"}
                        justifyContent={"right"}
                    >
                        <Button onClick={handleToggleActionsVisibility}
                            colorScheme='blue'
                            my={2}
                        >
                            {showActions ? 'Hide Actions' : 'Document Actions'}
                        </Button>
                    </Flex>
                </GridItem>

                <GridItem
                    // bg={"yellow"}
                    colStart={1}
                    colEnd={4}
                    rowStart={3}
                    rowEnd={4}
                >
                    <Collapse in={showActions} animateOpacity>
                        <Flex my={4} flexDirection={"column"}
                            rounded={"2xl"}
                            border={"1px"}
                            borderColor={"gray.300"}
                            mb={1}
                            p={6}
                        >
                            <Text fontWeight={"bold"}>
                                Actions
                            </Text>
                            <Box>
                                <Grid gridTemplateColumns={"repeat(2, 1fr)"}>
                                    <Box>
                                        <Text>Status</Text>
                                    </Box>
                                    <Center
                                        // bg={"red"}
                                        justifyContent={"right"}
                                        textAlign={"right"}
                                    >
                                        <Button
                                            size={"xs"}
                                            colorScheme='green'
                                            as={Tag}
                                        >
                                            Approved
                                        </Button>
                                    </Center>
                                </Grid>
                                <Text>Your Actions</Text>
                                <Text>Document History</Text>
                                <Text>Created by ~~ on ~~</Text>
                            </Box>
                            <Flex width={"100%"} justifyContent={"right"} my={4}>
                                <Button colorScheme='blue'
                                    size={"xs"}
                                >
                                    Show previous versions
                                </Button>
                            </Flex>
                        </Flex>
                    </Collapse>

                </GridItem>

            </Grid>
        </>
    )
}