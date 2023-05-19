import { Menu, MenuButton, MenuItem, MenuList, Icon, Box, Button } from "@chakra-ui/react"
import { IconType } from "react-icons";
import { FaCaretDown } from "react-icons/fa";


interface IMenuItem {
    leftIcon?: IconType;
    text: string;
    onClick: () => void;
}

interface IBaseToolbarMenuButtonProps {
    title?: string;
    menuIcon?: IconType;
    menuItems: IMenuItem[];
}

export const BaseToolbarMenuButton = ({ title, menuIcon: MenuIcon, menuItems }: IBaseToolbarMenuButtonProps) => {
    return (
        <Menu isLazy>
            <MenuButton
                as={Button}
                leftIcon={
                    MenuIcon ?
                        <MenuIcon />
                        : undefined
                }
                rightIcon={<FaCaretDown />}
            >
                {title ? title : null}
            </MenuButton>
            <MenuList>
                {menuItems.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            onClick={item.onClick}
                        >
                            {
                                item.leftIcon ?
                                    (
                                        <Icon as={item.leftIcon} />
                                    ) :
                                    null
                            }

                            <Box pl={4}>
                                <span>{item.text}</span>
                            </Box>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}


                    // MenuItem is just the react-icon ?
                    // : menu Item is an Icon component?
                    // MenuIcon 
