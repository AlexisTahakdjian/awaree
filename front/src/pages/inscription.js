import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import backgroundImage from "../images/background.jpg"
import EtapeUn from "../components/inscription/etapeUn"
import EtapeDeux from "../components/inscription/etapeDeux"
import EtapeTrois from "../components/inscription/etapeTrois"
import EtapeQuatre from "../components/inscription/etapeQuatre"


const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
  all: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    width: "100%",
  },
  gauche: {
    width: "30vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  droite: {
    width: "70vw",
    height: "100vh",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  texte: {
    width: "80%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  stepper: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
})

function getSteps() {
  return ["", "", "", "", ""]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EtapeUn/>
    case 1:
      return <EtapeDeux/>
    case 2:
      return <EtapeTrois/>
    case 3:
      return <EtapeQuatre/>
    case 4:
      return "This is the bit I really care about!"
    default:
      return "Unknown step"
  }
}

const Inscription = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <>
      <Box className={classes.all}>
        <Box className={classes.gauche}></Box>
        <Box className={classes.droite}>
          <div className={classes.texte}>
            {activeStep === steps.length ? (
              <div style={{ marginTop: 20 }}>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className={classes.stepper}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>

        </Box>
      </Box>
    </>
  )
}

export default Inscription