import { Box, Flex, Button } from "@chakra-ui/react"


interface SubDirectory {
    title: string;
    link: string;
}

interface INavigationBarProps {
    subDirOne: SubDirectory;
    subDirTwo?: SubDirectory;
}

export const NavigationBar = ({ subDirOne, subDirTwo }: INavigationBarProps) => {
    return (
        <>
            <Box
                bgColor={"gray.100"}
                rounded={6}
                px={4}
                py={2}
                pos={"relative"}
            >
                <Flex>
                    <Button
                        as={"a"}
                        href={"/"}
                        variant={"link"}
                        colorScheme="blue"
                    >Home</Button>&nbsp;/
                    <Button
                        as={"a"}
                        href={subDirOne.link}
                        variant={"link"}
                        colorScheme="blue"
                    >&nbsp;{subDirOne.title}</Button>
                    {
                        subDirTwo ?
                            <>
                                &nbsp;/
                                <Button
                                    as={"a"}
                                    href={subDirTwo.link}
                                    variant={"link"}
                                    colorScheme="blue"
                                >&nbsp;{subDirTwo.title}</Button>
                            </>
                            : null
                    }

                </Flex>

            </Box>
        </>
    )
}