import React from 'react';
import { RouterProvider } from "react-router-dom";
import { Router } from './date/routes.jsx';

export default function App(){
    return(
        <RouterProvider router={Router} />
    );
}