import { Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, ModalBody, ModalFooter } from "@chakra-ui/react"
import { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import "../../../styles/modalscrollbar.css";


interface IProjectDisplayProps {
    onClose: () => void;
}

export const ProjectDisplaySection = ({ onClose }: IProjectDisplayProps) => {

    const handleSubmit = () => {
        console.log("submitted")
    }

    const [informationFilled, setInformationFilled] = useState(false);

    return (

        <form onSubmit={handleSubmit}>
            <ModalBody
                overflowY={"auto"}
                maxHeight={"58vh"}
            >
                <FormControl my={4}
                >
                    <FormLabel>Image</FormLabel>
                    <InputGroup>
                        {/*  */}
                        <Input
                            pt={1}
                            display={"inline-flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            type="file"
                        // multiple="false"
                        />
                    </InputGroup>
                    <FormHelperText>
                        Upload an image which represents the meaning, shows a photogenic detail, or the team of the project.
                        The image will be displayed in a 16:9 aspect ratio.
                    </FormHelperText>
                </FormControl>

                <FormControl isRequired mb={4} >
                    <FormLabel>Keywords</FormLabel>
                    <InputGroup>
                        {/*  */}
                        <Input />
                    </InputGroup>
                    <FormHelperText>Add some keywords as comma separated list.</FormHelperText>
                </FormControl>

            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    type="submit"
                    colorScheme="blue"
                    ml={3}
                    rightIcon={<IoIosCreate />}
                    isDisabled={!informationFilled}

                >
                    Create
                </Button>

            </ModalFooter>
        </form>
    )
}