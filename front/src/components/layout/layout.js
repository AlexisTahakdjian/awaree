import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { useSelector} from "react-redux"

import  { NavBar }  from "../nav-bar"


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

const Layout = ({ children }) => {

  // const user = useSelector((state)=> state.user);
  // const validToken = useSelector((state)=> state.validToken)

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <NavBar/>
        {children}
      </MuiThemeProvider>
    </>
  )
}

export default Layout
