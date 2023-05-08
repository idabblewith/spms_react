import { useParams } from "react-router-dom"
import { NavigationBar } from "../components/Page/All/NavigationBar"
import { Box, Text, Button, Center, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, Grid } from "@chakra-ui/react";
import { ProjectOverviewCard } from "../components/Page/ProjectDetail/ProjectOverviewCard";
import SpiderWeb from "../assets/spiderweb.jpeg"


import { AiOutlineMail, AiFillEdit } from 'react-icons/ai';
import { ManageTeam } from "../components/Page/ProjectDetail/ManageTeam";
import { ProjectDetailEditModal } from "../components/Modals/ProjectDetailEditModal";
import { ConceptPlanContents } from "../components/Page/ProjectDetail/ConceptPlanContents";
import { ProjectPlanContents } from "../components/Page/ProjectDetail/ProjectPlanContents";
import { ProgressReportContents } from "../components/Page/ProjectDetail/ProgressReportContents";

export const ProjectDetail = () => {

    const { projectPk } = useParams();
    console.log(projectPk);



    const testProjectDetailData = {
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
    }

    return (
        <>
            <NavigationBar
                subDirOne={{
                    title: "Projects",
                    link: "/projects"
                }}
                subDirTwo={{
                    title: `Project #${projectPk}`,
                    link: `/projects/${projectPk}`
                }}
                rightSideElement={
                    <Center>
                        <Button
                            size={"sm"}
                            fontSize={"sm"}
                            // p={0} m={0}
                            leftIcon={<AiOutlineMail size="12px" />}
                            variant={"link"}
                            colorScheme="blue"
                        >
                            Share
                        </Button>
                        &nbsp;/&nbsp;
                        <Button
                            size={"sm"}
                            fontSize={"sm"}

                            variant={"link"}
                            colorScheme="blue"
                        >
                            History
                        </Button>
                    </Center>
                }
            />


            <Tabs isFitted variant={'enclosed'}
                mt={6}
            >
                <TabList mb='1em'>
                    <Tab fontSize="sm">Overview</Tab>
                    <Tab fontSize="sm">Concept Plan</Tab>
                    <Tab fontSize="sm">Project Plan</Tab>
                    <Tab fontSize="sm">Progress Report</Tab>
                </TabList>
                <TabPanels>

                    {/* OVERVIEW */}
                    <TabPanel>
                        <ProjectOverviewCard
                            pk={Number(projectPk)}
                            projectTitle={"BIO data collation program"}
                            authors={[
                                "A Barker", "H Ensikat", "K Grogan", "Z Huq", "D Murphy", "C Piper", "C Uehr", "N Panine", "R Cechner",
                            ]}
                            years={"2020-2024"}
                            tags={[
                                "Biodiversity Data", "Data Sharing", "Cross-Sector Collaboration",
                            ]}
                            systemTags={[
                                "Core Function", "Update Requested",
                            ]}
                            imageUrl={SpiderWeb}
                            division="BCS Biodiversity and Climate Change Unit [inactive]"
                            projectLabel="SP-2012-011"
                        />

                        <ManageTeam />
                    </TabPanel>

                    {/* CONCEPT PLAN */}
                    <TabPanel>
                        <ConceptPlanContents />
                    </TabPanel>

                    {/* PROJECT PLAN */}
                    <TabPanel>
                        <ProjectPlanContents />
                    </TabPanel>

                    {/* PROGRESS REPORT */}
                    <TabPanel>
                        <ProgressReportContents />
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </>
    )
}