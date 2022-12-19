import React from 'react'
import { Box } from '@chakra-ui/react'
import arrowUp from '../images/arrowup.png'
import arrowDown from '../images/arrowdown.png'


export const ScrollFeature = ({ children, minHeight, maxHeight, width, scrollColor }) => {

    return (
        <Box overflowY="auto" overflowX="auto" m={0.5}
            width={width ? width : 'full'}
            minHeight={minHeight ? minHeight : 'auto'}
            maxHeight={maxHeight ? maxHeight : 'auto'}
            sx={{
                "&::-webkit-scrollbar": {
                    height: "5px",
                    width: "12px",
                    borderRadius: "1px",
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: scrollColor ? scrollColor : "accent",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: 'accent',
                },
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 5px grey',
                },
                "&::-webkit-scrollbar-button:single-button:vertical:decrement": {
                    borderWidth: '0 8px 8px 8px',
                    backgroundSize: 'cover',
                    background: `url(${arrowUp}) 50% 50% / cover no-repeat !important`
                },
                "&::-webkit-scrollbar-button:single-button:vertical:decrement:hover": {
                    borderColor: 'transparent transparent #777777 transparent',
                    backgroundSize: 'cover',
                    background: `url(${arrowUp}) 50% 50% / cover no-repeat !important`
                },
                " &::-webkit-scrollbar-button:single-button:vertical:increment": {
                    borderWidth: '8px 8px 0 8px',
                    backgroundSize: 'cover',
                    background: `url(${arrowDown}) 50% 50% / cover no-repeat !important`
                },
                "&::-webkit-scrollbar-button:vertical:single-button:increment:hover": {
                    borderColor: 'yellow',
                    backgroundSize: 'cover',
                    background: `url(${arrowDown}) 50% 50% / cover no-repeat !important`
                }
            }}
        >
            {children}
        </Box >
    )

}
