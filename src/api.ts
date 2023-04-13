import axios from "axios";
import Cookie from 'js-cookie';
import { QueryFunctionContext } from "@tanstack/react-query";

// If using JWTs for login (unlikely as using Microsoft Authentication to login to gov)
// const backendRequiresAuth = (doesIt: boolean) => {
//     if (localStorage.getItem('JWT') === null || localStorage.getItem('JWT') === undefined || localStorage.getItem('JWT') === "") {
//         return null
//     }
//     if (doesIt) {
//         return {
//             Authorization: `Bearer ${localStorage.getItem('JWT')}`,
//             // ["Access-Control-Allow-Origin"]: "https://idabblewith.xyz",
//         };
//     }
//     else {
//         return {};
//     }
// }

let instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ?
        "https://127.0.0.1:8000/api/v1/" :
        "PRODUCTION URL GOES HERE",
    withCredentials: true,
})

interface ISearchTerm {
    searchTerm: string;
}

export const getProjects = async ({ searchTerm }: ISearchTerm) => {
    // const headers = backendRequiresAuth(true);

    return instance.post(
        "projects/", {
        searchTerm: searchTerm,
    },
        {
            headers: {
                // ...headers,
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then(res => {
        console.log(res.data);
    })
}