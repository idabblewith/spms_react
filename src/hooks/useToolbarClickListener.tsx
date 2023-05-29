import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import {
    FORMAT_ELEMENT_COMMAND,
    FORMAT_TEXT_COMMAND,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    UNDO_COMMAND,
    REDO_COMMAND,
    $getSelection,
    $isRangeSelection,
    $createParagraphNode,
} from "lexical";
import { $wrapNodes, } from "@lexical/selection";
import {
    // $isLinkNode,
    TOGGLE_LINK_COMMAND,
} from "@lexical/link";
import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
    // $isListNode,
    // ListNode,
} from "@lexical/list";

import { useCallback, useState } from "react";

// interface IProps {
//     eventType: string;
//     buttonFunc: () => void;
// }

export const useToolbarClickListener = () => {
    const [editor] = useLexicalComposerContext();
    const [blockType, setBlockType] = useState("paragraph");
    const [selectedElementKey, setSelectedElementKey] = useState(null);
    const [isRTL, setIsRTL] = useState(false);
    const [isLink, setIsLink] = useState(false);

    const onClick = (event: any) => {
        // if (event === "formatUndo") {
        //     editor.dispatchCommand(UNDO_COMMAND);
        // } else if (event === "formatRedo") {
        //     editor.dispatchCommand(REDO_COMMAND);
        // }


        // else if (event === "h1") {
        //     formatLargeHeading();
        // } else if (event === "h2") {
        //     formatSmallHeading();
        // } else if (event === "h3") {
        //     formatSmallHeading();
        // } else if (event === "ol") {
        //     formatNumberedList();
        // } else if (event === "ul") {
        //     formatBulletList();
        // } else if (event === "quote") {
        //     formatQuote();
        // } else if (event === "formatInsertLink") {
        //     insertLink();
        // }

        if (event === "paragraph") {
            formatParagraph();
        }
        else if (event === "formatAlignLeft") {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")
        } else if (event === "formatAlignCenter") {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
        } else if (event === "formatAlignRight") {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")
        } else if (event === "formatAlignJustify") {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")
        }
        else if (event === "formatBold") {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        } else if (event === "formatItalic") {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }
        else if (event === "formatUnderline") {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }
        // else if (event === "formatStrike") {
        //     editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        // } else if (event === "formatSubscript") {
        //     editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
        // } else if (event === "formatSuperscript") {
        //     editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
        // } 

    }

    const formatParagraph = () => {
        if (blockType !== "paragraph") {
            editor.update(() => {
                const selection = $getSelection();

                if ($isRangeSelection(selection)) {
                    $wrapNodes(selection, () => $createParagraphNode());
                }
            });
        }
    };


    // const insertLink = useCallback(() => {
    //     if (!isLink) {
    //         editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    //     } else {
    //         editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    //     }
    // }, [editor, isLink]);


    // const formatLargeHeading = () => {
    //     if (blockType !== "h1") {
    //         editor.update(() => {
    //             const selection = $getSelection();

    //             if ($isRangeSelection(selection)) {
    //                 $wrapNodes(selection, () => $createHeadingNode("h1"));
    //             }
    //         });
    //     }
    // };

    // const formatSmallHeading = () => {
    //     if (blockType !== "h2") {
    //         editor.update(() => {
    //             const selection = $getSelection();

    //             if ($isRangeSelection(selection)) {
    //                 $wrapNodes(selection, () => $createHeadingNode("h2"));
    //             }
    //         });
    //     }
    // };

    // const formatBulletList = () => {
    //     if (blockType !== "ul") {
    //         console.log("dispatch command ");
    //         editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
    //     } else {
    //         editor.dispatchCommand(REMOVE_LIST_COMMAND);
    //     }
    // };

    // const formatNumberedList = () => {
    //     if (blockType !== "ol") {
    //         editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
    //     } else {
    //         editor.dispatchCommand(REMOVE_LIST_COMMAND);
    //     }
    // };

    // const formatQuote = () => {
    //     if (blockType !== "quote") {
    //         editor.update(() => {
    //             const selection = $getSelection();

    //             if ($isRangeSelection(selection)) {
    //                 $wrapNodes(selection, () => $createQuoteNode());
    //             }
    //         });
    //     }
    // };



    return { onClick };
}

// function getSelectedNode(selection) {
//     const anchor = selection.anchor;
//     const focus = selection.focus;
//     const anchorNode = selection.anchor.getNode();
//     const focusNode = selection.focus.getNode();
//     if (anchorNode === focusNode) {
//         return anchorNode;
//     }
//     const isBackward = selection.isBackward();
//     if (isBackward) {
//         return $isAtNodeEnd(focus) ? anchorNode : focusNode;
//     } else {
//         return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
//     }
// }