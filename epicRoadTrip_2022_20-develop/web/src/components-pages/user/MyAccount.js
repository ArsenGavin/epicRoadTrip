import React, { useEffect } from "react";
import { Grid, Paper, Typography, Container } from "@material-ui/core";
import { AccountCircle, CardTravel, Delete, Favorite } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useStyles } from "../../styles/user/myAccountStyles";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function MyAccount() {
  const classes = useStyles();
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { t } = useTranslation();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/connexion");
    }
  }, [isLoggedIn]);

  const personalInfo = () => {
    history.push("/personalinfo");
  };

  const myRoadtrips = () => {
    history.push("/myroadtrips");
  };

  const deleteAccount = () => {
    history.push("/deleteaccount");
  };

  const myFavorites = () => {
    history.push("/favorites");
  };

  return (
    <><Navbar/>
      <div className={classes.rootHeight}>
        <Container maxWidth="lg">
          <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
              {t("Footer.Account")}
            </Typography>
            <Grid container justify="space-around" spacing={2} alignItems="stretch">
              <Grid item xs={12} md={4}>
                <Paper onClick={personalInfo} className={[classes.paper, classes.gridMyAccount].join(" ")}>
                  <AccountCircle className={classes.iconColor}/>
                  <Typography className={classes.textTitle}>
                    {t("Account.PersonalInfo")}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper onClick={myRoadtrips} className={[classes.paper, classes.gridMyAccount].join(" ")}>
                  <CardTravel className={classes.iconColor}/>
                  <Typography className={classes.textTitle}>{t("Account.MyRoadtrips")}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper onClick={myFavorites} className={[classes.paper, classes.gridMyAccount].join(" ")}>
                  <Favorite className={classes.iconColor}/>
                  <Typography className={classes.textTitle}>{t("Account.MyFavorites")}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper onClick={deleteAccount} className={[classes.paper, classes.gridMyAccount].join(" ")}>
                  <Delete className={classes.iconColor}/>
                  <Typography className={classes.textTitle}>
                    {t("Account.DeleteMyAccount")}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
}
