import { Box, Button, Center, Heading, ListItem, UnorderedList, Text, Image } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";

import Tilt from 'react-parallax-tilt'
import '../../styles/parallax.css'


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

    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={750}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.08}
            onEnter={() => setActiveCard(index)}
            onLeave={() => setActiveCard(null)}
        >
            <Box
                zIndex={activeCard === index ? 1000 : 0}

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
                    w={"150px"}
                    h={"150px"}
                    objectFit={"contain"}


                    width={"16em"}
                    position={"absolute"}
                    top="6em"
                    right={"-4em"}
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