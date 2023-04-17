import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";

interface ISimpleFilteredUsers {
    pk: number;
    username: string;
    email: string;
    fullName: string;
    program: string | null;
    workCenter: string | null;
    imageLink: string;
}