import { Button } from "@chakra-ui/react"
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaCaretDown, FaIndent, FaOutdent } from "react-icons/fa"
import { BaseToolbarMenuButton } from "../Buttons/BaseToolbarMenuButton"
import { useState } from "react";

// A button for aligning text left, center, right, justified
// Also has options for Outdent and Indent

export const AlignButton = () => {

    // const [currentTitle, setCurrentTitle] = useState<string>('Ali');

    const LeftAlignFunc = () => {
        console.log("Left Aligning")
    }

    const CenterAlignFunc = () => {
        console.log("Center Aligning")
    }

    const RightAlignFunc = () => {
        console.log("Right Aligning")
    }

    const JustifyAlignFunc = () => {
        console.log("Justify Aligning")
    }

    const OutdentFunc = () => {
        console.log("Outdent Aligning")
    }

    const IndentFunc = () => {
        console.log("Indent Aligning")
    }

    return (
        <BaseToolbarMenuButton
            title="Align"
            menuIcon={FaAlignLeft}
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
                {
                    leftIcon: FaOutdent,
                    text: 'Outdent',
                    onClick: OutdentFunc,
                },
                {
                    leftIcon: FaIndent,
                    text: 'Indent',
                    onClick: IndentFunc,
                },
            ]}

        />
    )
}