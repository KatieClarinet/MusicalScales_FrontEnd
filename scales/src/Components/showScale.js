import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

    useEffect(() => {
        showScales();
        // eslint-disable-next-line
    }, [handleClick]);


    const showScales = () => {
        console.log("instrument", instrument);
        console.log("grade", grade);
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            return (
                <div>
                 {/* eslint-disable-next-line */}
                    {scales.map((scale) => {
                        if (scale.Grade === grade) {
                            let x = Math.floor(
                                Math.random() * scale.Scales.length
                            );
                            const card = (
                                <React.Fragment>
                                    <CardContent sx={{bgcolor: 'primary.dark', color: '#64D8CB', borderColor: '#64D8CB', borderRadius: 3, boxShadow: 1}}>
                                         <Typography
                                            sx={{ fontSize: 14 }}
                                            
                                            gutterBottom
                                        >
                                            Scale/Arpeggio
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            
                                        >
                                            {scale.Scales[x].Key}
                                        </Typography>
                                        <Typography
                                            sx={{ mb: 1.5 }}
                                            
                                        >
                                            {scale.Scales[x].Range}
                                        </Typography>
                                        <Typography variant="body2">
                                        Articulation
                                            {/* <br />
                                            {'"a benevolent smile"'} */}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Hint</Button>
                                    </CardActions> */}
                                </React.Fragment>
                            );

                            return (
                                <>
                                    <Box sx={{ minWidth: 275 }}>
                                        <Card variant="outlined">{card}</Card>
                                    </Box>
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
            <br />
            <Button
                variant="contained"
                onClick={() => {
                    handleClick();
                }}
            >
                Next Scale
            </Button>
            <CardActions>
                <Button size="small">Hint</Button>
            </CardActions>
        </div>
    );
};

export default ShowScale;
