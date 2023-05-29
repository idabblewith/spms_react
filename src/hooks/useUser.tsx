import { useQuery } from "@tanstack/react-query"
import { getMe } from "../api";

export const useUser = () => {
    const { isLoading, data, isError } = useQuery(["me"], getMe, {
        retry: false,
    });
    return {
        userLoading: isLoading,
        userData: data,
        isLoggedIn: !isError,
    }
}