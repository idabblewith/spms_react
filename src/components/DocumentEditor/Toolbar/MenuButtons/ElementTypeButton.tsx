import {
    BsTextParagraph,
    BsChatSquareQuote,
    BsCodeSlash,
    BsTypeH1,
    BsTypeH2,
    BsTypeH3,
} from "react-icons/bs";
import { MdFormatListBulleted, MdFormatListNumbered } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BaseToolbarMenuButton } from "../Buttons/BaseToolbarMenuButton";

import { useState } from "react";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

export const ElementTypeButton = () => {
    // const [currentIcon, setCurrentIcon] = useState<IconType>(
    //     BsTextParagraph
    // );
    const [currentTitle, setCurrentTitle] = useState<string>("Normal");

    const NormalFunc = () => {
        console.log("Normal");
        setCurrentTitle("Normal");
        // setCurrentIcon(<Icon as={BsTextParagraph} />);
    };

    const HeadingOneFunc = () => {
        console.log("Heading 1");
        setCurrentTitle("Heading 1");
        // setCurrentIcon(BsTypeH1);
    };

    const HeadingTwoFunc = () => {
        console.log("Heading 2");
        setCurrentTitle("Heading 2");
        // setCurrentIcon(BsTypeH2);
    };

    const HeadingThreeFunc = () => {
        console.log("Heading 3");
        setCurrentTitle("Heading 3");
        // setCurrentIcon(BsTypeH3);
    };

    const BulletListFunc = () => {
        console.log("Bullet List");
        setCurrentTitle("Bullet List");
        // setCurrentIcon(MdFormatListBulleted);
    };

    const NumberedListFunc = () => {
        console.log("Numbered List");
        setCurrentTitle("Numbered List");
        // setCurrentIcon(MdFormatListNumbered);
    };

    const CheckListFunc = () => {
        console.log("Check List");
        setCurrentTitle("Check List");
        // setCurrentIcon(AiOutlineCheckSquare);
    };

    const QuoteFunc = () => {
        console.log("Quote");
        setCurrentTitle("Quote");
        // setCurrentIcon(BsChatSquareQuote);
    };

    const CodeBlockFunc = () => {
        console.log("Code Block");
        setCurrentTitle("Code Block");
        // setCurrentIcon(BsCodeSlash);
    };

    return (
        <BaseToolbarMenuButton
            menuIcon={
                currentTitle === "Normal" ?
                    BsTextParagraph :
                    currentTitle === "Heading 1" ?
                        BsTypeH1 :
                        currentTitle === "Heading 2" ?
                            BsTypeH2 :
                            currentTitle === "Heading 3" ?
                                BsTypeH3 :
                                currentTitle === "Bullet List" ?
                                    MdFormatListBulleted :
                                    currentTitle === "Numbered List" ?
                                        MdFormatListNumbered :
                                        currentTitle === "Check List" ?
                                            AiOutlineCheckSquare :
                                            currentTitle === "Quote" ?
                                                BsChatSquareQuote :
                                                currentTitle === "Code Block" ?
                                                    BsCodeSlash :
                                                    BsTextParagraph
            }
            title={currentTitle}
            menuItems={[
                {
                    leftIcon: BsTextParagraph,
                    text: "Normal",
                    onClick: NormalFunc,
                },
                {
                    leftIcon: BsTypeH1,
                    text: "Heading 1",
                    onClick: HeadingOneFunc,
                },
                {
                    leftIcon: BsTypeH2,
                    text: "Heading 2",
                    onClick: HeadingTwoFunc,
                },
                {
                    leftIcon: BsTypeH3,
                    text: "Heading 3",
                    onClick: HeadingThreeFunc,
                },
                {
                    leftIcon: MdFormatListBulleted,
                    text: 'Bullet List',
                    onClick: BulletListFunc,
                },
                {
                    leftIcon: MdFormatListNumbered,
                    text: 'Numbered List',
                    onClick: NumberedListFunc,
                },
                {
                    leftIcon: AiOutlineCheckSquare,
                    text: 'Check List',
                    onClick: CheckListFunc,
                },
                {
                    leftIcon: BsChatSquareQuote,
                    text: 'Quote',
                    onClick: QuoteFunc,
                },
                {
                    leftIcon: BsCodeSlash,
                    text: 'Code Block',
                    onClick: CodeBlockFunc,
                },
            ]
            }
        />
    )
}