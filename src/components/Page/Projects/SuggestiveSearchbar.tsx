import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import { IProjectData } from "../../../types";

export const SuggestiveSearchbar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const [filteredItems, setFilteredItems] = useState<IProjectData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [currentFilteredItems, setCurrentFilteredItems] = useState(
        filteredItems.slice(indexOfFirstItem, indexOfLastItem)
    );


    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log("test")
        const searchTerm = e.currentTarget.value;
        setSearchTerm(searchTerm);
        // setSearchLoading(true);
        // if (searchTerm === "") {
        //     setFilteredItems(
        //         ""
        // //         baseData
        //         );
        //     setSearchLoading(false);
        //     return;
        // }
        // debouncedHandleSearchChange(searchTerm, baseData);
    };

    // const debouncedHandleSearchChange = useRef(
    //     _.debounce((searchTerm: string, items: any) => {
    //         const filteredUsers = items.filter(
    //             (user: IUserData) =>
    //                 user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                 user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                 user.email.toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //         console.log("called api");
    //         console.log(filteredUsers);

    //         setFilteredItems(filteredUsers);
    //         setSearchLoading(false);
    //     }, 500)
    // ).current;


    return (
        <Flex justifyContent={"flex-end"} width="100%">
            <InputGroup>
                <Input
                    type="text"
                    placeholder="Search by title or number"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    borderRadius="md"
                    paddingRight="2rem" // Add some padding to prevent text overlapping the icon
                    borderColor="gray.300" // Set border color to match the InputRightAddon border color

                />
                <InputRightAddon
                    children={<BsSearch />}
                    background="transparent"
                    borderColor="gray.300" // Set border color to match the Input border color
                    borderWidth="1px" // Add borderWidth to show the border around the addon
                    pointerEvents="none"
                    height="100%"
                    zIndex="1" // Add zIndex to place the addon above the input
                    _hover={{
                        borderColor: "gray.300", // Prevents the border color change on hover
                    }}

                />
            </InputGroup>

        </Flex>
    )
}



// const SearchBar = () => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
  
//     const handleInputChange = (event) => {
//       const newQuery = event.target.value;
//       setQuery(newQuery);
  
//       if (newQuery.length >= 3) {
//         fetchSuggestions(newQuery);
//       } else {
//         setSuggestions([]);
//       }
//     };
  
//     const fetchSuggestions = async (query) => {
//       try {
//         const response = await axios.get('/api/search', { params: { query } });
//         setSuggestions(response.data);
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }
//     };
  
//     return (
//       <Box>
//         <InputGroup>
//           <Input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={handleInputChange}
//           />
//           <InputRightElement>
//             <List>
//               {suggestions.map((suggestion, index) => (
//                 <ListItem key={index}>
//                   <Text>{suggestion}</Text>
//                 </ListItem>
//               ))}
//             </List>
//           </InputRightElement>
//         </InputGroup>
//       </Box>
//     );
//   };
  
//   export default SearchBar;





// // API
// const fetchSuggestions = async (query) => {
//     try {
//       const response = await axios.get('/api/search', { params: { query } });
//       const slicedSuggestions = response.data.slice(0, 5);
//       setSuggestions(slicedSuggestions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };
  