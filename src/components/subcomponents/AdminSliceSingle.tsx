import { Grid, Flex, Checkbox, Center, Image, Box, Button, Text, Menu, MenuButton, MenuList, BoxProps, MenuItem, useBreakpointValue, useDisclosure, useToast } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { IUserData } from "../../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


interface BoxContainerProps extends BoxProps {
    children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children, ...props }) => {
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


export const AdminSliceSingle = ({ pk, username, email, firstName, fullName, program, workCenter, imageLink }: IUserData) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const [isChecked, setisChecked] = useState<boolean>(false);
    const toast = useToast();
    const breakPointValue = useBreakpointValue({ base: "xs", md: "md", lg: "lg" });

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const isXLgorLarger = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xlg: true });
    const isLgOrLarger = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xlg: true })

    return (
        <>
            <Grid
                templateColumns={{
                    base: "1fr 3fr 6fr 1fr",
                    lg: "1fr 2fr 3fr 3fr 1fr",
                }}
                alignItems="center"
                p={4}
                borderWidth={1}
                width="100%"
                key={pk}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-around"}
                // bg="red"
                >
                    {/* Checkbox */}
                    <Checkbox
                        // bg={"red"}
                        isChecked={isChecked}
                        onChange={handleCheckChange}
                        mr={3}
                    />

                    {
                        isLgOrLarger ?
                            <Center
                                minW={55}
                            >
                                <Image
                                    rounded={8}
                                    src={imageLink}
                                    // mx={4}
                                    h={55}
                                    w={55}
                                    objectFit="cover"
                                // bg={"orange"}
                                />
                            </Center> :
                            null
                    }
                    {/* Avatar */}



                </Flex>

                {/* Username */}
                <BoxContainer
                    ml={4}
                    w="100%"
                    overflow="hidden"
                    textOverflow={"ellipsis"}
                // bg="blue"
                >
                    <Button
                        fontWeight="bold"
                        variant={"link"}
                        as={"a"}
                        href={imageLink}
                    >
                        {username}
                    </Button>
                </BoxContainer>

                {/* Full Name */}

                <BoxContainer
                    ml={4}
                    w="100%"
                    overflow="hidden"
                    textOverflow={"ellipsis"}
                // bg="blue"
                >
                    <Button
                        fontWeight="bold"
                        variant={"link"}
                        as={"a"}
                        href={imageLink}
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
                    isXLgorLarger ?
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

                        : null
                }

                {/* Program */}
                {
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
                }


                {/* WorkCenter */}
                {
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
                }

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
                            <MenuItem>Edit</MenuItem>
                            <MenuItem onClick={onOpen}>Delete</MenuItem>
                        </MenuList>
                    </Menu>

                </Center>
            </Grid>

        </>
    )
}