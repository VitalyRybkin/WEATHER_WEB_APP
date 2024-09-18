require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {searchLocationByName, searchLocationById} = require("./api_connector/apirequests");
const {cuttingSearchedLocationInfo, getLocationInfo, getCurrentCelsius, getCurrentFahrenheit, getDailyCelsiusForecast,
    getDailyFahrenheitForecast, getHourlyCelsiusForecast, getHourlyFahrenheitForecast
} = require("./middleware/handle_data");
const {dbResponse, trySeq, Conn, getData} = require("./api_connector/db_connector");
const port = process.env.SERVER_PORT;

const corsOption = {
    origin: [`http://localhost:${process.env.CLIENT_PORT}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));

app.get('/', (req, res) => {
    const searchLocationName = req.query.location_name;
    const searchLocationLat = req.query.location_lat;
    const searchLocationLon = req.query.location_lon;
    const searchLocationIp = req.query.location_ip;


    const foundLocations = (searchLocationName, searchLocationLat, searchLocationLon, searchLocationIp) => {
        if (typeof searchLocationLat !== "undefined" && searchLocationLon !== "undefined" || typeof searchLocationIp !== "undefined") {
            return new Promise((resolve) => {
                const result = searchLocationById(searchLocationLat, searchLocationLon, searchLocationIp);
                result.then(data => {
                    resolve(data);
                })
            })
        } else {
            return new Promise((resolve) => {
                const result = searchLocationByName(searchLocationName);
                result.then(data => {
                        resolve(data);
                })
            })
        }
    }

    foundLocations(searchLocationName, searchLocationLat, searchLocationLon, searchLocationIp)
        .then((foundLocations) => {
            if (foundLocations instanceof Error || typeof foundLocations == 'number') {
                res.send({error: "No connection to server!"});
            } else {
                if (Array.isArray(foundLocations)) {
                    res.send({locationsFound: cuttingSearchedLocationInfo(foundLocations)});
                } else {
                    res.send({
                        locationInfo: getLocationInfo(foundLocations),
                        currentCelsius: getCurrentCelsius(foundLocations),
                        currentFahrenheit: getCurrentFahrenheit(foundLocations),
                        dailyCelsiusForecast: getDailyCelsiusForecast(foundLocations),
                        dailyFahrenheitForecast: getDailyFahrenheitForecast(foundLocations),
                        hourlyCelsiusForecast: getHourlyCelsiusForecast(foundLocations),
                        hourlyFahrenheitForecast: getHourlyFahrenheitForecast(foundLocations),
                    });
                }
            }
    }).catch(console.error);

    // const data = getData();
    // console.log(data);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})