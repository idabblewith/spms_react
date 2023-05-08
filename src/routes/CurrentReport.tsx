import { Box, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/All/NavigationBar"

export const CurrentReport = () => {
    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Reports",
                    link: "/reports"
                }}
                subDirTwo={{
                    title: "Current Report",
                    link: "/reports/current"
                }}
            />
            <Box mt={10}>
                <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Current Report Print Preview
                    </Text>
                </Box>
            </Box>
        </>
    )
}

