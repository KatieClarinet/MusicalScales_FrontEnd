import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ShowScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");
    const [buttonClicked, setButtonClicked] = React.useState(true);

    useEffect(() => {
        const fetchScales = async () => {
            const response = await fetch("http://localhost:3000/api/getAll");
            const data = await response.json();
            // console.log("data", data);
            setScales(data);
        };
        fetchScales();
    }, []);
    // console.log("state scales", scales);


    const handleClick = (event) => {
setButtonClicked(current => !current)
    }

    useEffect(() => {
showScales()
    }, [handleClick]);

    const showScales = () => {
        console.log("instrument", instrument);
        console.log("grade", grade);
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            // console.log("instrument and grade have been selected");

            return (
                <div>
                    {scales.map((scale) => {
                        if (scale.Grade === grade) {

                            //length of majors array
                            let x = Math.floor(
                                Math.random() * scale.Scales.length
                            );
                            console.log(x);
                            const card = (
                                <React.Fragment>
                                    <CardContent>
                                        {/* <Typography
                                            sx={{ fontSize: 14 }}
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {/* Word of the Day */}
                                        {/* </Typography> */}
                                        <br />
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            {scale.Scales[x].Key}
                                        </Typography>
                                        <Typography
                                            sx={{ mb: 1.5 }}
                                            color="text.secondary"
                                        >
                                            Range: {scale.Scales[x].Range}
                                        </Typography>
                                        {/* <Typography variant="body2">
                                        Range: {scale.Scales[x].Range}
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </React.Fragment>
                            );
                            console.log(
                                "scale.grade:",
                                scale.Grade,
                                "grade:",
                                grade
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

            <button onClick={() => {
        handleClick();
      }}>Pick a Scale</button>
        </div>
    );
};

export default ShowScale;
