import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../register/register'
import NotFound from '../componets/NootFound'
function RootControl() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootControl