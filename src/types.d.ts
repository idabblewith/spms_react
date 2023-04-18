import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";



interface IUserData {
    pk: number;
    username: string;
    email: string;
    firstName: string;
    fullName: string;
    program: string | null;
    workCenter: string | null;
    imageLink: string;
}


interface INavitar {
    shouldShowName?: boolean;
    userData: IUserData;
    windowSize: number;
}

interface ISearchTerm {
    searchTerm: string;
}

interface IUser {

}
