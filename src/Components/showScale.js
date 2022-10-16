import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./modal";
import axios from 'axios';
import "./showScale.css"

const ShowScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");
    // eslint-disable-next-line
    const [buttonClicked, setButtonClicked] = React.useState(true);
    const [showButton, setShowButton] = React.useState(false);
    const [error, setError] = React.useState(null);
    // eslint-disable-next-line
    // const button = (instrument, grade) => {
    console.log(instrument.length, "line 17");
    useEffect(() => {
        if (instrument.length > 0) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        console.log(instrument, "from line 17");
    }, [instrument]);
    //   }

    useEffect(() => {
        // const fetchScales = async () => {
            // const response = await fetch(
            //     // "https://scales-practice.onrender.com/api/getAll"
            //     "http://localhost:3000/api/getAll"
            // );

            // if (!response.ok) {
            //     console.error("error from line 36")
            //     const message = `An error has occured: ${response.status}`;
            //     throw new Error(message);
            // }

            // const data = await response.json();
            // console.log("data:", data);
            // setScales(data);
            // return data;
            axios.get(`https://scales-practice.onrender.com/api/getAll`).then((response) => {
                setScales(response.data);
              }).catch(error => {
                  
                      setError(error);

              });



        // };
        // fetchScales().catch((error) => {
            //     console.error("error from line 47:", error) // 'An error has occurred: 404'
            // });
            // eslint-disable-next-line
        }, []);
        console.log("State data:", scales);
    if (error) return <div className="error">Scales Loading! <br /> Can take up to 30 seconds. <br />  Please refresh and try again</div>
  if (!scales) return <div className="error">Scales Loading! <br /> Can take up to 30 seconds. <br />  Please refresh and try again</div>

    const handleClick = (event) => {
        setButtonClicked((current) => !current);
    };

    const showScales = () => {
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            return (
                <div>
                    <br />
                    {/* eslint-disable-next-line */}
                    {scales.map((scale) => {
                        if (
                            scale.Grade === grade &&
                            scale.Instrument === instrument
                        ) {
                            //generate random number from scales array
                            let x = Math.floor(
                                Math.random() * scale.Scales.length
                            );
                            //generate number for articulation array
                            let y = Math.floor(
                                Math.random() * scale.Articulation.length
                            );
                            let keySig = scale.Scales[x].Key;
                            let type = scale.Scales[x].Type;
                            const card = (
                                <>
                                    <React.Fragment>
                                        <CardContent
                                            sx={{
                                                bgcolor: "primary.dark",
                                                color: "primary.main",
                                                borderRadius: 3,
                                                boxShadow: 1,
                                                height: 120,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    color: "primary.contrastText",
                                                }}
                                                gutterBottom
                                            >
                                                {scale.Scales[x].Type}
                                            </Typography>
                                            <br />
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                {scale.Scales[x].Key}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    color: "primary.contrastText",
                                                }}
                                            >
                                                {scale.Scales[x].Range}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "primary.pale",
                                                }}
                                            >
                                                {scale.Articulation[y]}
                                            </Typography>
                                            <CardActions></CardActions>
                                        </CardContent>
                                    </React.Fragment>
                                </>
                            );
                            return (
                                <>
                                    <Box
                                        sx={{
                                            minWidth: 275,
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                bgcolor: "primary.dark",
                                                borderRadius: 3,
                                                border: 1,
                                                borderColor: "primary.main",
                                            }}
                                        >
                                            {card}
                                        </Card>
                                    </Box>
                                    <BasicModal keySig={keySig} type={type} />
                                </>
                            );
                        }
                    })}
                </div>
            );
        }
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

            {showScales()}
        </div>
    );
};

export default ShowScale;
