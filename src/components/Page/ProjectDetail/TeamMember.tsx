import { Box, Button, Center, Divider, Grid, HStack, Menu, MenuButton, MenuItem, MenuList, Tag, useDisclosure } from "@chakra-ui/react"
import { ImCross } from "react-icons/im"
import { MdEdit, MdMoreVert } from "react-icons/md"

interface ITeamMember {
    name: string;
    role: string;
    timeAllocation: number;
    order: number;
}

export const TeamMember = ({ name, role, timeAllocation, order }: ITeamMember) => {

    const roleColors: { [key: string]: { bg: string; color: string } } = {
        "Research Scientist": { bg: "green.500", color: "white" },
        "Supervising Scientist": { bg: "green.400", color: "white" },

        "Academic Supervisor": { bg: "blue.500", color: "white" },
        "Supervised Student": { bg: "blue.400", color: "whiteAlpha.900" },

        "Technical Officer": { bg: "orange.400", color: "white" },
        "Consulted Peer": { bg: "green.200", color: "black" },

        "External Collaborator": { bg: "gray.200", color: "black" },
        "External Peer": { bg: "gray.300", color: "black" },
        "Involved Group": { bg: "gray.500", color: "white" },
    };

    const roleColor = roleColors[role] || { bg: "gray.200", color: "black" };

    // const { isOpen, onOpen, onClose } = useDisclosure();
    // Are you sure you want to remove this user from the project? (MODAL)
    // Edit User                                                   (MODAL)

    return (
        <>
            <HStack
                bg={"white"}
                justifyContent={"space-between"}
                p={2}
            >
                <Grid
                    gridTemplateColumns={"150px 1fr"}
                    w={"100%"}
                    justifyItems={"start"}
                >
                    <Box
                        display={"inline-flex"}
                        alignItems={"center"}
                        w={"150px"}
                        justifyItems={"start"}
                    >
                        <Tag
                            w={"150px"}
                            size={"sm"}
                            justifyContent={"center"}
                            bg={roleColor.bg}
                            color={roleColor.color}
                        >
                            {role}
                        </Tag>
                    </Box>

                    <Box
                        // bg={"pink"}
                        w={"100%"}
                    >
                        <Button
                            pl={4}
                            justifyItems={"start"}
                            variant={"link"}
                            colorScheme="blue"
                            size={"md"}
                        >
                            {name}
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    gridTemplateColumns={"repeat(1, 1fr)"}
                    gridGap={2}
                >
                    <Menu>
                        <MenuButton
                            px={2}
                            py={2}
                            transition="all 0.2s"
                            rounded={4}
                            borderRadius="md"
                            borderWidth="1px"
                            _hover={{ bg: "gray.400" }}
                            _expanded={{ bg: "blue.400" }}
                            _focus={{ boxShadow: "outline" }}
                        >
                            <MdMoreVert />
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                            // onClick={
                            // onClick={onOpenEditUserProjectModal}
                            // }
                            >
                                Edit
                            </MenuItem>
                            {/* <MenuItem>Send Message</MenuItem> */}
                            <MenuItem
                            // onClick={onOpenDeleteModal}
                            >
                                Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {/* <Button
                        size={"xs"}
                        colorScheme="blue"
                        leftIcon={<MdEdit />}
                    >
                        Edit
                    </Button> */}
                    {/* <Button
                        size={"xs"}
                        colorScheme="red"
                        leftIcon={<ImCross />}
                    >
                        Remove
                    </Button> */}
                </Grid>

                {/* Actions */}
                {/* <Center
                    // maxWidth={"50px"}
                    minW={"50px"}
                // bg="red"
                >
                    <Menu>
                        <MenuButton
                            px={2}
                            py={2}
                            transition="all 0.2s"
                            rounded={4}
                            borderRadius="md"
                            borderWidth="1px"
                            _hover={{ bg: "gray.400" }}
                            _expanded={{ bg: "blue.400" }}
                            _focus={{ boxShadow: "outline" }}
                        >
                            <MdMoreVert />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Edit</MenuItem>
                            <MenuItem onClick={onOpen}>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
                 */}
            </HStack>
            <Divider />
        </>
    )
}