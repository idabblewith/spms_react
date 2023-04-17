import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const breakpoints = {
    sm: '320px',
    md: '515px',
    lg: '960px',
    xl: '1455px',
    '1xl': '1550px',
    '2xl': '2000',
    '3xl': '2400',
    '4xl': '2832',
    // '5xl': '2655',
}

const theme = extendTheme({
    config, breakpoints,
    components: {
        Modal: {
            baseStyle: (props: any) => ({
                dialog: {
                    maxWidth: ["65%", "85%", "85%"],
                    minWidth: ["65%", "85%", "85%"],
                    maxHeight: ["65%", "85%", "85%"],
                    minHeight: ["65%", "85%", "85%"],
                    bg: '#000000'
                }
            })
        }
    }
})


export default theme;