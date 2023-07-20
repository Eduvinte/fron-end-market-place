import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
// Pages
import Home from './pages/Home'
import Productos from './pages/Productos'
import Register from './pages/Register'
import Login from './pages/Login'
import Favoritos from './pages/Favoritos'
import DetailsProduct from './pages/DetailsProduct' 
import ProfileUser from './pages/ProfileUser'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

function RouteApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/details' element={<DetailsProduct />} />
                <Route path='/profile' element={<ProfileUser />} />
                <Route path='/addProduct' element={<AddProduct />} />
                <Route path='/editProduct' element={<EditProduct />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteApp