import { createRoot } from "react-dom/client";
import { Login } from "../layouts/login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Login/>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
   export const Routing = () =>{
    return(
        <RouterProvider router={router} />
    )
  }