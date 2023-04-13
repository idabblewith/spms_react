import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./routes/Home";
import { Users } from "./routes/Users";
import { Projects } from "./routes/Projects";
import { NotFound } from "./routes/NotFound";
import { Reports } from "./routes/Reports";
import { CurrentReport } from "./routes/CurrentReport";
import { NewProject } from "./routes/NewProject";
import { NewUser } from "./routes/NewUser";
import { API } from "./routes/API";
import { MyAccount } from "./routes/MyAccount";


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
            path: "users/add",
            element: <NewUser />,
        },
        {
            path: "users/me",
            element: <MyAccount />,
        },
        {
            path: "projects",
            element: <Projects />,
        },
        {
            path: "projects/new",
            element: <NewProject />,
        },
        {
            // Arar progress
            path: "reports/dashboard",
            element: <Reports />,
        },
        {
            path: "reports/current",
            element: <CurrentReport />,
        },
        {
            path: "api",
            element: <API />,
        },

    ]
}]);