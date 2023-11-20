import React, { useEffect } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginValidation } from "../../utils/regex";
import ButtonFacebook from "./ButtonFacebook";
import ButtonGoogle from "./ButtonGoogle";
import { loginUser } from "../../store/userContext/userSlice";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStyles } from "../../styles/user/loginStyles";
import { useTranslation } from "react-i18next";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { error, loading, isLoggedIn } = useSelector((state) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, error, loading, history]);

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      dispatch(
        loginUser(values.email.trim().toLocaleLowerCase(), values.password)
      );
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
            Sign in
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
              className={classes.submit}
            >
              {t("SignIn.SignIn")}
            </Button>
            <Grid container className={classes.control}>
              <Grid item>
                <Link className={classes.lien} href="#"
                  variant="body2" to="/inscription">
                  {t("SignIn.Don'tHaveAnAccount")}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Grid xs={12} >
            <Grid container >
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
