import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Avatar from "@material-ui/core/Avatar"
import grey from '@material-ui/core/colors/grey';

import coureur from "../images/background.jpg"

const styles = {
  paperContainer: {
    backgroundImage: `url(${coureur})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "216px",
  },
  navBar: {

},
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  navBar: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "flex-end",
  },
  toolBar:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: theme.spacing(45),
  }
}))

export default () => {
  const classes = useStyles()
  const accent = grey['50'];

  return (
    <div>
      <AppBar className={classes.navBar} style={styles.paperContainer} color="'transparent'" position="static" elevation={0} >
        <Toolbar className={classes.toolBar}>
            <Link style={{ color:'white' }} to="/">Accueil</Link>
            {` `}
            <Link style={{ color:'white' }} to="/app/profile">Mon profil</Link>
            {` `}
          <Link style={{ color:'white' }} to="/app/register">M'enregister</Link>
          {` `}
            {isLoggedIn() ? (
              <a
                style={{ color:'white' }}
                href="/"
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/app/login`))
                }}
              >
                Logout
              </a>
            ) : null}
            <Avatar alt={getUser().name} src={getUser().image} className={classes.large}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}