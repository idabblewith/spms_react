import { Box, Button, Center, Flex, Grid, HStack, Input, InputGroup, Tag, Text, useDisclosure } from "@chakra-ui/react"
import { ImCross } from 'react-icons/im'
import { MdEdit } from 'react-icons/md'
import { AddUserToProjectModal } from "../../Modals/AddUserToProjectModal"
import { TeamMember } from "./TeamMember"

export const ManageTeam = () => {

    const { isOpen: isAddUserModalOpen, onOpen: onOpenAddUserModal, onClose: onCloseAddUserModal } = useDisclosure()



    return (
        <Box
            minH={"100px"}
            bg="blackAlpha.200"
            rounded={"lg"}
            mb={4}
            p={4}
            mt={6}
        >
            <Grid
                gridTemplateColumns={"repeat(2, 1fr)"}
            >
                <Text fontWeight={"bold"} fontSize={"lg"}>Manage Team</Text>

                <Flex
                    w={"100%"}
                    justifyContent={'flex-end'}
                >
                    <Button
                        colorScheme="green"
                        size={"sm"}
                        onClick={onOpenAddUserModal}
                    >
                        Add Member
                    </Button>
                    <AddUserToProjectModal isOpen={isAddUserModalOpen} onClose={onCloseAddUserModal} />
                </Flex>
                <Box>
                    <Text fontSize={"sm"} color={"gray.500"}>Click and drag a user to re-arrange order</Text>
                </Box>
            </Grid>
            {/* <Text
                fontSize={"sm"} color={"gray.500"}
            >
                The team list is sorted by list position (ascending) and last name (alphabetically).
            </Text> */}

            <Grid
                rounded={"xl"}
                mt={4}
                // bg={"red"}
                overflow="hidden"
            >
                <TeamMember
                    name="Bryan Shearer"
                    role="Research Scientist"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="Colin Crane"
                    role="Supervising Scientist"
                    order={5}
                    timeAllocation={0.9}
                />
                <TeamMember
                    name="Jimmy Neutron"
                    role="Consulted Peer"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="Ben Ten"
                    role="Academic Supervisor"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="Bob the Builder"
                    role="Supervised Student"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="Thomas the Tank Engine"
                    role="Technical Officer"
                    order={10}
                    timeAllocation={0.05}
                />

                <TeamMember
                    name="Spongebob Squarepants"
                    role="External Collaborator"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="Patrick Star"
                    role="External Peer"
                    order={10}
                    timeAllocation={0.05}
                />
                <TeamMember
                    name="James Bond"
                    role="Involved Group"
                    order={10}
                    timeAllocation={0.05}
                />
            </Grid>
        </Box>
    )
}