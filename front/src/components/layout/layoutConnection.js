import React from "react"
import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import CssBaseline from '@material-ui/core/CssBaseline';


import backgroundImage from '../../images/background.jpg'


const theme = createMuiTheme({
  palette: {
    primary: { main: "#724CF9" },
    secondary: { main: "#6AB5EB" },
  },
  typography: {
    fontFamily: [
      "Montserrat",
    ].join(","),
  },
})
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    marginTop: -20,
    // padding: -10,
    height: '100vh'
  },
});

const LayoutConnection = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Box className={classes.root}>
          {children}
        </Box>
      </MuiThemeProvider>
    </>
  )
}

export default LayoutConnection