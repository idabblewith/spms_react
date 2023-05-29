import { Box, Flex, Text } from "@chakra-ui/react";
import { FaBold, FaItalic, FaUnderline, FaSuperscript, FaSubscript, FaLink, FaPaste, FaTable, FaCode, FaUndo, FaRedo } from "react-icons/fa";
import { MdOutlineFormatListNumbered, MdOutlineFormatListBulleted } from "react-icons/md";
import { ImOmega } from "react-icons/im";
import { TbClearFormatting } from "react-icons/tb";
import { SimpleRichTextEditor } from "./SimpleRichTextEditor";

// BASED ON CURRENT VERSION
// Bullet list options - Default, Circle, Disc, Square
// Numbered list options - Default, Lower Alpha, Lower Greek, Lower Roman, Upper Alpha, Upper Roman


// Made with Lexical (used by Facebook, as Draft now deprecated)
export const FullFeaturedRichTextEditor = () => {
    return (
        <Box>
            <Text fontWeight={"bold"} pb={4}>
                Rich Text Editor - Use Helmet
            </Text>
            <Flex>
                <SimpleRichTextEditor />
            </Flex>

        </Box>
    )
}

// Has all features 