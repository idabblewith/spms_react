import { Heading, VStack, Text, Button, Kbd } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"

export const NotFound = () => {
    const location = useLocation();
    const urlpath = location.pathname;

    return (

        <VStack
            justifyContent={"center"}
            minH="100vh"
            background={"gray.100"}
        >
            <Heading>Page not found.</Heading>
            <Text>Oh, oh. We couldn't find <Kbd bg={"gray.300"}>{urlpath}</Kbd> on this server.</Text>
            <Link to='/'>
                <Button
                    variant={"link"}
                    // ghost, solid, link, outline
                    colorScheme={"twitter"}
                // twitter, red
                >&larr; Go home </Button>
            </Link>
        </VStack>

    )
}