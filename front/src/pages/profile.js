import React from "react"
import Presentation from "../components/user/presentation"
import Competences from "../components/user/competences"
import Projet from "../components/user/projet"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Profile = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color='transparent' variant="outlined" boxShadow={0} elevation={0}>
          <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Présentation" {...a11yProps(0)} />
            <Tab label="Compétences" {...a11yProps(1)} />
            <Tab label="Projets" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel display="flex" value={value} index={0}>
          <Presentation/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Competences/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Projet/>
        </TabPanel>
      </div>
    </>)
}

export default Profile