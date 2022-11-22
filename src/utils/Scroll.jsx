import React from 'react'
import { Box } from '@chakra-ui/react';
// import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

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
                "&::-webkit-scrollbar-button:single-button": {
                    backgroundColor: scrollColor ? scrollColor : "teal",
                    height: '12px',
                    width: '20px',
                    color: 'white',
                    backgroundSize: '10px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 4px'
                },
                "&::-webkit-scrollbar-button:single-button:vertical:decrement": {
                    backgroundImage: ''
                },
                "&::-webkit-scrollbar-button:single-button:vertical:increment": {
                    backgroundImage: ''
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: scrollColor ? scrollColor : "teal",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: 'yellow',
                },
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 5px grey',
                }
            }}
        >
            {children}
        </Box >
    )

}