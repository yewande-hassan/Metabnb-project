import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App";
import Community from "./Components/Community/community";
import Nft from "./Components/Nft/nft";
import PlacetoStay from "./Components/PlacetoStay/PlacetoStay";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "place-to-stay",
    element: (
    <PlacetoStay/>
    ),
  },
  {
    path: "nft",
    element: (
    <Nft/>
    ),
  },
  {
    path: "community",
    element: (
    <Community/>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

