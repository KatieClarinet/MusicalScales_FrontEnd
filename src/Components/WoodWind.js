import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicModal from "./modal.js";

const WoodWind = ({ instrument, grade, scales }) => {
    //check that state has been saved
    if (instrument !== "" && grade !== "") {
        console.log(scales);
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
                        let x = Math.floor(Math.random() * scale.Scales.length);

                        let scaleType = scale.Scales[x].Type;
                        console.log(scaleType);
                        let articulationArray;
                        if (scaleType === "Scale") {
                            articulationArray = scale.Articulation.Scale;
                        } else if (scaleType === "Arpeggio") {
                            articulationArray = scale.Articulation.Arpeggio;
                        } else if (scaleType === "Arpeggio 3 Oct") {
                            articulationArray =
                                scale.Articulation.Arpeggio_3_Oct;
                                scaleType = "Arpeggio"
                        } else if (scaleType === "Dominant 7th") {
                            articulationArray = scale.Articulation.Dominant_7th;
                        } else if (scaleType === "Diminished 7th") {
                            articulationArray =
                                scale.Articulation.Diminished_7th;
                        } else if (scaleType === "Chromatic") {
                            articulationArray = scale.Articulation.Chromatic;
                        } else if (
                            scaleType === "Double Stop Scale in Broken Steps"
                        ) {
                            articulationArray =
                                scale.Articulation.Double_Stop_Broken;
                        } else if (
                            scaleType === "Double Stop Scale in Parallel"
                        ) {
                            articulationArray = scale.Articulation.Parallel;
                        } else if (scaleType === "Scale in 3rds") {
                            articulationArray =
                                scale.Articulation.Scale_in_3rds;
                        } else if (scaleType === "Whole-Tone Scale") {
                            articulationArray =
                                scale.Articulation.Whole_Tone_Scale;
                        }

                        let y = Math.floor(
                            Math.random() * articulationArray.length
                        );

                        let keySig = scale.Scales[x].Key;
                        let type = scaleType;
                        console.log(type)
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
                                            {type}
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
                                            {articulationArray[y]}
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
export default WoodWind;
