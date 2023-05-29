import { Modal, ModalContent, ModalHeader, ModalOverlay, Box, Text, Tabs, TabPanels, TabPanel, ModalCloseButton, ModalBody } from "@chakra-ui/react"

interface IProps {
    businessAreaTitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export const UpdateBusinessAreaModal = ({ businessAreaTitle, isOpen, onClose }: IProps) => (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bg={"white"}>
            <ModalHeader
                display={"inline-flex"}
                // justifyContent={"center"}
                alignItems={"center"}
            >
                <Text>Update {businessAreaTitle}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>Hii</Text>
            </ModalBody>
        </ModalContent>
    </Modal>

)