import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShowScale from "./fetchScale";

export default function SelectInstrument({ theme }) {
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
                <FormControl fullWidth theme={theme}>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "primary.main" }}
                    >
                        Instrument
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={instrument}
                        label="instrument"
                        onChange={handleChangeInstrument}
                        labelStyle={{ color: "primary.main" }}
                        sx={{
                            color: "primary.main",
                            borderRadius: 3,
                            boxShadow: 1,
                            
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            ".MuiSvgIcon-root ": {
                                fill: "#E91E63",
                            },
                        }}
                    >
                        <MenuItem value={"Clarinet"}>Clarinet</MenuItem>
                        <MenuItem value={"Flute"}>Flute</MenuItem>
                        <MenuItem value={"Saxophone"}>Saxophone</MenuItem>
                        <MenuItem value={"Violin"}>Violin</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "primary.main" }}
                    >
                        Grade
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={grade}
                        label="grade"
                        onChange={handleChangeGrade}
                        labelStyle={{ color: "primary.main" }}
                        sx={{
                            color: "primary.main",
                            borderRadius: 3,
                            boxShadow: 1,
                            
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.main",
                            },
                            ".MuiSvgIcon-root ": {
                                fill: "#E91E63",
                            },
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <ShowScale instrument={instrument} grade={grade} />
        </>
    );
}
