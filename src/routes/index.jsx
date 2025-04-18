import { createBrowserRouter } from 'react-router-dom'
import Door from '../Container/Door/index'
import Home from '../Container/Home/index'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Door />
    },
    {
        path: '/home',
        element: <Home />
    }
])

