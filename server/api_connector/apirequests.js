require('dotenv').config();

exports.searchLocationByName =  async (locationName) => {
    const apiKey = process.env.API_KEY;
    try {
        const locationFound = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${locationName}`);
        if (locationFound.ok) return await locationFound.json();
        else return locationFound.status;
    } catch (error) {
        if (error instanceof Error) return error;
    }
}

exports.searchLocationById = async (locationLat, locationLon, locationIp) => {

    const apiKey = process.env.API_KEY;
    let url = '';
    locationIp ? url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationIp}&days=3&aqi=no&alerts=no`
        : url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationLat},${locationLon}&days=3&aqi=no&alerts=no`

    try {
        const locationFound = await fetch(url);
        if (locationFound.ok) return await locationFound.json();
        else return locationFound.status;
    } catch (error) {
        if (error instanceof Error) return error;
    }
}



