import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Works } from "../date/worksAbout";
import Top from '../pages/Top.jsx';
import AboutWeb from "../pages/aboutWeb.jsx";
import AboutOther from '../pages/aboutOther.jsx';

const abouts = Works;
export const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: (
            <div className="">
                <h1 className="">404 - Page Not Found</h1>
            </div>
        ),
        children: [
            { path: "/", element: <Top /> },
            { path: "/dooglen", element: <AboutWeb work={abouts.dooglen} /> },
            { path: "/portfolio", element: <AboutWeb work={abouts.portfolio} /> },
            { path: "/anonim", element: <AboutWeb work={abouts.Anonim}/>,},
            { path: "/cafe_anomaly", element: <AboutWeb work={abouts.cafeAnomaly}/>,},
            { path: "/janedoe_channel", element: <AboutWeb work={abouts.janeDoe}/>,},
            { path: "/novelty", element: <AboutOther work={abouts.novelty}/>,},
            { path: "/festival", element: <AboutOther work={abouts.festival}/>,},
            { path: "/job_hunting", element: <AboutOther work={abouts.job_hunting}/>,},
            { path: "/beauty_salon", element: <AboutOther work={abouts.beauty_salon}/>,},
            { path: "/strawberry_farm", element: <AboutOther work={abouts.strawberry_farm}/>,},
        ],
    },
]);