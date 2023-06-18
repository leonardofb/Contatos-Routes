import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/index";
import ErrorPage from "./error-page";
import Contact, {loader as contactLoader,action as contactAction,} from "./routes/contact";
import Root, {loader as rootLoader,action as rootAction,} from "./routes/root";
import EditContact, {action as editAction,} from "./routes/edit";


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { action as destroyAction } from "./routes/destroy";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction, ///la estrela de favorito
      }, 
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! Tenemos un Error.</div>,
      },
    ],
  },
]);
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

