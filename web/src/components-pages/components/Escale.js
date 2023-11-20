import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { makeStyles, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AutoComplete from "react-google-autocomplete";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEscale } from "../../store/roadtripContext/roadtripSlice";
import { GOOGLE_MAP_KEY } from "../../utils/constants";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TimelineTrip() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { steps, error } = useSelector((state) => state.roadtrip);
  const [height, setHeight] = useState(0);
  const [escale, setEscale] = useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (steps.length === 0) {
      history.push("/");
    }
    cityNumber();
  }, [steps, error]);

  const cityNumber = () => {
    let number = 100 / (steps.length + 1);
    setHeight(number);
  };

  const useStyles = makeStyles(() => ({
    Timeline: {
      // height: "83%",
      // paddingLeft: "80px",
    },
    TimelineSpan: {
      height: `${height}%`,
    },
    nav: {
      cursor: "pointer",
    },
    autocompleteEscale: {
      display: "flex",
      justifyContent: "space-evenly",
    }
  }));

  const classes = useStyles();

  const receiveValueEscale = () => {
    if (!escale) {
      setOpen(true);
      return;
    }
    dispatch(addEscale(escale));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Timeline align="right" className={classes.Timeline}>
        {steps.map((data, idx) => {
          return (
            <TimelineItem className={classes.TimelineSpan} key={idx}>
              <TimelineSeparator>
                <TimelineDot/>
                {steps.length > idx + 1 && <TimelineConnector/>}
              </TimelineSeparator>
              <TimelineContent
                className={classes.nav}
              >
                {data.name}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
      <div className={classes.autocompleteEscale}>
        <AutoComplete
          id="escale"
          apiKey={GOOGLE_MAP_KEY}
          onPlaceSelected={(place) => {
            setEscale({
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
          className={classes.autoCompleteAlt}
          options={{
            fields: ["ALL"],
          }}
        />
        <div className={classes.search}>
          <Search id="search" onClick={receiveValueEscale}/>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            className={classes.alert}
          >
            Please, enter a departure city and an arrival city.
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}