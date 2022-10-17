
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import BasicModal from "./modal";

const Strings = ({ instrument, grade, scales }) => {
    if (instrument !== "" && grade !== "") {

    
    console.log("scales from line 11", scales)
    const results = scales.filter(obj => {
        return obj.Instrument === "Violin";
      });
      console.log(results)
    return (
        <div>
            <br />
            {/* eslint-disable-next-line */}
            {results.map((scale) => {
                console.log(scale)
                console.log(scale.Scales.length)

                 {
                    //generate random number from scales array
                    let x = Math.floor(
                        Math.random() * scale.Scales.length
                    );
                    console.log(x)
                console.log(scale.Scales[x].Articulation)
                    
                    
                    //generate number for articulation array
                     let y = Math.floor( 
                         Math.random() * scale.Scales[x].Articulation.length 
                   );
                   console.log("y:", y)
                     {/* let keySig = scale.Scales[x].Key;
                    let type = scale.Scales[x].Type; */}
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
                                        {/* {scale.Scales[x].Type} */}
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="h5"
                                        component="div"
                                    >
                                        {/* {scale.Scales[x].Key} */}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mb: 1.5,
                                            color: "primary.contrastText",
                                        }}
                                    >
                                        {/* {scale.Scales[x].Range} */}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "primary.pale",
                                        }}
                                    >
                                        {/* {scale.Articulation[y]} */}
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
                            {/* <BasicModal keySig={keySig} type={type} /> */}
                        </>
                    );
                }
            })}
        </div>
    );
        }
}

export default Strings