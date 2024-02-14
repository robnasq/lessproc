import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Memorizze } from "../pages/home/components/jobs/Memorizze";
import { Layout } from "../layout/Layout";

export const Router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
          { 
             index: true,
             element: <Home /> 
        },
            {
                path: '/memorizze',
                element: <Memorizze />,
            },
        ],
    },
   
])