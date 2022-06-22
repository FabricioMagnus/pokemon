import React from 'react'
import {  Box } from "@mui/material";


function Home () {
    return (
        <Box sx={{
            width: 300,
            height: '100%',
            backgroundColor: 'red',
            boxShadow: 10,
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },}}>
                

        </Box>
    )
}
export default Home