import * as React from "react";
import "./App.css";
import Form from "./Components/selectInstrument";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import scales from "./Assets/scales.png";

const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#64D8CB",
            dark: "#000051",
            contrastText: "#fff",
            spacing: 4,
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    select: {
        "&:before": {
            borderColor: "#ba000d",
        },
        "&:after": {
            borderColor: "#ba000d",
        },
        root: {
            color: "#ba000d",
        },
    },
    icon: {
        fill: "#ba000d",
    },
});

function App() {
    return (
        <>
            <img src={scales} alt="logo" />
            <div className="App">
                <ThemeProvider theme={theme}>
                    <div className="form">
                        <Form theme={theme} />
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
