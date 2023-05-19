import { $createTextNode, $getRoot, $getSelection, EditorState } from "lexical"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, $createHeadingNode } from '@lexical/rich-text'


import { useEffect, useState } from "react"

import "../../../styles/texteditor.css"
import { Box, Button } from "@chakra-ui/react";
import { RichTextToolbar } from "../Toolbar/RichTextToolbar";
import { OptionsBar } from "../OptionsBar/OptionsBar";


import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListItemNode, ListNode } from "@lexical/list";
// import ToolbarPlugin from "./plugins/ListToolbar";




const theme = {
    heading: {
        h1: 'editor-h1',
    },
    text: {
        bold: 'editor-bold',
        italics: 'editor-italics',
    }
}

// Catch errors that occur during Lexical updates
const onError = (error: Error) => {
    console.log(error)
}

// // Notify on Lexical editor changes
const onChange = (editorState: EditorState) => {
    editorState.read(() => {
        // reads the contents of the editor state
        const root = $getRoot();
        const selection = $getSelection();
        console.log(root, selection);
    });
}

// //
const CustomAutoFocusPlugin = () => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        // Focus the editor on updates to the editor
        editor.focus();
    }, [editor])

    return null;
}

const HeadingPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (e: React.MouseEvent) => {
        editor.update(() => {
            const root = $getRoot();
            // const myNode = $createCustomVarNode();
            root.append($createHeadingNode('h1')).append($createTextNode('Hello World'))
        });
    }
    return (
        <Button
            onClick={onClick}
        >
            Heading
        </Button>
    );
}

export const SimpleRichTextEditor = () => {

    const [wordAmount, setWordAmount] = useState<number>(0);
    const [contentHeight, setContentHeight] = useState<number>(0);
    const handleContentChange = (newHeight: number) => {
        setContentHeight(newHeight);
    };


    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [
            HeadingNode, ListNode, ListItemNode,
        ]
    };

    return (
        <Box
            // className="editorWrapper"
            // mt={10}
            pos={"relative"}
            w={"100%"}
            bg={"gray.200"}
            rounded={20}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}

        // minHeight={contentHeight}

        >
            <LexicalComposer initialConfig={initialConfig}>


                <Box
                    position={"relative"}
                    minHeight={contentHeight}
                    height="auto"
                // mb={10}
                >
                    {/* Toolbar */}
                    <RichTextToolbar />

                    {/* Text Area (Relative with Absolute Buttons at the bottom*/}
                    {/* <ToolbarPlugin /> */}

                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="contentEditable"
                            />
                        }
                        placeholder={<div className="placeholder" >Enter some text...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    // onContentChange={handleContentChange} 
                    />
                    <ListPlugin />
                    {/* <CheckListPlugin /> */}
                    <OptionsBar wordCount={wordAmount} />
                </Box>

            </LexicalComposer>

        </Box>
    )
}



{/* <Box
                    mt={8}
                    bg={"yellow"}
                >
              
                    <PlainTextPlugin
                    contentEditable={<ContentEditable className="contentEditable" />}
                    placeholder={<div className="placeholder" >Enter some text...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                    <OnChangePlugin onChange={onChange} />
                    <HistoryPlugin />
                    <CustomAutoFocusPlugin />

                </Box> */}