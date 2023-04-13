import { Box, Image } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import OldHeader from "./OldHeader";
import { Footer } from "./Footer";

import myImage from "../media/80mile.jpg";
import { PageWrapper } from "./PageWrapper";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


export const Root = () => {
    useDocumentTitle();

    return (
        <>
            <Box
                minH={"100vh"}
            >
                <Box
                    minH={"100vh"}

                >
                    <PageWrapper>
                        {/* Navbar */}
                        <OldHeader />
                        {/* Content */}
                        <Box
                            // overflowY="auto"
                            mt={6}
                            minH={"500px"}
                            bgColor={"white"}
                            rounded={6}
                            py={10}

                        ><Box mx={10}>
                                <Outlet />

                            </Box></Box>

                        <Image
                            src={myImage}
                            width={"100%"}
                            height={"100%"}
                            objectFit={"cover"}
                            position="absolute"
                            zIndex={-1}
                            top={0}
                            left={0}
                        />
                    </PageWrapper>
                    <Footer />

                </Box>

            </Box>


        </>
    )
}