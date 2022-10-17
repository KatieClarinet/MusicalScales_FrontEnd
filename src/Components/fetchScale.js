import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "./fetchScale.css";
import LoadingSpinner from "./spinner.js";
import WoodWind from "./WoodWind.js";
import Strings from "./Strings";

const FetchScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");
    // eslint-disable-next-line
    const [buttonClicked, setButtonClicked] = React.useState(true);
    const [showButton, setShowButton] = React.useState(false);
    const [error, setError] = React.useState(null);
    // const [woodwind, setWoodwind] = React.useState(null);
    // eslint-disable-next-line
    console.log(instrument.length, "line 17");
    useEffect(() => {
        if (instrument.length > 0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        console.log(instrument, "from line 17");
    }, [instrument]);
console.log(instrument)
//     useEffect(() => {
//         if (instrument === "Clarinet" || instrument === "Saxophone" || instrument === "Flute") {
//             setWoodwind(true);
//         } else {
//             setWoodwind(false);
//         }
//         console.log(instrument, "from line 17");
//     }, [instrument]);
// console.log("woodwind is:", woodwind)
    useEffect(() => {
        //     // "https://scales-practice.onrender.com/api/getAll"
        //     "http://localhost:3000/api/getAll"
        axios
            .get(`https://scales-practice.onrender.com/api/getAll`)
            .then((response) => {
                setScales(response.data);
            })
            .catch((error) => {
                setError(error);
            });

        // eslint-disable-next-line
    }, []);
    console.log("State data:", scales);
    if (error)
        return (
            <>
                <div className="error-title">
                    <h3>SCALES LOADING</h3>{" "}
                </div>
                <div className="error-text">
                    {" "}
                    Can take up to 30 seconds.
                    <br /> Please refresh and try again
                </div>
                <LoadingSpinner />
            </>
        );
    if (!scales)
        return (
            <>
                <div className="error-title">
                    <h3>SCALES LOADING</h3>{" "}
                </div>
                <div className="error-text">
                    {" "}
                    Can take up to 30 seconds.
                    <br /> Please refresh and try again
                </div>
                <LoadingSpinner />
            </>
        );

    const handleClick = (event) => {
        setButtonClicked((current) => !current);
    };

    
    return (
        <div>
            {showButton && (
                <Button
                    sx={{ color: "primary.dark" }}
                    variant="contained"
                    value="{keySig}"
                    onClick={(event) => {
                        handleClick();
                    }}
                >
                    Next Scale
                </Button>
            )}

<WoodWind instrument={instrument} grade={grade} scales={scales}/>

           
        </div>
    );
};

export default FetchScale;