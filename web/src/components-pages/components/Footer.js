import React from "react";
import { Grid, Container, Box, Link } from "@material-ui/core";
import imageHome from "../../assets/nature.svg";
import { useStyles } from "../../styles/components/footerStyles";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();
  const goHome = () => history.push("/");
  const { t } = useTranslation();
  return (
    <footer>
      <Box
        px={{ xs: 4, sm: 10 }}
        py={{ xs: 4, sm: 10 }}
        bgcolor="white"
        color="black"
        position="static"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={3} sm={4}>
              <Box>
                <img
                  src={imageHome}
                  alt="Logo"
                  className={classes.imageLogo}
                  onClick={goHome}
                />
              </Box>
            </Grid>
            <Grid item xs={3} sm={4}>
              <Box borderBottom={1} color="blue">
                {t("RoadTrip")}
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  {t("Footer.RoadTripSearch")}
                </Link>
              </Box>
              <Box>
                <Link href="/payment" color="inherit">
                  {t("Footer.BuyRoadTrip")}
                </Link>
              </Box>
              <Box>
                <Link href="/myroadtrips" color="inherit">
                  {t("Footer.Your Roadtrip")}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4}>
              <Box borderBottom={1} color="blue">
                {t("Footer.Account")}
              </Box>
              <Box>
                <Link href="/connexion" color="inherit">
                  {t("Navbar.login")}
                </Link>
              </Box>
              <Box>
                <Link href="/inscription" color="inherit">
                  {t("SignUp.SignUp")}
                </Link>
              </Box>
              <Box>
                <Link href="/personalinfo" color="inherit">
                  {t("Personal Info.Modification")}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
