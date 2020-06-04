import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import grey from "@material-ui/core/colors/grey"
import pink from "@material-ui/core/colors/pink"
import green from "@material-ui/core/colors/green"


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
    paddingTop: 20,
  },
  dividerColor: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 30,
    marginTop: 10,
  },
  competence: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  note: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    width: 260,
    fontSize: "0.8em"
  },
  circularWaiting:{
    color: grey[500],
  },
  circularQuart:{
    color: pink[500],
  },
  circularDone:{
    color: green[500],
  },
  typoDone:{
    color: green[500]
  },
})

const Projet = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Typography variant="h6">Projets en cours :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.competence}>
            <CircularProgress className={classes.circularQuart} size={70} thickness={28} variant="static" value={25}/>
            <Box className={classes.note}>
              <Typography>Projet Aware</Typography>
              <Typography variant='p'>Compétence travaillée : Developpement front</Typography>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="primary" size={70} thickness={28} variant="static" value={50}/>
            <Box className={classes.note}>
              <Typography>Projet SNCF</Typography>
              <Typography variant="p">Compétence travaillée : Design UX-UI</Typography>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={75}/>
            <Box className={classes.note}>
              <Typography>Projet AXA</Typography>
              <Typography variant="p">Compétence travaillée : Developpement front</Typography>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress size={70} thickness={28} variant="static" value={60}/>
            <Box className={classes.note}>
              <Typography>Projet EDF</Typography>
              <Typography variant="p">Compétence travaillée : Design UX-UI</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Projets terminées :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.competence}>
            <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Projet Uber</Typography>
              <Typography variant="p">Compétence validé : Designer</Typography>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Projet Decathlon</Typography>
              <Typography variant="p">Compétence validé : Management de projet</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Projet