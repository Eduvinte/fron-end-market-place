import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { useContext } from 'react'
import { AuthContextApp } from './contexts/AuthContextApp'
import { Navigate } from 'react-router-dom'




function RouteApp() {
    const { isLloged, idUser } = useContext(AuthContextApp);
    // Función que renderiza la ruta de manera condicional
    const renderPrivateRoute = (element) =>
    isLloged ? element : <Navigate to="/login" replace />;

    const renderPrivateRouteLogin = (element) =>
    isLloged && idUser ? <Navigate to={`/profile/${idUser}`} replace /> : element


    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />



                <Route path='/register' element={<Register />} />
                <Route path='/login' element={renderPrivateRouteLogin(<Login />)} />
                <Route path='/favoritos' element={<Favoritos />} />

                <Route path='/productos' element={<Productos />} />
                <Route path='/details/:product_id'  element={<DetailsProduct />} />
                <Route path='/profile/:user_id'  element={renderPrivateRoute(<ProfileUser />)} />

                <Route path="/addProduct/:user_id" element={renderPrivateRoute(<AddProduct />)} />
                <Route path='/editProduct/:id_product'  element={renderPrivateRoute(<EditProduct />)} />
                {
                    /**
                     *     </Routes><Route path='/deleteProduct'  element={renderPrivateRoute(<DeleteProduct> />)} />
                     */
                }
            
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteApp