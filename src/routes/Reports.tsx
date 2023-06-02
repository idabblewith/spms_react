import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { NavigationBar } from "../components/Page/All/NavigationBar"
import { FullFeaturedRichTextEditor } from "../components/DocumentEditor/Editors/FullFeaturedRichTextEditor"
import { DownloadReportPDFButton } from "../components/Downloads/DownloadReportPDFButton"

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
                {/* <Box mb={6}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Annual Report 2021-2022 Overview
                    </Text>
                    <Text fontSize={"sm"} color={"gray.600"}>Click to expand</Text>
                </Box>

                <Center mt={20}>
                    <Text fontWeight={"bold"} fontSize={"2xl"}>Section on hold until data hooked in</Text>
                </Center> */}
                {/* <Flex justifyContent={"flex-start"} width="100%" pb={6}>
                    <DownloadReportPDFButton />
                </Flex> */}

                <FullFeaturedRichTextEditor />


            </Box>
        </>
    )
}

// arar_dashboard