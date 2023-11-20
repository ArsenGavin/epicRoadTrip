import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useStyles } from "../../styles/misc/loadingStyles";

export default function Loading() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.marge}
      container
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <CircularProgress size="5rem" color="primary" />
      </Grid>
    </Grid>
  );
}
