import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { StarRounded, StarBorderRounded, StarHalfRounded } from "@material-ui/icons";

export default function RoadTripCard() {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <div>
        <StarRounded color="primary" />
        <StarRounded color="primary" />
        <StarRounded color="primary" />
        <StarHalfRounded color="primary" />
        <StarBorderRounded color="primary" />
      </div>
      <Typography variant="caption">(120 avis)</Typography>
    </Grid>
  );
}