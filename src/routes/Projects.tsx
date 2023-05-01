import { Image, Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, InputGroup, InputLeftElement, Input, Flex, Grid, Tag } from "@chakra-ui/react"
import { BsChatSquareFill } from "react-icons/bs";
import { GiQueenCrown } from 'react-icons/gi';
import { AiFillTag, AiFillEdit, AiFillCalendar } from 'react-icons/ai';
import { NavigationBar } from "../components/Page/NavigationBar";
import SpiderWeb from "../assets/spiderweb.jpeg"
import Kokerbin from "../assets/kokerbin.jpeg"
import { SearchAndFilterProjectSection } from "../components/Page/SearchAndFilterProjectSection";

export const Projects = () => (
    <>
        <NavigationBar
            subDirOne={{
                title: "Projects",
                link: "/projects"
            }}
            subDirTwo={{
                title: "Browse",
                link: "/projects/browse"
            }}
        />
        <SearchAndFilterProjectSection />
    </>
);
