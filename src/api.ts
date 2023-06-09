import axios from "axios";
import Cookie from 'js-cookie';
import { QueryFunctionContext } from "@tanstack/react-query";
import { ISearchTerm } from "./types";
import SpiderWeb from "./assets/spiderweb.jpeg"
import Kokerbin from "./assets/kokerbin.jpeg"
import Biogeography from "./assets/biogeography.jpg"
import BioGeo1 from "./assets/bioegeo1.jpg"
import BioGeo2 from "./assets/biogeo2.jpg"
import { MdScience } from "react-icons/md"
import { GiMaterialsScience } from 'react-icons/gi'
import { RiBook3Fill } from 'react-icons/ri'
import { FaUserFriends } from 'react-icons/fa'
import Charmander from "./assets/charmander.png"
import Squirtle from "./assets/squirtle.png"
import Bulbasaur from "./assets/bulbasaur.png"
import Eevee from "./assets/eevee.png"


const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ?
        "http://127.0.0.1:8000/api/v1/" :
        "PRODUCTION URL GOES HERE",
    withCredentials: true,
})

const backendRequiresAuthorization = (doesIt: boolean) => {
    // if (localStorage.getItem('JWT') === null || localStorage.getItem('JWT') === undefined || localStorage.getItem('JWT') === "") {
    //     return null
    // }
    if (doesIt) {
        return {
            // Authorization: `Bearer ${localStorage.getItem('JWT')}`,
            ["Access-Control-Allow-Origin"]: "http://127.0.0.1:3000",
            ["Access-Control-Allow-Methods"]: "POST",
            ["Access-Control-Allow-Headers"]: "Authorization",

        };
    }
    else {
        return {};
    }
}


export interface IUsernameLoginVariables {
    username: string;
    password: string;
}

export interface IUsernameLoginSuccess {
    ok: string;
}

export interface IUsernameLoginError {
    error: string;
}

export const usernameLogin = ({
    username,
    password,
}: IUsernameLoginVariables) =>
    instance.post(
        `users/log-in`,
        { username, password },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    );


export const getMe = () =>
    instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
    instance
        .post(`users/log-out`, null, {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        })
        .then((response) => response.data);

export interface IUserAuthCheckVariables {
    userID: number;
}

export interface IUsernameLoginSuccess {
    ok: string;
}

export interface IUsernameLoginError {
    error: string;
}

export const downloadProjectsCSV = () => {
    console.log("Starting download...")
    return instance.get(
        `projects/download`,
        {
            responseType: 'blob',
        }
    ).then((res) => {
        console.log(res);
        const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'projects.csv');
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
    })
    // COMMENTED OUT TO PREVENT SUCCESSFUL MUTATION ON ERROR
    // .catch((error) => {
    //     console.error('Error downloading CSV file:', error);
    // });
}


