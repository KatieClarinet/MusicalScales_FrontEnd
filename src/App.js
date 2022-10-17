import * as React from "react";
import "./App.css";
import SelectInstrument from "./Components/selectInstrument";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import scales from "./Assets/scales.png";

const theme = createTheme({
  typography: {
    fontFamily: 'Fredoka',
  },
    palette: {
        primary: {
            light: "#757ce8",
            main: "#64D8CB",
            dark: "#000051",
            contrastText: "#E91E63",
            pale: "#FF6090",
            spacing: 4,
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    
});

function App() {
    return (
        <>
            <div className="App">
            <div className="main">
            <img src={scales} alt="logo" className="logo"/>
                <ThemeProvider theme={theme}>
                    <div className="form">
                        <SelectInstrument theme={theme} />
                    </div>
                </ThemeProvider>
            </div>
            </div>
        </>
    );
}

export default App;
