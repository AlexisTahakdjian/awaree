import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"

import Select from "@material-ui/core/Select"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles((theme) => ({
  texte: {
    marginTop: 20,
    width: "80%",
    textAlign: "left",
  },
  dividerColor: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 18,
    marginTop: 10,
  },
  input: {
    width: "70%",

  },
  desc: {
    marginTop: 40,
  },

}))

const ITEM_HEIGHT = 58
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}


const EtapeTrois = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <Box className={classes.texte}>
        <Typography color="secondary" paragraph variant="h4">
          Les compétences techniques
        </Typography>
        <Typography paragraph variant="h6">
          Cette plateforme à été conçue dans le but de mettre en avant les compétences de chacun plus que tout autres
          critères. <br/>
          Elle prône et encourage chacun dans leurs démarches d’amélioration. N’hésites donc pas à ajouter des
          compétences que tu veux améliorer en indiquant ton niveau actuel pour celle-ci.
        </Typography>
        <Typography paragraph variant="h6">
          <strong>Commencons par choisir trois compétences , vous pourrez les modifier ou en ajouter d’autres à tout moment sur votre profil. </strong>
        </Typography>
        <Typography className={classes.desc} variant="h6">Ajouter des compétences techniques :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <TextField className={classes.input} variant="outlined"/>

      </Box>
    </>
  )
}

export default EtapeTrois