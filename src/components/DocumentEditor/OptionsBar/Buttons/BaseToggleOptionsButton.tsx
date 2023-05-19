import { Button, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface BaseToggleOptionsButtonProps {
    colorSchemeOne?: string;
    colorSchemeTwo?: string;
    iconOne: IconType;
    iconTwo: IconType;
    currentState: boolean;
    setCurrentState: (state: boolean) => void;
}

export const BaseToggleOptionsButton = ({
    colorSchemeOne,
    colorSchemeTwo,
    iconOne: IconOne,
    iconTwo: IconTwo,
    currentState,
    setCurrentState
}: BaseToggleOptionsButtonProps) => {

    const handleClick = () => {
        setCurrentState(!currentState)
    }

    return (
        <Button
            colorScheme={
                colorSchemeOne && colorSchemeTwo ?
                    currentState === false ?
                        colorSchemeOne : colorSchemeTwo : "gray"}
            onClick={handleClick}
            size={"lg"}
            w={"70px"}
            h={"60px"}
            rounded={"3xl"}
        >
            {currentState === false ?
                <Icon as={IconOne} boxSize={6} />
                :
                <Icon as={IconTwo} boxSize={6} />
            }
        </Button>
    );
};
