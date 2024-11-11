import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/HomePage/Home/Home";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import DonateBlood from "../../pages/DonateBlood/DonateBlood";
import FindBlood from "../../pages/FindBlood/FindBlood";
import Campaigns from "../../pages/Campaigns/Campaigns";
import Gallery from "../../pages/Gallery/Gallery";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Login from "../../pages/Authentication/Login/Login";
import RegisterStep1 from "../../pages/Authentication/Register/RegisterStep1";
import RegisterStep2 from "../../pages/Authentication/Register/RegisterStep2";
import Register from "../../pages/Authentication/Register/Register";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,

        // errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                index: true,
                element: <Home></Home>
            },

            {
                path: "/donate-blood",
                element: <DonateBlood></DonateBlood>
            },
            {
                path: "/find-blood",
                element: <FindBlood></FindBlood>
            },
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>
            },

            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },

            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },

            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register />, 
                children: [
                    {
                        path: "", 
                        element: <RegisterStep1 />
                    },
                    {
                        path: "step2", 
                        element: <RegisterStep2 />
                    }
                ]
            }

        ]
    },

]);

export default router;