import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Guns from "../pages/Home/Guns";
import Maps from "../pages/Maps/Maps";
import Agents from "../pages/Home/Agents";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:"guns",
        element:<Guns/>
      },
      {
        path:"maps",
        element:<Maps/>
      },{
        path:"agents",
        element:<Agents/>
      },
    ]
  },
  
]);

export default router;
