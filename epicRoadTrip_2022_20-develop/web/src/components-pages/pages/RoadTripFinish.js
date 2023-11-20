import React, { createRef, useEffect, useState } from "react";
import {
  Button,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@material-ui/core";
import { Save, Print, ArrowBackIos } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink, Document, Page, View, Text, Link } from "@react-pdf/renderer";
import TimelineTrip from "../components/TimelineTrip";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Pay from "../misc/Pay";
import { stylesPdf, useStyles } from "../../styles/pages/roadTripFInishStyles";
import { useTranslation } from "react-i18next";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const myPdf = (departure, arrival, steps, name) => {
  return (
    <Document>
      <Page size="A4" style={stylesPdf.body}>
        <View style={stylesPdf.section}>
          <Text style={stylesPdf.roadTrip}>Road Trippin</Text>
          <Text style={stylesPdf.ltlText}>Généré sur le site web: <Link href="https://epicroad.herokuapp.com/">epicroad.herokuapp.com</Link></Text>
        </View>
        <View style={stylesPdf.section}>
          <Text>Name: {name}</Text>
          <Text>From: {departure}</Text>
          <Text>To: {arrival}</Text>
        </View>
        {steps.length > 0 && steps.map((step, i) => (
          <View style={stylesPdf.table} key={i}>
            <Text>{step.name}:</Text>
            {/* Headers de la table */}
            <View style={stylesPdf.tableRow}> 
              <View style={stylesPdf.tableColHeader}> 
                <Text style={stylesPdf.tableCellHeader}>Lieu</Text> 
              </View> 
              <View style={stylesPdf.tableColHeader}> 
                <Text style={stylesPdf.tableCellHeader}>Position</Text> 
              </View> 
              <View style={stylesPdf.tableColHeader}> 
                <Text style={stylesPdf.tableCellHeader}>Category</Text> 
              </View> 
              <View style={stylesPdf.tableColHeader}> 
                <Text style={stylesPdf.tableCellHeader}>Prix</Text> 
              </View> 
            </View>
            {step.activities.length > 0 && step.activities.map((activity, index) => (
              <View style={stylesPdf.tableRow} key={index}> 
                <View style={stylesPdf.tableCol}> 
                  <Text style={stylesPdf.tableCell}><Link href={activity.website}>{activity.name}</Link></Text> 
                </View> 
                <View style={stylesPdf.tableCol}> 
                  <Text style={stylesPdf.tableCell}>lat: {activity.coordinates.latitude}, lon: {activity.coordinates.longitude}</Text> 
                </View> 
                <View style={stylesPdf.tableCol}>
                  <Text style={stylesPdf.tableCell}>{activity.category}</Text>
                </View>
                <View style={stylesPdf.tableCol}> 
                  <Text style={stylesPdf.tableCell}>{activity.rate}</Text> 
                </View> 
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default function RoadTripFinish() {
  const ref = createRef();
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { user } = useSelector(state => state.user);
  const { departure, arrival, steps, name } = useSelector(state => state.roadtrip);
  const [openSnack, setOpenSnack] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (steps.length === 0) history.push("/");
  }, [name, steps]);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const goToLastStep = () => history.push("/roadtripdetails");

  const handleRoadTrip = () => {
    if (!user) {
      setOpenSnack(true);
      return;
    }
    setOpenDialog(true);
  };

  return (
    <>
      <Navbar/>
      <div className={classes.containerRoadTripFinish}>
        <div className={classes.containerTitleTimelineMap}>
          <div className={classes.containerTitleTimelineMap}>
            <div>
              <Typography className={classes.nom}>{name}</Typography>
              <TimelineTrip/>
            </div>
            <div className={classes.map} ref={ref}><Map /></div>
          </div>
        </div>

        <div className={classes.containerButton}>
          <Button variant="contained" onClick={goToLastStep} startIcon={<ArrowBackIos />}>{t("MyRoadTrip.previous")}</Button>
          <Button id="print" variant="contained"endIcon={<Print />}>
            <div>
              <PDFDownloadLink document={myPdf(departure.name, arrival.name, steps, name)} fileName="roadtrip.pdf">
                {({loading }) =>
                  loading ? "Chargement du document..." : "Print"
                }
              </PDFDownloadLink>
            </div>
          </Button>
          <Button id="save" variant="contained" onClick={handleRoadTrip} endIcon={<Save />}>{t("MyRoadTrip.save")}</Button>
        </div>
      </div>
      <Footer/>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error">
          {t("MyRoadTrip.disconnected")}
        </Alert>
      </Snackbar>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle id="alert-dialog-title">{t("MyRoadTrip.checkout")} {name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Proceed to checkout your road trip from {departure.name} to {arrival.name} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            {t("Home.cancel")}
          </Button>
          <Pay />
        </DialogActions>
      </Dialog>
    </>
  );
}