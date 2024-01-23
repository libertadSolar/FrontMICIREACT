import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { VisorRoutes } from '../visor_mici/routes/VisorRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login */}
        <Route path='/auth/*' element={ <AuthRoutes /> }/> 

        {/* VisorApp*/}
        <Route path='/*' element={ <VisorRoutes /> }/>
    </Routes>
  )
}
