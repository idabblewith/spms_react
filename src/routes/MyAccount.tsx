import { Accordion, Button, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, Input, Checkbox, Grid } from "@chakra-ui/react"
import { NavigationBar } from "../components/subcomponents/NavigationBar"
import { MyTasksAndAssociations } from "../components/MyTasksAndAssociations"
import { useState, ChangeEvent } from "react"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { FcApproval, FcCancel } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {

    const [academicTitleValue, setAcademicTitleValue] = useState('');
    const handleAcademicTitleChange = (event: ChangeEvent<HTMLInputElement>) => setAcademicTitleValue(event.target.value);

    const userIsSuperuser = false;
    const userIsStaff = true;
    const userIsActive = true;

    const navigate = useNavigate();

    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Manage Users",
                    link: "/users"
                }}
                subDirTwo={{
                    title: "Me",
                    link: "/users/me"
                }}
            />
            <Box mt={10}>
                <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        My Account
                    </Text>
                </Box>
                <Accordion allowMultiple bg={"gray.100"} rounded={"2xl"}
                    mb={4}>
                    <AccordionItem rounded={"2xl"}>
                        <h2>
                            <AccordionButton rounded={"2xl"}>
                                <Button variant={"link"} flex={1} justifyContent={"start"}>
                                    Basic Information
                                </Button>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={"white"}>
                            <Box
                                rounded={"5px"}
                                minH={"300px"}
                                p={4}
                                my={4}
                                pos={"relative"}
                            // zIndex={1}
                            >
                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Academic Title: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Provide a title...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Optional academic title, shown in team lists only if supplied, and only for external team members.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>First Name: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your first name...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        First name or given name.
                                    </Text>
                                </Box>


                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Initials: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your initials (not including last name)...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Initials of first and middle names. Will be used in team lists with abbreviated names.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Group Name: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter a group name...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Group name, if this profile is not a natural person. E.g., 'Goldfields Regional Office'.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Affiliation: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your affiliation...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Optional affiliation, not required for DBCA. If provided, the affiliation will be appended to the person or group name in parentheses.                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Show as Group?</Text>
                                    <Checkbox />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Whether this profile refers to a group, rather than a natural person. Groups are referred to with their group name, whereas first and last name refer to the group's contact person.

                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>External to DBCA?</Text>
                                    <Checkbox />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Is the user external to DBCA?
                                    </Text>
                                </Box>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple bg={"gray.100"} rounded={"2xl"}
                    mb={4}
                >
                    <AccordionItem rounded={"2xl"}>
                        <h2>
                            <AccordionButton rounded={"2xl"}>
                                <Button variant={"link"} flex={1} justifyContent={"start"}>
                                    Contact Details
                                </Button>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={"white"}>
                            <Box
                                rounded={"5px"}
                                minH={"300px"}
                                p={4}
                                my={4}
                                pos={"relative"}
                            // zIndex={1}
                            >
                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Image: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='No file chosen...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        If you wish, provide us with a face to the name!
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Email Address: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your email...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Your email address.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Primary Phone Number: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your phone number...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        The primary phone number during work hours.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Alternative Phone Number: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your alternative phone number...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        An alternative phone number during work hours.
                                    </Text>
                                </Box>

                                <Box mb={8}>
                                    <Text mb='8px' fontWeight={"bold"}>Fax Number: </Text>
                                    <Input
                                        value={academicTitleValue}
                                        onChange={handleAcademicTitleChange}
                                        placeholder='Enter your fax number...'
                                        size='sm'
                                    />
                                    <Text
                                        fontSize="xs"
                                        color={"gray.500"}
                                        mt={1}
                                        ml={1}
                                    >
                                        Your fax number.
                                    </Text>
                                </Box>

                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple bg={"gray.100"} rounded={"2xl"}
                    mb={4}
                >
                    <AccordionItem rounded={"2xl"}>
                        <h2>
                            <AccordionButton rounded={"2xl"}>
                                <Button variant={"link"} flex={1} justifyContent={"start"}>
                                    Administrative Details
                                </Button>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={"white"}>
                            <Box
                                rounded={"5px"}
                                minH={"300px"}
                                p={4}
                                my={4}
                                pos={"relative"}
                            // zIndex={1}
                            >
                                <Grid
                                    mb={8} gap={4}
                                    gridTemplateColumns={"repeat(2, 1fr)"}

                                >
                                    <Box >
                                        <Text fontWeight={"bold"}>Username: </Text>
                                        <Text>jarid.prince@dbca.wa.gov.au</Text>

                                    </Box>
                                    <Box >
                                        <Text fontWeight={"bold"}>Password: </Text>
                                        <Text>No password set.</Text>
                                        <Text pt={2} fontSize={"xs"} color={"gray.500"}>
                                            Raw passwords are not stored, so there is no way to see this user's password, but you can change the password using&nbsp;
                                            <Button variant={"link"} fontSize={"xs"} colorScheme="blue" onClick={() => {
                                                navigate('/users/me/password')
                                            }}>
                                                this form.
                                                {/* https://scienceprojects.dbca.wa.gov.au/pythia/user/101073/password/ */}
                                            </Button>
                                        </Text>

                                    </Box>

                                </Grid>




                                <Grid

                                    mb={12} gap={4}
                                    gridTemplateColumns={"repeat(2, 1fr)"}>
                                    <Box>
                                        <Text mb='8px' fontWeight={"bold"}>Date Joined: </Text>

                                        <Text
                                            fontSize="xs"
                                            color={"gray.500"}
                                            mt={1}
                                        // ml={1}
                                        >
                                            April 3, 2023, 4:39 p.m.

                                        </Text>
                                    </Box>

                                    <Box>
                                        <Text mb='8px' fontWeight={"bold"}>Groups: </Text>

                                        <Text
                                            fontSize="xs"
                                            color={"gray.500"}
                                            mt={1}
                                        // ml={1}
                                        >
                                            Users
                                        </Text>

                                    </Box>
                                </Grid>

                                <Grid
                                    mb={4}
                                    gridTemplateColumns={"repeat(3, 1fr)"}
                                    bg={"gray.100"}
                                    rounded={"xl"}
                                    // border={"1px"}
                                    gap={3}
                                    flex={1}
                                    p={4}
                                >
                                    <Grid
                                        gridTemplateColumns={"repeat(1, 1fr)"}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Text mb='8px' fontWeight={"bold"}>Active?</Text>
                                        {userIsActive ? <FcApproval /> : <FcCancel />}
                                    </Grid>

                                    <Grid
                                        gridTemplateColumns={"repeat(1, 1fr)"}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Text mb='8px' fontWeight={"bold"}>Staff?</Text>
                                        {userIsStaff ? <FcApproval /> : <AiFillCloseCircle />}
                                    </Grid>

                                    <Grid
                                        gridTemplateColumns={"repeat(1, 1fr)"}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Text mb='8px' fontWeight={"bold"}>Superuser?</Text>
                                        {userIsSuperuser ? <FcApproval /> : <FcCancel />}
                                    </Grid>
                                </Grid>

                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}