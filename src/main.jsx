import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import Router from "./Router.jsx";
import GlobalStyle from "./styles/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
