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
import { Center, Divider, Flex, Icon } from "@chakra-ui/react";

interface Props {
    isSmall?: boolean;
}

export const ElementTypeButton = ({ isSmall }: Props) => {
    const [currentTitle, setCurrentTitle] = useState<string>(isSmall ? "Norm" : "Normal");

    const NormalFunc = () => {
        setCurrentTitle("Norm");
    };

    const HeadingOneFunc = () => {
        setCurrentTitle(
            isSmall ? "H1" : "Heading 1"
        );
    };

    const HeadingTwoFunc = () => {
        setCurrentTitle(
            isSmall ? "H2" : "Heading 2"
        );
    };

    const HeadingThreeFunc = () => {
        setCurrentTitle(
            isSmall ? "H3" : "Heading 3"
        );
    };

    const BulletListFunc = () => {
        setCurrentTitle(
            isSmall ? "Bullets" : "Bullet List"
        );
    };

    const NumberedListFunc = () => {
        setCurrentTitle(
            isSmall ? "Nums" : "Numbered List"
        );
    };

    const CheckListFunc = () => {
        setCurrentTitle(
            isSmall ? "Chk Lst" : "Check List"
        );
    };

    const QuoteFunc = () => {
        setCurrentTitle("Quote");
    };

    const CodeBlockFunc = () => {
        setCurrentTitle(
            isSmall ? "Code" : "Code Block"
        );
    };

    return (
        <BaseToolbarMenuButton
            menuIcon={
                currentTitle === "Normal" ?
                    BsTextParagraph :
                    currentTitle === "Heading 1" || currentTitle === "H1" ?
                        BsTypeH1 :
                        currentTitle === "Heading 2" || currentTitle === "H2" ?
                            BsTypeH2 :
                            currentTitle === "Heading 3" || currentTitle === "H3" ?
                                BsTypeH3 :
                                currentTitle === "Bullet List" || currentTitle === "Bullets" ?
                                    MdFormatListBulleted :
                                    currentTitle === "Numbered List" || currentTitle === "Nums" ?
                                        MdFormatListNumbered :
                                        currentTitle === "Check List" || currentTitle === "Chk Lst" ?
                                            AiOutlineCheckSquare :
                                            currentTitle === "Quote" ?
                                                BsChatSquareQuote :
                                                currentTitle === "Code Block" || currentTitle === "Code" ?
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
                // {
                //     leftIcon: AiOutlineCheckSquare,
                //     text: 'Check List',
                //     onClick: CheckListFunc,
                // },
                {
                    leftIcon: BsChatSquareQuote,
                    text: 'Quote',
                    onClick: QuoteFunc,
                },
                // {
                //     leftIcon: BsCodeSlash,
                //     text: 'Code Block',
                //     onClick: CodeBlockFunc,
                // },
            ]
            }
        />
    )
}