import { createRoot } from "react-dom/client";
import { Login } from "../layouts/login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "../layouts/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Login/>
      ),
    },
    {
      path: "home",
      element:(<Home/>),
    },
  ]);
   export const Routing = () =>{
    return(
        <RouterProvider router={router} />
    )
  }