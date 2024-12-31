import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import {Country} from "./pages/Country";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

import { AppLayout } from "./components/layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // AppLayout wraps shared components
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      // {
      //   path: "country/:id",
      //   element: <CountryDetails />,
      // },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
