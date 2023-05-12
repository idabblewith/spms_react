import { Button, Center, Divider, Grid, HStack, Menu, MenuButton, MenuItem, MenuList, Tag, useDisclosure } from "@chakra-ui/react"
import { ImCross } from "react-icons/im"
import { MdEdit, MdMoreVert } from "react-icons/md"

interface ITeamMember {
    name: string;
    role: string;
    timeAllocation: number;
    order: number;
}

export const TeamMember = ({ name, role, timeAllocation, order }: ITeamMember) => {

    // const { isOpen, onOpen, onClose } = useDisclosure();
    // Are you sure you want to remove this user from the project? (MODAL)
    // Edit User                                                   (MODAL)

    return (
        <>
            <HStack
                bg={"white"}
                justifyContent={"space-between"}
                p={2}
            // border={""}
            >
                <Grid
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gridGap={2}
                >
                    <Tag
                        size={"sm"}
                        w={"150px"}
                        justifyContent={"center"}
                    >
                        {/* Supervising Scientist */}
                        {role}
                    </Tag>
                    <Button
                        variant={"link"}
                        colorScheme="blue"
                        size={"sm"}
                    >
                        {/* Colin Crane */}
                        {name}
                    </Button>

                </Grid>
                <Grid
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gridGap={2}
                >
                    <Button
                        size={"xs"}
                        colorScheme="blue"
                        leftIcon={<MdEdit />}
                    >
                        Edit
                    </Button>
                    <Button
                        size={"xs"}
                        colorScheme="red"
                        leftIcon={<ImCross />}
                    >
                        Remove
                    </Button>
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