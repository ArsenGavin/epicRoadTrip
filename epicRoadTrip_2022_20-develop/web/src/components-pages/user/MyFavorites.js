import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Favorite from "../components/Favorite";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { changeFavoriteSelected } from "../../store/userContext/userSlice";
import { useStyles } from "../../styles/user/myFavoritesStyles";

export default function MyFavorites() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { isLoggedIn, favoris } = useSelector(state => state.user);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
    dispatch(changeFavoriteSelected(favoris[0]));
  }, [favoris]);

  return (
    <>
      <Navbar/>
      <Container maxWidth="lg">
        <BackButton />
        <Typography variant="h3">Favorites</Typography>

        <div className={classes.root}>
          <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
            {favoris.length > 0 &&
            <>
              <Grid container item direction="column" alignItems="center" spacing={3} sm={12} md={7}>
                {favoris.map((favorite, index) =>
                  <Favorite key={index} favorite={favorite}/>
                )}
              </Grid>
              <Grid container item sm={12} md={5}>
                <Details/>
              </Grid></>}
          </Grid>
        </div>
      </Container>
      <Footer/>
    </>
  );
}