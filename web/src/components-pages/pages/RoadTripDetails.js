import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { ArrowBackIos, NavigateNext } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Onglets from "../components/Onglets";
import TimelineTrip from "../components/TimelineTrip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useStyles } from "../../styles/pages/roadTripDetailsStyles";
import { useTranslation } from "react-i18next";

export default function RoadTripDetails() {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { steps, name } = useSelector(state => state.roadtrip);

  useEffect(() => {
    if (steps.length === 0) history.push("/");
  }, [name]);

  const goToLastStep = () => history.push("/roadtripinit");
  const goToNextStep = () => history.push("/roadtripfinish");
  return (
    <>
      <Navbar/>
      <div className={classes.containerRoadTripDetails}>
        <div className={classes.containerTitle}>
          <div className={classes.time}>
            <Typography className={classes.nom}>{name}</Typography>
            <TimelineTrip/>
          </div>
          <Onglets/>
        </div>
        <div className={classes.containerButton}>
          <Button variant="contained" onClick={goToLastStep} startIcon={<ArrowBackIos />}>{t("MyRoadTrip.previous")}</Button>
          <Button id="buttonFinish" variant="contained" onClick={goToNextStep} endIcon={<NavigateNext />}>{t("MyRoadTrip.finish")}</Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
