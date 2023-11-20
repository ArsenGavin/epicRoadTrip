import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useEffect, useState } from "react";
import {
  DirectionsRounded,
  DirectionsBikeRounded,
  RoomRounded,
  VisibilityRounded,
  ShareRounded,
} from "@material-ui/icons";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import MuiAlert from "@material-ui/lab/Alert";
import { useStyles } from "../../styles/components/roadtripCardStyles";
import AssignmentIcon from "@material-ui/icons/Assignment";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RoadTripCard({ roadtrip }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [activities, setActivities] = useState(0);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    roadtrip.steps.map((trip) => {
      if (trip.activities.length > 0) {
        setActivities(trip.activities.length);
        setPhoto(trip.activities[0].photo);
      }
    });
  }, []);

  console.log("roadtrip :>> ", roadtrip);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const generateTextShare = () => {
    let text = "";
    for (let index = 0; index < roadtrip.steps.length; index++) {
      const step = roadtrip.steps[index];
      if (index === 0) text += `Départ: ${step.name} (${step.activities.length} activités de prévues)\n`;
      if (index === roadtrip.steps.length - 1) text += `Arrivé: ${step.name} (${step.activities.length} activités de prévues)\n`;
      if (index !== roadtrip.steps.length - 1 && index !== 0) text += `Escale ${index}: ${step.name} (${step.activities.length} activités de prévues)\n`;
    }
    return text;
  };

  return (
    <Grid item sm={11} md={6} direction="row" alignItems="center" justify="space-between">
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={photo}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Typography component="h5" variant="h5">
                {roadtrip.steps[0].name} - {roadtrip.steps[roadtrip.steps.length -1].name}
              </Typography>
              <Grid
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <IconButton 
                  className={classes.IconButtonS} 
                  aria-label="share" 
                  component="span"
                  onClick={() => {
                    if (navigator.canShare()) {
                      navigator.share({
                        title: "My road trip",
                        text: generateTextShare(),
                        url: "https://epicroad.herokuapp.com/"
                      });
                    } else {
                      handleClick();
                    }
                  }}
                >
                  <ShareRounded />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <DirectionsRounded />
              <Typography variant="body2">{roadtrip.steps.length} {t("MyRoadTrip.Destinations")}</Typography>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <RoomRounded />
              <Typography variant="body2">{roadtrip.steps.length - 2} {t("MyRoadTrip.IntermediateStages")}</Typography>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <DirectionsBikeRounded />
              <Typography variant="body2">
                {activities} {t("MyRoadTrip.SelectedActivities")}
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              
            </Grid>
            <Grid
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonModify}
                startIcon={<VisibilityRounded />}
              >
                {t("MyRoadTrip.Details")}
              </Button>
            </Grid>
          </CardContent>
        </div>
      </Card>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert 
          onClose={handleClose} 
          severity="warning"
          action={
            <IconButton aria-label="delete" onClick={() => { navigator.clipboard.writeText(generateTextShare());}}>
              <AssignmentIcon />
            </IconButton>
          }
        >
          {"Votre navigateur n'est pas compatible. Vous pouvez copier ce texte et le partager avec vos amis."}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
