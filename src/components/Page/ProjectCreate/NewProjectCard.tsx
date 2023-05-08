import { Center, Text, Box, Heading, UnorderedList, ListItem, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react";
import { ReactNode } from "react";
import { IconType } from 'react-icons';

interface INewProjectCard {
    title: string;
    description: string;
    bulletPoints: string[];
    colorScheme: string;
    buttonIcon: IconType;
}

export const NewProjectCard = ({ title, description, bulletPoints, colorScheme, buttonIcon }: INewProjectCard) => {

    const ButtonIcon = buttonIcon;

    const openNewProjectModal = () => {
        console.log(`Clicked ${title} card.`)
    }

    return (
        <Box
            as={motion.div}
            bgColor={"blackAlpha.200"}
            rounded={"xl"}
            flexDir={"column"}
            p={6}
            position={"relative"}
            minH={{
                base: "350px",
                md: "300px",
                lg: "400px",
                '1xl': "450px",
            }}
            whileHover={{ scale: 1.04 }}
            cursor="pointer"
            onClick={() => {
                openNewProjectModal();
            }}
        >
            {/* TITLE */}
            <Center
                w={"100%"}
                h={"80px"}
                bg={`${colorScheme}.500`}
                rounded={"xl"}
                pos={"relative"}
                p={4}
            >
                <Center
                    // position="absolute"
                    // top="10px" right="10px"
                    mr={4}
                >
                    <ButtonIcon color="white" size={"40px"} />
                </Center>
                <Heading
                    size={"md"}
                    colorScheme={colorScheme}
                    textColor={"whiteAlpha.900"}
                >
                    {title}

                </Heading>

            </Center>

            {/* DESCRIPTION */}
            <Box
                my={4}
                py={4}
                mx={2}
            >
                <Text
                    fontSize={"md"}
                >
                    {description}
                </Text>
            </Box>

            {/* INFO */}
            <Center
                mx={6}
                pb={4}
            >
                <UnorderedList>
                    {bulletPoints.map((point, index2) => (
                        <ListItem key={index2}
                            fontSize={"sm"}
                        >
                            {point}
                        </ListItem>
                    )
                    )}
                </UnorderedList>
            </Center>

            {/* BUTTON */}
            {/* <Center
                    bottom={0}
                    left={0}
                    right={0}
                    position="absolute"
                    width="100%"
                    py={6}
                    px={3}
                >
                    <Button
                        colorScheme={colorScheme}
                        leftIcon={React.createElement(LeftIcon)}
                    >
                        Create {title}
                    </Button>
                </Center> */}

        </Box>
    )
}