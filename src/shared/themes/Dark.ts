import { createTheme } from "@mui/material";
import { red, blueGrey } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: red[700],
            dark: red[800],
            light: red[500],
            contrastText: '#ffffff'
        },
        secondary: {
            main: blueGrey[500],
            dark: blueGrey[400],
            light: blueGrey[300],
            contrastText: '#ffffff'
        },
        background: {
            paper: '#303134',
            default: '#202124'
        }
    }
})