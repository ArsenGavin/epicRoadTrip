import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  IconButton
} from "@material-ui/core";
import { AddLocation, Favorite } from "@material-ui/icons";
import imagePlaceholder from "../../assets/imageplaceholder.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addRoadtripActivity, updateDetailsDialog, updateStep } from "../../store/roadtripContext/roadtripSlice";
import ActivityDetail from "./ActivityDetail";
import { updateFavorites } from "../../store/userContext/userSlice";
import { ADD_FAVORI, REMOVE_FAVORI } from "../../utils/constants";
import { useStyles } from "../../styles/components/activityCard";
import { useTranslation } from "react-i18next";

export default function ActivityCard({ activity, step }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user, favoris } = useSelector(state => state.user);
  const { currentStep } = useSelector(state => state.roadtrip);
  const [color, setColor] = useState("#757575");

  useEffect(() => {
    if (favoris.findIndex(favori => favori.name === activity.name) !== -1) {
      handleColor();
    }
  }, [favoris, currentStep]);

  const handleMapActivity = () => {
    dispatch(updateStep(activity));
  };

  const handleDetail = () => {
    dispatch(updateDetailsDialog());
  };

  const addToRoadTrip = () => {
    if (!user) return;
    if (currentStep) {
      dispatch(addRoadtripActivity({
        name: currentStep.name,
        coordinates: {
          latitude: currentStep.coordinates.latitude,
          longitude: currentStep.coordinates.longitude
        },
        activities: currentStep.activities.includes(activity)
          ? currentStep.activities.filter(a => a !== activity)
          : [...currentStep.activities, activity]
      }));
      return;
    }
    dispatch(addRoadtripActivity({
      name: step.name,
      coordinates: {
        latitude: step.coordinates.latitude,
        longitude: step.coordinates.longitude
      },
      activities: step.activities.includes(activity)
        ? step.activities.filter(a => a !== activity)
        : [...step.activities, activity]
    }));
  };

  const addToFavorites = () => {
    if (!user) return;
    if (favoris.findIndex(favori => favori.name === activity.name) === -1) {
      dispatch(updateFavorites(user.id, activity, ADD_FAVORI));
    } else {
      dispatch(updateFavorites(user.id, activity, REMOVE_FAVORI));
    }
    handleColor();
  };

  const handleColor = () => color === "#757575" ? setColor("red") : setColor("#757575");

  return (
    <>
      <ActivityDetail activity={activity}/>
      <Card className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CardMedia
              className={classes.media}
              image={activity.photo ? activity.photo : imagePlaceholder}
              title={activity.name}
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Grid container justifyContent="space-evenly">
                <Grid item xs={6}>
                  <Typography
                    style={{ cursor: "pointer" }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    onClick={handleMapActivity}
                  >
                    {activity.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <IconButton onClick={addToFavorites}>
                    <Favorite htmlColor={color}/>
                  </IconButton>
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" component="p">
                {activity.rate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                variant="outlined"
                endIcon={<AddLocation/>}
                onClick={addToRoadTrip}
              >
                {t("MyRoadTrip.add")}
              </Button>
              <Button
                color="primary"
                style={{ textDecoration: "underline" }}
                onClick={handleDetail}
              >
                Details
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.object,
  step: PropTypes.object
};