import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1rem"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 300,
    cursor: "pointer"
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  descriptionPlace: {
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
}));