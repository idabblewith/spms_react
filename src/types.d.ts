import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";


interface IBusinessArea {
    pk: number;
    name: string;
    slug: string;
    leader_id: number; //program_leader_id
    focus: string;
    introduction: string;
    image: string;


    effective_from: Date;
    effective_to: Date;   // always null, delete ?

    creator_id: number; // necessary?
    modifier_id: number; // necessary?

    date_created: Date;     // Converter needed?
    last_modified: Date;
}

interface IProjectData {
    pk: number;
    type: string;
    title: string;
    tagline: string;
    image: string;
    keywords: string[];

    active: boolean;
    // CONVERT DATA FROM UNKNOWN TO FALSE?? OR CHANGE FROM BOOLEAN TO STRING (BAD PRACTICE)
    status: string;

    start_date: Date;
    end_date: Date;
    effective_from: Date;
    effective_to: Date;   // always null, delete ?

    date_created: Date;     // Converter needed?
    last_modified: Date;

    creator_id: number;
    modifier_id: number;
    business_area_id: number;

    // number: number;     // WHat is this?
    // position: number;   // What is this?

    // Secondary
    // =============
    // comments             // what, why, who, CUSTOM EDIT FIELD
    // research_function_id
    // output_program_id
    // project_owner_id
    // data_custodian_id
    // site_custodian_id
    // team_list_plain
    // area_list_dpaw_region
    // area_list_dpaw_district
    // area_list_ibra_imcra_region
    // area_list_nrm_region
    // supervising_scientist_list_plain
    // polymorphic_ctype_id
}

interface IResearchFunction {
    active: boolean; // Whether Research Function is still active
    association: string; // What program this research funciton belongs to


}




interface IUserData {
    pk: number;
    username: string;
    email: string;
    firstName: string;
    fullName: string;
    program: string | null;
    workCenter: string | null;
    imageLink: string | undefined;

    checkBoxState?: boolean;
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
