import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

const darkModeColors = {
    primary: "#65647C",
    secondary: "#8B7E74",
    accent: "#C7BCA1",
    table_accent: "#F1D3B3",
    textColor: "#e5e5e5",
    warning: "#eed202",
    success: "#48bb78",
    danger: "#f56565",
    myBlack: "#28282B",
}

// const lightModeColors = {
//     primary: "#dcdbdc",
//     secondary: "#d4d4d4",
//     accent: "#65647C",
//     warning: "#eed202",
//     success: "#48bb78",
//     danger: "#f56565",
//     table_accent: "#F1D3B3",
//     textColor: "#28282B",
//     myBlack: "#e5e5e5",
// }



export const theme = extendTheme({
    breakpoints,
    colors: darkModeColors,
})
