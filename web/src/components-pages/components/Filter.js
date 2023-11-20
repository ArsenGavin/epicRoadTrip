import React, { forwardRef, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Slider,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, updateFilterDialog } from "../../store/roadtripContext/roadtripSlice";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Rating } from "@material-ui/lab";
import { useStyles } from "../../styles/components/filterStyles";
import { BUDGETS, DISTANCES } from "../../utils/constants";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isFilterOpen, distance, budget, rating, date  } = useSelector(state => state.roadtrip);
  const [defaultDate, setDate] = useState(new Date());
  const [defaultDistance, setDistance] = useState(2);
  const [defaultBudget, setBudget] = useState(50);
  const [defaultRating, setRating] = useState(3);

  useEffect(() => {}, [isFilterOpen, distance, budget, rating, date]);

  const handleSearch = () => {
    dispatch(updateFilter(defaultDistance, defaultBudget, defaultRating, defaultDate));
    handleClose();
  };

  const handleClose = () => {
    dispatch(updateFilterDialog());
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleDistance = (event, newValue) => {
    setDistance(newValue);
  };

  const handleBudget = (event, newValue) => {
    setBudget(newValue);
  };

  const handleRating = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Dialog
          className={classes.large}
          open={isFilterOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          fullWidth
        >
          <DialogContent>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="DD/MM/yyyy"
              margin="normal"
              id="date_picker"
              label="Date"
              value={defaultDate}
              onChange={handleDateChange}
            />
            <Typography>Distance</Typography>
            <Slider
              valueLabelDisplay="on"
              value={defaultDistance}
              marks={DISTANCES}
              min={100}
              max={5000}
              onChange={handleDistance}
            />
            <Typography style={{marginTop: "3rem"}}>Budget</Typography>
            <Slider
              valueLabelDisplay="on"
              value={defaultBudget}
              marks={BUDGETS}
              min={100}
              max={1000}
              onChange={handleBudget}
            />
            <Typography>Rate</Typography>
            <Rating
              style={{ color: "#6557F5" }}
              name="rating"
              value={defaultRating}
              onChange={handleRating}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSearch} color="primary">
              Search
            </Button>
          </DialogActions>
        </Dialog>
      </MuiPickersUtilsProvider>
    </>
  );
}