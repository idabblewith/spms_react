import { Box, Flex, Grid } from "@chakra-ui/react"
import { UploadButton } from "./Buttons/UploadButton"
import { DownloadButton } from "./Buttons/DownloadButton"
import { ClearButton } from "./Buttons/ClearButton"
import { MarkDownConversionButton } from "./Buttons/MarkdownConversionButton"
import { ReadOnlyModeButton } from "./Buttons/ReadOnlyModeButton"
import { WordCount } from "./WordCount"

interface IOptionsBarProps {
    wordCount: number;
}

export const OptionsBar = ({ wordCount }: IOptionsBarProps) => {
    return (
        <Flex
            // background={"orange"}
            height={20}
            width={"100%"}
            bottom={0}
        >
            <Flex
                justifyContent="flex-start"
                alignItems="center"
                flex={1}
                px={10}

            >
                <WordCount count={wordCount} />
            </Flex>

            <Flex justifyContent="flex-end" alignItems="center" flex={1}>

                <Grid
                    px={10}
                    py={4}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    // width={"100%"}
                    gridColumnGap={2}
                >
                    <ClearButton />
                    {/* <UploadButton /> */}
                    {/* <DownloadButton /> */}
                    <ReadOnlyModeButton />
                    {/* <MarkDownConversionButton /> */}
                </Grid>
            </Flex>
        </Flex>
    )
}