import { Avatar, Menu, Text, MenuButton, MenuGroup, MenuItem, MenuList, Center, AvatarBadge, Box } from "@chakra-ui/react"
import { BsCodeSlash } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { SiReadthedocs } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go"
import { INavitar } from "../../types";


export const Navitar = ({ shouldShowName = false, userData, windowSize }: INavitar) => {

    const navigate = useNavigate();

    const onLogOut = () => {
        console.log("Logged out!");
    }

    return (
        <Box>
            <Menu>
                <MenuButton>
                    <Center>
                        {shouldShowName ?
                            <Text
                                color={"white"}
                                mx={3}
                            >
                                {
                                    userData.firstName.length < 12 ?
                                        userData.firstName :
                                        windowSize >= 1150 ? userData.firstName :
                                            `${userData.firstName.substring(0, 9)}...`
                                }

                            </Text>
                            : null
                        }
                        <Avatar size="sm" name={userData?.username}
                            src={userData?.imageLink ? userData.imageLink : ""}
                        >
                            {/* <AvatarBadge boxSize={3} borderColor="transparent">
                                <Center boxSize={3}>
                                    <GoTriangleDown />
                                </Center>
                            </AvatarBadge> */}
                        </Avatar>
                        <Center
                            color={"white"}
                            ml={1}
                        // boxSize={2}
                        >
                            <GoTriangleDown size={"13px"} />

                        </Center>

                    </Center>

                </MenuButton>

                <MenuList>

                    <MenuGroup
                        title="Documentation" fontSize={"12px"}
                        color={"gray.500"} textAlign={"center"}
                    >
                        <MenuItem
                            onClick={() => {
                                window.open("https://sdis.readthedocs.io", "_blank");
                            }}
                        >
                            {<SiReadthedocs />}
                            <Text ml={2}>
                                User Manual
                            </Text>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                navigate('/api')
                            }}
                        >
                            {<BsCodeSlash />}
                            <Text ml={2}>
                                API
                            </Text>
                        </MenuItem>

                    </MenuGroup>
                    <MenuGroup
                        title="DBCA Account" fontSize={"12px"}
                        color={"gray.500"} textAlign={"center"}
                    >
                        <MenuItem
                            onClick={() => {
                                navigate('/users/me')
                            }}
                        >
                            {<FaUserCircle />}
                            <Text ml={2}>
                                My SPMS Profile
                            </Text>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                window.open('https://sww.dpaw.wa.gov.au/', "_blank")
                            }}
                        >
                            {<FaUserCircle />}
                            <Text ml={2}>
                                My Divisional Profile
                            </Text>
                        </MenuItem>
                        <MenuItem
                            onClick={onLogOut}
                        >
                            {<FiLogOut />}
                            <Text ml={2}>
                                Logout
                            </Text>
                        </MenuItem>

                    </MenuGroup>
                    {/* </MenuItem> */}
                </MenuList>

            </Menu>

        </Box>
    )
}