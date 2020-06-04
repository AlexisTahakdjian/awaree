import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import format from "date-fns/format";
import frLocale from "date-fns/locale/fr";


const useStyles = makeStyles({
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
  dividerVertical:{
    backgroundColor: "#6AB5EB",
    width: 2,
    height: 230,
    marginLeft: 20,
    marginRight: 20
  },
  inputName: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  input:{
    marginBottom: 30
  }
})

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

const EtapeUn = () => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = React.useState( Date.now);

  return (
    <>
      <Box className={classes.texte}>
        <Typography className={classes.root} variant="h3">
          <strong>Bienvenue jeune <span style={{ color: "red" }}>Padawan</span> ! Créons votre profil</strong>
        </Typography>
        <Typography variant="h5">Tout d’abord, Faisons connaissances ! Ces informations sur vous sont précieuses pour
          vos futur(e)s collaborateur(trice)s.</Typography>
        <Box className={classes.inputName}>
          <Box >
            <Typography variant="h6">Nom :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <TextField className={classes.input} variant="outlined" />
            <Typography variant="h6">Prenom :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <TextField className={classes.input} variant="outlined" />
          </Box>
          <Divider orientation="vertical" classes={{ root: classes.dividerVertical }}/>
          <Box>
            <Typography variant="h6">Date de naissance :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
            <KeyboardDatePicker
              disableToolbar
              variant="dialog"
              format="d MMM yyyy"
              margin="normal"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            </MuiPickersUtilsProvider>
            <Typography variant="h6">Compétence principale :</Typography>
            <Divider classes={{ root: classes.dividerColor }}/>
            <TextField className={classes.input} variant="outlined" />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Ajouter une photo :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Button
            variant="contained"
            component="label"
            color="primary"
            size="large"
            startIcon={<CloudUploadIcon />}
          >
            Selectionnez l'image
            <input
              type="file"
              style={{ display: "none" }}
            />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default EtapeUn