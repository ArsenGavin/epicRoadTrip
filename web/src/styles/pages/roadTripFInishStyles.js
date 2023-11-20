import { makeStyles } from "@material-ui/core";
import { StyleSheet } from "@react-pdf/renderer";

export const useStyles = makeStyles(() => ({
  containerRoadTripFinish: {
    width: "100%",
    height: "100%",
    margin: "Auto",
  },
  containerTitleTimelineMap: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "60vh",
    margin: "2% 0",

    "& p": {
      fontSize: "20px",
      fontWeight: "bold",
      width: "300px",
      textAlign: "center"
    }
  },
  containerButton: {
    marginTop: "1.5em",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& > *": {
      color: "#fff",
      backgroundColor: "#6c63ff",
    },
    "& > *:hover": {
      color: "#6c63ff",
      backgroundColor: "#fff",
    },
  },
  map: {
    width: "100%",
    height: "100%",
  },
  nom: {
    color: "#6c63ff"
  }
}));

export const stylesPdf = StyleSheet.create({
  body: {
    padding: 10
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0 ,
    marginTop: "1cm",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    // margin: "auto",
    margin: 5,
    fontSize: 12,
    fontWeight: 500
  },
  tableCell: {
    // margin: "auto",
    margin: 5,
    fontSize: 10
  },
  roadTrip: {
    fontSize: "35",
    textAlign: "center",
    marginBottom: "2cm"
  },
  ltlText: {
    fontSize: "13"
  }
});