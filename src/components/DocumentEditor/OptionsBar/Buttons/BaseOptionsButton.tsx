import { Button, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface BaseOptionsButtonProps {
    colorScheme?: string;
    icon: IconType;
    onClick: () => void;
}

export const BaseOptionsButton = ({ colorScheme, icon: buttonIcon, onClick }: BaseOptionsButtonProps) => {
    return (
        <Button colorScheme={colorScheme} onClick={onClick}
            // size={"md"}
            // rounded={"2xl"}
            rounded={"full"}
            w={"50px"}
            h={"50px"}
        // _hover={
        //     {
        //         animation: "2s",
        //         width: "60px",
        //         rounded: "2xl"
        //     }
        // }
        >
            <Icon
                as={buttonIcon}
                boxSize={6}
            />
        </Button>
    );
};
