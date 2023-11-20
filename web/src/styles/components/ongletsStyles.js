import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    "& .AppBar": {
      margin: "0!important",
      background: "red",
    },
  },
  ListAndMap: {
    display: "flex",
    justifyContent: "space-between",
    height: "50vh",
    padding: "50px 0 0!important",
    position: "relative",
  },
  List: {
    width: "49%",
    height: "100%",
    backgroundColor: "grey",
  },
  Map: {
    width: "49%",
    height: "99%",
    position: "fixed",
    top: 0,
    right: 0,
  },
}));