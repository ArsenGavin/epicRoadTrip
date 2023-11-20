import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // [theme.breakpoints.up("lg")]: [theme.breakpoints.between("md", "1280")]: [theme.breakpoints.down("790")]:
  containerRoadTripInit: {
    width: "100%",
    height: "100%",
    margin: "Auto",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem"
    },
    [theme.breakpoints.up("md")]: {
      // display: "flex",
      // height: "57vh",
    },
    textAlign: "right",
    "& > *": {
      margin: "8px 0",
      color: "#fff",
      backgroundColor: "#6c63ff",
    },
    "& > *:hover": {
      color: "#6c63ff",
      backgroundColor: "#fff",
    },
  },
  textField: {
    margin: "2% 0",
    "& textarea": {
      fontSize: "20px",
      fontWeight: "bold",
    },
    "& ::before": {
      borderBottom: "none",
    },
  },
  containerTextFieldAndIcon: {
    display: "flex",
    margin: "auto 0",
  },
  createIcon: {
    margin: "auto 0",
    width: "25px",
    height: "25px",
  },
  containerEscaleAndMap: {
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "57vh",
    },
  },
  escale: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "3rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
      border: "solid 2px #77889961",
      height: "100%",
    },
    marginRight: "5%",
  },
  map: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    height: "100%",
    border: "solid 2px #77889961",
  },
}));