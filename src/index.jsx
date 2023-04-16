import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./pages/login";
import "./index.css";
import App from "./App";
import ThemeProvider from "./contexts/theme-context";
import AuthProvider from "./contexts/auth-context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path : "/", element: <Home/>},
      {path : "/login", element: <Login/>},
      {path : "/detail/:matricula", element: <Detail/>},
      {path : "*", element: <NotFound/>}
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  // <React.StrictMode>
    <AuthProvider>
      <ThemeProvider >
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AuthProvider>
  // </React.StrictMode>
);
