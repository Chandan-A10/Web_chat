import ChatRoom from '../pages/ChatRoom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export const MyPublicRoutes=[
    {
        path:'/',
        element:<Home/>
    }
]

export const MyPrivateRoutes=[
    {
        path:'/chatroom',
        element:<ChatRoom/>
    }
]