import { Box, Divider, Flex, useBreakpointValue } from "@chakra-ui/react"
import { AlignButton } from "./MenuButtons/AlignButton"
import { ElementTypeButton } from "./MenuButtons/ElementTypeButton"
import { InsertButton } from "./MenuButtons/InsertButton"
import { FontFormattingButtons } from "./Sections/FontFormattingButtons"
import { FontStylingButtons } from "./Sections/FontStylingButtons"
import { TimeButtons } from "./Sections/TimeButtons"
import { VerticalDivider } from "./Sections/VerticalDivider"
import { ToolbarToggleBtn } from "./Buttons/ToolbarToggleBtn"
import { BoldButton } from "./Buttons/BoldButton"
import { ItalicsButton } from "./Buttons/ItalicsButton"
import { UnderlineButton } from "./Buttons/UnderlineButton"
import { FontColorPickerButton } from "./MenuButtons/FontColorPickerButton"
import { FontHighlighterButton } from "./MenuButtons/FontHighlighterButton"
import { useState } from "react"
import { FontFormatterButton } from "./MenuButtons/FontFormatterButton"
import { useToolbarClickListener } from "../../../hooks/useToolbarClickListener"

export const RichTextToolbar = () => {
    const { onClick } = useToolbarClickListener();

    const shouldShowToolbarToggleBtnWhenNotSmall = useBreakpointValue(
        {
            base: true,
            xl: false,
        }
    );
    const isSmall = useBreakpointValue(
        {
            base: true,
            sm: true,
            md: true,
            lg: false,
        }
    )
    const [currentToolbarPage, setCurrentToolbarPage] = useState<number>(1);
    const [currentToolbarPageMd, setCurrentToolbarPageMd] = useState<number>(1);
    return (
        <>
            <Flex
                width={"100%"}
                p={2}
                borderRadius={"20px 20px 0 0"}
                backgroundColor={"whiteAlpha.800"}
                // backgroundColor={"gray.200"}
                overflowX={
                    'hidden'
                    // shouldShowEllipsis ? 
                    // 'auto'
                    // : 'hidden'
                }
                justifyContent={"space-between"}
                display={"flex"}
            >
                {
                    isSmall ?
                        (
                            <>
                                <TimeButtons />
                                <VerticalDivider />
                                {
                                    currentToolbarPage === 1 ?
                                        <>
                                            <ElementTypeButton isSmall />
                                            <VerticalDivider />

                                            <InsertButton />
                                        </> :
                                        currentToolbarPage === 2 ?
                                            <>

                                                <BoldButton onClick={onClick} />
                                                <ItalicsButton onClick={onClick} />
                                                <UnderlineButton onClick={onClick} />
                                                {/* <FontHighlighterButton /> */}

                                            </>
                                            :
                                            <>
                                                <FontFormatterButton />
                                                <AlignButton isSmall onClick={onClick} />
                                            </>



                                    // :
                                    // <>
                                    //     <FontColorPickerButton />
                                    //     <AlignButton />

                                    // </>
                                }

                                <Box>
                                    <ToolbarToggleBtn
                                        page={currentToolbarPage}
                                        setPage={setCurrentToolbarPage}
                                        maxPages={3}
                                        isSmall
                                    />
                                </Box>
                            </>
                        ) :
                        (
                            shouldShowToolbarToggleBtnWhenNotSmall ?
                                (
                                    <>
                                        <TimeButtons />
                                        <VerticalDivider />
                                        {
                                            currentToolbarPageMd === 1 ?
                                                <>
                                                    <ElementTypeButton />
                                                    <VerticalDivider />

                                                    <InsertButton />

                                                    {/* <VerticalDivider /> */}


                                                </> : currentToolbarPageMd === 2 ?
                                                    <>
                                                        {/* <FontStylingButtons /> */}

                                                        <BoldButton onClick={onClick} />
                                                        <ItalicsButton onClick={onClick} />
                                                        <UnderlineButton onClick={onClick} />
                                                    </> :
                                                    <>
                                                        <FontFormatterButton />
                                                        <AlignButton onClick={onClick} />
                                                    </>
                                        }
                                        <ToolbarToggleBtn
                                            page={currentToolbarPageMd}
                                            setPage={setCurrentToolbarPageMd}
                                            maxPages={3}
                                            isSmall
                                        />
                                    </>
                                ) :
                                (
                                    <>
                                        <TimeButtons />
                                        <VerticalDivider />

                                        <ElementTypeButton />
                                        <VerticalDivider />
                                        <InsertButton />
                                        <VerticalDivider />
                                        <FontFormatterButton />

                                        <VerticalDivider />
                                        <BoldButton onClick={onClick} />
                                        <ItalicsButton onClick={onClick} />
                                        <UnderlineButton onClick={onClick} />
                                        <VerticalDivider />

                                        <AlignButton onClick={onClick} />

                                    </>
                                )
                        )
                }
            </Flex>
            <Divider />
        </>
    )
}