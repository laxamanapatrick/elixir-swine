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
        accent: "#F1D3B3",
        warning: "#eed202",
        success: "#48bb78",
        danger: "#f56565",
        table_accent: "#C7BCA1",
        myWhite: "#e5e5e5"
    }
})