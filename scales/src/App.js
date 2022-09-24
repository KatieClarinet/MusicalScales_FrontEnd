import * as React from "react";
import "./App.css";
import Form from "./Components/selectInstrument";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
      spacing: 4,
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {

  

    return (
        <>
        <ThemeProvider theme={theme}>

            <div className="App">
           <h1>Title here...</h1>
                <Form theme={theme}/>
           
            </div>
        </ThemeProvider>
        </>
    );
}

export default App;
