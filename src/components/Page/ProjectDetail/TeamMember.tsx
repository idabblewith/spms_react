import { Button, Divider, Grid, HStack, Tag } from "@chakra-ui/react"
import { ImCross } from "react-icons/im"
import { MdEdit } from "react-icons/md"

interface ITeamMember {
    name: string;
    role: string;
    timeAllocation: number;
    order: number;
}

export const TeamMember = ({ name, role, timeAllocation, order }: ITeamMember) => {
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

            </HStack>
            <Divider />
        </>
    )
}