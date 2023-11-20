import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab, Box, useTheme, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getDrink,
  getEat,
  getEnjoy,
  getSleep,
  getTravel,
  updateFilterDialog
} from "../../store/roadtripContext/roadtripSlice";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import ActivityCard from "./ActivityCard";
import Filter from "./Filter";
import Map from "../components/Map";
import { useStyles } from "../../styles/components/ongletsStyles";
import { convertDistance, getCheckInDate } from "../../utils/functions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={5}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Onglets() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    loading,
    error,
    sleeps,
    eats,
    drinks,
    enjoys,
    travels,
    steps,
    currentStep,
    distance,
    date,
    rating
  } = useSelector(state => state.roadtrip);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!currentStep && steps.length === 0) {
      history.push("/");
      return;
    }
    getData(0);
  }, [steps, currentStep]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getData(newValue);
  };

  const handleFilter = () => {
    dispatch(updateFilterDialog());
  };

  const getData = (index) => {
    switch (index) {
    case 0:
      currentStep
        ? dispatch(getEnjoy(currentStep.coordinates.latitude, currentStep.coordinates.longitude, convertDistance(distance)))
        : dispatch(getEnjoy(steps[0].coordinates.latitude, steps[0].coordinates.longitude, convertDistance(distance)));
      break;
    case 1:
      currentStep
        ? dispatch(getSleep(currentStep.coordinates.latitude, currentStep.coordinates.longitude, getCheckInDate(date)))
        : dispatch(getSleep(steps[0].coordinates.latitude, steps[0].coordinates.longitude, getCheckInDate(date)));
      break;
    case 2:
      currentStep
        ? dispatch(getTravel(currentStep.name))
        : dispatch(getTravel(steps[0].name));
      break;
    case 3:
      currentStep
        ? dispatch(getEat(currentStep.coordinates.latitude, currentStep.coordinates.longitude, rating, convertDistance(distance)))
        : dispatch(getEat(steps[0].coordinates.latitude, steps[0].coordinates.longitude, rating, convertDistance(distance)));
      break;
    case 4:
      currentStep
        ? dispatch(getDrink(currentStep.coordinates.latitude, currentStep.coordinates.longitude))
        : dispatch(getDrink(steps[0].coordinates.latitude, steps[0].coordinates.longitude));
      break;
    default:
      return;
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if (error) return <Error/>;
  if (loading) return <Loading/>;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Enjoy" {...a11yProps(0)} />
          <Tab label="Sleep" {...a11yProps(1)} />
          <Tab label="Travel" {...a11yProps(2)} />
          <Tab label="Eat" {...a11yProps(3)} />
          <Tab label="Drink" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Button color="primary" onClick={handleFilter}>Filter +</Button>
      <Filter/>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          className={classes.test}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <div className={classes.ListAndMap}>
            <div className={classes.List}>
              {enjoys.length > 0 && enjoys.map((enjoy, i) => (
                <ActivityCard
                  activity={enjoy}
                  key={i}
                  step={currentStep ? currentStep.name : steps[0]}
                />
              ))}
            </div>
            <div className={classes.Map}>
              <Map/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.ListAndMap}>
            <div className={classes.List}>
              {sleeps.length > 0 && sleeps.map((sleep, i) => (
                <ActivityCard
                  activity={sleep}
                  key={i}
                  step={currentStep ? currentStep.name : steps[0]}
                />
              ))}
            </div>
            <div className={classes.Map}>
              <Map/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.ListAndMap}>
            <div className={classes.List}>
              {travels.length > 0 && travels.map((travel, i) => (
                <ActivityCard
                  activity={travel}
                  key={i}
                  step={currentStep ? currentStep.name : steps[0]}
                />
              ))}
              Travel
            </div>
            <div className={classes.Map}>
              <Map/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div className={classes.ListAndMap}>
            <div className={classes.List}>
              {eats.length > 0 && eats.map((eat, i) => (
                <ActivityCard
                  activity={eat}
                  key={i}
                  step={currentStep ? currentStep.name : steps[0]}
                />
              ))}
            </div>
            <div className={classes.Map}>
              <Map/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <div className={classes.ListAndMap}>
            <div className={classes.List}>
              {drinks.length > 0 && drinks.map((drink, i) => (
                <ActivityCard
                  activity={drink}
                  key={i}
                  step={currentStep ? currentStep.name : steps[0]}
                />
              ))}
            </div>
            <div className={classes.Map}>
              <Map/>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
