import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteUser } from "../../store/userContext/userSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { useStyles } from "../../styles/user/deleteMyAccountStyles";
import { useTranslation } from "react-i18next";
export default function DeleteMyAccount() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, user, loading, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const { t } = useTranslation();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, error, loading, history]);

  const deleteButton = () => {
    dispatch(deleteUser(user.id));
  };

  const homeButton = () => {
    history.push("/");
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <div className={classes.root}>
        <DeleteIcon className={classes.deleteIcon} />
        <Typography variant="h4">
          {t("DeleteMyAccount.About")}
        </Typography>
        <Button
          onClick={deleteButton}
          className={classes.deleteButton}
          variant="outlined"
          color="secondary"
        >
          {t("DeleteMyAccount.DeleteAccount")}
        </Button>
        <Button
          onClick={homeButton}
          className={classes.cancelButton}
          variant="outlined"
        >
          {t("DeleteMyAccount.Cancel")}
        </Button>
      </div>
      <Footer />
    </>
  );
}
