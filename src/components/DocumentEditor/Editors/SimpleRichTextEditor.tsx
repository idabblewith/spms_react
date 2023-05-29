// React
import { useState } from "react"

// Styles and Styling Components
import "../../../styles/texteditor.css"
import { Box, Flex } from "@chakra-ui/react";

// Lexical
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

// Lexical Plugins
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

// Custom Components
import { RichTextToolbar } from "../Toolbar/RichTextToolbar";
import { OptionsBar } from "../OptionsBar/OptionsBar";

import '../../../styles/texteditor.css'


const theme = {
    quote: 'editor-quote',
    ltr: "ltr",
    rtl: "rtl",
    heading: {
        h1: 'editor-h1',
        h2: 'editor-h2',
        h3: 'editor-h3',
    },
    text: {
        bold: 'editor-bold',
        italics: 'editor-italics',
        unerline: 'editor-underline',
    }
}

// Catch errors that occur during Lexical updates
const onError = (error: Error) => {
    console.log(error)
}

export const SimpleRichTextEditor = () => {

    const [wordAmount, setWordAmount] = useState<number>(0);

    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [
            //     HeadingNode, 
            // ListNode, ListItemNode,
        ]
    };



    return (
        // Wrapper
        <Box
            pos={"relative"}
            w={"100%"}
            // bg={"gray.100"}
            rounded={20}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
            <LexicalComposer
                initialConfig={initialConfig}
            >
                {/* Plugins*/}
                {/* <ListPlugin /> */}
                {/* <WordCountPlugin /> */}
                <HistoryPlugin />

                {/* Toolbar */}
                <RichTextToolbar />

                {/* Text Area */}
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            style={{
                                minHeight: "300px",
                                width: "100%",
                                height: "auto",
                                padding: "32px",
                                paddingBottom: "16px",
                                borderRadius: "0 0 25px 25px",
                                outline: "none"
                            }}
                        />
                    }
                    placeholder={
                        <div
                            style={{
                                position: "absolute",
                                left: "32px",
                                top: "89px",
                                userSelect: "none",
                                pointerEvents: "none",

                            }}
                        >
                            Enter some text...
                        </div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <Box
                >
                    <OptionsBar wordCount={wordAmount} />
                </Box>
            </LexicalComposer>
        </Box>
    )
}