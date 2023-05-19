import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { BsUnlockFill, BsLockFill } from "react-icons/bs"
import { BaseToggleOptionsButton } from "./BaseToggleOptionsButton";

// A button to control whether the box is editable.
// This will by default be implemented once a document has been approved.
// Only the directorate or program leader can click the button again to enable editing.

export const ReadOnlyModeButton = () => {
    const [isLocked, setIsLocked] = useState<boolean>(false);
    return (
        <BaseToggleOptionsButton
            iconOne={BsUnlockFill}
            iconTwo={BsLockFill}
            colorSchemeOne={"gray"}
            colorSchemeTwo={"gray"}
            currentState={isLocked}
            setCurrentState={setIsLocked}
        />
        // <Button
        //     size={"lg"}
        // >
        //     {
        //         isLocked ?
        //             (
        //                 <BsLockFill />
        //             ) :
        //             (
        //                 <BsUnlockFill />
        //             )
        //     }
        // </Button>
    )
}