import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShowScale from "./showScale";

export default function Form({theme}) {
    const [instrument, setinstrument] = React.useState("");
    const [grade, setGrade] = React.useState("");

    const handleChangeInstrument = (event) => {
        setinstrument(event.target.value);
    };
    console.log(instrument);

    const handleChangeGrade = (event) => {
        setGrade(event.target.value);
    };
    console.log(grade);

   

      

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" color="secondary">
                        Instrument
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={instrument}
                        label="instrument"
                        onChange={handleChangeInstrument}
                    >
                        <MenuItem value={"Clarinet"}>Clarinet</MenuItem>
                        <MenuItem value={"Violin"}>Violin</MenuItem>
                        <MenuItem value={"Piano"}>Piano</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" color="secondary">Grade</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={grade}
                        label="grade"
                        onChange={handleChangeGrade}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <ShowScale instrument={instrument} grade={grade}/>
        </>
    );
}
