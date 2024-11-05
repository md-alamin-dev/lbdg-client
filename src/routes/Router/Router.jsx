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
import SignUp from "../../pages/Authentication/SignUp/SignUp";

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
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
          
        ]
    },

]);

  export default router;