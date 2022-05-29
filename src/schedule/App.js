import React from 'react';
import {createTheme} from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//import { Counter } from './features/counter/Counter';
import Schedule from './features/schedule/Schedule'
//import './App.css';


const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "light",
    primary: {
      main: "#0085dc"
    },
    secondary: {
      main: "#F8E200",
      light: "#F4EA86"
    },
    tertiary:{
      t1: "#F8E200",
      t2: "#525e66",
      t3: "#539f00",

    },
    error: {
      main: "#d0021b"
    },
    background: {
      default: "#000",
      paper: "#fff",
    },
    text: {
      primary: '#363f45',
      secondary: "#525e66",
    },
  }
});

function SApp() {

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Schedule/>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default SApp;
