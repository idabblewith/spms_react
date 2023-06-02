import { NavigationBar } from "../components/Page/All/NavigationBar";
import { SearchAndFilterProjectSection } from "../components/Page/Projects/SearchAndFilterProjectSection";

export const BrowseProjects = () => (
    <>
        <NavigationBar
            subDirOne={{
                title: "Projects",
                link: "/projects"
            }}
            subDirTwo={{
                title: "Browse",
                link: "/projects/browse"
            }}
        />
        <SearchAndFilterProjectSection />
    </>
);
