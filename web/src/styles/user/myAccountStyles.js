import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  rootheight:{
    
  },
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  iconColor: {
    color: "blue",
  },
  textTitle: {
    marginTop: -24,
    marginLeft: 30,
    textAlign: "left",
  },
  title: {
    marginTop: 8,
  },
  gridMyAccount: {
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }

}));