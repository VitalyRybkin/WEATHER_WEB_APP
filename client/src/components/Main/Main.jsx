import {Box, Card, Container, Grid} from "@mui/material";

import LocationInfo from "./LocationInfo.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import DailyForecast from "./DailyForecast.jsx";
import HourlyForecast from "./HourlyForecast.jsx";
import {useSelector} from "react-redux";

function Main() {

    const {currentWeather, dailyWeather, hourlyWeather, locationInfo} = useSelector((state) => state.unitsSLice);

    return (
        <>
            <main className={"Main"}>
                <Container>
                    <Box sx={{ height: 'auto', padding: "2rem"}} >
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <LocationInfo locationInfo={locationInfo}/>
                                </Grid>
                                <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                                    <CurrentWeather currentWeather={currentWeather}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card sx={{ maxWidth: "100%",
                                        display: "flex",
                                        gap: "1rem",
                                        padding: ".5rem",
                                        justifyContent: "center"}}>
                                        <DailyForecast dailyForecast={dailyWeather}/>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <HourlyForecast hourlyForecast={hourlyWeather} locationInfo={locationInfo}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </main>

        </>
    )
}

export default Main;