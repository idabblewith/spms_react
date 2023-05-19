import { Button } from "@chakra-ui/react"
import { FaCaretDown } from "react-icons/fa"
import { RxLetterCaseCapitalize } from "react-icons/rx"
import { BaseToolbarMenuButton } from "../Buttons/BaseToolbarMenuButton"
import { AiOutlineStrikethrough } from "react-icons/ai"
import { MdSubscript, MdSuperscript } from "react-icons/md"
import { BsTrash3 } from "react-icons/bs"

// A dropdown menu containing Strikethrough, Subscript, Superscript, and Clear Formatting Options

export const FontFormatterButton = () => {

    const StrikeThroughFunc = () => {
        console.log("StrikeThrough")
    }
    const SubscriptFunc = () => {
        console.log("SubscriptFunc")
    }
    const SuperscriptFunc = () => {
        console.log("SuperscriptFunc")
    }
    const ClearFormattingFunc = () => {
        console.log("ClearFormattingFunc")
    }


    return (
        <BaseToolbarMenuButton
            // title=""
            menuIcon={RxLetterCaseCapitalize}
            menuItems={[
                {
                    leftIcon: AiOutlineStrikethrough,
                    text: "Strikethrough",
                    onClick: StrikeThroughFunc,
                },
                {
                    leftIcon: MdSubscript,
                    text: "Subscript",
                    onClick: SubscriptFunc,
                },
                {
                    leftIcon: MdSuperscript,
                    text: "Superscript",
                    onClick: SuperscriptFunc,
                },
                {
                    leftIcon: BsTrash3,
                    text: "Clear Formatting",
                    onClick: ClearFormattingFunc,
                },
            ]}
        />
        // <Button
        //     leftIcon={<RxLetterCaseCapitalize />}
        //     rightIcon={<FaCaretDown />}
        // >
        // </Button>
    )
}