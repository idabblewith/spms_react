import { Button, FormControl, FormHelperText, FormLabel, Grid, Icon, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { AiFillQuestionCircle } from "react-icons/ai"
import { BsCashCoin } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { GoListOrdered } from "react-icons/go"
import { MdAccessTimeFilled } from "react-icons/md"

interface INewProjectModalProps {
    projectType: string;
    isOpen: boolean;
    onClose: () => void;
}

export const NewProjectModal = ({ projectType, isOpen, onClose }: INewProjectModalProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
    };

    const thisUser = "Jarid Prince"
    const thisUserEmail = "jarid.prince@dbca.wa.gov.au"

    const [username, setUsername] = useState(thisUser);


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"white"}>
                <ModalHeader>New {projectType}</ModalHeader>
                <ModalCloseButton />
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Details</Tab>
                        <Tab>Location</Tab>
                        <Tab>Display</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <form onSubmit={handleSubmit}>
                                {/* 
                                    Project Year (non-editable / pre-filled)
                                    Project Number (non-editable / pre-filled)
    
                                    Project Type (non-editable / pre-filled)
                                        The project type determines the approval and documentation requirements during the project's life span. Choose wisely - you will not be able to change the project type later. If you get it wrong, create a new project of the correct type and tell admins to delete the duplicate project of the incorrect type.

                                    
                                    Project Title (currently using TinyMCE HTML editor)
                                        The project title with formatting if required (e.g. for taxonomic names).

                                    Proejct Summary ("""""")
                                        A concise project summary, or any additional useful information.

                                    Supervising Scientist (search/select - prefilled)
                                        The supervising scientist.


                                    Data Custodian ("""""")
                                        The data custodian (SPP E25) responsible for data management, publishing and metadata documentation on the data catalogue.
                                        (LINK: http://data.dbca.wa.gov.au/)

                                    Program/Business Area (prefilled based on user's field)
                                        The Program or equivalent Divisional subunit hosting this project.

                                    Departmental Service (dropdown)
                                        The DBCA service that this project delivers outputs to.

                                        OPTION:
                                            Service 1: Visitor Services and Public Programs Provided at Kings Park and Bold Park
                                            Service 10: Bushfire Suppression
                                            Service 3: Visitor Services and Public Programs Provided at Perth Zoo
                                            Service 4: Visitor Services and Public Programs Provided in the Swan and Canning Riverpark
                                            Service 5: Visitor Services and Public Programs Provided in National Parks and Other Lands and Waters
                                            Service 6: Conserving Habitats, Species and Communities
                                            Service 7: Research and Conservation Partnerships
                                            Service 8: Implementation of the Forest Management Plan
                                            Service 9: Prescribed Burning and Fire Management
                                            Service x: Data migration placeholder

                                    Research Function (dropdown)
                                        The Research Function this project mainly contributes to.

                                        OPTION:
                                            Forest monitoring and research
                                            Bushfire research
                                            Conserving threatened animals
                                            Hydrological management
                                            Landscape scale conservation
                                            Marine monitoring and research
                                            WA Herbarium
                                            Biodiversity assets and inventory
                                            Biotechnology
                                            Conserving threatened ecological communities
                                            Conserving threatened plants
                                            Native animal breeding and husbandry
                                            Off reserve conservation
                                            Perth Observatory
                                            Remote Sensing and Spatial Analysis
                                            Restoration ecology
                                            Rivers and Estuaries monitoring
                                            Seed biology
                                            Wetland monitoring and management
                                            Animal and plant data management and distribution (deprecated)
                                            Kangaroo survey for trade (deprecated)
                                            Land for Wildlife Program (deprecated)
                                            Revegetation (deprecated)
                                            Roadside Conservation Committee (deprecated)
                                            Statutory development approvals and advice (deprecated)
                                            Voluntary Conservation Covenants Program (deprecated)
                                            Wetland standards and practice (deprecated)
                                            Wildlife assets and inventory (deprecated)
                                            Wildlife compliance (deprecated)
                                            Wildlife licensing (deprecated)
                                  

                                    Start Date (Calendar - prefilled today)
                                        The project start date, update the initial estimate later. Use format YYYY-MM-DD, e.g. 2014-12-31.

                                    End Date (Calendar)
                                        The project end date, update the initial estimate later. Use format YYYY-MM-DD, e.g. 2014-12-31.
                                
                                */}
                                <ModalBody>
                                    <FormControl isRequired mb={4}>
                                        <FormLabel>Project Year</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement children={<Icon as={FaUser} />} />
                                            <Input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                        </InputGroup>
                                        <FormHelperText>The DBCA staff member to participate in the project team.</FormHelperText>
                                    </FormControl>
                                    {/* <FormControl isRequired mb={4}>
                                        <FormLabel>Username</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement children={<Icon as={FaUser} />} />
                                            <Input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                        </InputGroup>
                                        <FormHelperText>The DBCA staff member to participate in the project team.</FormHelperText>
                                    </FormControl> */}
                                    <Grid
                                        gridTemplateColumns={"repeat(2, 1fr)"}
                                        gridColumnGap={4}
                                        my={4}
                                    >
                                        <FormControl isRequired >
                                            <FormLabel>Time Allocation (0 to 1 FTE)</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<Icon as={MdAccessTimeFilled} />} />
                                                <Input type="text" placeholder="0" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                            </InputGroup>
                                            <FormHelperText>Indicative time allocation as a fraction of a Full Time Equivalent (210 person-days). Values between 0 and 1. Fill in estimated allocation for the next 12 months.</FormHelperText>
                                        </FormControl>
                                        <FormControl isRequired mb={4}>
                                            {/* 
                            CHOICES:
                            - Supervising Scientist
                            - Research Scientist
                            - Technical Officer
                            - External Collaborator
                            - Academic Supervisor
                            - Supervised Student
                            - External Peer
                            - Consulted Peer
                            - Involved Group
                        
                        */}
                                            <FormLabel>Role</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<Icon as={AiFillQuestionCircle} />} />
                                                <Input type="text" placeholder="Role" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                            </InputGroup>
                                            <FormHelperText>The role this team member fills within this project.</FormHelperText>
                                        </FormControl>

                                    </Grid>

                                    <Grid
                                        gridTemplateColumns={"repeat(2, 1fr)"}
                                        gridColumnGap={4}
                                        my={4}

                                    >


                                        <FormControl isRequired mb={4}>
                                            <FormLabel>List Position</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<Icon as={GoListOrdered} />} />
                                                <Input type="text" placeholder="100" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                            </InputGroup>
                                            <FormHelperText>The lowest position number comes first in the team members list. Ignore to keep alphabetical order, increase to shift member towards the end of the list, decrease to promote member to beginning of the list.</FormHelperText>
                                        </FormControl>

                                        <FormControl isRequired mb={4}>
                                            <FormLabel>Short Code</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<Icon as={BsCashCoin} />} />
                                                <Input type="text" placeholder="100" value={username} onChange={(event) => setUsername(event.target.value)} maxLength={30} pattern="[A-Za-z0-9@.+_-]*" />
                                            </InputGroup>
                                            <FormHelperText>Cost code for this project membership's salary. Allocated by divisional admin.</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <FormControl isRequired my={4}
                                    >
                                        <FormLabel>Comments</FormLabel>
                                        <InputGroup>
                                            <Textarea placeholder='Here is a sample placeholder' />
                                        </InputGroup>
                                        <FormHelperText>Any comments clarifying the project membership.</FormHelperText>
                                    </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button type="submit" colorScheme="blue" ml={3}>Create</Button>

                                </ModalFooter>
                            </form>

                        </TabPanel>
                        <TabPanel>
                            {/* 
                                DBCA Region
                                <select id="id_pythia_areasWidgetWrapper_DBCA Region" multiple="" class="form-control" style="width: auto; float:right !important;" size="10"><option value="82">All Regions</option><option value="29">Kimberley</option><option value="31">Pilbara</option><option value="30">Midwest</option><option value="28">Goldfields</option><option value="36">Wheatbelt</option><option value="34">Swan</option><option value="32">South Coast</option><option value="33">South West</option><option value="35">Warren</option></select>
                            
                                DBCA District
                                <select id="id_pythia_areasWidgetWrapper_DBCA District" multiple="" class="form-control" style="width: auto; float:right !important;" size="19"><option value="83">All DPaW Districts</option><option value="50">East Kimberley</option><option value="61">West Kimberley</option><option value="63">Pilbara East</option><option value="52">Exmouth</option><option value="54">Geraldton</option><option value="62">Goldfields</option><option value="58">Shark Bay</option><option value="56">Moora</option><option value="48">Central Wheatbelt</option><option value="59">Swan Coastal</option><option value="57">Perth Hills</option><option value="51">Esperance</option><option value="55">Great Southern</option><option value="60">Wellington</option><option value="46">Albany</option><option value="47">Blackwood</option><option value="49">Donnelly</option><option value="53">Frankland</option></select>
                                
                                IBRA
                                <select id="id_pythia_areasWidgetWrapper_IBRA" multiple="" class="form-control" style="width: auto; float:right !important;" size="28"><option value="85">All IBRA Regions</option><option value="14">Indian Tropical Islands</option><option value="25">Victoria Bonaparte</option><option value="19">Northern Kimberley</option><option value="21">Ord Victoria Plain</option><option value="3">Central Kimberley</option><option value="6">Dampierland</option><option value="24">Tanami</option><option value="11">Great Sandy Desert</option><option value="22">Pilbara</option><option value="2">Carnarvon</option><option value="16">Little Sandy Desert</option><option value="10">Gibson Desert</option><option value="8">Gascoyne</option><option value="4">Central Ranges</option><option value="27">Yalgoo</option><option value="18">Murchison</option><option value="12">Great Victoria Desert</option><option value="9">Geraldton Sandplains</option><option value="1">Avon Wheatbelt</option><option value="20">Nullarbor</option><option value="5">Coolgardie</option><option value="23">Swan Coastal Plain</option><option value="15">Jarrah Forest</option><option value="13">Hampton</option><option value="17">Mallee</option><option value="7">Esperance Plains</option><option value="26">Warren</option></select>

                                IMCRA
                                <select id="id_pythia_areasWidgetWrapper_IMCRA" multiple="" class="form-control" style="width: auto; float:right !important;" size="19"><option value="86">All IMCRA Regions</option><option value="64">Oceanic Shoals</option><option value="65">Bonaparte Gulf</option><option value="66">Kimberley</option><option value="67">Northwest Shelf</option><option value="68">Cambridge-Bonaparte</option><option value="69">Canning</option><option value="70">King Sound</option><option value="71">Eighty Mile Beach</option><option value="72">Pilbara (Offshore)</option><option value="73">Pilbara (Nearshore)</option><option value="74">Ningaloo</option><option value="75">Zuytdorp</option><option value="76">Shark Bay</option><option value="77">Central West Coast</option><option value="78">Abrolhos Islands</option><option value="79">Eucla</option><option value="80">Leeuwin-Naturaliste</option><option value="81">WA South Coast</option></select>
                                
                                Natural Resource Management Region
                            
                            
                            */}
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            {/* 
                            
                                Image
                                    Upload an image which represents the meaning, shows a photogenic detail, or the team of the project. The image, if too large, will be resized to 600pt width. The original aspect ratio will be preserved. Aim for an aspect ratio (width to height) of 1.5 to 1.

                                Keywords (Tiny MCE)
                                    Add some keywords as a comma separated list

                                Position (prefilled 1000)
                                    The primary ordering instance. If left to default, ordering happens by project year and number (newest first).

                                    Check if can remove



                                    // ENSURE CREATE IS GREYED OUT UNTIL NECESSARY FIELDS ARE FILLED
                                        // MAKE IT A 'NEXT' BUTTON TO JUMP TO THE NEXT TAB
                                        // ONLY ALLOW NEXT IF NECESSARY FIELDS FILLED
                                        // ONLY ALLOW CREATE IF ALL NECESSRY FILLED.
                            
                            */}
                            <FormControl my={4}
                            >
                                <FormLabel>Image</FormLabel>
                                <InputGroup>
                                    <Textarea placeholder='Here is a sample placeholder' />
                                </InputGroup>
                                <FormHelperText>Any comments clarifying the project membership.</FormHelperText>
                            </FormControl>

                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </ModalContent>
        </Modal>
    )
}