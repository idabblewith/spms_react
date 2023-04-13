import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuItem, MenuList } from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
// import debounce from "lodash.debounce";
import { useState } from "react";

interface ISearchResults {
    id: number;
    name: string;
}

export const ProjectSearchBar = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<ISearchResults[]>([]);

    const testResultObject = [
        { id: 1, name: "Biodiversity" },
        { id: 2, name: "Diomes" },
        { id: 3, name: "Potatoes" },
        { id: 4, name: "Ice Cream" },
        { id: 5, name: "Ecoinformatics" },
        { id: 6, name: "Chocolate" },
    ]

    const handleSearch =
        // debounce(
        (value: string) => {
            if (value.length >= 3) {

            }
        }
    // , 1500);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        handleSearch(value);
        console.log(
            searchResults
        )
    };


    return (
        <Box>
            <InputGroup
                borderColor="gray.900"
                size={"sm"}
            >
                <InputRightElement pointerEvents="none" children={<FiSearch />} />
                <Input
                    bg="white" placeholder="Search Projects..."
                    rounded={6} type="text"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </InputGroup>
            {searchResults.length > 0 && (
                <Menu>
                    <MenuList maxHeight="200px" overflowY="auto">
                        {searchResults.map((result) => (
                            <MenuItem key={result.id}>{result.name}</MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            )}
        </Box>

    )
}