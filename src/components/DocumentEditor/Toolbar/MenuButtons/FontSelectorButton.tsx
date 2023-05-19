import { Button } from "@chakra-ui/react"
import { BaseToolbarButton } from "../Buttons/BaseToolbarButton"
import { FaCaretDown } from "react-icons/fa"
import { BsFonts } from "react-icons/bs"
import { BaseToolbarMenuButton } from "../Buttons/BaseToolbarMenuButton"
import { useState } from "react"
import { IconType } from "react-icons"

// A button that displays current font and opens a dropdown to select font
// Options include Arial, Courier New, Georgia, Times New Roman, Trebuchet MS, and Veranda

export const FontSelectorButton = () => {

    const [currentFont, setCurrentFont] = useState<string>("Arial");
    // const [shouldResize]


    const ArialFunc = () => {
        console.log("Arial")
        setCurrentFont("Arial");
    }
    const CourierNewFunc = () => {
        console.log("CourierNewFunc")
        setCurrentFont("Courier New");

    }
    const GeorgiaFun = () => {
        console.log("GeorgiaFun")
        setCurrentFont("Georgia");

    }
    const TimesNewRomanFunc = () => {
        console.log("TimesNewRomanFunc")
        setCurrentFont("Times New Roman");

    }
    const TrebuchetFunc = () => {
        console.log("TrebuchetFunc")
        setCurrentFont("Trebuchet MS");

    }
    const VerandaFunc = () => {
        console.log("VerandaFunc")
        setCurrentFont("Veranda");

    }

    return (
        <BaseToolbarMenuButton
            title={currentFont}
            menuIcon={BsFonts}
            menuItems={
                [
                    {
                        text: 'Arial',
                        onClick: ArialFunc,
                    },
                    {
                        text: 'Courier New',
                        onClick: CourierNewFunc,
                    },
                    {
                        text: 'Georgia',
                        onClick: GeorgiaFun,
                    },
                    {
                        text: 'Times New Roman',
                        onClick: TimesNewRomanFunc,
                    },
                    {
                        text: 'Trebuchedt MS',
                        onClick: TrebuchetFunc,
                    },
                    {
                        text: 'Veranda',
                        onClick: VerandaFunc,
                    },
                ]
            }
        />
        // <Button
        //     leftIcon={<BsFonts />}
        //     rightIcon={<FaCaretDown />}
        // >
        //     Arial
        // </Button>
    )
}