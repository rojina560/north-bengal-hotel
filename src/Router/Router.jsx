import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayouts from "../Layout/MainLayouts";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children:[{
        path: '/',
        element: <Home></Home>
    }]
}])
export default router