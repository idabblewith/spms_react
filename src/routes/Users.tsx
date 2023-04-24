import { NavigationBar } from "../components/subcomponents/NavigationBar"
import { SearchAndFilterUserSection } from "../components/subcomponents/SearchAndFilterUserSection";




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