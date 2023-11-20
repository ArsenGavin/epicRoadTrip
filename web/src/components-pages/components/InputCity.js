import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import AutoComplete from "react-google-autocomplete";
import { useTranslation } from "react-i18next";
import { GOOGLE_MAP_KEY } from "../../utils/constants";
import {
  updateDepartureArrival,
  updateStep,
} from "../../store/roadtripContext/roadtripSlice";
import { useStyles } from "../../styles/components/inputCityStyles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function InputCity() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [open, setOpen] = useState(false);

  const enter = () => {
    if (event.keyCode === 13) receiveValueDA();
  };

  const receiveValueDA = () => {
    if (!departure || !arrival) {
      setOpen(true);
      return;
    }
    dispatch(updateDepartureArrival(departure, arrival));
    dispatch(updateStep(departure));
    dispatch(updateStep(arrival));
    history.push("/roadtripInit");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.input}>
          <AutoComplete
            id="departure"
            apiKey={GOOGLE_MAP_KEY}
            onPlaceSelected={(place) => {
              setDeparture({
                name: place.name,
                coordinates: {
                  latitude:
                    (place.geometry.viewport.mc.g +
                      place.geometry.viewport.mc.i) /
                    2,
                  longitude:
                    (place.geometry.viewport.Eb.i +
                      place.geometry.viewport.Eb.g) /
                    2,
                },
                activities: [],
              });
            }}
            onKeyPress={enter}
            className={classes.autoCompleteAlt}
            options={{
              fields: ["ALL"],
            }}
          />
          <span className={classes.span} />
          <AutoComplete
            id="arrival"
            apiKey={GOOGLE_MAP_KEY}
            onPlaceSelected={(place) => {
              setArrival({
                name: place.name,
                coordinates: {
                  latitude:
                    (place.geometry.viewport.mc.g +
                      place.geometry.viewport.mc.i) /
                    2,
                  longitude:
                    (place.geometry.viewport.Eb.i +
                      place.geometry.viewport.Eb.g) /
                    2,
                },
                activities: [],
              });
            }}
            onKeyPress={enter}
            className={classes.autoCompleteAlt}
            options={{
              fields: ["ALL"],
            }}
          />
          <div className={classes.search}>
            <Search id="search" onClick={receiveValueDA} />
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="info"
              className={classes.alert}
            >
              {t("MyRoadTrip.error")}
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
}
