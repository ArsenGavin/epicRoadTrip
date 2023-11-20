import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Home, Error as ErrorButton } from "@material-ui/icons";
import { useStyles } from "../../styles/misc/errorStyles";
import { useTranslation } from "react-i18next";

export default function Error() {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const handleHome = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <ErrorButton style={{ color: "#E5BB1D", fontSize: "80" }} />
        </Grid>
        <Grid item>
          <Typography align="center">{t("Home.errorMsg")}</Typography>
          <Typography id="error" align="center">
            {t("Home.error")}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={handleHome}
            variant="contained"
            color="primary"
            startIcon={<Home />}
          >
            {t("Home.home")}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
