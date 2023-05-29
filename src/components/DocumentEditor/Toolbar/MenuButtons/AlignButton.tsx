import { Button, Flex } from "@chakra-ui/react"
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaCaretDown, FaIndent, FaOutdent } from "react-icons/fa"
import { BaseToolbarMenuButton } from "../Buttons/BaseToolbarMenuButton"
import { useState } from "react";

// A button for aligning text left, center, right, justified
// Also has options for Outdent and Indent


interface Props {
    isSmall?: boolean;
    onClick: (eventType: string) => void;
}

export const AlignButton = ({ isSmall, onClick }: Props) => {

    const [currentTitle, setCurrentTitle] = useState<string>('Left');

    const LeftAlignFunc = () => {
        setCurrentTitle(isSmall ? "Left" : "Left")
        const eventType = "formatAlignLeft"
        onClick(eventType);
    }

    const CenterAlignFunc = () => {
        setCurrentTitle(isSmall ? "Ctr" : "Center")
        const eventType = "formatAlignCenter"
        onClick(eventType);
    }

    const RightAlignFunc = () => {
        setCurrentTitle(isSmall ? "Right" : "Right")
        const eventType = "formatAlignRight"
        onClick(eventType);
    }

    const JustifyAlignFunc = () => {
        setCurrentTitle(isSmall ? "Just" : "Jusitfy")
        const eventType = "formatAlignJustify"
        onClick(eventType);
    }

    // const OutdentFunc = () => {
    //     setCurrentTitle(isSmall ? "Out" : "Outdent")
    // }

    // const IndentFunc = () => {
    //     setCurrentTitle(isSmall ? "In" : "Indent")
    // }

    return (
        <BaseToolbarMenuButton
            title={currentTitle}
            menuIcon={
                currentTitle === "Left" || currentTitle === "Left Align" ?
                    FaAlignLeft :
                    currentTitle === "Ctr" || currentTitle === "Center Align" ?
                        FaAlignCenter :
                        currentTitle === "Right" || currentTitle === "Right Align" ?
                            FaAlignRight :
                            currentTitle === "Just" || currentTitle === "Jusitfy Align" ?
                                FaAlignJustify :
                                // currentTitle === "Out" || currentTitle === "Outdent" ?
                                //     FaOutdent :
                                // currentTitle === "In" || currentTitle === "Indent" ?
                                // FaIndent
                                FaAlignLeft

            }
            menuItems={[
                {
                    leftIcon: FaAlignLeft,
                    text: 'Left Align',
                    onClick: LeftAlignFunc,
                },
                {
                    leftIcon: FaAlignCenter,
                    text: 'Center Align',
                    onClick: CenterAlignFunc,
                },
                {
                    leftIcon: FaAlignRight,
                    text: 'Right Align',
                    onClick: RightAlignFunc,
                },
                {
                    leftIcon: FaAlignJustify,
                    text: 'Justify Align',
                    onClick: JustifyAlignFunc,
                },
                // {
                //     leftIcon: FaOutdent,
                //     text: 'Outdent',
                //     onClick: OutdentFunc,
                // },
                // {
                //     leftIcon: FaIndent,
                //     text: 'Indent',
                //     onClick: IndentFunc,
                // },
            ]}

        />
    )
}