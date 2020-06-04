import React from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import ReactPlayer from "react-player"
import CircularProgress from "@material-ui/core/CircularProgress"
import grey from "@material-ui/core/colors/grey"
import Button from "@material-ui/core/Button"
import RejoindreProjet from "./RejoindreProjet"

const useStyles = makeStyles({
  root: {
    fontSize: "20px",
    minWidth: 275,
    marginBottom: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerColor: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 20,
    marginTop: 10,
  },
  main: {
    width: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
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
    fontSize: "0.8em",
  },
  allCompetence: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  circularDone: {
    color: grey[500],
  },
  button: {
    margin: 10,
  },
})


const DescriptionProjet = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.main}>
          <Typography variant="h5">Nom du projet : <span
            color="secondary">Le coq sportif x decathlon</span></Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <ReactPlayer width={800} url="https://youtu.be/tMH0qZFHv-k" controls/>
          <Box mt={4}>
            <Typography variant="h5">Description :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h5">Compétences requises :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <Box className={classes.allCompetence}>
              <Box className={classes.competence}>
                <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>Graphisme</Typography>
                  <Typography variant="p">Niveau : Yoda I Am</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <CircularProgress color="secondary" size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>Developpement Front-End</Typography>
                  <Typography variant="p">À son poste : Clotilde Dupond</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>UX Design</Typography>
                  <Typography variant="p">Niveau : I am a master</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>Developpement Back-End</Typography>
                  <Typography variant="p">Niveau : I am a padawan</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <CircularProgress color="secondary" size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>Chef de Projet</Typography>
                  <Typography variant="p">À son poste : Clotilde Dupond</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                  value={100}/>
                <Box className={classes.note}>
                  <Typography>Scrum Master</Typography>
                  <Typography variant="p">Niveau : I am a padawan</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width="100%">
            <Button className={classes.button} variant="contained" color="primary" href={RejoindreProjet}>Rejoindre le
              projet</Button><Button className={classes.button} variant="contained" color="primary">Envoyer un
            message</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DescriptionProjet