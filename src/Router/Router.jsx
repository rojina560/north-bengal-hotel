import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayouts from "../Layout/MainLayouts";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children:[{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]
}])
export default router