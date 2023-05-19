import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IWordCountProps {
    count: number;
}

export const WordCount = ({ count }: IWordCountProps) => {

    return (
        <Text
            fontWeight={"semibold"}
            fontSize={"lg"}
            color={"blackAlpha.500"}
        >
            {count} words
        </Text>
    )
}