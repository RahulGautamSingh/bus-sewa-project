import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./routes/Homepage.jsx";
import ErrorPage from "./error-page.jsx";
import BusList from "./routes/BusList.jsx";
import TicketDetails from "./routes/ticketDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  // protect this router such that it can only be reached from the homepage
  {
    path: "/buslist",
    element: <BusList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ticket-details",
    element: <TicketDetails />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
