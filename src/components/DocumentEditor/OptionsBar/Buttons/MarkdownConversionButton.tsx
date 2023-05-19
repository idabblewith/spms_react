import { Button } from "@chakra-ui/react"
import { useState } from "react";
import { BsMarkdownFill, BsMarkdown } from "react-icons/bs"
import { BaseToggleOptionsButton } from "./BaseToggleOptionsButton";

// A button to convert back and forth between Markdown and RichText

export const MarkDownConversionButton = () => {
    const [isMarkdownMode, setIsMarkdownMode] = useState<boolean>(false);
    return (
        <BaseToggleOptionsButton
            iconOne={BsMarkdownFill}
            iconTwo={BsMarkdown}
            currentState={isMarkdownMode}
            setCurrentState={setIsMarkdownMode}
        // colorSchemeOne={}
        // colorSchemeTwo={}
        />
    )
}