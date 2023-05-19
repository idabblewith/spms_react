import { Button } from "@chakra-ui/react"
import { FaCaretDown, FaHighlighter } from "react-icons/fa"
import { registerCodeHighlighting } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

// Similar Dropdown button to FontColorPicker, but for background highlight of text

export const FontHighlighterButton = () => {
    // const [editor] = useLexicalComposerContext();

    // useEffect(() => {
    //     return registerCodeHighlighting(editor);
    // }, [editor])
    return (
        <Button
            leftIcon={<FaHighlighter />}
            rightIcon={<FaCaretDown />}
        >
        </Button>
    )
}