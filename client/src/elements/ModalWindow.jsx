import {Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useContext} from "react";
import {CelsiusContext, LocationsContext, ModalWindowContext} from "../components/Header/Header.jsx";
import PropTypes from 'prop-types';
import {searchLocation} from "../handlers/APIHandlers.jsx"
import {unitSwitch, weatherDataStorage} from "../reducers/UnitsReducer.jsx";
import {useDispatch} from "react-redux";

function ModalWindow(props) {

    const dispatch = useDispatch();
    const {openModal, setOpenModal} = useContext(ModalWindowContext);
    const {locations} = useContext(LocationsContext);
    const {checkCelsius} =useContext(CelsiusContext);

    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };

    const handleGetLocationInfo = async (lat, lon) => {
        const getLocationData = await searchLocation(lat, lon, undefined);
        setOpenModal(!openModal);

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

        document.getElementById("location-input").value = `${getLocationData.locationInfo.name}, ${getLocationData.locationInfo.country}`;
        localStorage.setItem("location", JSON.stringify([getLocationData.locationInfo.lat, getLocationData.locationInfo.lon]));
    }

    const locationsList = Array.from(locations).map((location) => {
        return (
            <ListItem sx={{ padding: "0 .5rem" }} disableGutters key={new Date().getTime()} ker={new Date().getTime()}>
                <ListItemButton onClick={() => handleGetLocationInfo(location.lat, location.lon)}>
                    <ListItemText  sx={{fontWeight: "400"}} primary={location.name} secondary={`${location.country},  ${location.region}`}  />
                </ListItemButton>
            </ListItem>
        )
    });

    return (
        <>
            <div className="modal">
                <Dialog onClose={handleCloseModal} open={openModal}>
                    <DialogTitle sx={{ fontWeight: 600, padding: "1rem", backgroundColor: "#1976d2", color: "#FFFFFF" }}>{props.modalTitle}</DialogTitle>
                    <List sx={{
                        pt: 0,
                        display: locationsList.length > 0 ? "flex" : "none",
                        flexDirection: "column"
                    }}>
                        {locationsList}
                    </List>
                </Dialog>
            </div>
        </>
    )
}

ModalWindow.propTypes = {
    modalTitle: PropTypes.string,
}

export default ModalWindow;