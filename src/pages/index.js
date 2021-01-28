import React, { useState, useEffect, useCallback, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DemosView from './DemosView.js';
import InfoView from './InfoView.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    boxShadow: 0,
  },
  appBar: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(2),
    boxShadow: 0,
  },
  toolBar: {
    shadows: 0,
  },
  title: {
    // flexGrow: 1,
    color: 'black',
    margin: theme.spacing(2),
  },
  tabs: {
    color: 'black',
  },
  tab: {
    minWidth: 100,
    width: 100,
  },
}))


const IndexPage = () => {
  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)
  const [currentTab, setCurrentTab] = useState("word")
  const currentTabRef = useRef(currentTab)

  const handleTabChange = (event, newValue) => {

    event.preventDefault()
    console.log({newValue})

    switch (newValue){
      case 0:
        setCurrentTab("demo")
        break
      case 1:
        setCurrentTab("info")
        break
      default:
        setCurrentTab("demo")
    }

    setTabValue(newValue)
  }

  const displayTab = (tab) => {
    switch (tab){
      case "demos":
        return <DemosView />
      case "info":
        return <InfoView />
      default:
        return <DemosView />
    }
  }

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth={false}>
        <AppBar  className={classes.appBar} position="static">
            <Typography className={classes.title}>
              tracy collins portfolio
            </Typography>
          <Toolbar className={classes.toolBar}>
            <Tabs 
              className={classes.tabs}
              value={tabValue} 
              onChange={handleTabChange}
            >
              <Tab className={classes.tab} label="demos"/>
              <Tab className={classes.tab} label="info"/>
            </Tabs>
          </Toolbar>
        </AppBar>
        {displayTab(currentTab)}
      </Container>
    </div>
  )
}

export default IndexPage
