import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout";
import React from 'react'
import HomePage from '../Pages/HomePage'
import WarehouseDetails from "../pages/WarehouseDetails";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/warehouse/:id',
                element: <WarehouseDetails/>,
            }
        ]
    },
]);

export default route;
