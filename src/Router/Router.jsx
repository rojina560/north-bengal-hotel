import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayouts from "../Layout/MainLayouts";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children:[{
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/rooms',
        element: <Rooms></Rooms>,
        loader: ()=> fetch('http://localhost:5001/rooms')
    },
    {
        path: '/rooms/:id',
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5001/rooms/${params.id}`)

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