import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  deleteIcon: {
    fontSize: 250,
    color: "red",
    textAlign: "center",
  },
  deleteButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(30),
  },
  cancelButton: {
    marginTop: theme.spacing(-4.3),
    marginRight: theme.spacing(30),
  },
}));
