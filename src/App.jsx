import React from "react";
import "./App.css";
import Navigation from "./pages/Navigation";
import ErrorPage from "./error_page";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <div className="appWrapper">
      <Navigation />
      <Outlet />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
