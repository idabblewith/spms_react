import { Box, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/NavigationBar"

export const Reports = () => {
    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Reports",
                    link: "/reports"
                }}
                subDirTwo={{
                    title: "Dashboard",
                    link: "/reports/dashboard"
                }}
            />
            <Box mt={10}>
                <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Annual Report 2021-2022 Overview
                    </Text>
                    <Text fontSize={"sm"} color={"gray.600"}>Click to expand</Text>
                </Box>

            </Box>
        </>
    )
}

// arar_dashboard