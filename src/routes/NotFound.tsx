import { Heading, VStack, Text, Button, Kbd, Grid, Box } from "@chakra-ui/react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { AiFillHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";


export const NotFound = () => {
    const location = useLocation();
    const urlpath = location.pathname;
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH="100vh"
            background="gray.100"
        >
            <Grid
                gridTemplateColumns="repeat(1, 1fr)"
                gridTemplateRows="1fr 1fr 1fr 1fr" // Divide the grid into three equal rows
                height="100%" // Set the height of the grid to 50% of the container
            // bg={"red"}
            >
                {/* <div></div>  */}
                <VStack
                    spacing={8}
                    align="center"
                >
                    <Heading>Page not found.</Heading>
                    <Text>
                        Oh, oh. We couldn't find <Kbd bg="gray.300">{urlpath}</Kbd> on this server.
                    </Text>
                    <Grid
                        gridTemplateColumns="repeat(2, 1fr)"
                        gridColumnGap={20}
                    >
                        <Link to='/'>
                            <Button
                                variant="link"
                                colorScheme="twitter"
                                leftIcon={<AiFillHome />}
                            >
                                Go home
                            </Button>
                        </Link>
                        {/* <Link to='/'> */}
                        <Button
                            variant="link"
                            colorScheme="twitter"
                            leftIcon={<IoIosArrowBack

                            />}
                            onClick={goBack}
                        >
                            Go back
                        </Button>
                        {/* </Link> */}
                    </Grid>
                </VStack>
                {/* <div></div>  */}
                {/* <div></div>  */}
            </Grid>
        </Box>
    );
}
