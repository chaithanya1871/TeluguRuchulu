import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact-us/ContactUs";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact-us',
                element:<ContactUs/>
            },
            {
                path:'cart',
                element:<Cart/>
            }
        ]
    },
    {
        path:'/sign-in',
        element:<SignIn/>
    },
    {
        path:'sign-up',
        element:<SignUp/>
    }

])