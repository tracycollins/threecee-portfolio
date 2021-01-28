import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const InfoView = (props) => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.grid}>
        <Grid item className={classes.gridItem} xs={3}>
          <Card className={classes.card} variant="outlined">
            <CardContent >
                <Typography >
                  INFO!
                </Typography>
            </CardContent>
            <CardContent >
                <Typography>description</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default InfoView;
