import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Icon, Input, InputGroup, InputLeftElement, ModalBody, ModalFooter, Select, Textarea, VisuallyHiddenInput } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentYear } from "../../../hooks/useCurrentYear";
import { FaUser } from "react-icons/fa";
import { MdTitle } from "react-icons/md";
import { BsCardText, BsCashCoin, BsDatabaseFillLock } from "react-icons/bs";
// import { MdSkipNext } from "react-icons/md"
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoListOrdered } from "react-icons/go";
import { TiBusinessCard } from "react-icons/ti";
import { IoMdBusiness } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { CalendarIcon } from "@chakra-ui/icons";

import 'react-calendar/dist/Calendar.css'
import Calendar from "react-calendar";
import { IconContext } from "react-icons";


interface IProjectDetailSectionProps {
    onClose: () => void;
    projectType: string;
    currentYear: number;
}

export const ProjectDetailsSection = ({ projectType, currentYear, onClose }: IProjectDetailSectionProps) => {
    const navigate = useNavigate();
    const thisUser = {
        username: "Jarid Prince",
        email: "jarid.prince@dbca.wa.gov.au"
    }
    const [username, setUsername] = useState(`${thisUser.username}`);



    const [projectTitle, setProjectTItle] = useState('');
    const [projectSummary, setProjectSummary] = useState('');
    const [businessArea, setBusinessArea] = useState('');
    const [departmentalService, setDepartmentalService] = useState('');
    const [researchFunction, setResearchFunction] = useState('');

    const [dates, setDates] = useState<Date[] | undefined>(undefined);
    console.log(dates);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
    };

    const handleDateChange = (value: any) => {
        setDates(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ModalBody
            >
                {/* HIDING PROJECT YEAR */}
                <InputGroup>
                    <VisuallyHiddenInput
                        type="text"
                        placeholder="Year"
                        value={currentYear}
                        onChange={() => { console.log(currentYear) }}
                    />
                </InputGroup>

                {/* <FormControl isRequired mb={4}>
                <FormLabel>Username</FormLabel>
                <InputGroup>
                    <InputLeftElement children={<Icon as={FaUser} />} />
                    <Input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                </InputGroup>
                <FormHelperText>The DBCA staff member to participate in the project team.</FormHelperText>
            </FormControl> */}


                <FormControl isRequired mb={4} >
                    <FormLabel>Project Title</FormLabel>
                    <InputGroup>
                        <InputLeftElement children={<Icon as={MdTitle} />} />
                        <Input
                            type="text"
                            placeholder={`Type your Project Title here...`}
                            value={projectTitle}
                            onChange={(event) => setProjectTItle(event.target.value)}
                            maxLength={30}
                        // pattern="[A-Za-z0-9@.+_-]*" 
                        />
                    </InputGroup>
                    <FormHelperText>The project title with formatting if required (e.g. for taxonomic names).</FormHelperText>
                </FormControl>

                <FormControl isRequired mb={6}>
                    <FormLabel>Project Summary</FormLabel>
                    <InputGroup>
                        {/* <InputLeftElement children={<Icon as={BsCardText} />} /> */}
                        <Textarea
                            placeholder={`Type your summary here...`}
                            value={projectSummary}
                            onChange={(event) => setProjectSummary(event.target.value)}
                        // type="text"
                        />
                    </InputGroup>
                    <FormHelperText>A concise project summary, or any additional useful information.</FormHelperText>
                </FormControl>

                <Grid
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gridColumnGap={8}
                    my={4}
                    mb={6}
                    justifyContent={"center"}
                    alignItems={"center"}

                >

                    <Box>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Supervising Scientist</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<Icon as={FaUser} />} />
                                <Input
                                    type="text"
                                    placeholder={`${thisUser.email} - ${thisUser.username}`}
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                // maxLength={30} 
                                // pattern="[A-Za-z0-9@.+_-]*" 
                                />
                            </InputGroup>
                            <FormHelperText>The supervising scientist.</FormHelperText>
                        </FormControl>

                        <FormControl isRequired mb={4}>
                            <FormLabel>Data Custodian</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<Icon as={BsDatabaseFillLock} />} />
                                <Input
                                    type="text"
                                    placeholder={`${thisUser.email} - ${thisUser.username}`}
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                // maxLength={30} 
                                // pattern="[A-Za-z0-9@.+_-]*" 
                                />                                            </InputGroup>
                            <FormHelperText>
                                The data custodian (SPP E25) responsible for data management, publishing and metadata documentation on the&nbsp;
                                <Button onClick={() => {
                                    navigate('http://data.dbca.wa.gov.au/')
                                }}
                                    variant={"link"}
                                    colorScheme="blue"
                                >
                                    data catalogue.
                                </Button>
                            </FormHelperText>
                        </FormControl>

                        <FormControl isRequired mb={4}>
                            <FormLabel>Research Function</FormLabel>
                            <InputGroup>
                                <Select
                                    variant='filled' placeholder='Select a Research Function'
                                    onChange={(event) => setResearchFunction(event.target.value)}
                                    value={researchFunction}
                                >
                                    <option value='biodiversityassetsandinventory'>Biodiversity Assets and Inventory</option>
                                    <option value='biotechnology'>Biotechnology</option>
                                    <option value='bushfireresearch'>Bushfire Research</option>
                                    <option value='conservingthreatenedanimals'>Conserving Threatened Animals</option>
                                    <option value='conservingthreatenedecologicalcommunities'>Conserving Threatened Ecological Communities</option>
                                    <option value='conservingthreatenedplants'>Conserving Threatened Plants</option>
                                    <option value='forestmonitoringandresearch'>Forest Monitoring and Research</option>
                                    <option value='hydrologicalmanagement'>Hydrological Management</option>
                                    <option value='landscapescaleconservation'>Landscape Scale Conservation</option>
                                    <option value='marinemonitoringandresearch'>Marine Monitoring and Research</option>
                                    <option value='nativeanimalbreedingandhusbandry'>Native Animal Breeding and Husbandry</option>
                                    <option value='offreserveconservation'>Off Reserve Conservation</option>
                                    <option value='perthobservatory'>Perth Observatory</option>
                                    <option value='remotesensingandspatialanalysis'>Remote Sensing and Spatial Analysis</option>
                                    <option value='restorationecology'>Restoration Ecology</option>
                                    <option value='riversandestuariesmonitoring'>Rivers and Estuaries Monitoring</option>
                                    <option value='seedbiology'>Seed Biology</option>
                                    <option value='waherbarium'>WA Herbarium</option>
                                    <option value='wetlandmonitoringandmanagement'>Wetland Monitoring and Management</option>
                                    {/* 
                                    <option value='animalandplantdatamanagementanddistribution'>Animal and Plant Data Management and Distribution (deprecated)</option>
                                    <option value='kangaroosurveyfortrade'>Kangaroo Survey for Trade (deprecated)</option>
                                    <option value='landforwildlifeprogram'>Land for Wildlife Program (deprecated)</option>
                                    <option value='revegetation'>Revegetation (deprecated)</option>
                                    <option value='roadsideconservationcommittee'>Roadside Conservation Committee (deprecated)</option>
                                    <option value='statutorydevelopmentapprovalsandadvice'>Statutory Development Approvals and Advice (deprecated)</option>
                                    <option value='voluntaryconservationvovenantsprogram'>Voluntary Conservation Covenants Program (deprecated)</option>
                                    <option value='wetlandstandardsandpractice'>Wetland Standards and Practice (deprecated)</option>
                                    <option value='wildlifeassetsandinventory'>Wildlife Assets and Inventory (deprecated)</option>
                                    <option value='wildlifecompliance'>Wildlife Compliance (deprecated)</option>
                                    <option value='wildlifelicensing'>Wildlife Licensing (deprecated) </option> */}
                                </Select>

                            </InputGroup>
                            <FormHelperText>The Research Function this project mainly contributes to.</FormHelperText>
                        </FormControl>


                    </Box>

                    <Box w={"100%"} h={"100%"} display="flex" alignItems="center" justifyContent="center">
                        <FormControl isRequired>


                            <FormLabel>
                                <Box
                                    display={"inline-flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <CalendarIcon mr={2} />
                                    Start and End Dates
                                </Box>

                            </FormLabel>

                            <Box
                                w={"100%"}
                                h={"100%"}
                                textAlign="center"
                            >
                                <Calendar
                                    minDate={new Date()}
                                    selectRange
                                    minDetail="month"
                                    maxDate={new Date(Date.now() + (60 * 60 * 24 * 7 * 52 * 1000))}     // One year from today max
                                    prev2Label={null}
                                    next2Label={null}
                                    onChange={handleDateChange}
                                />
                            </Box>

                            <FormHelperText>
                                Select a start and end date by clicking on the calendar. The first clicked date is the start date, the second is the end date.
                            </FormHelperText>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gridColumnGap={8}
                    my={4}
                >


                    <FormControl isRequired mb={4}>
                        <FormLabel>Business Area</FormLabel>

                        <InputGroup>
                            <Select
                                variant='filled' placeholder='Select a Business Area'
                                onChange={(event) => setBusinessArea(event.target.value)}
                                value={businessArea}
                            >
                                <option value='BCS Biodiversity Information Office'>BCS Biodiversity Information Office</option>
                                <option value='BCS Biogeography'>BCS Biogeography</option>
                                <option value='BCS Animal Science'>BCS Animal Science</option>
                                <option value='BCS Plant Science and Herbarium'>BCS Plant Science and Herbarium</option>
                                <option value='BCS Ecosystem Science'>BCS Ecosystem Science</option>
                                <option value='BCS Marine Science'>BCS Marine Science</option>
                                <option value='BCS Fire Science'>BCS Fire Science</option>
                                <option value='BCS Kings Park Science'>BCS Kings Park Science</option>
                                <option value='BCS Perth Zoo Science'>BCS Perth Zoo Science</option>
                                <option value='BCS Rivers and Estuaries Science'>BCS Rivers and Estuaries Science</option>
                                <option value='BCS Remote Sensing and Spatial Analysis'>BCS Remote Sensing and Spatial Analysis</option>
                                <option value='BCS Species and Communities'>BCS Species and Communities</option>
                                <option value='BCS Ecoinformatics'>BCS Ecoinformatics</option>
                                <option value='BGPA Business and Finance'>BGPA Business and Finance</option>
                                <option value='BGPA Business and Community Engagement'>BGPA Business and Community Engagement</option>
                                <option value='BGPA Horticulture and Living Collections'>BGPA Horticulture and Living Collections</option>
                                <option value='BGPA Environment and Infrastructure'>BGPA Environment and Infrastructure</option>
                                <option value='CEM Ecosystem Health Branch'>CEM Ecosystem Health Branch</option>
                                <option value='CEM Forest Management Branch'>CEM Forest Management Branch</option>
                                <option value='CEM Wildlife Protection Branch'>CEM Wildlife Protection Branch</option>
                                <option value='CEM Rivers and Estuaries Branch'>CEM Rivers and Estuaries Branch</option>
                                <option value='CEM Environmental Management Branch'>CEM Environmental Management Branch</option>
                                <option value='PVS Visitor Services Branch'>PVS Visitor Services Branch</option>
                                <option value='PVS Aboriginal Engagement, Planning and Lands Branch'>PVS Aboriginal Engagement, Planning and Lands Branch</option>
                                <option value='PVS Tourism and Concessions Branch'>PVS Tourism and Concessions Branch</option>
                                <option value='PVS Visitor Communications and Marketing Branch'>PVS Visitor Communications and Marketing Branch</option>
                                <option value='RFMS Fire Management Services Branch'>RFMS Fire Management Services Branch</option>
                                <option value='RFMS Region Goldfields'>RFMS Region Goldfields</option>
                                <option value='RFMS Region Kimberley'>RFMS Region Kimberley</option>
                                <option value='RFMS Region Midwest'>RFMS Region Midwest</option>
                                <option value='RFMS Region Pilbara'>RFMS Region Pilbara</option>
                                <option value='RFMS Region South West'>RFMS Region South West</option>
                                <option value='RFMS Region Swan'>RFMS Region Swan</option>
                                <option value='RFMS Region Warren'>RFMS Region Warren</option>
                                <option value='RFMS Region Wheatbelt'>RFMS Region Wheatbelt</option>
                                <option value='RIA Business Services'>RIA Business Services</option>
                                <option value='RIA Environment, Heritage and Parks Services'>RIA Environment, Heritage and Parks Services</option>
                                <option value='RIA Infrastructure'>RIA Infrastructure</option>
                                <option value='RIA Contracts'>RIA Contracts</option>
                                <option value='RIA Marketing and Events'>RIA Marketing and Events</option>
                                <option value='RIA Visitor Services'>RIA Visitor Services</option>
                                <option value='ZPA Executive and Corporate Services'>ZPA Executive and Corporate Services</option>
                                <option value='ZPA Life Sciences'>ZPA Life Sciences</option>
                                <option value='ZPA Community Engagement'>ZPA Community Engagement</option>
                            </Select>

                        </InputGroup>
                        <FormHelperText>The Program or equivalent Divisional subunit hosting this project.</FormHelperText>
                    </FormControl>

                    <FormControl isRequired mb={4}>
                        <FormLabel>Departmental Service</FormLabel>
                        <InputGroup>
                            <Select
                                variant='filled' placeholder='Select a Deparmental Service'
                                onChange={(event) => setDepartmentalService(event.target.value)}
                                value={departmentalService}
                            >
                                <option value='bushfiresuppression'>Bushfire Suppression</option>
                                <option value='conservinghabitatsspeciesandcommunities'>Conserving Habitats, Species and Communities</option>
                                <option value='implementationoftheforestmanagementplan'>Implementation of the Forest Management Plan</option>
                                <option value='prescribedburningandfiremanagement'>Prescribed Burning and Fire Management</option>
                                <option value='researchandconservationpartnerships'>Research and Conservation Partnerships</option>
                                <option value='visitorservicesandpublicprogramsprovidedatkingsparkandboldpark'>Visitor Services and Public Programs at Kings Park and Bold Park</option>
                                <option value='visitorservicesandpublicprogramsprovidedinnationalparksandotherlandsandwaters'>Visitor Services and Public Programs in National Parks and Other Lands and Waters</option>
                                <option value='visitorservicesandpublicprogramsprovidedatperthzoo'>Visitor Services and Public Programs at Perth Zoo</option>
                                <option value='visitorservicesandpublicprogramsprovidedintheswanandcanningriverpark'>Visitor Services and Public Programs in the Swan and Canning Riverpark</option>
                            </Select>
                        </InputGroup>
                        <FormHelperText>The DBCA service that this project delivers outputs to.</FormHelperText>
                    </FormControl>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    ml={3}
                    type="submit"
                    colorScheme="blue"
                >
                    Next &rarr;
                </Button>

            </ModalFooter>
        </form>

    )
}