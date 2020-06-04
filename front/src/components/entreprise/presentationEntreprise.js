import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import photoEntreprise from '../../images/Le_coq_sportif_LOGO_AWAY.png'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles({
  root: {
    fontSize: "20px",
    minWidth: 275,
    marginBottom: "20px",
  },
  box:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  boxSizeRight: {
    width: "60%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  boxSizeLeft: {
    width: "40%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerColor: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 30,
    marginTop: 10,
  },
  dividerEntreprise: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  parag: {
    marginTop: 20,
  },
  media: {
    height: "250px",

  },
  list:{
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  listItem:{
    width: 260,
    display: "flex",
    flexFlow: "column",
    justifyContent: 'center',
    alignItems: 'center'
  }

})

const PresentationEntreprise = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Box className={classes.boxSizeLeft}>
        <Card className={classes.root} variant="outlined">
          <CardMedia
            className={classes.media}
            image={photoEntreprise}
            title="logo entreprise"
          />
        </Card>
        <Typography variant="h5">Nom de l’entreprise</Typography>
        <Divider classes={{ root: classes.dividerEntreprise }}/>
        <Typography variant="h6">Le Coq Sportif</Typography>
        <Typography style={{ marginTop: "40px" }} variant="h5">Qui gère cette page ?</Typography>
        <Divider classes={{ root: classes.dividerEntreprise }}/>
        <Typography variant="h6">DRH</Typography>
      </Box>
      <Box className={classes.boxSizeRight}>
        <Typography variant="h6">À propos :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada vel, sit tincidunt purus massa. Ipsum, tristique in orci elit. Ullamcorper mi pellentesque proin arcu elementum suspendisse condimentum sed. Quam ridiculus tincidunt tristique nibh scelerisque velit mauris eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada vel, sit tincidunt purus massa. Ipsum, tristique in orci elit. Ullamcorper mi pellentesque proin arcu elementum suspendisse condimentum sed. Quam ridiculus tincidunt tristique nibh scelerisque </Typography>
        <Typography classes={{ root: classes.parag }} variant="h6">Contacts :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Box >
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <PhoneIphoneIcon/>
              </ListItemIcon>
              <ListItemText primary="06-XX-XX-XX-XX"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <EmailIcon/>
              </ListItemIcon>
              <ListItemText primary="le-coq-sportif@gmail.com"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <ApartmentIcon/>
              </ListItemIcon>
              <ListItemText primary="987-876-890-8679"/>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default PresentationEntreprise