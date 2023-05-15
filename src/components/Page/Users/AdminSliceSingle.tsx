import { Grid, Flex, Checkbox, Center, Image, Box, Button, Text, Menu, MenuButton, MenuList, BoxProps, MenuItem, useBreakpointValue, useDisclosure, useToast, Avatar } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { IUserData } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddUserToProjectModal } from "../../Modals/AddUserToProjectModal";


interface BoxContainerProps extends BoxProps {
    children: React.ReactNode;
}

export const BoxContainer: React.FC<BoxContainerProps> = ({ children, ...props }) => {
    return (
        <Box
            whiteSpace="normal"
            maxWidth="100%"
            {...props}
        >
            {children}
        </Box>
    );
};


export const AdminSliceSingle = ({ pk, username, email, firstName, fullName, program, workCenter, imageLink, checkBoxState = false }: IUserData) => {

    const navigate = useNavigate();

    const toast = useToast();
    const breakPointValue = useBreakpointValue({ base: "xs", md: "md", lg: "lg" });

    const isXLgorLarger = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xlg: true });
    const isLgOrLarger = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xlg: true })
    const is780OrSmaller = useBreakpointValue({ base: true, sm: true, md: true, 'mdlg': true, lg: false, xlg: false })
    const isOver690 = useBreakpointValue({ false: true, sm: false, md: false, 'over690': true, 'mdlg': true, lg: true, xlg: true })
    const [isChecked, setIsChecked] = useState<boolean>(checkBoxState);

    useEffect(() => {

        setIsChecked(checkBoxState);
    }, [checkBoxState]);

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
    }


    // useEffect(() => {
    //     console.log(is780OrSmaller)
    // }, [is780OrSmaller])

    const { isOpen: isAddUserToProjectModalOpen, onOpen: onOpenAddUserToProjectModal, onClose: onCloseAddUserToProjectModal } = useDisclosure()

    return (
        <>
            <AddUserToProjectModal isOpen={isAddUserToProjectModalOpen} onClose={onCloseAddUserToProjectModal} />
            <Grid
                templateColumns={{
                    base: "5fr 5fr 1fr",
                    lg: "1fr 4fr 5fr 1fr",
                }}
                alignItems="center"
                p={4}
                borderWidth={1}
                width="100%"
                key={pk}
            >
                {
                    isLgOrLarger ?
                        (
                            <Flex
                                ml={2}
                            // alignItems={"center"}
                            // justifyContent={"space-around"}
                            // bg="red"
                            >
                                {/* Checkbox */}
                                {/* <Checkbox
                        // bg={"red"}
                        isChecked={isChecked}
                        onChange={handleCheckChange}
                        mr={3}
                    /> */}
                                <Box
                                    minW={55}
                                >
                                    <Avatar
                                        src={imageLink}
                                        h={55}
                                        w={55}
                                        objectFit="cover"
                                        cursor={"pointer"}
                                        onClick={
                                            () => {
                                                navigate(`/users/${pk}`)
                                            }
                                        }

                                    />
                                </Box>
                            </Flex>
                        ) :
                        null
                }

                {/* Username */}
                {/* <BoxContainer
                    ml={4}
                    w="100%"
                    overflow="hidden"
                    textOverflow={"ellipsis"}
                >
                    <Button
                        fontWeight="bold"
                        variant={"link"}
                        as={"a"}
                        href={imageLink}
                    >
                        {username}
                    </Button>
                </BoxContainer> */}

                {/* Full Name */}

                <BoxContainer
                    // bg="red.900"
                    ml={isLgOrLarger ? 4 : 2}
                    w="100%"
                    overflow="hidden"
                    textOverflow={"ellipsis"}
                // bg="blue"
                >
                    <Button
                        fontWeight="bold"
                        variant={"link"}
                        as={"a"}
                        cursor={"pointer"}
                        onClick={
                            () => {
                                navigate(`/users/${pk}`)
                            }
                        }
                    >
                        {
                            isLgOrLarger ? fullName :
                                fullName.length > 16 ?
                                    `${fullName.substring(0, 10)}...` :
                                    fullName
                        }
                    </Button>
                </BoxContainer>


                {/* Email Address */}
                {
                    isLgOrLarger ?


                        <Box
                            ml={4}
                            w="100%"
                            overflow="hidden"
                            textOverflow={"ellipsis"}
                        >
                            <Text>
                                {email ? email : "(None)"}
                            </Text>
                        </Box>
                        :

                        !isOver690 ?

                            <Box
                                ml={4}
                                w="100%"
                                overflow="hidden"
                                textOverflow={"ellipsis"}
                            >
                                <Text>
                                    {
                                        email ?
                                            email.length >= 15 ? `${email.substring(0, 13)}...` : email :
                                            "(None)"
                                    }
                                </Text>
                            </Box>
                            :
                            <Box
                                ml={4}
                                w="100%"
                                overflow="hidden"
                                textOverflow={"ellipsis"}
                            >
                                <Text>
                                    {
                                        email ?
                                            email.length >= 25 ? `${email.substring(0, 20)}...` : email :
                                            "(None)"
                                    }
                                </Text>
                            </Box>
                }

                {/* Program */}
                {/* {
                    isLgOrLarger ?
                        <BoxContainer
                            ml={4}
                            w="100%"
                            overflow="hidden"
                            textOverflow={"ellipsis"}
                        >
                            <Text>
                                {program ? program : "(None)"}
                            </Text>
                        </BoxContainer>
                        : null
                } */}


                {/* WorkCenter */}
                {/* {
                    isXLgorLarger ?
                        <BoxContainer
                            ml={4}
                            w="100%"
                            overflow="hidden"
                            textOverflow={"ellipsis"}
                        >
                            <Text>
                                {workCenter ? workCenter : "(None)"}
                            </Text>
                        </BoxContainer>

                        : null
                } */}

                {/* Actions */}
                <Center
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
                            <MenuItem
                                onClick={
                                    () => {
                                        navigate(`/users/${pk}`)
                                    }
                                }
                            >
                                View Profile
                            </MenuItem>
                            {/* <MenuItem>Send Message</MenuItem> */}
                            <MenuItem
                                onClick={onOpenAddUserToProjectModal}
                            >
                                Add to Project
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </Center>
            </Grid>

        </>
    )
}