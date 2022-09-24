import * as React from "react";
import "./App.css";
import Form from "./Components/selectInstrument";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f50057',
    },
    accent: {
      main: '#ffff00',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});


function App() {

  

    return (
        <>
        <ThemeProvider theme={theme}>

            <div className="App">
           
                <Form />
           
            </div>
        </ThemeProvider>
        </>
    );
}

export default App;
