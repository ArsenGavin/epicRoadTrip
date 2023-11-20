import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCurrentStep } from "../../store/roadtripContext/roadtripSlice";

export default function TimelineTrip() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { steps } = useSelector(state => state.roadtrip);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (steps.length === 0) {
      history.push("/");
    }
    cityNumber();
  }, [steps]);

  const cityNumber = () => {
    let number = 100 / (steps.length + 1);
    setHeight(number);
  };

  const useStyles = makeStyles(() => ({
    Timeline: {
      height: "83%",
    },
    TimelineSpan: {
      height: `${height}%`,
    },
    nav: {
      cursor: "pointer"
    }
  }));

  const classes = useStyles();

  const handleSelect = (data) => {
    dispatch(updateCurrentStep(data));
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
                onClick={() => handleSelect(data)}
              >
                {data.name}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
