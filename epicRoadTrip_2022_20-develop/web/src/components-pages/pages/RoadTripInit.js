import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Create, NavigateNext } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../misc/Loading";
import Map from "../components/Map";
import Escale from "../components/Escale";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "../misc/Error";
import { useStyles } from "../../styles/pages/roadTripInitStyles";
import { updateRoadtripName } from "../../store/roadtripContext/roadtripSlice";
import { useTranslation } from "react-i18next";

export default function RoadTripInit() {
  const classes = useStyles();
  const { t } = useTranslation();
  const {loading, error, steps, name} = useSelector(state => state.roadtrip);
  const [roadtripName, setName] = useState(name);
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (steps.length === 0) history.push("/");
  }, []);

  const handleChangeRoadTripName = (event) => {
    if (!event.target.value) return;
    setName(event.target.value);
    dispatch(updateRoadtripName(event.target.value.trim()));
  };

  const goToNextStep = () => history.push("/roadtripdetails");

  if (loading) return <Loading/>;
  if (error) return <Error />;

  return (
    <>
      <Navbar/>
      <div className={classes.containerRoadTripInit}>
        <div className={classes.containerTextFieldAndIcon}>
          <TextField
            id="RoadTripName"
            multiline
            rowsMax={4}
            value={roadtripName}
            onChange={handleChangeRoadTripName}
            className={classes.textField}
          />
          <div className={classes.createIcon}>
            <Create />
          </div>
        </div>
        <div className={classes.containerEscaleAndMap}>
          <div className={classes.escale}> 
            <Escale /> 
          </div>
          <div className={classes.map}>
            <Map />
          </div>
        </div>
        <div className={classes.button}>
          <Button id="nextStep"variant="contained" onClick={goToNextStep} endIcon={<NavigateNext />}>{t("MyRoadTrip.next")}</Button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
