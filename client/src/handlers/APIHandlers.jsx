import axios from "axios";

export async function searchLocation(lat, lon, ip) {
    let url ;
    typeof ip === "undefined"
        ? url = `http://localhost:3000/?location_lat=${lat}&location_lon=${lon}`
        : url = `http://localhost:3000/?location_ip=${ip}`;

    return await axios.get(url)
        .then((response) => response.data)
        .catch(error => console.log(error));

}

export async function searchLocationByName(name) {

    return await axios.get(`http://localhost:3000/?location_name=${name}`)
        .then((response) => response.data)
        .catch((err) => console.log(err));
}
