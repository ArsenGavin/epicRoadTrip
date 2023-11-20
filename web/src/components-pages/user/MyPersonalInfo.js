import React, { useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../store/userContext/userSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStyles } from "../../styles/user/myPersonalInfoStyles";
import BackButton from "../components/BackButton";
import { useTranslation } from "react-i18next";

export default function MyPersonalInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { error, user, isUpdated, loading, isLoggedIn } = useSelector(state => state.user);
  const { t } = useTranslation();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
    if (isUpdated) {
      history.push("/");
    }
  }, [isLoggedIn, isUpdated, error, loading, history]);

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    //  validationSchema: registrationValidation,
    onSubmit: (values) => {
      const userInfo = {
        login: values.login.trim(),
        email: values.email.trim().toLocaleLowerCase(),
        password: values.password,
      };
      dispatch(updateUser(user.id, userInfo));
    },
  });

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <BackButton />
        <div className={classes.paper}>
          <Typography component="h1" color="blue" variant="h5">
            {t("Account.PersonalInfo")}
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              name="login"
              label={user.login}
              value={formik.values.login}
              onChange={formik.handleChange}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
              autoComplete="login"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label={user.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("Personal Info.Password")}
              type="password"
              id="password"
              autoComplete="current-password"
              defaultValue="Default Value"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Grid xs={12} spacing={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
                color="primary"
                disabled={formik.isSubmitting}
              >
                {t("Personal Info.Modification")}
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
