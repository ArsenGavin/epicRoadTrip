import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Home, ShoppingCart, Warning } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStyles } from "../../styles/misc/paymentProcessStyles";

export default function PaymentProcess() {
  const history = useHistory();
  const classes = useStyles();
  const success = useRouteMatch("/checkout/success");

  const handleHome = () => {
    history.push("/");
  };

  return (
    <><Navbar/>
      <Grid
        className={classes.marge}
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        {success ? (
          <>
            <Grid item>
              <ShoppingCart color="secondary" style={{ fontSize: "80" }}/>
            </Grid>
            <Grid item>
              <Typography align="center" id="success">
                Nous vous remercions pour votre commande !
              </Typography>
              <Typography align="center">
                Vous allez recevoir un email de confirmation dans votre boite de
                réception.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={handleHome}
                variant="contained"
                color="primary"
                startIcon={<Home/>}
              >
                Accueil
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Warning style={{ color: "#ff0000", fontSize: "80" }}/>
            </Grid>
            <Grid item>
              <Typography align="center" id="failure">
                Une erreur s&apos;est produite lors du paiement de votre commande.
              </Typography>
              <Typography align="center">
                Malheureusement votre carte a été débitée et vous ne pouvez rien y
                faire.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={handleHome}
                variant="contained"
                color="primary"
                startIcon={<Home/>}
              >
                Accueil
              </Button>
            </Grid>
          </>
        )}
      </Grid>
      <Footer/>
    </>
  );
}
