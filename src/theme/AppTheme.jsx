import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ theme }>
        <CssBaseline/>

        {children}

    </ThemeProvider>
  )
}
