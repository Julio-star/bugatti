import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {GlobalStyle} from './globalStyles';
//Views
import Login from './views/login/login';
import Presentation from './views/presentation';
import Home from './views/home';
import Components from './views/carcomponents';
import History from './views/history';
import Records from './views/records';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/presentation",
    element: <Presentation />,
  },
  {
    path: "/carcomponents",
    element: <Components />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/records",
    element: <Records />,
  },
]);

const App = () => {
  return <><GlobalStyle></GlobalStyle> <RouterProvider router={router} /> </>;
};
export default App;
