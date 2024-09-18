import styles from "./Header.module.css";
import cloud from "../../assets/download-alt-2-svgrepo-com.svg";
import logo from "../../assets/logo.png";

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import {
    Button,
    FormControlLabel,
    FormHelperText,
    IconButton,
    OutlinedInput,
    Radio,
    RadioGroup,
    useFormControl,
} from "@mui/material";

import FormControl from '@mui/material/FormControl';
import {createContext, useContext, useMemo, useState} from "react";
import ModalWindow from "../../elements/ModalWindow.jsx";
import {searchLocation, searchLocationByName} from "../../handlers/APIHandlers.jsx";
import {radioSwitch, unitSwitch, weatherDataStorage} from "../../reducers/UnitsReducer.jsx";
import {useDispatch} from "react-redux";

export const ModalWindowContext = createContext({});
export const LocationsContext = createContext({});
export const CelsiusContext = createContext({});

function SendIcon() {
    return <img src={`${cloud}`} alt="cloud"/>;
}

function Header() {

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [locations, setLocations] = useState([]);
    const [checkCelsius, setCheckCelsius] = useState(true);
    const [modalTitle, setModalTitle] = useState("");
    const [checkFahrenheit, setCheckFahrenheit] = useState(false);

    window.addEventListener("load", async () => {
        const locationData = JSON.parse(localStorage.getItem('location'));
        let getLocationData;
        if (localStorage.getItem("location")) {
            getLocationData = await searchLocation(locationData[0], locationData[1], undefined);
        } else {

            const ip = await fetch('https://ipapi.co/json/');
            if (ip.ok) {
                const ipData = await ip.json();
                getLocationData = await searchLocation(ipData.latitude, ipData.longitude,undefined);
            }
            else getLocationData = await searchLocation(51.52,-0.11, undefined);
        }

        weatherDataStorage.currentCelsiusData = getLocationData.currentCelsius;
        weatherDataStorage.currentFahrenheitData = getLocationData.currentFahrenheit;
        weatherDataStorage.dailyForecastCelsiusData = getLocationData.dailyCelsiusForecast;
        weatherDataStorage.dailyForecastFahrenheitData = getLocationData.dailyFahrenheitForecast;
        weatherDataStorage.hourlyForecastCelsiusData = getLocationData.hourlyCelsiusForecast;
        weatherDataStorage.hourlyForecastFahrenheitData = getLocationData.hourlyFahrenheitForecast;
        weatherDataStorage.locationInfoData = getLocationData.locationInfo;

        checkCelsius ?
            dispatch(unitSwitch({
                current: weatherDataStorage.currentCelsiusData,
                daily: weatherDataStorage.dailyForecastCelsiusData,
                hourly: weatherDataStorage.hourlyForecastCelsiusData,
                location: weatherDataStorage.locationInfoData
            }))
            : dispatch(unitSwitch({
                current: weatherDataStorage.currentFahrenheitData,
                daily: weatherDataStorage.dailyForecastFahrenheitData,
                hourly: weatherDataStorage.hourlyForecastFahrenheitData,
                location: weatherDataStorage.locationInfoData
            }));

        localStorage.setItem("location", JSON.stringify([getLocationData.locationInfo.lat, getLocationData.locationInfo.lon]));
        document.getElementById("location-input").value = `${getLocationData.locationInfo.name}, ${getLocationData.locationInfo.country}`;
    })

    function handleChange(e) {
        setCheckCelsius(!checkCelsius);
        setCheckFahrenheit(!checkFahrenheit);
        dispatch(radioSwitch(e.target.getAttribute('value')))
    }


    function handleClearInput() {
        document.getElementById("location-input").value = null;
        document.getElementById("location-input").focus();
    }

    async function handleClickSearchLocation() {
         const locationInputElement = document.getElementById("location-input");

         if (locationInputElement.value !== "") {
             const locationsFound = await searchLocationByName(locationInputElement.value);
             setLocations(locationsFound.locationsFound);
             if (locationsFound.locationsFound.length > 0){
                 setModalTitle("Locations found:")
             } else {
                 setModalTitle("Location not found!")
             }
             setOpenModal(!openModal);
         }
     }
     
    function MyFormHelperText() {
        const { focused } = useFormControl() || {};

        const helperText = useMemo(() => {
            return 'Search location';
        }, [focused]);

        return <FormHelperText>{helperText}</FormHelperText>;
    }

    return (
        <>
            <header className="container">
                <div className={styles.container_header}>
                    <img className={styles.logo} src={`${logo}`} alt="logo"/>

                    <form className={styles.location_form} method="GET" noValidate autoComplete="off">
                        <FormControl className={styles.location_form_input}>
                            <OutlinedInput className={`${styles.location_input} location-input`} id="location-input" placeholder="Location Name (e. g. New York)"
                                           endAdornment={
                                               <IconButton
                                                   className={styles.location_input_clear}
                                                   color="primary"
                                                   sx={{ p: '10px' }}
                                                   onClick={handleClearInput}
                                                   aria-label="directions">
                                                   <DeleteTwoToneIcon />
                                               </IconButton>
                                           }/>
                            <MyFormHelperText />
                        </FormControl>
                        <Button
                            // type="submit"
                            variant="contained"
                            size="large"
                            className={styles.location_btn}
                            onClick={(e) => handleClickSearchLocation(e)}
                            endIcon={<SendIcon />}>
                            SHOW ME!
                        </Button>
                    </form>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                id="celsius-radio"
                                className={styles.radio_group_item}
                                value="celsius"
                                checked={checkCelsius}
                                control={<Radio />}
                                onChange={(e) => handleChange(e)} label="Celsius"/>
                            <FormControlLabel
                                id="fahrenheit-radio"
                                className={styles.radio_group_item}
                                value="fahrenheit"
                                checked={checkFahrenheit}
                                control={<Radio />}
                                onChange={(e) => handleChange(e)} label="Fahrenheit"/>
                        </RadioGroup>
                    </FormControl>

                    <ModalWindowContext.Provider value={{openModal, setOpenModal}}>
                        <LocationsContext.Provider value={{locations, setLocations}}>
                            <CelsiusContext.Provider value={{checkCelsius, setCheckCelsius}}>
                                <ModalWindow modalTitle={modalTitle}/>
                            </CelsiusContext.Provider>
                        </LocationsContext.Provider>
                    </ModalWindowContext.Provider>
                </div>
            </header>
        </>
    )
}

export default Header;