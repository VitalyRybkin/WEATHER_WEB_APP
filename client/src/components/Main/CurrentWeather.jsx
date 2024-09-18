import {Card, Grid} from "@mui/material";
import styles from "./Main.module.css";
import AirIcon from "@mui/icons-material/Air";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import StormIcon from "@mui/icons-material/Storm";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WaterIcon from "@mui/icons-material/Water";
import BathroomIcon from "@mui/icons-material/Bathroom";
import "../../index.css"

function CurrentWeather(props) {

    return (
        <>
            <Card sx={{ maxWidth: "100%", flexGrow: 1, display: "flex"}}>
                <Grid container className={styles.grid_container}>
                    <Grid className={styles.grid_cell} item xs sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem"}}>
                        <div className={styles.main_block}>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div className={styles.card_box_image}>
                                    <img src={`https:${props.currentWeather.Icon}`} alt="weather picture"/>
                                </div>
                            </div>
                            <div style={{padding: "0", display: "flex", alignItems: "center"}}>
                                <div style={{textAlign: "center", minWidth: "200px"}}>
                                    <p className={styles.main_title}>
                                        {props.currentWeather.Condition}
                                    </p>
                                    <p className={styles.sub_title}>
                                        Temp.: <span>{props.currentWeather.Temperature}</span>
                                    </p>
                                    <p className={styles.sub_title}>
                                        Feels like: <span>{props.currentWeather.Feelslike}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.card_content}>
                            <div className={styles.card_box_info}>
                                <div className={styles.card_infobox_row}>
                                    <AirIcon className={styles.card_infobox_svg}/>
                                    <p>Wind:</p> <span>{props.currentWeather.Wind}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <SouthEastIcon className={styles.card_infobox_svg}/>
                                    <p>Wind direction:</p> <span>{props.currentWeather['Wind direction']}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <StormIcon className={styles.card_infobox_svg}/>
                                    <p>Gust:</p> <span>{props.currentWeather.Gust}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <BarChartIcon className={styles.card_infobox_svg}/>
                                    <p>Pressure:</p> <span>{props.currentWeather.Pressure}</span>
                                </div>
                            </div>
                            <div className={styles.card_box_info}>
                                <div className={styles.card_infobox_row}>
                                    <CloudQueueIcon className={styles.card_infobox_svg}/>
                                    <p>Cloud:</p> <span>{props.currentWeather.Cloud}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <VisibilityIcon className={styles.card_infobox_svg}/>
                                    <p>Visibility:</p> <span>{props.currentWeather.Visibility}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <BathroomIcon className={styles.card_infobox_svg}/>
                                    <p>Precipitations:</p> <span>{props.currentWeather.Precipitations}</span>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <WaterIcon className={styles.card_infobox_svg}/>
                                    <p>Humidity:</p> <span>{props.currentWeather.Humidity}</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
export default CurrentWeather;