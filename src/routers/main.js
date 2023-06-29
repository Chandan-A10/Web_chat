import ChatRoom from '../pages/ChatRoom'
import Home from '../pages/Home'

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