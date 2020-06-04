import React from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import DescriptionProjet from "../components/projet/DescriptionProjet"
import InformationProjet from "../components/projet/InformationProjet"
import RejoindreProjet from "../components/projet/RejoindreProjet"

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

const NewProject = () =>   {
  const classes = useStyles;

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }



  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color='transparent' variant="outlined" boxShadow={0} elevation={0}>
          <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Informations" {...a11yProps(1)} />
            <Tab label="Rejoindre" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel display="flex" value={value} index={0}>
          <DescriptionProjet/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InformationProjet/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RejoindreProjet/>
        </TabPanel>

      </div>
    </>
  )
}

export default NewProject