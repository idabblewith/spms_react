import { NavigationBar } from "../components/Page/All/NavigationBar"
import { SearchAndFilterUserSection } from "../components/Page/Users/SearchAndFilterUserSection";




export const BrowseUsers = () => {

    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Manage Users",
                    link: "/users"
                }}
            />

            <SearchAndFilterUserSection />
        </>
    )
}