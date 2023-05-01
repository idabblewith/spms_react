import { NavigationBar } from "../components/Page/NavigationBar"
import { SearchAndFilterUserSection } from "../components/Page/SearchAndFilterUserSection";




export const Users = () => {

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