import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Grid,
  Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../store/userContext/userSlice";
import imageHome from "../../assets/nature.svg";
import { useStyles } from "../../styles/components/navbarStyles";
import { useTranslation } from "react-i18next";
import i18n from "../../translations/i18n";

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();
  const [logText, setLogText] = useState(t("Navbar.login"));
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    isLoggedIn ? setLogText(t("Navbar.logout")) : setLogText(t("Navbar.login"));
  }, [isLoggedIn, history]);

  const handleChange = () => {
    if (isLoggedIn) {
      dispatch(logoutUser());
      history.push("/");
    }
    if (!isLoggedIn) {
      history.push("/connexion");
    }
  };

  const handleMenu = () => {
    history.push("/myaccount");
  };

  const goHome = () => history.push("/");

  const handleLanguage = () => {
    i18n.language === "fr" ? i18n.changeLanguage("en") : i18n.changeLanguage("fr");
  };

  return (
    <div className={classes.root}>
      <Grid>
        <AppBar
          style={{ marginBottom: "3rem" }}
          position="static"
          color="transparent"
        >
          <Toolbar>
            <img
              src={imageHome}
              alt="Nature"
              className={classes.image}
              onClick={goHome}
            />
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <IconButton
              color="inherit"
              onClick={handleLanguage}
            >
              <LanguageIcon />
            </IconButton>
            {isLoggedIn && (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                id="buttonProfile"
              >
                <AccountCircle />
              </IconButton>
            )}
            <Button
              variant="contained"
              onClick={handleChange}
              className={isLoggedIn ? classes.loggedIn : classes.loggedOut}
            >
              {logText}
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
