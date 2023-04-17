import { Flex, Menu, MenuButton, MenuItem, MenuList, Image, Text, Checkbox, useDisclosure, useToast, Button, Box, Center, Grid, useBreakpointValue, BoxProps } from "@chakra-ui/react"
import { NavigationBar } from "../components/subcomponents/NavigationBar"
import { MdMoreVert } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SearchAndFilterUserSection } from "../components/subcomponents/SearchAndFilterUserSection";




export const Users = () => {

    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Manage Users",
                    link: "/users"
                }}
            />

            <SearchAndFilterUserSection />
        </>
    )
}