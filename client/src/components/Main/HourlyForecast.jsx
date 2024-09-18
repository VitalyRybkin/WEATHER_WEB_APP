import {useEffect, useState} from "react";
import {Card, IconButton} from "@mui/material";
import hourlystyles from "./HourlyForecast.module.css";
import styles from "./DailyForecast.module.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BathroomIcon from "@mui/icons-material/Bathroom";
import WaterIcon from "@mui/icons-material/Water";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function HourlyForecast(props) {
    const [minWidth, setMinWidth] = useState(0);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const hourlyForecast = Array.from(props.hourlyForecast);

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);

        const hourlyBlockWidth = document.querySelector(".hourly_block").clientWidth;
        let numOfBlocks = 6;
        if (document.documentElement.scrollWidth < 769 ) numOfBlocks = 3;
        if (document.documentElement.scrollWidth < 321 ) numOfBlocks = 2;
        setMinWidth(Math.floor((hourlyBlockWidth)) / numOfBlocks);

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const marginInnerBlockCount = - (minWidth) * (props.locationInfo.localhour);

    const margin = {
        marginLeft: `${marginInnerBlockCount}px`,
    }

    const hourlyCardsList = hourlyForecast.map((hourlyForecast, i ) => {
        i++;
        let pastHourOpacity;
        i <= props.locationInfo.localhour ? pastHourOpacity = ".3" : pastHourOpacity = "1";

        return(
            <>
                <div
                    key={new Date().getTime()}
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        minWidth: `${minWidth}px`,
                        padding: "1rem",
                        opacity: `${pastHourOpacity}`
                    }}>
                    <p className={styles.date_title}>{hourlyForecast.Time}</p>
                    <div style={{height: 40}}>
                        <div className={styles.card_box_image}>
                            <img src={`https:${hourlyForecast.Icon}`} alt="weather picture"/>
                        </div>
                    </div>
                    <div style={{padding:"0"}}>
                        <div style={{textAlign: "center"}}>
                            <p className={styles.main_title}>{hourlyForecast.Condition}</p>
                            <div  className={styles.sub_title}>
                                <p>Temp.</p> <span>{hourlyForecast["Temperature"]}</span>
                            </div>
                            <div  className={styles.sub_title} style={{marginBottom: ".5rem"}}>
                                <p>Fl.</p> <span>{hourlyForecast["Feelslike"]}</span>
                            </div>
                            <div className={styles.card_infobox_row}>
                                <AirIcon className={styles.card_infobox_svg}/>
                                <p>Wind:</p>
                                <span>{hourlyForecast["Wind"]}</span>
                            </div>

                            <div className={styles.card_infobox_row}>
                                <VisibilityIcon className={styles.card_infobox_svg}/>
                                <p>Vis.:</p>
                                <span>{hourlyForecast["Visibility"]}</span>
                            </div>

                            <div className={styles.card_infobox_row}>
                                <WaterIcon className={styles.card_infobox_svg}/>
                                <p>Hum.:</p>
                                <span>{hourlyForecast["Humidity"]}</span>
                            </div>

                            <div className={styles.card_infobox_row}>
                                <BathroomIcon className={styles.card_infobox_svg}/>
                                <p>Precip.:</p>
                                <span>{hourlyForecast["Precipitations"]}</span>
                            </div>

                            <div className={styles.card_infobox_row}>
                                <WaterDropIcon className={styles.card_infobox_svg}/>
                                <p>Rain:</p>
                                <span>{hourlyForecast["Chance of rain"]}</span>
                                </div>

                            <div className={styles.card_infobox_row}>
                                <AcUnitIcon className={styles.card_infobox_svg}/>
                                <p>Snow:</p>
                                <span>{hourlyForecast["Chance of snow"]}</span></div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    function handleRightClick() {
        const galleryWidth = document.querySelector(".inner_block").clientWidth;
        const galleryWindowWidth = document.querySelector(".hourly_block").clientWidth;
        let galleryMargin = document.querySelector(".inner_block");
        let getMargin = parseInt(document.querySelector(".inner_block").style.marginLeft, 10);
        if (getMargin - galleryWindowWidth > - galleryWidth && getMargin - 2 * galleryWindowWidth > - galleryWidth) {
            getMargin -= galleryWindowWidth;
            galleryMargin.style.marginLeft = getMargin + "px";
        } else {
            galleryMargin.style.marginLeft = - galleryWidth + galleryWindowWidth + "px";
        }
    }

    function handleLeftClick() {
        const galleryWindowWidth = document.querySelector(".hourly_block").clientWidth;
        let galleryMargin = document.querySelector(".inner_block");
        let getMargin = parseInt(document.querySelector(".inner_block").style.marginLeft, 10);
        if (getMargin + galleryWindowWidth < 0 && getMargin + 2 * galleryWindowWidth < 0) {
            getMargin += galleryWindowWidth;
            galleryMargin.style.marginLeft = getMargin + "px";
        } else {
            galleryMargin.style.marginLeft = 0 + "px";
        }
    }

    return (
        <>
            <Card className={`${hourlystyles.hourly__block} hourly_block`} sx={{display: "flex"}}>
                <div className={`${hourlystyles.hourly__block_inner_block} inner_block`} style={margin}>
                    {hourlyCardsList}
                </div>
            </Card>

            <div className={hourlystyles.hourly__block_nav}>
                <div className={`${hourlystyles.hourly__block_nav_block}`}>
                    <a className="gallery__shift-btn prev">
                        <IconButton aria-label="delete" size="large" className={hourlystyles.arrow_btn} onClick={handleLeftClick}>
                            <ArrowCircleLeftIcon/>
                        </IconButton>
                    </a>
                    <a className="gallery__shift-btn next">
                        <IconButton aria-label="delete" size="large" className={hourlystyles.arrow_btn} onClick={handleRightClick}>
                            <ArrowCircleRightIcon/>
                        </IconButton>
                    </a>
                </div>
            </div>

        </>
    )
}

export default HourlyForecast;