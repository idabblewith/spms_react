import {
    Box, Button, FormControl, FormHelperText, FormLabel,
    Grid,
    Icon, Input, InputGroup, InputLeftElement, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea
} from "@chakra-ui/react"
import { useState } from "react";
import { FaUser, FaComment } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md"
import { AiFillQuestionCircle } from 'react-icons/ai'
import { GoListOrdered } from 'react-icons/go'
import { BsCashCoin } from 'react-icons/bs'


interface IAddUserToProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddUserToProjectModal = ({ isOpen, onClose }: IAddUserToProjectModalProps) => {

    const [isComplete, setIsComplete] = useState(false);
    const [username, setUsername] = useState('');
    const [timeAllocation, setTimeAllocation] = useState('');
    const [shortCode, setShortCode] = useState('');
    const [newUserRole, setNewUserRole] = useState('');
    const [comments, setComments] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleTimeAllocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeAllocation(event.target.value);
    };

    const handleShortCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShortCode(event.target.value);
    };

    const handleNewUserRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNewUserRole(event.target.value);
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"white"}>
                <ModalHeader>Add User</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Username</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<Icon as={FaUser} />} />
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                // maxLength={30} pattern="[A-Za-z0-9@.+_-]*" 
                                />
                            </InputGroup>
                            <FormHelperText>The DBCA staff member to participate in the project team.</FormHelperText>
                        </FormControl>
                        <Grid
                            gridTemplateColumns={"repeat(2, 1fr)"}
                            gridColumnGap={4}
                            my={4}
                        >
                            <FormControl isRequired >
                                <FormLabel>Time Allocation (0 to 1 FTE)</FormLabel>
                                <InputGroup>
                                    <InputLeftElement children={<Icon as={MdAccessTimeFilled} />} />
                                    <Input
                                        type="text"
                                        placeholder="0"
                                        value={timeAllocation}
                                        onChange={handleTimeAllocationChange}
                                        maxLength={30}
                                    // pattern="[A-Za-z0-9@.+_-]*" 
                                    />
                                </InputGroup>
                                <FormHelperText>Indicative time allocation as a fraction of a Full Time Equivalent (210 person-days). Values between 0 and 1. Fill in estimated allocation for the next 12 months.</FormHelperText>
                            </FormControl>

                            <FormControl isRequired mb={4}>
                                <FormLabel>Short Code</FormLabel>
                                <InputGroup>
                                    <InputLeftElement children={<Icon as={BsCashCoin} />} />
                                    <Input
                                        type="text"
                                        placeholder="100"
                                        value={shortCode}
                                        onChange={handleShortCodeChange}
                                        maxLength={30}
                                    // pattern="[A-Za-z0-9@.+_-]*"
                                    />
                                </InputGroup>
                                <FormHelperText>Cost code for this project membership's salary. Allocated by divisional admin.</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid
                            gridTemplateColumns={"repeat(1, 1fr)"}
                            gridColumnGap={4}
                            my={4}

                        >

                            <FormControl isRequired mb={4}>
                                <FormLabel>Role</FormLabel>
                                <InputGroup>
                                    <Select
                                        variant='filled' placeholder='Select a Role for the User'
                                        onChange={handleNewUserRoleChange}
                                        value={newUserRole}
                                    >
                                        <option value='academicsupervisor'>Academic Supervisor</option>
                                        <option value='consultedpeer'>Consulted Peer</option>
                                        <option value='externalcollaborator'>External Collaborator</option>
                                        <option value='externalpeer'>External Peer</option>
                                        <option value='involvedgroup'>Involved Group</option>
                                        <option value='researchscientist'>Research Scientist</option>
                                        <option value='supervisingscientist'>Supervising Scientist</option>
                                        <option value='supervisedstudent'>Supervised Student</option>
                                        <option value='technicalofficer'>Technical Officer</option>
                                    </Select>
                                </InputGroup>
                                <FormHelperText>The role this team member fills within this project.</FormHelperText>
                            </FormControl>
                        </Grid>

                        <FormControl isRequired my={4}>
                            <FormLabel>Comments</FormLabel>
                            <InputGroup>
                                <Textarea
                                    placeholder='Here is a sample placeholder'
                                    onChange={handleCommentsChange}
                                />
                            </InputGroup>
                            <FormHelperText>Any comments clarifying the project membership.</FormHelperText>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                            type="submit"
                            colorScheme="blue" ml={3}
                            isDisabled={!isComplete}>
                            Add User
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>

    )
}