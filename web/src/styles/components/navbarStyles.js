import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image: {
    width: 50,
    height: 55,
    cursor: "pointer"
  },
  loggedIn: {
    backgroundColor: "#d32f2f",
    color: "#fff"
  },
  loggedOut: {
    backgroundColor: "#6c63ff",
    color: "#fff"
  }
}));