import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import RoadTripCard from "../components/RoadTripCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { useStyles } from "../../styles/components/myRoadtripsStyles";
import { getRoadtrips } from "../../store/roadtripContext/roadtripSlice";
import Error from "../misc/Error";
import { useTranslation } from "react-i18next";

export default function MyRoadTrips() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { myRoadtrips, error } = useSelector(state => state.roadtrip);
  const { user } = useSelector(state => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getRoadtrips(user.id));
  }, []);

  if (error) return <Error />;

  return (
    <>
      <Navbar/>
      <Container maxWidth="lg">
        <BackButton/>
        <Grid container direction="row" alignItems="center" justify="space-between">
          <Typography variant="h3">{t("Account.MyRoadtrips")}</Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddRounded/>}
            onClick={() => history.push("/")}
          >
            {t("MyRoadTrip.NewRoadTrip")}
          </Button>
        </Grid>
        <div className={classes.root}>
          <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
            {myRoadtrips.length > 0 && myRoadtrips.map((data, idx) => (
              <RoadTripCard key={idx} roadtrip={data} />
            ))}
          </Grid>
        </div>
      </Container>
      <Footer/>
    </>
  );
}