import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./routes/Home";
import { Users } from "./routes/Users";
import { Projects } from "./routes/Projects";
import { NotFound } from "./routes/NotFound";


export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path: "",
            element: <Home />,
        },
        {
            path: "users",
            element: <Users />,
        },
        {
            path: "projects",
            element: <Projects />,
        },
    ]
}]);