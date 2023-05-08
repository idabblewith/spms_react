import { Box, Text } from "@chakra-ui/react"
import { DocumentActions } from "./DocumentActions"

export const ConceptPlanContents = () => {
    return (
        <>

            <DocumentActions
            // type={} data={}
            />

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Background
                </Text>
                <Text
                    mt={4}
                >
                    <p>
                        BIO&rsquo;s biodiversity data platform will bring together data from a range of data sources and providers, across industry, the public and research sectors, and community organisations.&nbsp; BIO will initially focus on high volume, high quality datasets &ndash; particularly those that are not easily accessible at present, driving a step-change in the availability of biodiversity data in Western Australia.&nbsp; The data will be ingested into the platform after passing automated quality assurance checks, where it will be mapped to a range of common data standards and undergo a human‑mediated quality control process before being released to users.&nbsp;</p> <p>The initial seed data for launch of the BIO platform will be sourced directly from industry, from DBCA repositories, and from regulators such as the Department of Water and the Environment.&nbsp; However, new data will continually be ingested, both through automated delivery from regulators, and through a rolling program to identify and source other valuable datasets.&nbsp; This data collation program will involve outreach to data custodians across all sectors, exploration of technologies to unlock data in pre‑digital documents, and ongoing monitoring of existing data to identify temporal and spatial gaps.
                    </p>
                </Text>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Aims
                </Text>
                <Box
                    ml={8}
                    mt={4}
                >
                    <Text>
                        <ul>
                            <li>Provide users with access to a rich collection of high‑quality datasets.</li>
                            <li>Ingest new and up‑to‑date data over time.</li>
                            <li>Enable access to previously undiscoverable and inaccessible datasets held by both government and by other sectors.</li>
                        </ul>
                    </Text>
                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Expected Outcome
                </Text>
                <Box
                    ml={8}
                    mt={4}
                >
                    <Text>
                        <ul>
                            <li>Access to a greater range of high-quality biodiversity data, including datasets that have not been available in the past, will support better‑informed research and decision‑making.</li>
                            <li>Availability of up-to-date environmental assessment data, mapped to common standards and validated via the curation process, will ensure that environmental decisions are based on current and accurate information.</li>
                        </ul>
                    </Text>
                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Expected Collaborations
                </Text>
                <Box
                    ml={8}
                    mt={4}
                >
                    <Text>
                        <ul>
                            <li>Industry proponents and peak bodies</li>
                            <li>State Government agencies, with DWER being a key partner</li>
                            <li>Representatives from the research, local government, and community sectors</li>
                            <li>Relevant business units within DBCA</li>
                        </ul>
                    </Text>
                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Strategic Context
                </Text>
                <Text
                    mt={4}
                >
                    <p>This project relates to a number of the strategic goals detailed in DBCA&rsquo;s Science Strategic Plan 2018-21 &ndash; most directly, that data is to be effectively captured, curated and made accessible to support conservation, management and decision-making.&nbsp; Enhanced capture, curation, and accessibility of biodiversity data will support the effective acquisition of and sharing of biodiversity knowledge, and establishment of evidence‑based management practices referred to elsewhere in the plan.</p>
                </Text>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Staff Time Allocation
                </Text>
                <Text
                    mt={4}

                >
                    [["Role", "Year 1", "Year 2", "Year 3"], ["Scientist", "", "", ""], ["Technical", "", "", ""], ["Volunteer", "", "", ""], ["Collaborator", "", "", ""]]
                </Text>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Indicative Operating Budget
                </Text>
                <Text
                    mt={4}
                >
                    [["Source", "Year 1", "Year 2", "Year 3"], ["Consolidated Funds (DBCA)", "", "", ""], ["External Funding", "", "", ""]]
                </Text>
            </Box>
        </>

    )
}