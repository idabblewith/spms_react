import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Dash } from "./routes/Dash";
import { Users } from "./routes/Users";
import { BrowseProjects } from "./routes/BrowseProjects";
import { NotFound } from "./routes/NotFound";
import { Reports } from "./routes/Reports";
import { CurrentReport } from "./routes/CurrentReport";
import { NewProject } from "./routes/NewProject";
import { NewUser } from "./routes/NewUser";
import { API } from "./routes/API";
import { MyAccount } from "./routes/MyAccount";
import { ChangePassword } from "./routes/ChangePassword";
import { ProjectDetail } from "./routes/ProjectDetail";


export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path: "",
            element: <Dash />,
        },
        {
            path: "users",
            element: <Navigate to="/users/browse" replace />,
        },
        {
            path: "users/browse",
            element: <Users />,
        },
        {
            path: "users/new",
            element: <NewUser />,
        },
        {
            path: "users/me",
            element: <MyAccount />,
        },
        {
            path: "users/me/password",
            element: <ChangePassword />,
        },
        {
            path: "projects",
            element: <Navigate to="/projects/browse" replace />,
        },
        {
            path: "projects/browse",
            element: <BrowseProjects />,
        },
        {
            path: "projects/new",
            element: <NewProject />,
        },
        {
            path: "projects/:projectPk",
            element: <ProjectDetail />
        },
        {
            path: "reports",
            element: <Navigate to="/reports/dashboard" replace />,
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