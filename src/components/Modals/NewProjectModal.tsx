import { Text, Button, FormControl, FormHelperText, FormLabel, Grid, Icon, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, Box } from "@chakra-ui/react"
import { useState } from "react"
import { useCurrentYear } from "../../hooks/useCurrentYear"
import { IconType } from "react-icons"
import { ProjectDetailsSection } from "../Page/ProjectCreate/ProjectDetailsSection"
import { ProjectLocationSection } from "../Page/ProjectCreate/ProjectLocationSection"
import { ProjectDisplaySection } from "../Page/ProjectCreate/ProjectDisplaySection"
import "../../styles/modalscrollbar.css";

interface INewProjectModalProps {
    projectType: string;
    isOpen: boolean;
    onClose: () => void;
    icon: IconType;
}

export const NewProjectModal = ({ projectType, isOpen, onClose, icon }: INewProjectModalProps) => {

    const ButtonIcon = icon;

    const currentYear = useCurrentYear();

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent bg={"white"}>
                <ModalHeader
                    display={"inline-flex"}
                    // justifyContent={"center"}
                    alignItems={"center"}
                // pb={6}
                >
                    <Box
                        color={
                            projectType === "Core Function" ? "red.500" :
                                projectType === "Science Project" ? "green.500" :
                                    projectType === "Student Project" ? "blue.500" :
                                        projectType === "External Project" ? "gray.500" :
                                            "gray.500"
                        }
                        mr={3}
                    >
                        <ButtonIcon />
                    </Box>
                    <Text>New {projectType} - {currentYear}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Details</Tab>
                        <Tab>Location</Tab>
                        <Tab>Display</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProjectDetailsSection onClose={onClose} projectType={projectType} currentYear={currentYear} />
                        </TabPanel>
                        <TabPanel>
                            <ProjectLocationSection onClose={onClose} projectType={projectType} currentYear={currentYear} />
                        </TabPanel>
                        <TabPanel>
                            {/* 
                                    // ENSURE CREATE IS GREYED OUT UNTIL NECESSARY FIELDS ARE FILLED
                                        // MAKE IT A 'NEXT' BUTTON TO JUMP TO THE NEXT TAB
                                        // ONLY ALLOW NEXT IF NECESSARY FIELDS FILLED
                                        // ONLY ALLOW CREATE IF ALL NECESSRY FILLED.
                            
                            */}
                            <ProjectDisplaySection onClose={onClose} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </ModalContent>
        </Modal >
    )
}