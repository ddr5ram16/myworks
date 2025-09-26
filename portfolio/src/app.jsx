import React, { useState } from 'react';
import { Profile } from './date/status.jsx';
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
            {path: "/dooglen", element: <AboutWeb work={abouts.dooglen} />}
        ],
    },
]);

export default function App(){
    const [date , setDate] = useState(Profile)
    return(
        <RouterProvider router={router} />
    );
}