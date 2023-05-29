import { Button, ToastId, useToast } from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaDownload } from "react-icons/fa"
import { downloadReportPDF } from "../../api";

export const DownloadReportPDFButton = () => {

    const [isDownloadReportButtonDisabled, setIsDownloadReportButtonDisabled] = useState(false);

    const toast = useToast();
    const [onMutateToastId, setOnMutateToastId] = useState<ToastId>();

    const downloadReportMutation = useMutation(downloadReportPDF, {
        onMutate: () => {
            setIsDownloadReportButtonDisabled(true);
            const toastId = toast({
                position: 'top-right',
                status: "loading",
                title: "Downloading",
                description: "Downloading Report...",
                duration: null,
                // isClosable: true,
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
                setIsDownloadReportButtonDisabled(false);
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
                setIsDownloadReportButtonDisabled(false);
            }, 5000);
            if (onMutateToastId) {
                toast.close(onMutateToastId);
            }
        },
    })

    const downloadReport = () => {
        console.log("Downloading...")
        const userID = 1;
        if (userID) {
            downloadReportMutation.mutate({ userID });
        }
    }



    return (
        <Button
            leftIcon={<FaDownload />}
            variant={"solid"}
            colorScheme="blue"
            onClick={downloadReport}
            isDisabled={isDownloadReportButtonDisabled}
        >
            Generate PDF
        </Button>
    )
}