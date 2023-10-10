import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));
const Catalogo = Loadable(lazy(() => import("../pages/Deudas/Deudas")));
const Productos = Loadable(lazy(() => import("../pages/Eventos/Eventos")));
const QuienesSomos = Loadable(lazy(() => import("../pages/Categorias/Categorias")));
const Recintos = Loadable(lazy(() => import("../pages/Recintos/Recintos")));
const Register = Loadable(lazy(() => import("../pages/Register/Register")));
const Login = Loadable(lazy(() => import("../pages/Login/Login")));

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "/Catalogo", exact: true, element: <Catalogo />},
      { path: "/Productos", exact: true, element: <Productos />},
      { path: "/Catalogo", exact: true, element: <QuienesSomos />},
      { path: "recintos", exact: true, element: <Recintos />},
      { path: "login", exact: true, element: <Login />},
      { path: "registro", exact: true, element: <Register />},
    ],
  },
];

export default Router;
