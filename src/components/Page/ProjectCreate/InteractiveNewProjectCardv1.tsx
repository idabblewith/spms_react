import { Box, Button, Center, Heading, ListItem, UnorderedList, Text, Image, useDisclosure } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";

import Tilt from 'react-parallax-tilt'
import '../../../styles/parallax.css'
import { NewProjectModal } from "../../Modals/NewProjectModal";


interface INewProjectCard {
    index: number;
    title: string;
    description: string;
    bulletPoints: string[];
    colorScheme: string;
    cardImage: string;
    buttonIcon: IconType;
    activeCard: number | null;
    setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}


export const InteractiveNewProjectCardv1 = (
    { index, title, description, colorScheme, bulletPoints, buttonIcon, cardImage, activeCard, setActiveCard }
        : INewProjectCard
) => {

    const { isOpen: isModalOpen, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure()

    const openNewProjectModal = () => {
        console.log(`Clicked ${title} card.`)
        onOpenModal();
    }


    return (
        <Tilt
            perspective={800}
            scale={1.08}
            transitionSpeed={1500}
            tiltMaxAngleY={20}
            tiltMaxAngleX={20}
            // gyroscope={true}

            glareEnable={true}
            glareMaxOpacity={0.45}
            onEnter={() => setActiveCard(index)}
            onLeave={() => setActiveCard(null)}
            style={{ zIndex: activeCard === index ? 1000 : 4 }}
        >
            <NewProjectModal projectType={title} isOpen={isModalOpen} onClose={onCloseModal} />

            <Box
                onClick={openNewProjectModal}
                bgColor={"gray.300"}
                rounded={6}
                flexDir={"column"}
                p={6}
                position={"relative"}
                minH={{
                    base: "400px",
                    md: "400px",
                    lg: "500px",
                    // '1xl': "450px",
                }}
                borderRadius={"10px"}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                transform={"perspective(1000px)"}
                cursor={"pointer"}

                className="parallax-effect-glare-scale"
                style={{
                    willChange: "transform",
                    transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                    transform: "perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }}
            >
                {/* Banner */}
                <Box

                    h={"15em"}
                    bg={
                        colorScheme
                        // `linear-gradient(90deg, #fb3854 0%, #901026 100%)`
                    }
                    pt={"3em"}
                    borderRadius={"10px 10px 50% 50%"}
                >
                    {/* TITLE */}
                    <Center>
                        <Heading
                            size={"md"}
                            color={"#fff"}
                        >
                            {title}
                        </Heading>
                    </Center>
                </Box>


                <Image
                    className="inner-element"
                    src={cardImage}
                    w={"125px"}
                    h={"125px"}
                    objectFit={"contain"}


                    // width={"16em"}
                    position={"absolute"}
                    top="3em"
                    right={"5"}
                    filter={"drop-shadow(0px 10px 25px rgba(0,0,0,0.5)"}
                />

                {/* DESCRIPTION */}
                <Center
                    my={4}
                    py={4}
                >
                    <Text
                        fontSize={"md"}
                    >
                        {description}
                    </Text>
                </Center>

                {/* INFO */}
                <Center>
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
                <Center
                    bottom={0}
                    left={0}
                    right={0}
                    position="absolute"
                    width="100%"
                    py={6}
                    px={3}
                >

                </Center>
            </Box>
        </Tilt>
    )
}