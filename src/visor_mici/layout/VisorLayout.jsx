import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from '../components/SideBar';

//Establecer ancho sidebar
const drawerWidth = 240;

export const VisorLayout = ( {children}) => {
  return (
    <Box sx={{display: 'flex' }}>

        {/* Navbar */}

        <SideBar drawerWidth={drawerWidth}/>
        {/* Sidebar drawerWidth */}

        <Box component='main'

            compoenent='main'
            sx={{ flexGrow: 1, p:3}}
        
        >
            {/*Toolbar */}
            {children}

        </Box>
    </Box>
  )
}
