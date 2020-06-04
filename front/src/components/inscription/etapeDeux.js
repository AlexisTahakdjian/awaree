import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  texte:{
    marginTop: 20,
    width: '80%',
    textAlign: 'left',
  },
  dividerColor: {
    backgroundColor: "#6AB5EB",
    width: "60px",
    height: 2,
    marginBottom: 18,
    marginTop: 10,
  },
  input: {
    width: '100%',

  },
  desc: {
    marginTop: 40
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 5,
  },
}))

const ITEM_HEIGHT = 58;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const interets = [
  'Danse',
  'Chant',
  'Musique',
  'Jeux Videos',
  'Peinture',
  'Sport'
]

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 const EtapeDeux = () => {
  const classes = useStyles()
   const theme = useTheme();
   const [personName, setPersonName] = React.useState([]);

   const handleChange = (event) => {
     setPersonName(event.target.value);
   };


  return(
    <>
      <Box className={classes.texte}>
        <Typography className={classes.root} variant="h3">
          <strong>Bienvenue jeune <span style={{ color: "red" }}>Padawan</span> ! Créons votre profil</strong>
        </Typography>
        <Typography variant="h5">Tout d’abord, Faisons connaissances ! Ces informations sur vous sont précieuses pour vos futur(e)s collaborateur(trice)s.</Typography>
        <Typography className={classes.desc} variant="h6">Ajouter une description :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <TextField multiline={true} className={classes.input} variant="outlined" rows="10" />
        <Typography className={classes.desc} variant="h6">Ajouter des centres d'intérêts :</Typography>
        <Divider classes={{ root: classes.dividerColor }}/>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            multiple
            variant="outlined"
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {interets.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default EtapeDeux;