import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Dashboard, MyTask } from "./elements";


export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard />},
        // { path: "/", element: <Home /> },
        // { path: "about", element: <About /> },
        // { path: "dashboard", element: <Dashboard /> },
        { path: "my_task", element: <MyTask /> },
        // { path: "404", element: <NotFound /> },
        // { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

}
