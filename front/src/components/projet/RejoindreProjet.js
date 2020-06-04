import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import CircularProgress from "@material-ui/core/CircularProgress"
import grey from "@material-ui/core/colors/grey"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"

const labels = {
  1: "I'm a padawan",
  2: "I'm a jedi",
  3: "I'm a master",
  4: "Yoda I am",
}

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "20px",
    minWidth: 275,
    marginBottom: "20px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerColor: {
    backgroundColor: " #6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 15,
    marginTop: 15,
  },
  box: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  list: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-around",
    alignItems: "center",
    maxHeight: 400,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  competence: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderRadius: "15px",
    padding: 10,
  },
  note: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    width: 260,
  },
  circularDone: {
    color: grey[500],
  },
  button: {
    marginTop: 10,
  },
  message:{
    marginTop : 20,
    marginBottom: 10,
  },
}))

const RejoindreProjet = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.box}>
          <Typography variant="h5"><Box fontWeight="fontWeightBold">Choisir une compétence :</Box></Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.list}>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
            <Box boxShadow={3} className={classes.competence}>
              <CircularProgress className={classes.circularDone} size={70} thickness={28} variant="static"
                                value={100}/>
              <Box className={classes.note}>
                <Typography>Scrum Master</Typography>
                <Typography variant="p">Niveau : I am a padawan</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.box}>
          <Typography variant="h5"><Box fontWeight="fontWeightBold">Écrire un message :</Box></Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows="12"
            variant="outlined"
            className={classes.message}
          />
          <Button className={classes.button} variant="contained" color="primary" href={RejoindreProjet}>Envoyer</Button>
        </Box>
      </Box>
    </>
  )
}

export default RejoindreProjet