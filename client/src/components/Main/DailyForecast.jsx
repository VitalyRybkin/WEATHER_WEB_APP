import styles from "./DailyForecast.module.css";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import WaterIcon from "@mui/icons-material/Water";
import BathroomIcon from "@mui/icons-material/Bathroom";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { v4 as uuidv4 } from 'uuid';

function DailyForecast(props) {

    const dailyForecast = Array.from(props.dailyForecast);

    const dailyCardsList = dailyForecast.map((dailyForecast) => {

        return(
            <>
                <div className={styles.card} key={uuidv4()}>
                    <p key={uuidv4()} className={styles.date_title}>
                        {dailyForecast.Date}
                    </p>
                    <div key={uuidv4()} style={{height: 40}}>
                        <div className={styles.card_box_image}>
                            <img src={`https:${dailyForecast.Icon}`} alt="weather picture"/>
                        </div>
                    </div>
                    <div key={uuidv4()} style={{padding:"0"}}>
                        <div style={{textAlign: "center"}} key={uuidv4()} >
                            <div key={uuidv4()} className={styles.main_title}>
                                {dailyForecast.Condition}
                            </div>

                            <div  key={uuidv4()} className={styles.sub_title}>
                                <p>Max</p> <span>{dailyForecast["Max temp."]}</span>
                            </div>

                            <div  key={uuidv4()} className={styles.sub_title}>
                                <p>Min</p> <span>{dailyForecast["Min temp."]}</span>
                            </div>

                            <div  key={uuidv4()} className={styles.sub_title} style={{marginBottom: "1rem"}}>
                                <p>Avg</p> <span>{dailyForecast["Avg temp."]}</span>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()}>
                                <AirIcon key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div  key={uuidv4()} className={styles.card_infobox_text}>
                                    <p key={uuidv4()}>Max wind:</p>
                                    <span key={uuidv4()}>{dailyForecast["Max wind"]}</span>
                                </div>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()}>
                                <VisibilityIcon key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div className={styles.card_infobox_text}>
                                    <p>Vis.:</p>
                                    <span>{dailyForecast["Avg visibility"]}</span>
                                </div>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()}>
                                <WaterIcon key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div className={styles.card_infobox_text}>
                                    <p>Hum.:</p>
                                    <span>{dailyForecast["Avg humidity"]}</span>
                                </div>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()} >
                                <BathroomIcon key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div className={styles.card_infobox_text}>
                                    <p>Precip.:</p>
                                    <span>{dailyForecast["Total precipitations"]}</span>
                                </div>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()}>
                                <WaterDropIcon key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div className={styles.card_infobox_text}>
                                    <p>Rain:</p>
                                    <span>{dailyForecast["Chance of rain"]}</span></div>
                            </div>

                            <div className={styles.card_infobox_row} key={uuidv4()}>
                                <AcUnitIcon  key={uuidv4()} className={styles.card_infobox_svg}/>
                                <div className={styles.card_infobox_text}>
                                    <p>Snow:</p>
                                    <span>{dailyForecast["Chance of snow"]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            {dailyCardsList}
        </>
    )
}
export default DailyForecast;