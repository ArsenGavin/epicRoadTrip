import React from "react";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateDepartureArrival, updateStep } from "../../store/roadtripContext/roadtripSlice";
import { TOP_CITY_LIST } from "../../utils/constants";
import { useStyles } from "../../styles/components/placeStyles";

export default function Place({ city }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRoadTrip = () => {
    if (city.name === "Paris") {
      dispatch(updateDepartureArrival(city, TOP_CITY_LIST[1]));
      dispatch(updateStep(city));
      dispatch(updateStep(TOP_CITY_LIST[1]));
    }
    if (city.name !== "Paris") {
      dispatch(updateDepartureArrival(city, TOP_CITY_LIST[0]));
      dispatch(updateStep(city));
      dispatch(updateStep(TOP_CITY_LIST[0]));
    }
    history.push("/roadtripinit");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} onClick={handleRoadTrip}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={city.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  {city.name}
                </Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  {city.country}
                </Typography>
                <Typography variant="body2" className={classes.descriptionPlace}>
                  {city.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}