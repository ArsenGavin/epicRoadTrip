import React, { useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registrationValidation } from "../../utils/regex";
import { registerUser } from "../../store/userContext/userSlice";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import ButtonFacebook from "./ButtonFacebook";
import ButtonGoogle from "./ButtonGoogle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStyles } from "../../styles/user/registerStyles";
import { useTranslation } from "react-i18next";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { error, loading, isRegistered } = useSelector((state) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    if (isRegistered) {
      history.push("/connexion");
    }
  }, [isRegistered, error, loading, history]);

  const haveAnAccount = () => {
    history.push("/connexion");
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema: registrationValidation,
    onSubmit: (values) => {
      const user = {
        login: values.login.trim(),
        email: values.email.trim().toLocaleLowerCase(),
        password: values.password,
      };
      dispatch(registerUser(user));
    },
  });

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {t("SignUp.SignUp")}
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
              label={t("SignUp.Login")}
              value={formik.values.login}
              onChange={formik.handleChange}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
              autoComplete="login"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("SignUp.EmailAddress")}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("SignUp.Password")}
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
              className={classes.submit}
            >
              {t("SignUp.SignUp")}
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  className={classes.lien}
                  onClick={haveAnAccount}
                  href="#"
                  variant="body2"
                >
                  {t("SignUp.DoYouHaveAlreadyAccount")}
                </Link>
              </Grid>
            </Grid>
          </form>

          <Grid xs={12}>
            <Grid container>
              <Grid item xs className={classes.controlLog}>
                <ButtonGoogle />
              </Grid>
              <Grid item className={classes.controlLog}>
                <ButtonFacebook />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
}
