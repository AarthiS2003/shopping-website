import React from 'react';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer';
import {Outlet,RouterProvider, createBrowserRouter,Router, ScrollRestoration } from 'react-router-dom';
import Cart from './pages/Cart';
import { productsData } from './api/api';
import Product from './components/Product';
    const Layout=() => {
    return (
        <div>
            <Header/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
    const router = createBrowserRouter([
            {
                path:"/",
                element:<Layout/>,
                children:[
                    {
                        path:"/",
                        element:<Home/>,
                        loader:productsData,
                    },
                    {
                        path:"/product/:id",
                        element: <Product/>
                    },
                    {
                        path:"/cart",
                        element:<Cart/>,                
                    },
                ],
            },
]);


function App() {
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App