import React, { useState } from 'react';
import Top from './pages/Top.jsx';
import AboutWeb from './pages/aboutWeb.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Works } from "./date/worksAbout";

const abouts = Works;
const router = createBrowserRouter([
    {
        path: "/",
        errorElement: (
            <div className="">
                <h1 className="">404 - Page Not Found 🧙‍♂️</h1>
            </div>
        ),
        children: [
            { path: "/", element: <Top /> },
            { path: "/dooglen", element: <AboutWeb work={abouts.dooglen} /> },
            { path: "/portfolio", element: <AboutWeb work={abouts.portfolio} /> },
        ],
    },
]);

export default function App(){
    return(
        <RouterProvider router={router} />
    );
}