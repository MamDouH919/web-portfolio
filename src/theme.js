import * as color from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';
import config from './config.json'
// 596174
// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: config.primaryColor.startsWith("#")
                ? config.primaryColor
                : color[`${config.primaryColor}`][500],
        },
        secondary: {
            main: '#19857b',
        },
    },
    typography: {
        fontFamily: [
            "Oswald", "sans-serif"
        ].join(','),
    },
    // typography: {
    //     // fontFamily: [
    //     //     "Frank Ruhl Libre",
    //     //     " sans-serif"
    //     // ].join(','),
    //     // fontSize: 12.5,
    // },
});

export default theme;
