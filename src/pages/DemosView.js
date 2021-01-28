import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import logo from "/src/images/icon.png";
import wordGif from "/src/images/word.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 2,
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
  grid: {
    border: 0,
    display: 'flex',
    alignItems: 'stretch',
  },
  gridItem: {
    border: 0,
    margin: theme.spacing(1),
  },
  gridHeader: {
    padding: theme.spacing(1),
    border: 0,
    marginBottom: theme.spacing(1),
  },
 
  media: {
    height: 140,
  },
}))

const DemosView = () => {
  const classes = useStyles()

  const openWordSite = () => {
    console.log("open openWordSite")
    window.open("https://word.threeceelabs.com/session", "_blank") //to open new page
  }

  return (
    <>
      <Grid className={classes.grid}>

        <Grid item className={classes.gridItem} xs={3}>
          <Card className={classes.root}>
            <CardActionArea
              onClick={openWordSite}
            >
              <CardMedia
                className={classes.media}
                // image=
                // video={wordVideo}
                image={wordGif}
                title="word"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  word
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Real time data visualization of political activity on Twitter.
                  Uses machine learning and neural networks to categorize Twitter users as "left", "neutral" or "right"
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button> */}
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
            </Card>
        </Grid>

        <Grid item className={classes.gridItem} xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // image={logo}
                title="art:you"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  art:you
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A recommendation app that uses machine learning to help you discover new artists and their work
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
            </Card>
        </Grid>

        <Grid item className={classes.gridItem} xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // image={logo}
                title="hour promise"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  hour promise
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An app that helps you discover and support causes and organizations
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
            </Card>
        </Grid>

      </Grid>
    </>
  )
}

export default DemosView;
