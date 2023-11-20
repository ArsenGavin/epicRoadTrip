import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  textLeft: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  image: {
    maxWidth: "50%",
    height: "auto",
  },
  rounded: {
    border: "1px solid darkgrey",
    borderRadius: "50px",
    padding: "5px 0",
    marginRight: "1rem",
    minWidth: "5rem",
    marginTop: "0.2rem",
    cursor: "pointer"
  },
  noMargin: {
    margin: "0",
  },
  categorySelected: {
    backgroundColor: "#6c63ff",
    color: "#fff"
  },
  latestResearch: {
    margin: "0 1rem 0 0",
    maxHeight: "2rem",
  },
  noMarginBottom: {
    marginBottom: "0",
  },
  secondBlockHome: {
    marginTop: "10rem",
  },
  thirdBlockHome: {
    marginTop: "10rem",
    backgroundColor: "lightgray",
  },
  img: {
    width: "100%",
  },
  blockBestsPlaces: {
    padding: "1em"
  },
  mainColor: {
    color: "#6c63ff"
  },
  mainBgColor: {
    backgroundColor: "#6c63ff",
    color: "#fff"
  }
}));