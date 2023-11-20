import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    display: "flex",
    justifyContent: "space-around",
    "& .MuiSvgIcon-root": {
      width: "30px",
      height: "30px",
    },
    "& .MuiTextField-root": {
      margin: "0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(255 0 0 / 0%)",
    },
  },
  container: {
    backgroundColor: "lightgrey",
    width: "500px",
    maxWidth: "90vw",
    borderRadius: "35px",
    border: "solid 2px #77889961",
    marginBottom: "20px",
  },
  search: {
    paddingTop: "5px",
    "& :hover": {
      cursor: "pointer",
    },
  },
  span: {
    display: "block",
    width: "2px",
    height: "30px",
    backgroundColor: "#77889961",
    margin: "auto 0",
  },
  alert: {
    backgroundColor: "#6b63ff!important",
  },
  autoCompleteAlt: {
    backgroundColor: "lightgrey",
    border: "none",
    width: "fit-content",
    maxWidth: "37vw",
    borderRadius: "50px",
    "&:focus-visible": {
      outline: "none",
    }
  }
}));