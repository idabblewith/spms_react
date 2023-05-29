import { Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FcPrevious, FcNext } from "react-icons/fc"
import { IBaseToolbarMenuButtonProps } from "./BaseToolbarMenuButton"
import { ElementTypeButton } from "../MenuButtons/ElementTypeButton";
import { FontStylingButtons } from "../Sections/FontStylingButtons";
import { useEffect } from "react";

interface IToolbarToggleBtnProps {
    page: number;
    setPage: (pageNum: number) => void;
    maxPages: number;
    isSmall?: boolean;
}

export const ToolbarToggleBtn = ({ page, setPage, maxPages, isSmall }: IToolbarToggleBtnProps) => {

    const minPages = 1;

    const goNextPage = () => {
        setPage(
            page + 1
        )
    }

    const goPrevPage = () => {
        setPage(
            page - 1
        )
    }

    // useEffect(() => {
    //     console.log(`${page}/${maxPages}`)
    // }, [page])

    return (
        <Flex>

            {
                isSmall ? (
                    <>
                        {page <= maxPages && page !== 1 ?
                            <Button
                                variant={"ghost"}
                                mx={1}
                                onClick={goPrevPage}
                            >
                                <Icon as={FcPrevious} />
                            </Button>
                            : null}

                        {page !== maxPages ?
                            <Button
                                variant={"ghost"}
                                mx={1}
                                onClick={goNextPage}
                            >
                                <Icon as={FcNext} />
                            </Button>
                            : null}
                    </>)

                    : (
                        <>
                            <Button
                                variant={"ghost"}
                                mx={1}
                                onClick={goPrevPage}
                                isDisabled={
                                    page === minPages
                                }
                            >
                                <Icon as={FcPrevious} />
                            </Button>
                            <Button
                                variant={"ghost"}
                                mx={1}
                                onClick={goNextPage}
                                isDisabled={
                                    page === maxPages
                                }
                            >
                                <Icon as={FcNext} />
                            </Button>
                        </>
                    )
            }
        </Flex>
    )
}