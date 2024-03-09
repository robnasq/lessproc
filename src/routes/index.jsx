import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Memorizze } from '../pages/home/components/jobs/Memorizze';
import { Layout } from '../layout/Layout';
import { Mycamp } from '../pages/home/components/jobs/Mycamp';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/memorizze',
        element: <Memorizze />
      },
      {
        path: '/mycamp',
        element: <Mycamp />
      }
    ]
  }
]);
