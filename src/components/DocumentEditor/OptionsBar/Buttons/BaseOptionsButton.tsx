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
            size={"lg"}
            rounded={"3xl"}
            w={"70px"}
            h={"60px"}
        >
            <Icon
                as={buttonIcon}
                boxSize={6}
            />
        </Button>
    );
};
