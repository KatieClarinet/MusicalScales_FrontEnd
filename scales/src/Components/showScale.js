import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./modal";

const ShowScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");
    // eslint-disable-next-line
    const [buttonClicked, setButtonClicked] = React.useState(true);


    useEffect(() => {
        const fetchScales = async () => {
            const response = await fetch("http://localhost:3000/api/getAll");
            const data = await response.json();

            setScales(data);
        };
        fetchScales();
    }, []);

    const handleClick = (event) => {
        setButtonClicked((current) => !current);
 };

    // useEffect(() => {
    //     setShowScalesBlock(true)
    //     // eslint-disable-next-line
    // }, [handleClick]);

    const showScales = () => {
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            return (
                <div>
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
                                <><React.Fragment>
                                    <CardContent
                                        sx={{
                                            bgcolor: "primary.dark",
                                            color: "primary.main",
                                            borderRadius: 3,
                                            boxShadow: 1,
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
                                        <CardActions>
                                            {/* <Button size="small"

>Hint</Button> */}
                                        </CardActions>
                                    </CardContent>
                                </React.Fragment>
                                </>
                            );
                    console.log("keySig", keySig)
                            return (
                                <>
                                    <Box
                                        sx={{
                                            minWidth: 275,
                                            border: 2,
                                            borderColor: "primary.main",
                                            borderRadius: 3,
                                        }}
                                    >
                                        <Card sx={{ bgcolor: "primary.main" }}>
                                            {card}
                                        </Card>
                                    </Box>
                                    <BasicModal keySig={keySig} type={type}/>
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
            {showScales()}
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
           
        </div>
    );
};

export default ShowScale;
