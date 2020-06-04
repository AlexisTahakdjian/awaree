import React from "react"
import PropTypes from 'prop-types';
import ListeCompetence from "./ListeCompetences"
import GraphiqueCompetence from "./graphiqueCompetence"

import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from "@material-ui/core/Divider"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Competences = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="outlined"
        centered
      >
        <Tab label="Liste" {...a11yProps(0)}  />
        <Divider orientation="vertical" flexItem/>
        <Tab label="Graphique" {...a11yProps(1)}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <ListeCompetence/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GraphiqueCompetence/>
      </TabPanel>
    </>
  )
}

export default Competences;