
exports.cuttingSearchedLocationInfo = (foundLocations) => {
    let dataFound = [];
    foundLocations.forEach((location) => {
        const newLocationData = {};
        newLocationData.lat = location.lat;
        newLocationData.lon = location.lon;
        newLocationData.name = location.name;
        newLocationData.region = location.region;
        newLocationData.country = location.country;
        dataFound.push(newLocationData);
    })
    return dataFound;
}

exports.getLocationInfo = (foundLocations) => {
    const updated = new Date(foundLocations.current.last_updated);
    const localTime = new Date(foundLocations.location.localtime);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const locationInfo = {};
    locationInfo['lat'] = foundLocations.location.lat;
    locationInfo['lon'] = foundLocations.location.lon;
    locationInfo['name'] = foundLocations.location.name;
    locationInfo['country'] = foundLocations.location.country;
    locationInfo['region'] = foundLocations.location.region;
    locationInfo['localtime'] = `${months[localTime.getMonth()]} ${localTime.getDate()}, ${foundLocations.location.localtime.slice(-5)}`;
    locationInfo['localhour'] = localTime.getHours();
    locationInfo['lat'] = foundLocations.location.lat;
    locationInfo['lon'] = foundLocations.location.lon;
    locationInfo['Last updated'] = `${months[updated.getMonth()]} ${updated.getDate()}, ${foundLocations.current.last_updated.slice(-5)}`;

    return locationInfo;
}

exports.getCurrentCelsius = (foundLocations) => {
    const currentCelsius = {};
    currentCelsius['Temperature'] = foundLocations.current.temp_c + " °C";
    currentCelsius['Condition'] = foundLocations.current.condition.text;
    currentCelsius['Icon'] = foundLocations.current.condition.icon;
    currentCelsius['Wind'] = foundLocations.current.wind_kph + " kph";
    currentCelsius['Wind direction'] = foundLocations.current.wind_dir;
    currentCelsius['Pressure'] = foundLocations.current.pressure_mb + " mb";
    currentCelsius['Precipitations'] = foundLocations.current.precip_mm + " mm";
    currentCelsius['Humidity'] = foundLocations.current.humidity + " %";
    currentCelsius['Cloud'] = foundLocations.current.cloud + " %";
    currentCelsius['Feelslike'] = foundLocations.current.feelslike_c + " °C";
    currentCelsius['Visibility'] = foundLocations.current.vis_km + " km";
    currentCelsius['Gust'] = foundLocations.current.gust_kph + " kph";

    return currentCelsius;
}

exports.getCurrentFahrenheit = (foundLocations) => {
    const currentFahrenheit = {};
    currentFahrenheit['Temperature'] = foundLocations.current.temp_f + " °F";
    currentFahrenheit['Condition'] = foundLocations.current.condition.text;
    currentFahrenheit['Icon'] = foundLocations.current.condition.icon;
    currentFahrenheit['Wind'] = foundLocations.current.wind_mph + " mph";
    currentFahrenheit['Wind direction'] = foundLocations.current.wind_dir;
    currentFahrenheit['Pressure'] = foundLocations.current.pressure_in + " in";
    currentFahrenheit['Precipitations'] = foundLocations.current.precip_in + " in";
    currentFahrenheit['Humidity'] = foundLocations.current.humidity + " %";
    currentFahrenheit['Cloud'] = foundLocations.current.cloud + " %";
    currentFahrenheit['Feelslike'] = foundLocations.current.feelslike_f + " °F";
    currentFahrenheit['Visibility'] = foundLocations.current.vis_miles + " miles";
    currentFahrenheit['Gust'] = foundLocations.current.gust_mph + " mph";

    return currentFahrenheit;
}

exports.getDailyCelsiusForecast = (foundLocations) => {
    const dailyCelsiusForecast = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    foundLocations.forecast.forecastday.forEach ((dateFound) => {
        const forecastDate = new Date(dateFound.date);
        const newDateForecast = {};

        // newDateForecast["Date"] = `${days[forecastDate.getDay()]}, ${months[forecastDate.getMonth()]} ${forecastDate.getDate()}`;
        newDateForecast["Date"] = `${days[forecastDate.getDay()]}`;
        newDateForecast["Max temp."] = dateFound.day.maxtemp_c + " °C";
        newDateForecast["Min temp."] = dateFound.day.mintemp_c + " °C";
        newDateForecast["Avg temp."] = dateFound.day.avgtemp_c + " °C";
        newDateForecast["Max wind"] = dateFound.day.maxwind_kph + " kph";
        newDateForecast["Total precipitations"] = dateFound.day.totalprecip_mm + " mm";
        newDateForecast["Avg visibility"] = dateFound.day.avgvis_km + " km";
        newDateForecast["Avg humidity"] = dateFound.day.avghumidity + " %";
        newDateForecast["Chance of rain"] = dateFound.day.daily_chance_of_rain + " %";
        newDateForecast["Chance of snow"] = dateFound.day.daily_chance_of_snow + " %";
        newDateForecast["Condition"] = dateFound.day.condition.text;
        newDateForecast["Icon"] = dateFound.day.condition.icon;

        dailyCelsiusForecast.push(newDateForecast);
    });

    return dailyCelsiusForecast;
}

