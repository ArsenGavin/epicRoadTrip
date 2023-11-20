import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  imageLogo: {
    width: "35%",
    margin: "auto",
  },
  footer: {
    position: "absolute",
    marginTop: "5rem",
    maxWidth: "100vw",
    height: "auto",
    left: "0",
    paddingInline: "5rem",
    backgroundColor: "lightgrey",
  },
}));