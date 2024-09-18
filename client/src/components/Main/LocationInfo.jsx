import {Card, CardContent, Grid, Typography} from "@mui/material";
import styles from "./Main.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import PlaceIcon from "@mui/icons-material/Place";

function LocationInfo(props) {

    return (
        <>
            <Card sx={{ maxWidth: "100%", flexGrow: 1, display: "flex"}}>
                <Grid container className={styles.grid_container}>
                    <Grid item xs>
                        <div className={styles.main_block}>
                            <p className={styles.main_title}>{props.locationInfo.name}</p>
                            <p className={styles.sub_title}><span>{props.locationInfo.region}</span></p>
                            <p className={styles.sub_title}><span>{props.locationInfo.country}</span></p>
                        </div>
                    </Grid>
                    <Grid item xs className={styles.card_box_info}>
                        <div className={styles.card_content}>
                            <div className={styles.card_box_info}>
                                <div className={styles.card_infobox_row}>
                                    <AccessTimeIcon className={styles.card_infobox_svg}/>
                                    <p>Local
                                        time: <span>{props.locationInfo.localtime}</span>
                                    </p>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <BrowserUpdatedIcon className={styles.card_infobox_svg}/>
                                    <p>Last
                                        updated: <span>{props.locationInfo['Last updated']}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.card_box_info}>
                                <div className={styles.card_infobox_row}>
                                    <PlaceIcon className={styles.card_infobox_svg}/>
                                    <p>Latitude: <span>{props.locationInfo.lat}</span>
                                    </p>
                                </div>
                                <div className={styles.card_infobox_row}>
                                    <PlaceIcon className={styles.card_infobox_svg}/>
                                    <p>Longitude: <span>{props.locationInfo.lon}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
export default LocationInfo;