import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  containerRoadTripDetails: {
    width: "100%",
    height: "100%",
    margin: "Auto",
    "& div": {
      padding: "0!important",
      marginTop: "2px",
      marginBottom: "2px",
    },
  },
  containerTitle: {
    display: "flex",
    justifyContent: "space-between",
    height: "60vh",
    margin: "2% 0",
    "& p": {
      fontSize: "20px",
      fontWeight: "bold",
      width: "300px",
      textAlign: "center",
    },
  },
  containerButton: {
    display: "flex",
    justifyContent: "space-between",

    "& > *": {
      color: "white",
      backgroundColor: "#6c63ff",
    },
    "& > *:hover": {
      color: "#6c63ff",
      backgroundColor: "white",
    },
  },
  nom: {
    color: "#6c63ff"
  },
  time: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    // [theme.breakpoints.up("md")]: {
    //   display: "flex",
    //   height: "57vh",
    // },
  }
}));