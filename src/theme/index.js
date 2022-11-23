import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    colors: {
        primary: "#65647C",
        secondary: "#8B7E74",
        accent: "#C7BCA1",
        warning: "#eed202",
        success: "#48bb78",
        danger: "#f56565",
        table_accent: "#F1D3B3",
        myWhite: "#e5e5e5",
        myBlack: "#28282B",
        // none: "#28282B",
    },
    components: {
        Text: {
            baseStyle: {
                color: "#e5e5e5"
            }
        }
    }
})