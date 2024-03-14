import React from 'react'
import { Home } from './pages/Home'
import Rooms from '../components/Rooms';
import { Wedding } from './pages/Wedding'
import { Story } from './pages/Story';
import { ExploringWindsor } from './pages/ExploringWindsor';
import { Contact } from './pages/Contact';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
      },
    {
        path: "/room",
        element:  <Rooms />,
      },
    {
        path: "/wedding",
        element:<Wedding />,
      },
    {
        path: "/story",
        element:<Story />,
      },
    {
        path: "/explore",
        element:<ExploringWindsor />,
      },
    {
        path: "/contact",
        element:<Contact />,
      },
  ]);