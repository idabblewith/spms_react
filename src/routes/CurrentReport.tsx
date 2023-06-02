import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/All/NavigationBar"
import { DownloadReportPDFButton } from "../components/Downloads/DownloadReportPDFButton"

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
                <Flex justifyContent={"flex-start"} width="100%" pb={6}>
                    <DownloadReportPDFButton />
                </Flex>
                <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Current Report Print Preview
                    </Text>
                </Box>

                <Center mt={20}>
                    <Grid
                        gridGap={8}
                        textAlign={"center"}
                    >
                        <Text fontWeight={"bold"} fontSize={"2xl"}>Section on hold until data hooked in</Text>
                        <Text fontWeight={"bold"} fontSize={"xl"}>Presents a preview of report for current year based on projects in year</Text>
                    </Grid>
                </Center>
            </Box>
        </>
    )
}

