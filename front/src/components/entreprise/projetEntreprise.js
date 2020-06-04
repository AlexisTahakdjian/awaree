import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    alignItems: "flex-start",
    marginBottom: 20,
  },
  list: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  note: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    width: 260,
    fontSize: "0.8em",
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

const ProjetEntreprise = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Typography variant="h6">Projets à venir :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.list}>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularWaiting} size={70} thickness={28} variant="static" value={100}/>
              <Box className={classes.note}>
                <Typography variant="h6">1000 bikes challenge</Typography>
                <Typography variant="p"><strong>Départ :</strong> dans 10 jours</Typography>
                <Typography variant='p'><strong>Compétence requises :</strong><span className={classes.typoDone}> complète</span></Typography>
              </Box>
            </Box>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularWaiting} size={70} thickness={28} variant="static" value={100}/>
              <Box className={classes.note}>
                <Typography variant="h6">Le coq sportif x Decatlon</Typography>
                <Typography variant="p"><strong>Départ :</strong> dans 100 jours</Typography>
                <Typography variant='p'><strong>Compétence requises :</strong> kinesithérapeutes, arbitres, entraineurs
                  de foot, photographes</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Projets en cours :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.list}>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularQuart} size={70} thickness={28} variant="static" value={25}/>
              <Box className={classes.note}>
                <Typography variant="h6">1000 bikes challenge</Typography>
                <Typography variant="p"><strong>Avancement :</strong> 25%</Typography>
                <Typography variant='p'><strong>Équipe :</strong><span className={classes.typoDone}> complète</span></Typography>
              </Box>
            </Box>
            <Box className={classes.competence}>
              <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={75}/>
              <Box className={classes.note}>
                <Typography variant="h6">Projet Aware</Typography>
                <Typography variant="p"><strong>Avancement :</strong> 75%</Typography>
                <Typography variant='p'><strong>Équipe :</strong><span className={classes.typoDone}> complète</span></Typography>
              </Box>
            </Box>
            <Box className={classes.competence}>
              <CircularProgress color="primary" size={70} thickness={28} variant="static" value={50}/>
              <Box className={classes.note}>
                <Typography variant="h6">Concours tir à l’arc</Typography>
                <Typography variant="p"><strong>Avancement :</strong> 50%</Typography>
                <Typography variant='p'><strong>Équipe :</strong><span className={classes.typoDone}> complète</span></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Projets terminés :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.list}>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static" value={100}/>
              <Box className={classes.note}>
                <Typography variant="h6">Le coq show</Typography>
                <Typography variant='p'><strong>Objectif :</strong><span className={classes.typoDone}> Atteint</span></Typography>
              </Box>
            </Box>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static" value={100}/>
              <Box className={classes.note}>
                <Typography variant="h6">Le coq sportif x SNCF</Typography>
                <Typography variant='p'><strong>Objectif :</strong><span className={classes.typoDone}> Atteint</span></Typography>
              </Box>
            </Box>
            <Box className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static" value={100}/>
              <Box className={classes.note}>
                <Typography variant="h6">Le coq sportif x BPCE</Typography>
                <Typography variant='p'><strong>Objectif :</strong><span className={classes.typoDone}> Atteint</span></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProjetEntreprise