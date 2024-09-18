import {createSlice} from "@reduxjs/toolkit";

class WeatherDataStorage {
    constructor(
        currentCelsius,
        currentFahrenheit,
        dailyForecastCelsius,
        dailyForecastFahrenheit,
        hourlyForecastCelsius,
        hourlyForecastFahrenheit,
        locationInfo
    ) {
        this.currentCelsius = currentCelsius;
        this.currentFahrenheit = currentFahrenheit;
        this.dailyForecastCelsius = dailyForecastCelsius;
        this.dailyForecastFahrenheit = dailyForecastFahrenheit;
        this.hourlyForecastCelsius = hourlyForecastCelsius;
        this.hourlyForecastFahrenheit = hourlyForecastFahrenheit;
        this.locationInfo = locationInfo;
    }

    get currentCelsiusData() {
        return this.currentCelsius;
    }

    set currentCelsiusData(data) {
        this.currentCelsius = data;
    }

    get currentFahrenheitData() {
        return this.currentFahrenheit;
    }

    set currentFahrenheitData(data) {
        this.currentFahrenheit = data;
    }

    get dailyForecastCelsiusData() {
        return this.dailyForecastCelsius;
    }

    set dailyForecastCelsiusData(data) {
        this.dailyForecastCelsius = data;
    }

    get dailyForecastFahrenheitData() {
        return this.dailyForecastFahrenheit;
    }

    set dailyForecastFahrenheitData(data) {
        this.dailyForecastFahrenheit = data;
    }

    get hourlyForecastCelsiusData() {
        return this.hourlyForecastCelsius;
    }

    set hourlyForecastCelsiusData(data) {
        this.hourlyForecastCelsius = data;
    }

    get hourlyForecastFahrenheitData() {
        return this.hourlyForecastFahrenheit;
    }

    set hourlyForecastFahrenheitData(data) {
        this.hourlyForecastFahrenheit = data;
    }
    get locationInfoData() {
        return this.locationInfo;
    }

    set locationInfoData(data) {
        this.locationInfo = data;
    }
}

export const weatherDataStorage = new WeatherDataStorage(
    {},
    {},
    {},
    {},
    {},
    {},
    {}
);

const initialState = {
    currentWeather: weatherDataStorage.currentCelsiusData,
    dailyWeather: weatherDataStorage.dailyForecastCelsiusData,
    hourlyWeather: weatherDataStorage.hourlyForecastCelsiusData,
    locationInfo: weatherDataStorage.locationInfoData
}

export const unitsSLice = createSlice({
    name: "units",
    initialState,
    reducers: {
        unitSwitch: (state, action) => {
            return {
                currentWeather: action.payload.current,
                dailyWeather: action.payload.daily,
                hourlyWeather: action.payload.hourly,
                locationInfo: action.payload.location
            };
        },
        radioSwitch: (state, action) => {
            if (action.payload === "celsius") {
                return {
                    currentWeather: weatherDataStorage.currentCelsiusData,
                    dailyWeather: weatherDataStorage.dailyForecastCelsiusData,
                    hourlyWeather: weatherDataStorage.hourlyForecastCelsiusData,
                    locationInfo: weatherDataStorage.locationInfoData
                }
            } else {
                return {
                    currentWeather: weatherDataStorage.currentFahrenheitData,
                    dailyWeather: weatherDataStorage.dailyForecastFahrenheitData,
                    hourlyWeather: weatherDataStorage.hourlyForecastFahrenheitData,
                    locationInfo: weatherDataStorage.locationInfoData
                };
            }
        }
    }
});

export const {
    unitSwitch, radioSwitch
} = unitsSLice.actions;

export default unitsSLice.reducer;
