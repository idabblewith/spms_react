import { Center, Grid, Text } from "@chakra-ui/react"

export const API = () => {
    return (
        <>
            <Center mt={20}>
                <Grid
                    gridGap={8}
                    textAlign={"center"}
                >
                    <Text fontWeight={"bold"} fontSize={"2xl"}>Section on hold until data hooked in</Text>
                    <Text fontWeight={"bold"} fontSize={"xl"}>Only for Developers</Text>
                    <Text fontWeight={"bold"} fontSize={"xl"}>Opens Django REST API page</Text>
                </Grid>
            </Center>
        </>
    )
}