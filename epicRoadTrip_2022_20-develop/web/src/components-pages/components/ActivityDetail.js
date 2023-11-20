import React, { forwardRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  CardMedia,
} from "@material-ui/core";
import imagePlaceholder from "../../assets/imageplaceholder.jpg";
import { AddLocation } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateDetailsDialog } from "../../store/roadtripContext/roadtripSlice";
import { useStyles } from "../../styles/components/activityDetail";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivityDetail({ activity }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isDetailsOpen } = useSelector(state => state.roadtrip);

  useEffect(() => {
  }, [isDetailsOpen]);

  const handleRoadtrip = () => {
    handleClose();
    //dispatch add to road trip
  };

  const handleClose = () => {
    dispatch(updateDetailsDialog());
  };

  return (
    <div>
      <Dialog
        className={classes.card}
        open={isDetailsOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="dialog-title">{activity.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {activity.website}
          </DialogContentText>
          <CardMedia
            className={classes.media}
            image={activity.photo ? activity.photo : imagePlaceholder}
            title={activity.name}
          />
          <DialogContentText id="dialog-description">
            {activity.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="outlined"
            endIcon={<AddLocation/>}
            onClick={handleRoadtrip}
          >
            Add to Road Trip
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
