import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import Rating from "@material-ui/lab/Rating"
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"

const labels = {
  1: "I'm a padawan",
  2: "I'm a jedi",
  3: "I'm a master",
  4: "Yoda I am",
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
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
    alignItems: "center",
    marginBottom: 20,
  },
  note: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    width: 260
  },
  texte:{
    display: "flex",
    flexFlow: "row nowrap",
  }
})

const ListeCompetence = () => {
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)


  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10))
    }

    const timer = setInterval(progress, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Typography variant="h6">Compétences techniques :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.competence}>
            <CircularProgress color="primary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Développement Front-End</Typography>
              <Box className={classes.texte}>
                <Rating
                  readOnly
                  defaultValue={2}
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[2]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="primary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Graphisme</Typography>
              <Box className={classes.texte}>
                <Rating
                  defaultValue={4}
                  readOnly
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[4]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="primary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Webdesigner</Typography>
              <Box className={classes.texte}>
                <Rating
                  defaultValue={3}
                  readOnly
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[3]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="primary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Gestion de projet</Typography>
              <Box className={classes.texte}>
                <Rating
                  readOnly
                  defaultValue={1}
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[1]}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Compétences comportementales :</Typography>
          <Divider classes={{ root: classes.dividerColor }}/>
          <Box className={classes.competence}>
            <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Esprit d'équipe</Typography>
              <Box className={classes.texte}>
                <Rating
                  readOnly
                  defaultValue={2}
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[2]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Gestion du stress</Typography>
              <Box className={classes.texte}>
                <Rating
                  defaultValue={4}
                  readOnly
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[4]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Empathie</Typography>
              <Box className={classes.texte}>
                <Rating
                  defaultValue={3}
                  readOnly
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[3]}</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.competence}>
            <CircularProgress color="secondary" size={70} thickness={28} variant="static" value={100}/>
            <Box className={classes.note}>
              <Typography>Confiance en soi</Typography>
              <Box className={classes.texte}>
                <Rating
                  readOnly
                  defaultValue={1}
                  precision={1}
                  max={4}
                  icon={<RadioButtonCheckedIcon/>}
                  emptyIcon={<RadioButtonUncheckedIcon/>}
                />
                <Box ml={2}>{labels[1]}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ListeCompetence