exports.getDailyFahrenheitForecast = (foundLocations) => {
    const dailyFahrenheitForecast = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    foundLocations.forecast.forecastday.forEach ((dateFound) => {
        const forecastDate = new Date(dateFound.date);
        const newDateForecast = {};
        // newDateForecast["Date"] = `${days[forecastDate.getDay()]}, ${months[forecastDate.getMonth()]} ${forecastDate.getDate()}`;
        newDateForecast["Date"] = `${days[forecastDate.getDay()]}`;
        newDateForecast["Max temp."] = dateFound.day.maxtemp_f + " °F";
        newDateForecast["Min temp."] = dateFound.day.mintemp_f + " °F";
        newDateForecast["Avg temp."] = dateFound.day.avgtemp_f + " °F";
        newDateForecast["Max wind"] = dateFound.day.maxwind_mph + " mph";
        newDateForecast["Total precipitations"] = dateFound.day.totalprecip_in + " in";
        newDateForecast["Avg visibility"] = dateFound.day.avgvis_miles + " miles";
        newDateForecast["Avg humidity"] = dateFound.day.avghumidity + " %";
        newDateForecast["Chance of rain"] = dateFound.day.daily_chance_of_rain + " %";
        newDateForecast["Chance of snow"] = dateFound.day.daily_chance_of_snow + " %";
        newDateForecast["Condition"] = dateFound.day.condition.text;
        newDateForecast["Icon"] = dateFound.day.condition.icon;

        dailyFahrenheitForecast.push(newDateForecast);
    });

    return dailyFahrenheitForecast;

}

function getFormattedTime(hour) {
    const forecastHour = new Date(hour.time);
    const hours = forecastHour.getHours().toString().length < 2 ? '0' + forecastHour.getHours() : forecastHour.getHours();
    const minutes = forecastHour.getMinutes().toString().length < 2 ? '0' + forecastHour.getMinutes() : forecastHour.getMinutes();
    return {forecastHour, hours, minutes};
}

exports.getHourlyCelsiusForecast = (foundLocations) => {
    const hourlyCelsiusForecast = [];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    foundLocations.forecast.forecastday.forEach ((dateFound) => {
        dateFound.hour.map((hour) => {
            const newHourForecast = {};
            const {forecastHour, hours, minutes} = getFormattedTime(hour);

            // newHourForecast['Time'] = `${days[forecastHour.getDay()]}, ${forecastHour.getDate()}, ${hours}:${minutes}`;
            newHourForecast['Time'] = `${days[forecastHour.getDay()]}, ${hours}:${minutes}`;
            newHourForecast['Temperature'] = hour.temp_c + " °C";
            newHourForecast['Condition'] = hour.condition.text;
            newHourForecast['Icon'] = hour.condition.icon;
            newHourForecast['Wind'] = hour.wind_kph + " kph";
            newHourForecast['Wind chill'] = hour.windchill_c + " °C";
            newHourForecast['Wind direction'] = hour.wind_dir;
            newHourForecast['Pressure'] = hour.pressure_mb + " mb";
            newHourForecast['Precipitations'] = hour.precip_mm + " mm";
            newHourForecast['Humidity'] = hour.humidity + " %";
            newHourForecast['Cloud'] = hour.cloud + " %";
            newHourForecast['Feelslike'] = hour.feelslike_c + " °C";
            newHourForecast['Visibility'] = hour.vis_km + " km";
            newHourForecast['Gust'] = hour.gust_kph + " kph";
            newHourForecast["Chance of rain"] = hour.chance_of_rain + " %";
            newHourForecast["Chance of snow"] = hour.chance_of_snow + " %";

            hourlyCelsiusForecast.push(newHourForecast);

        })

    });

    return hourlyCelsiusForecast;
}

exports.getHourlyFahrenheitForecast = (foundLocations) => {
    const hourlyFahrenheitForecast = [];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    foundLocations.forecast.forecastday.forEach ((dateFound) => {
        dateFound.hour.map((hour) => {
            const newHourForecast = {};
            const {forecastHour, hours, minutes} = getFormattedTime(hour);

            // newHourForecast['Time'] = `${days[forecastHour.getDay()]}, ${forecastHour.getDate()}, ${hours}:${minutes}`;
            newHourForecast['Time'] = `${days[forecastHour.getDay()]}, ${hours}:${minutes}`;
            newHourForecast['Temperature'] = hour.temp_f + " °F";
            newHourForecast['Condition'] = hour.condition.text;
            newHourForecast['Icon'] = hour.condition.icon;
            newHourForecast['Wind'] = hour.wind_mph + " mph";
            newHourForecast['Wind chill'] = hour.windchill_f + " °F";
            newHourForecast['Wind direction'] = hour.wind_dir;
            newHourForecast['Pressure'] = hour.pressure_in + " in";
            newHourForecast['Precipitations'] = hour.precip_in + " in";
            newHourForecast['Humidity'] = hour.humidity + " %";
            newHourForecast['Cloud'] = hour.cloud + " %";
            newHourForecast['Feelslike'] = hour.feelslike_f + " °F";
            newHourForecast['Visibility'] = hour.vis_km + " km";
            newHourForecast['Gust'] = hour.gust_mph + " mph";
            newHourForecast["Chance of rain"] = hour.chance_of_rain + " %";
            newHourForecast["Chance of snow"] = hour.chance_of_snow + " %";

            hourlyFahrenheitForecast.push(newHourForecast);

        })

    });

    return hourlyFahrenheitForecast;
}