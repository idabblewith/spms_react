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

    const handleSearch =
        // debounce(
        (value: string) => {
            if (value.length >= 3) {
                // TODO: Replace with actual search function
                const results = [
                    { id: 1, name: "Search result 1" },
                    { id: 2, name: "Search result 2" },
                    { id: 3, name: "Search result 3" },
                    { id: 4, name: "Search result 4" },
                    { id: 5, name: "Search result 5" },
                    { id: 6, name: "Search result 6" },
                    { id: 7, name: "Search result 7" },
                    { id: 8, name: "Search result 8" },
                    { id: 9, name: "Search result 9" },
                    { id: 10, name: "Search result 10" },
                ];
                setSearchResults(results);
            } else {
                setSearchResults([]);
            }
        }
    // , 1500);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        handleSearch(value);
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
                    value={searchTerm} onChange={handleChange} />
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