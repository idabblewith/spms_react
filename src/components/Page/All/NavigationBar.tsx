import { Box, Flex, Button } from "@chakra-ui/react"
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SubDirectory {
    title: string;
    link: string;
}

interface INavigationBarProps {
    subDirOne: SubDirectory;
    subDirTwo?: SubDirectory;
    subDirThree?: SubDirectory;
    rightSideElement?: ReactNode;
}

export const NavigationBar = ({ subDirOne, subDirTwo, subDirThree, rightSideElement }: INavigationBarProps) => {
    const navigate = useNavigate();

    return (
        <>
            <Flex
                bgColor={"gray.100"}
                rounded={6}
                px={4}
                py={2}
                pos={"relative"}
                justifyContent={"space-between"}
            >
                <Flex>
                    <Button
                        onClick={() => {
                            navigate('/')
                        }}
                        variant={"link"}
                        colorScheme="blue"
                    >
                        Home
                    </Button>
                    &nbsp;/&nbsp;
                    <Button
                        onClick={() => {
                            navigate(subDirOne.link)
                        }}
                        variant={"link"}
                        colorScheme="blue"
                    >
                        {subDirOne.title}
                    </Button>
                    {subDirTwo ? (
                        <>
                            &nbsp;/&nbsp;
                            <Button
                                onClick={() => {
                                    navigate(subDirTwo.link)
                                }}
                                variant={"link"}
                                colorScheme="blue"
                            >
                                {subDirTwo.title}
                            </Button>
                            {subDirThree ? (
                                <>
                                    &nbsp;/&nbsp;
                                    <Button
                                        onClick={() => {
                                            navigate(subDirThree.link)
                                        }}
                                        variant={"link"}
                                        colorScheme="blue"
                                    >
                                        {subDirThree.title}
                                    </Button>
                                </>
                            ) : null}
                        </>
                    ) : null}
                </Flex>
                {
                    rightSideElement ?
                        <Flex>
                            {rightSideElement}
                        </Flex>
                        : null
                }
            </Flex>
        </>
    )
}