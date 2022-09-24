import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        Hello
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);





const ShowScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");

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
    const showScales = () => {
        console.log("instrument", instrument);
        console.log("grade", grade);
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            // console.log("instrument and grade have been selected");
            
            return (
                <div>
                    {scales.map((scale) => {
                        if (scale.Grade === grade ) {
                        console.log("scale.grade:", scale.Grade, "grade:", grade)
                        
                        //length of majors array
                        let x = Math.floor(Math.random() * scale.Scales.length);
                        console.log(x)
                        return (
                            <><Box sx={{ minWidth: 275 }}>
                                <Card variant="outlined">{card}</Card>
                            </Box><div key={scale.id}>
                                    <h2>{scale.Scales[x].Key}</h2>
                                    <h2>Range: {scale.Scales[x].Range}</h2>

                                    <hr />
                                </div></>
               
                        );
                        }
                    })}
                </div>
            );
        }
    };
    // showScales();


    return <div>
    

    {showScales()}
     
    <button onClick={showScales}>Pick a Scale</button></div>;
};

export default ShowScale;
