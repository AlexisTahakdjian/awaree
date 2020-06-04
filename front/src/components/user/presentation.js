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


import SportsBasketballIcon from "@material-ui/icons/SportsBasketball"
import BrushIcon from "@material-ui/icons/Brush"
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"
import MicIcon from "@material-ui/icons/Mic"
import AccessibilityIcon from "@material-ui/icons/Accessibility"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

import photoProfil from "../../images/alexis.jpg"

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
    alignItems: "center",
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
  parag: {
    marginTop: 20,
  },
  media: {
    height: "250px",
    //marginBottom: '20px',
  },
  list:{
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  listItem:{
    width: 260,
    marginBottom: 20,
  }

})

const Presentation = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Box className={classes.boxSizeLeft}>
        <Card className={classes.root} variant="outlined">
          <CardMedia
            className={classes.media}
            image={photoProfil}
            title="Photo de profile"
          />
        </Card>
        <Typography variant="h4">{getUser().name}</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Typography variant="h6">{getUser().age}</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Typography variant="h6">{getUser().metier}</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
      </Box>
      <Box className={classes.boxSizeRight}>
        <Typography variant="h6">À propos :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Typography component="p">{getUser().propos}</Typography>
        <Typography classes={{ root: classes.parag }} variant="h6">Centres d’intérêts :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <Box >
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <SportsBasketballIcon/>
              </ListItemIcon>
              <ListItemText primary="Sport"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <BrushIcon/>
              </ListItemIcon>
              <ListItemText primary="Peinture"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <VideogameAssetIcon/>
              </ListItemIcon>
              <ListItemText primary="Jeux Vidéos"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <MicIcon/>
              </ListItemIcon>
              <ListItemText primary="Chant"/>
            </ListItem >
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <AccessibilityIcon/>
              </ListItemIcon>
              <ListItemText primary="Danse"/>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <MusicNoteIcon/>
              </ListItemIcon>
              <ListItemText primary="Musique"/>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Presentation