export const downloadReportPDF = ({
    userID
}: IUserAuthCheckVariables) => {
    return instance.post(
        `reports/download`,
        { userID },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then((res) => {
        console.log(res.data);
        return res.data
    })
    // COMMENTED OUT TO PREVENT SUCCESSFUL MUTATION ON ERROR
    // .catch((error) => {
    //     console.error('Error downloading PDF file:', error);
    // });
}


export const testBusinessAreaData = [
    {
        businessArea: "Biodiversity Information Office",
        businessAreaImage: Kokerbin,
        businessAreaLeader: "Helen Ensikat",
        lastUpdateUserName: "Bryton McShane",
        lastUpdateDate: new Date("2023-04-02T04:16:15.192Z"),
        tags: [
            "Biodiversity data", "data sharing", "data discovery", "cross-sector collaboration",
            "evidence-based decision-making",
        ],
        description: "The Biodiversity Information Office (BIO) has been established as custodian and manager of the Biodiversity Data Repository for the biodiversity data collected and used by the Western Australian community. BIO will mobilise biodiversity data from all environment-related sectors, including government, industry, and community organisations, promoting a culture of collaboration and seamless data sharing across government, industry, research and the community. Greater access to biodiversity data will increase knowledge of our biodiversity and support informed decision making. BIO enhances the capability of the WA public sector to deliver services to a diverse range of stakeholders, leading to the delivery of sound policy outcomes and evidence-based decision-making. BIO is a core component of the WA digital transformation initiative, delivering data services for digital transformation of environmental assessment and approvals system (Environment Online) that is led by the Department of Water and Environmental Regulation (DWER). BIO will provide seamless integration with Environment Online to ensure access to the best available information to inform decision making. BIO is part of the partnership between WA and the Commonwealth Department of Agriculture, Water and the Environment (DAWE) to deliver the Digital Environmental Assessment Program as an integrated digital environmental assessment system and biodiversity data repository.",
        projects: [
            {
                pk: 1,
                projectTitle: "BIO data collation program",
                authors: [
                    "A Barker", "H Ensikat", "K Grogan", "Z Huq", "D Murphy", "C Piper", "C Uehr", "N Panine", "R Cechner",
                ],
                years: "2020-2024",
                tags: [
                    "Biodiversity Data", "Data Sharing", "Cross-Sector Collaboration",
                ],
                projectTypeTag: "Core Function",
                statusTag: "Update Requested",
                imageUrl: SpiderWeb,
            },
            {
                pk: 2,
                projectTitle: "BIO biodiversity data platform",
                authors: [
                    "A Barker", "H Ensikat", "K Grogan", "Z Huq", "D Murphy", "C Piper", "C Uehr", "N Panine", "R Cechner",
                ],
                years: "2020-2023",
                tags: [
                    "Data Sharing", "Digital Infrastructure", "Cross-Sector Collaboration", "Data Discoverability", "Regulatory Reform", "Evidence-Based Decision-Making",
                ],
                projectTypeTag: "Core Function",
                statusTag: "Update Requested",
                imageUrl: Kokerbin,
            },
        ]
    },
    {
        businessArea: "Biogeography",
        businessAreaImage: Biogeography,
        businessAreaLeader: "Neil Gibson",
        lastUpdateUserName: "Florian Mayer",
        lastUpdateDate: new Date("2022-06-18T04:16:15.192Z"),
        tags: [
            "Patterning and inventory of biodiversity", "CAR reserve system", "biological surveys, surveillance monitoring",
        ],
        description: "The Biogeography Program undertakes biological surveys to provide information on the biodiversity and nature conservation priorities within Western Australia. Surveys provide data on the distribution of plants and animals, and enable an understanding of regional patterns in their composition and distribution. Targeted surveys of specific regions, broad habitat types or selected plant and animal groups are also undertaken. Knowledge obtained from surveys complements the site-specific studies commissioned by other land managers, such as resource companies, and is used to provide the foundation for biodiversity planning and natural resource management across Western Australia. Collaborative associations are strong with the Western Australian Museum, Australian Museum, and other herbaria and museums throughout Australia, and with universities, cooperative research centres, CSIRO and other research institutions. Partnerships also exist with traditional owners, resource companies and the environmental consulting industry.",
        projects: [
            {
                pk: 3,
                projectTitle: "Plant species richness and endemism within the south-western Australian Floristic Region",
                authors: [
                    "P Gioia",
                ],
                years: "2020-2024",
                tags: [
                    "Biodiversity Data", "Data Sharing", "Cross-Sector Collaboration",
                ],
                projectTypeTag: "Science",
                statusTag: "Completed",
                imageUrl: BioGeo1,
            },
            {
                pk: 4,
                projectTitle: "Susceptibility of frogs to declining rainfall in a biodiversity hotspot",
                authors: [
                    "M Cowan",
                ],
                years: "",
                tags: [],
                projectTypeTag: "External",
                statusTag: "Active",
                imageUrl: BioGeo2,
            },
            {
                pk: 5,
                projectTitle: "Breeding systems and phylogeography of selected saline lake invertebrates",
                authors: [
                    "A Pinder",
                ],
                years: "2013",
                tags: [],
                projectTypeTag: "Student",
                statusTag: "Completed",
                imageUrl: "",
            },
        ]
    },
    // {
    //     businessArea: "Biogeography",
    //     businessAreaImage: Biogeography,
    //     lastUpdateDate: new Date("2023-02-18T04:16:15.192Z"),
    //     lastUpdateUserName: "Neil Gibson",
    // },
]

export const testProjectCardData = [
    {
        pk: 1,
        projectTitle: "BIO data collation program",
        authors: [
            "A Barker", "H Ensikat", "K Grogan", "Z Huq", "D Murphy", "C Piper", "C Uehr", "N Panine", "R Cechner",
        ],
        years: "2020-2024",
        tags: [
            "Biodiversity Data", "Data Sharing", "Cross-Sector Collaboration",
        ],
        systemTags: [
            "Core Function", "Update Requested",
        ],
        imageUrl: SpiderWeb,
    },
    {
        pk: 2,
        projectTitle: "BIO biodiversity data platform",
        authors: [
            "A Barker", "H Ensikat", "K Grogan", "Z Huq", "D Murphy", "C Piper", "C Uehr", "N Panine", "R Cechner",
        ],
        years: "2020-2023",
        tags: [
            "Data Sharing", "Digital Infrastructure", "Cross-Sector Collaboration", "Data Discoverability", "Regulatory Reform", "Evidence-Based Decision-Making",
        ],
        systemTags: [
            "Core Function", "Update Requested",
        ],
        imageUrl: Kokerbin,
    },
]




export const testProjectCreationData = [
    {
        title: "Core Function",
        description: "An ongoing science function with an indefinite period of activity.",
        bulletPoints: [
            "No approval process",
            "Immediate closure process",
            "Requires Annual Reporting"
        ],
        colorScheme: "red",
        buttonIcon: GiMaterialsScience,
        cardImage: Charmander,
    },

    {
        title: "Science Project",
        description: "A project with a defined period of scientific activities.",
        bulletPoints: [
            "Approval process to determine how it fits within Departmental stragegy and priorities.",
            "Formal Closure Process",
            "Requires Annual Reporting"
        ],
        colorScheme: "green",
        buttonIcon: MdScience,
        cardImage: Bulbasaur,
    },
    {
        title: "External Partnership",
        description: "Participation in an externally managed project.",
        bulletPoints: [
            "No formal approval process",
            "Immediate closure without formal process",
            "Project details automatically included in annual reporting"
        ],
        colorScheme: "gray",
        buttonIcon: FaUserFriends,
        cardImage: Eevee,
    },
    {
        title: "Student Project",
        description: "Supervision of a tertiary student.",
        bulletPoints: [
            "No formal approval process",
            "Immediate closure without formal process",
            "Requires Annual Reporting"
        ],
        colorScheme: "blue",
        buttonIcon: RiBook3Fill,
        cardImage: Squirtle,
    },
]
export const testMyTaskData =
    [
        { name: "todo1" },
        { name: "todo2" },
    ]

export const testMyProjectData =
    [
        { name: "proj1" },
        { name: "proj2" },
        { name: "proj3" },
        { name: "proj4" },
        { name: "proj5" },
        { name: "proj6" },
    ]

export const testMyPartnershipsData =
    [
        { name: "partnership1" },
        { name: "parnership2" },
    ]


export const testProjectData = [
    {
        pk: 1,
        type: "External Project",
        title: "Taxonomic review and floristic studies of the benthic marine algae of north-western Australian and floristic surveys of Western Australian marine benthic algae",
        tagline: "Uncovering the hidden flora of the undersea world.",
        image: "https://scienceprojects.dbca.wa.gov.au/media/projects/2009-9/Ulva_stenophylloides_sdis_1.jpg",
        keywords: ["Turtle", "3D model", "education", "communication", "flatbacks education"],
        status: "updating",
        active: true,
        start_date: null,
        end_date: null,
        effective_from: new Date("2014-06-05"),
        effective_to: null,
        date_created: new Date("2014-06-05T10:28:55.348Z"),
        last_modified: new Date("2021-06-18T04:16:15.192Z"),
        creator_id: 5,
        modifier_id: 5,
        business_area_id: 2,
    },
    {
        pk: 2,
        type: "External Project",
        title: "Exploring the benefits of state-of-the-art 3D imaging techniques to create 3D digital and physical specimens of live flatback turtles for science, conservation and education.",
        tagline: "Creating 3D digital and physical specimens of live flatback turtles for science, conservation and education.",
        image: "https://scienceprojects.dbca.wa.gov.au/media/projects/2017-37/P1000797_crop.jpg",
        keywords: ["Turtle", "3D model", "education", "communication", "flatbacks education"],
        status: "completed",
        active: false,
        start_date: 2017 - 11 - 17,
        end_date: 2017 - 11 - 25,
        effective_from: new Date("2017-08-01"),
        effective_to: null,
        date_created: new Date("2017-08-01T05:22:48.932Z"),
        last_modified: new Date("2021-06-15T03:06:39.640Z"),
        creator_id: 5,
        modifier_id: 5,
        business_area_id: 2,
    },

]


// id, effective_from, effective_to, creator_id, modifier_id, created, modified, polymorphic_ctype_id, name, description, leader_id, association, active


export const testUserData = [
    {
        pk: 1,
        username: "Pikapi",
        email: "pika.pi@dbca.wa.gov.au",
        firstName: "Pikachu",
        fullName: "Pika Pi",
        program: "Marine Science",
        workCenter: "Kensington",
        imageLink: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg",
    },
    {
        pk: 2,
        username: "Jimmy",
        email: "jimmy.neutron@dbca.wa.gov.au",
        firstName: "Jimmy",
        fullName: "Jimmy Neutron",
        program: "BCS Ecosystem Science",
        workCenter: "Kensington",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjA14FAMZB104UOhUSV0SyOf-_NA8DKRszw&usqp=CAU",
    },
    {
        pk: 3,
        username: "Bob",
        email: "sponge.bob@dbca.wa.gov.au",
        firstName: "Sponge",
        fullName: "Spongebob Squarepants",
        program: "BCS Ecosystem Science",
        workCenter: "Kensington",
        imageLink: "data:image/jpeg;base64,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",
    },
    {
        pk: 4,
        username: "Ben10",
        email: "ben.ten@dbca.wa.gov.au",
        firstName: "Benjamin",
        fullName: "Ben Ten",
        program: "BCS Ecosystem Science",
        workCenter: null,
        imageLink: "https://yt3.googleusercontent.com/ytc/AGIKgqN59kfPtTbM2-qWIl3edomx5jvN5ziQwaBLlEJQ0Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        pk: 5,
        username: "Patrick",
        email: "patrick.star@murdoch.edu.au",
        firstName: "Patrick",
        fullName: "Patrick Star",
        program: null,
        workCenter: null,
        imageLink: "data:image/png;base64,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",
    },
    {
        pk: 6,
        username: "JPDBCA",
        email: "jarid.prince@dbca.wa.gov.au",
        firstName: "Jarid",
        fullName: "Jarid Prince",
        program: null,
        workCenter: null,
        imageLink: undefined,
    },
    {
        pk: 7,
        username: "JB",
        email: "james.bond@dbca.wa.gov.au",
        firstName: "James",
        fullName: "James Bond",
        program: null,
        workCenter: null,
        imageLink: "https://cdn.vox-cdn.com/thumbor/r3w5SOy0DHBtIrmol30b6grU7tQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22910713/bond_25_B25_37397_RC2_rgb.jpg",
    },
    {
        pk: 8,
        username: "Tomdatank",
        email: "james.bond@dbca.wa.gov.au",
        firstName: "Thomas",
        fullName: "Thomas the Tank Engine",
        program: null,
        workCenter: null,
        imageLink: "https://images.theconversation.com/files/488090/original/file-20221004-21-t9r775.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    },
    {
        pk: 9,
        username: "BobdaBuilder",
        email: "bob.builder@dbca.wa.gov.au",
        firstName: "Bob",
        fullName: "Bob the Builder",
        program: null,
        workCenter: null,
        imageLink: "https://m.media-amazon.com/images/M/MV5BY2U1OTc1MGUtNDIwNi00MGJiLThmZTEtZWRmNWY0YTJmNjZjXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",
    },
    {
        pk: 10,
        username: "Barney",
        email: "barney@dbca.wa.gov.au",
        firstName: "Barney",
        fullName: "Barney",
        program: null,
        workCenter: null,
        imageLink: "https://images.7news.com.au/publication/C-9785592/9abe23bd9aef9d79fc944247086cfc91d8ec7fe4.jpg",
    },
    {
        pk: 11,
        username: "tinkle",
        email: "tinky.winky@dbca.wa.gov.au",
        firstName: "Tinky",
        fullName: "Tinky Winky",
        program: null,
        workCenter: null,
        imageLink: "https://content-us.teletubbies.com/uploads/2016/03/tinky-winky.png",
    },

    {
        pk: 12,
        username: "dipsy",
        email: "dip.sy@dbca.wa.gov.au",
        firstName: "Dipsy",
        fullName: "Dipsy",
        program: null,
        workCenter: null,
        imageLink: "https://content-us.teletubbies.com/uploads/2016/03/dipsy.png",
    },
    {
        pk: 13,
        username: "lalala",
        email: "laa.laa@dbca.wa.gov.au",
        firstName: "Laa-Laa",
        fullName: "Laa-Laa",
        program: null,
        workCenter: null,
        imageLink: "https://content-us.teletubbies.com/uploads/2016/03/laa-laa.png",
    },
    {
        pk: 14,
        username: "popo",
        email: "p.o@dbca.wa.gov.au",
        firstName: "Po",
        fullName: "Po",
        program: null,
        workCenter: null,
        imageLink: "https://content-us.teletubbies.com/uploads/2016/03/po.png",
    },
    {
        pk: 15,
        username: "bananaz",
        email: "bananas.inpajamas@dbca.wa.gov.au",
        firstName: "Bananas",
        fullName: "Bananas in Pajamas",
        program: null,
        workCenter: null,
        imageLink: "https://static.tvtropes.org/pmwiki/pub/images/banana_narrowweb__300x4070_5547.jpg",
    },
    {
        pk: 16,
        username: "elmo",
        email: "elmo@dbca.wa.gov.au",
        firstName: "Elmo",
        fullName: "Elmo",
        program: null,
        workCenter: null,
        imageLink: "https://media.npr.org/assets/img/2022/01/04/ap_862432864149-4d5ff9168210d99b12e590df1e831eafe0ab626f-s1100-c50.jpg",
    },
    {
        pk: 17,
        username: "pingu",
        email: "meep.meep@dbca.wa.gov.au",
        firstName: "Pingu",
        fullName: "Pingu",
        program: null,
        workCenter: null,
        imageLink: "https://cdn.iview.abc.net.au/thumbs/1200/zy/publicity_ZY4214A.jpg",
    },
    {
        pk: 18,
        username: "blossom",
        email: "blossom@dbca.wa.gov.au",
        firstName: "Blossom",
        fullName: "Blossom",
        program: null,
        workCenter: null,
        imageLink: "https://static.wikia.nocookie.net/ppg-the-powerpuff-girls-fanon/images/9/97/Blossom_PPG_%281%29.png",
    }, {
        pk: 19,
        username: "bubbles",
        email: "bubbles@dbca.wa.gov.au",
        firstName: "Bubbles",
        fullName: "Bubbles",
        program: null,
        workCenter: null,
        imageLink: "https://static.wikia.nocookie.net/ppg-the-powerpuff-girls-fanon/images/a/ab/Bubbles_PPG_%281%29.png",
    }, {
        pk: 20,
        username: "butta",
        email: "butter.cup@dbca.wa.gov.au",
        firstName: "Buttercup",
        fullName: "Buttercup",
        program: null,
        workCenter: null,
        imageLink: "https://static.wikia.nocookie.net/ppg-the-powerpuff-girls-fanon/images/2/2b/Buttercup_PPG_%281%29.png",
    }, {
        pk: 21,
        username: "Dexter",
        email: "dexters.laboratory@dbca.wa.gov.au",
        firstName: "Dexter",
        fullName: "Dexter",
        program: null,
        workCenter: null,
        imageLink: "https://e7.pngegg.com/pngimages/572/407/png-clipart-cartoon-network-mandark-television-show-character-dexters-laboratory-purple-television.png",
    },

]


// Fetching User Information

export const getSingleUser = async ({ queryKey }: QueryFunctionContext) => {
    const [_, userPk] = queryKey;
    return instance.get(
        `users/${userPk}`,
        {
            headers: {
                // ...headers,
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    ).then(res => {
        console.log(res.data);
        return res.data;
    })
}

export const getUsers = async ({ searchTerm }: ISearchTerm) => {
    // const headers = backendRequiresAuth(true);

    return instance.post(
        "users/", {
        searchTerm: searchTerm
    },
        {
            headers: {
                // ...headers,
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        },
    ).then(res => {
        console.log(res.data);
        return res.data;
    })
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
        return res.data;
    })
}