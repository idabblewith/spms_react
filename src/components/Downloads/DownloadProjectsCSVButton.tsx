import { Button, ToastId, useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { downloadProjectsCSV } from "../../api";

export const DownloadProjectsCSVButton = () => {

    const [isDownloadProjectsButtonDisabled, setIsDownloadProjectsButtonDisabled] = useState(false);


    const toast = useToast();
    const [onMutateToastId, setOnMutateToastId] = useState<ToastId>();

    const downloadAllProjectsMutation = useMutation(downloadProjectsCSV, {
        onMutate: () => {
            setIsDownloadProjectsButtonDisabled(true);
            const toastId = toast({
                position: 'top-right',
                status: "loading",
                title: "Downloading",
                duration: null,
                // isClosable: true,
                description: "Downloading Projects CSV...",
            })
            setOnMutateToastId(toastId);

        },
        onSuccess: () => {
            toast({
                position: 'top-right',
                status: "success",
                title: "Complete!",
                isClosable: true,
                description: "All Projects CSV Download Complete.",
            });
            setTimeout(() => {
                setIsDownloadProjectsButtonDisabled(false);
            }, 5000);

            if (onMutateToastId) {
                toast.close(onMutateToastId);
            }
        },
        onError: () => {
            toast({
                position: 'top-right',
                status: "error",
                title: "Error!",
                isClosable: true,
                description: "Unable to download Projects CSV.",
            });
            setTimeout(() => {
                setIsDownloadProjectsButtonDisabled(false);
            }, 5000);
            if (onMutateToastId) {
                toast.close(onMutateToastId);
            }
        },
    })

    const downloadAllProjectsCSV = () => {
        // const userID = 1;
        // if (userID) {
        downloadAllProjectsMutation.mutate();
        console.log("Downloading...")

        // { userID }
        // }
    }
    return (
        <Button
            leftIcon={<FaDownload />}
            variant={"solid"}
            colorScheme="blue"
            onClick={downloadAllProjectsCSV}
            isDisabled={isDownloadProjectsButtonDisabled}
        >
            Download Projects
        </Button>
    )
}