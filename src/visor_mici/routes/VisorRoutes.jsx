
import { Navigate, Route, Routes } from "react-router-dom"
import { VisorPage } from '../pages/VisorPage'

export const VisorRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <VisorPage /> } />

        <Route path='/*' element={ <Navigate to="/" /> } />
    </Routes>
  )
}
