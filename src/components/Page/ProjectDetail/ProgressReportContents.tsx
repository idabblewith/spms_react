import { Box, Text } from "@chakra-ui/react"
import { DocumentActions } from "./DocumentActions"

export const ProgressReportContents = () => {
    return (
        <>
            <DocumentActions />
            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Context
                </Text>

                {/* TODO MAP CONTENTS PARAGRAPH */}
                <Text
                    mt={4}
                >
                    The data collation program of the Biodiversity Information Office (BIO) will bring together data from a range of data sources and providers across industry, government, the public, research sectors and community organisations.&nbsp; BIO is initially focusing on high volume, high quality datasets, particularly those that are not easily accessible at present, driving a step-change in the availability of biodiversity data in Western Australia.&nbsp; The data is ingested into the platform after passing automated quality assurance checks, where it is mapped to the Darwin Core biodiversity data standard and undergoes a human‑mediated quality control process before being released to users.&nbsp;
                    The initial datasets ingested into BIO's Dandjoo biodiversity data sharing platform have been sourced directly from industry, DBCA repositories, the Western Australian Museum, and regulators such as the Department of Water and the Environment (DWER). New data will continually be ingested, through future automated delivery from regulators and BIO's rolling program to identify and source other valuable datasets.&nbsp; This data collation program will involve outreach to data custodians across all sectors, exploration of technologies to unlock data in pre‑digital documents and ongoing monitoring of existing data to identify temporal and spatial gaps.
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
                    my={4}
                >
                    <ul>
                        <li><Text>Provide users with access to a rich collection of high‑quality datasets.</Text></li>
                        <li><Text>Ingest new and up‑to‑date data over time.</Text></li>
                        <li><Text>Enable access to previously undiscoverable and inaccessible datasets held by government and other sectors.</Text></li>
                    </ul>
                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Progress
                </Text>
                <Box
                    ml={8}
                    my={4}
                >
                    <ul>
                        <li><Text>Data sharing agreements have been negotiated with BHP, Rio Tinto, and Fortescue Metals to allow data provided by these companies to be hosted on Dandjoo.</Text></li>
                        <li><Text>A range of high-priority DBCA-managed biodiversity data sets have been loaded into Dandjoo, with new data being added continually.</Text></li>
                        <li><Text>Work is underway with peak industry bodies to promote opportunities for data sharing more broadly across member organisations.</Text></li>
                        <li><Text>Continuing collaboration with DWER on the one‑off ingestion of historical environmental assessment data and re‑engineering regulatory processes to allow for the automated ingestion of new data into the BIO platform.</Text></li>
                    </ul>

                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Management Implications
                </Text>
                <Box
                    ml={8}
                    my={4}
                >
                    <ul>
                        <li><Text>Access to a greater range of high-quality biodiversity data, including datasets that have not been available in the past, will support better‑informed research and decision‑making.</Text></li>
                        <li><Text>Availability of up-to-date environmental assessment data, mapped to common standards and validated via the curation process, will ensure that environmental decisions are based on current and accurate information.</Text></li>
                    </ul>
                </Box>
            </Box>

            <Box
                pb={6}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    Future Directions
                </Text>
                <Box
                    ml={8}
                    my={4}
                >
                    <ul>
                        <li><Text>Continue to ingest high quality datasets available within DBCA, and from the Western Australian Museum and DWER.</Text></li>
                        <li><Text>Progress mapping of systematic survey data to the ABIS standard, enhancing the ways in which it can be ingested into, and visualised in, Dandjoo.</Text></li>
                        <li><Text>Continue to co‑design environmental assessment processes with DWER to embed data ingestion into the BIO platform including through pre‑planning and application workflows for industry proponents.</Text></li> <li><Text>Further outreach to potential data providers across all sectors to secure and schedule the delivery of new data sets over time.</Text></li>
                    </ul>
                </Box>
            </Box>

        </>
    )
}