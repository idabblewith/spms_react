import { Box, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/All/NavigationBar"

export const ChangePassword = () => {
    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Manage Users",
                    link: "/users"
                }}
                subDirTwo={{
                    title: "Me",
                    link: "/users/me"
                }}
                subDirThree={{
                    title: "Change Password",
                    link: "/users/me/password"
                }}
            />
            <Box mt={10}>
                <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Change Password
                    </Text>
                </Box>
            </Box>
        </>
    )
}