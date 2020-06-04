import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CardMedia from "@material-ui/core/CardMedia"
import photoEntreprise from "../../images/Le_coq_sportif_LOGO_AWAY.png"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Avatar from '@material-ui/core/Avatar';
import RejoindreProjet from "./RejoindreProjet"
import Mathilde from "../../images/matilde.png"
import Clotilde from "../../images/Clotilde.jpg"

const useStyles = makeStyles(theme =>({
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
  main: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  part: {
    width: "100%",
    border: "5px solid #6AB5EB",
    borderRadius: "15px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  partdeux: {
    width: "100%",
    border: "5px solid #6AB5EB",
    borderRadius: "15px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 15,
  },
  dividerColor: {
    backgroundColor: " #6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 15,
    marginTop: 15,
  },
  dividerDate: {
    backgroundColor: " #6AB5EB",
    width: "40px",
    height: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  media: {
    height: "250px",
    width: "250px",
    margin: 10,
  },
  text:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  membre:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 30
  },
  date:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    padding: 20,
    border: "2px solid #6AB5EB",
    borderRadius: "15px",
  },
  button: {
    margin: 10,
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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

const InformationProjet = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.main}>
          <Box className={classes.part}>
            <CardMedia
              className={classes.media}
              image={photoEntreprise}
              title="logo entreprise"
            />
            <Box className={classes.text}>
              <Typography variant="h5" ><Box fontWeight="fontWeightBold">Porteur du projet :</Box></Typography>
              <Divider classes={{ root: classes.dividerColor }}/>
              <Typography variant="p" >Le Coq Sportif</Typography>
              <Box className={classes.date}>
                <Typography variant="h6" ><Box fontWeight="fontWeightBold">Départ :</Box></Typography>
                <Divider classes={{ root: classes.dividerDate }}/>
                <Typography variant="p" >Dans 100 jours</Typography>
              </Box>
              <Button variant="contained" color="primary">Visiter le profile</Button>
            </Box>
          </Box>
          <Box className={classes.partdeux}>
            <Box className={classes.membre}>
              <Typography variant="h5" ><Box fontWeight="fontWeightBold">Porteur du projet :</Box></Typography>
              <Divider classes={{ root: classes.dividerColor }}/>
              <Box className={classes.competence}>
                <Avatar alt="Remy Sharp" src={Clotilde} className={classes.large} />
                <Box className={classes.note}>
                  <Typography>Clotilde Dupond</Typography>
                  <Typography variant="p">Chef de projet</Typography>
                </Box>
              </Box>
              <Box className={classes.competence}>
                <Avatar alt="Remy Sharp" src={Mathilde} className={classes.large} />
                <Box className={classes.note}>
                  <Typography>Matilde Dumont</Typography>
                  <Typography variant="p">Developpement Front-End</Typography>
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

export default InformationProjet