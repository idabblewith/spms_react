import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Icon, Input, InputGroup, InputLeftElement, ModalBody, ModalFooter, Select, Textarea, VisuallyHiddenInput } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import { MdTitle } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import "../../../styles/modalscrollbar.css";

interface IProjectLocationProps {
    onClose: () => void;
    projectType: string;
    currentYear: number;
}

export const ProjectLocationSection = ({ projectType, currentYear, onClose }: IProjectLocationProps) => {
    const thisUser = {
        username: "Jarid Prince",
        email: "jarid.prince@dbca.wa.gov.au"
    }

    const [dbcaRegion, setDbcaRegion] = useState('');
    const [dbcaDistrict, setDbcaDistrict] = useState('');
    const [ibra, setIbra] = useState('');
    const [imcra, setImcra] = useState('');
    const [naturalResourceManagementRegion, setNaturalResourceManagementRegion] = useState('');

    const handleSubmit = () => {
        console.log('handling');
    }

    const [informationFilled, setInformationFilled] = useState(false);

    return (



        <form onSubmit={handleSubmit}>
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
            <ModalBody
                overflowY={"auto"}
                maxHeight={"58vh"}
            >

                <FormControl isRequired mb={4} >
                    <FormLabel>DBCA Region</FormLabel>
                    <InputGroup>
                        <Select
                            variant='filled' placeholder='Select a DBCA Region'
                            onChange={(event) => setDbcaRegion(event.target.value)}
                            value={dbcaRegion}
                        >
                            <option value='all'>All Regions</option>
                            <option value='goldfields'>Goldfields</option>
                            <option value='kimberly'>Kimberly</option>
                            <option value='midwest'>Midwest</option>
                            <option value='pilbara'>Pilbara</option>
                            <option value='southcoast'>South Coast</option>
                            <option value='southwest'>South West</option>
                            <option value='swan'>Swan</option>
                            <option value='warren'>Warren</option>
                            <option value='wheatbelt'>Wheatbelt</option>
                        </Select>
                    </InputGroup>
                </FormControl>

                <FormControl isRequired mb={4} >
                    <FormLabel>DBCA District</FormLabel>
                    <InputGroup>
                        <Select
                            variant='filled' placeholder='Select a DBCA District'
                            onChange={(event) => setDbcaDistrict(event.target.value)}
                            value={dbcaDistrict}
                        >
                            <option value='all'>All Districts</option>
                            <option value='albany'>Albany</option>
                            <option value='blackwood'>Blackwood</option>
                            <option value='centralwheatbelt'>Central Wheatbelt</option>
                            <option value='donnelly'>Donnelly</option>
                            <option value='eastkimberly'>East Kimberly</option>
                            <option value='esperance'>Esperence</option>
                            <option value='exmouth'>Exmouth</option>
                            <option value='frankland'>Frankland</option>
                            <option value='geraldton'>Geraldton</option>
                            <option value='goldfields'>Goldfields</option>
                            <option value='greatsouthern'>Great Southern</option>
                            <option value='moora'>Moora</option>
                            <option value='perthhills'>Perth Hills</option>
                            <option value='pilbaraeast'>Pilbara East</option>
                            <option value='sharkbay'>Shark Bay</option>
                            <option value='swancoastal'>Swan Coastal</option>
                            <option value='wellington'>Wellington</option>
                            <option value='westkimberly'>West Kimberly</option>
                        </Select>
                    </InputGroup>
                </FormControl>

                <FormControl isRequired mb={4} >
                    <FormLabel>IBRA</FormLabel>
                    <InputGroup>
                        <Select
                            variant='filled' placeholder='Select an IBRA Region'
                            onChange={(event) => setIbra(event.target.value)}
                            value={ibra}
                        >
                            <option value='all'>All IBRA Regions</option>
                            <option value='avonwheatbelt'>Avon Wheatbelt</option>
                            <option value='dampierland'>Dampierland</option>
                            <option value='carnarvon'>Carnarvon</option>
                            <option value='centralkimberly'>Central Kimberly</option>
                            <option value='centralranges'>Central Ranges</option>
                            <option value='coolgardie'>Coolgardie</option>
                            <option value='esperanceplains'>Esperence Plains</option>
                            <option value='gascoyne'>Gascoyne</option>
                            <option value='geraldtonsandplains'>Geraldton Sandplains</option>
                            <option value='gibsondesert'>Gibson Desert</option>
                            <option value='greatsandydesert'>Great Sandy Desert</option>
                            <option value='greatvictoriadesert'>Great Victoria Desert</option>
                            <option value='hampton'>Hampton</option>
                            <option value='indiantropicalislands'>Indian Tropical Islands</option>
                            <option value='jarrahforest'>Jarrah Forest</option>
                            <option value='littlesandydesert'>Little Sandy Desert</option>
                            <option value='mallee'>Mallee</option>
                            <option value='murchison'>Murchison</option>
                            <option value='northernkimberly'>Northern Kimberly</option>
                            <option value='nullarbor'>Nullarbor</option>
                            <option value='ordvictoriaplain'>Ord Victoria Plain</option>
                            <option value='pilbara'>Pilbara</option>
                            <option value='swancoastalplain'>Swan Coastal Plain</option>
                            <option value='tanami'>Tanami</option>
                            <option value='victoriabonaparte'>Victoria Bonaparte</option>
                            <option value='warren'>Warren</option>
                            <option value='yalgoo'>Yalgoo</option>
                        </Select>
                    </InputGroup>
                </FormControl>


                <FormControl isRequired mb={4} >
                    <FormLabel>IMCRA</FormLabel>
                    <InputGroup>
                        <Select
                            variant='filled' placeholder='Select an IMCRA Region'
                            onChange={(event) => setImcra(event.target.value)}
                            value={imcra}
                        >
                            <option value='all'>All IBRA Regions</option>
                            <option value='abrolhosislands'>Abrolhos Islands</option>
                            <option value='bonapartegulf'>Bonaparte Gulf</option>
                            <option value='cambridgebonaparte'>Cambridge Bonaparte</option>
                            <option value='canning'>Canning</option>
                            <option value='centralwestcoast'>Central West Coast</option>
                            <option value='eightymilebeach'>Eighty Mile Beach</option>
                            <option value='eucla'>Eucla</option>
                            <option value='kimberly'>Kimberly</option>
                            <option value='kingsound'>King Sound</option>
                            <option value='leeuwinnaturaliste'>Leeuwin-Naturaliste</option>
                            <option value='ningaloo'>Ningaloo</option>
                            <option value='northwesternshelf'>Northwestern Shelf</option>
                            <option value='oceanicshoals'>Oceanic Shoals</option>
                            <option value='pilbaraoffshore'>Pilbara (Offshore)</option>
                            <option value='pilbaranearshore'>Pilbara (Nearshore)</option>
                            <option value='sharkbay'>Shark Bay</option>
                            <option value='wasouthcoast'>WA South Coast</option>
                            <option value='zuytdorp'>Zuytdorp</option>
                        </Select>
                    </InputGroup>
                </FormControl>

                <FormControl isRequired mb={4} >
                    <FormLabel>Natural Resource Management Region</FormLabel>
                    <InputGroup>
                        <Select
                            variant='filled' placeholder='Select a Natural Resource Management Region'
                            onChange={(event) => setNaturalResourceManagementRegion(event.target.value)}
                            value={naturalResourceManagementRegion}
                        >
                            <option value='all'>All Regions</option>
                            <option value='ashmoreandcartierislands'>Ashmore and Cartier Islands</option>
                            <option value='avon'>Avon</option>
                            <option value='christmasislands'>Christmas Islands</option>
                            <option value='cocoskeelingislands'>Cocos Keeling Islands</option>
                            <option value='northernagricultural'>Northern Agricultural</option>
                            <option value='rangelands'>Rangelands</option>
                            <option value='southcoast'>Southcoast</option>
                            <option value='southwest'>Southwest</option>
                            <option value='swan'>Swan</option>
                            <option value='wheatbelt'>Wheatbelt</option>
                        </Select>
                    </InputGroup>
                </FormControl>

            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    ml={3}
                    type="submit"
                    colorScheme="blue"
                    isDisabled={!informationFilled}
                >
                    Next &rarr;
                </Button>

            </ModalFooter>
        </form>
    )
}